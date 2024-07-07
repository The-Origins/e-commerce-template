class ResultsWorker {
  constructor(results) {
    this.results = results;
    this.pageLimit = 4;
    this.prices = [];
    this.minPrice = 0;
    this.maxPrice = 0;
    this.categories = ["All"];
    this.brands = ["All"];
    this.parseInfo();
  }

  parseInfo() {
    this.results.forEach((result) => {
      //get prices
      this.prices.push(result.unitPrice.amount);
      this.minPrice = Math.min(...this.prices);
      this.maxPrice = Math.max(...this.prices);

      //get available categories
      result.categories.forEach((category) => {
        if (!this.categories.includes(category)) {
          this.categories.push(category);
        }
      });

      //get available brands
      if (result.brand && !this.brands.includes(result.brand)) {
        this.brands.push(result.brand);
      }
    });
  }

  filter(filters) {
    return this.results.filter(
      (result) =>
        (filters.brand === "All" || result.brand === filters.brand) &&
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
