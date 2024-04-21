class ResultsWorker {
  constructor(results) {
    this.results = results;
    this.pageLimit = 4;
    this.typePlurals = { cake: "Cakes", pastry: "Pastries" };
    this.importantCategories = [
      "nuts",
      "vegan",
      "dairy",
      "gluten free",
      "no sugar",
    ];
  }

  parsePrices() {
    let prices = [];
    this.results.forEach((result) => {
      prices = [...prices, result.unitPrice.amount];
    });
    return prices;
  }

  parseTypes() {
    let types = {};
    this.results.forEach((result) => {
      types = {
        ...types,
        [this.typePlurals[result.type]]: true,
      };
    });
    return types;
  }

  parseCategories() {
    let categories = [];
    this.results.forEach((result) => {
      result.categories.forEach((category) => {
        if (
          this.importantCategories.includes(category) &&
          !categories.includes(category)
        ) {
          categories.push(category);
        }
      });
    });
    return categories;
  }

  filter(filters) {
    return this.results.filter(
      (result) =>
        filters.types[this.typePlurals[result.type]] &&
        result.unitPrice.amount >= filters.min &&
        result.unitPrice.amount <= filters.max &&
        (filters.category === "All" ||
          result.categories.includes(filters.category))
    );
  }

  paginate(filteredResults) {
    let results = [];
    if (filteredResults.length) {
      for (
        let i = 1;
        i <= Math.ceil(filteredResults.length / this.pageLimit);
        i++
      ) {
        results = [
          ...results,
          filteredResults.slice(
            this.pageLimit * i - this.pageLimit,
            this.pageLimit * i
          ),
        ];
      }
    } else {
      results = [[]];
    }
    return results;
  }
}

export default ResultsWorker;
