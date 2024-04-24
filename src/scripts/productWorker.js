class ProductWorker {
  constructor(product) {
    this.product = product;
  }

  getProductDetails(cartItems, favourites) {
    let details = {};
    if (
      Object.keys(cartItems[this.product.id] || {}).length ||
      Object.keys(favourites[this.product.id] || {}).length
    ) {
      details =
        cartItems[this.product.id].details || favourites[this.product.id];
    } else {
      if (this.product.type === "cake") {
        details = { ...details, weight: 1 };
      } else if (this.product.type === "pastry") {
        details = { ...details, quantity: 1 };
      }
      if (this.product.variants) {
        this.product.variants.forEach((variant) => {
          details = {
            ...details,
            [variant.title]: variant.options[0],
          };
        });
      }
    }
    return details;
  }
}

export default ProductWorker