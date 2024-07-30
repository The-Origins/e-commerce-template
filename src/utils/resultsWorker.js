import ProductWorker from "./productWorker";

class ResultsWorker {
  constructor() {
    this.pageLimit = 20;
    this.prices = [];
    this.minPrice = 0;
    this.maxPrice = 0;
    this.filterExeptions = new ProductWorker().searchExeptions;
    this.filterOptions = {};
    this.filters = {};
  }

  parseInfo(data, params, offers) {
    const productWorker = new ProductWorker();
    data.forEach((result) => {
      //get prices even those on offer
      if (offers[result.id]) {
        this.prices.push(
          productWorker.getDiscount(
            offers[result.id],
            result.unitPrice.amount
          )
        );
      } else {
        this.prices.push(result.unitPrice.amount);
      }

      //get available categories
      result.categories.forEach((category) => {
        if (!this.filterExeptions.includes(category)) {
          this.filterOptions.category = this.filterOptions.category || [];
          if (!this.filterOptions.category.includes(category)) {
            this.filterOptions.category.push(category);
          }
        }
      });

      //get available brands
      if (!this.filterExeptions.includes(result.brand)) {
        this.filterOptions.brand = this.filterOptions.brand || [];
        if (result.brand && !this.filterOptions.brand.includes(result.brand)) {
          this.filterOptions.brand.push(result.brand);
        }
      }

      //get available features
      if (Object.keys(result.features).length) {
        Object.keys(result.features).forEach((feature) => {
          if (!this.filterExeptions.includes(feature)) {
            this.filterOptions[feature] = this.filterOptions[feature] || [];
            if (!this.filters[feature]) {
              this.filters[feature] = params[feature] || "All";
            }

            if (
              !this.filterOptions[feature].includes(result.features[feature])
            ) {
              this.filterOptions[feature].push(result.features[feature]);
            }
          }
        });
      }
    });

    this.filters.brand = this.filters.brand || params.brand || "All";
    this.filters.category =
      this.filters.category || params.category || "All";

    this.minPrice = Math.min(...this.prices);
    this.maxPrice = Math.max(...this.prices);

    this.filters = {
      ...this.filters,
      min: this.filters.min || params.min || this.minPrice,
      max: this.filters.max || params.min || this.maxPrice,
    };

    //remove filters that don't have more than 1 option
    Object.keys(this.filterOptions).forEach((filterOption) => {
      if (
        this.filterOptions[filterOption].length <= 1 &&
        this.filters[filterOption] !== this.filterOptions[filterOption][0]
      ) {
        const { [filterOption]: value, ...remainingOptions } =
          this.filterOptions;
        this.filterOptions = remainingOptions;
      }
    });
  }

  filterResults(filters, data, params, offers) {
    this.filters = filters;
    const filteredResults = data.filter((result) => {
      //filter out products by their features
      const { brand, category, min, max, ...features } = filters;
      for (let feature of Object.keys(features)) {
        if (
          features[feature] !== "All" &&
          result.features[feature] !== features[feature]
        ) {
          return false;
        }
      }
      //filter products by category, brand and price
      return (
        (filters.brand === "All" || result.brand === filters.brand) &&
        (filters.category === "All" ||
          result.categories.includes(filters.category)) &&
        result.unitPrice.amount >= filters.min &&
        result.unitPrice.amount <= filters.max
      );
    });

    this.parseInfo(filteredResults, params, offers);
    return filteredResults;
  }

  getResults(data, page) {
    return {
      all: data,
      pages: Math.ceil(data.length / this.pageLimit),
      pageData: data.slice(
        this.pageLimit * page - this.pageLimit,
        this.pageLimit * page
      ),
    };
  }
}

export default ResultsWorker;
