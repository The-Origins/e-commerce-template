import data from "../lib/data";

class ProductWorker {
  constructor(product) {
    this.product = product;
    this.products = data.products;
  }

  getProductDetails(cartItems, favourites) {
    let details = {};
    if (cartItems[this.product.id]) {
      details = cartItems[this.product.id].details;
    } else if (favourites[this.product.id]) {
      details = favourites[this.product.id].details;
    } else {
      details.quantity = 1;
      if (this.product.variants) {
        this.product.variants.forEach((variant) => {
          details = { ...details, [variant.title]: variant.options[0].title };
        });
      }
    }
    return details;
  }

  getRatingDistribution(product) {
    const distribution = { 5: 0, 4: 0, 3: 0, 2: 0, 1: 0 };

    product.rating.votes.forEach((vote) => {
      distribution[vote]++
    });
    return distribution
  }

  //this is done by the api
  findProduct(id) {
    return this.products.find((product) => product.id === Number(id));
  }
}

export default ProductWorker;
