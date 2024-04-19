class Product {
  constructor(products) {
    this.filteredResults = [];
    this.products = products;
  }

  filter(filters, typesPlural) {
    this.filteredResults = this.products.filter(
      (product) =>
        filters.types[typesPlural[product.type]] &&
        product.unitPrice.amount >= filters.min &&
        product.unitPrice.amount <= filters.max &&
        (filters.category === "All" ||
          product.categories.includes(filters.category))
    );
    return this.filteredResults;
  }

  roundUp(num) {
    return num % 1 !== 0 ? 1 - (num % 1) + num : num;
  }

  paginate (pageLimit, filteredResults) {
    let results = [];
    if (filteredResults.length) {
      for (
        let i = 1;
        i <= this.roundUp(filteredResults.length / pageLimit);
        i++
      ) {
        results = [
          ...results,
          filteredResults.slice(pageLimit * i - pageLimit, pageLimit * i),
        ];
      }
    } else {
      results = [[]];
    }
    return results;
  }
}
export default Product;
