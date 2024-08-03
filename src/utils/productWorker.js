class ProductWorker {
  constructor() {
    this.maxQuantity = 10;
    this.searchExeptions = ["SKU", "weight"];
  }

  getTotal(product, quantity, variants, offers) {
    let total = offers[product.id]
      ? this.getDiscount(offers[product.id], product.unitPrice.amount)
      : product.unitPrice.amount;
    total *= quantity;

    Object.keys(variants).forEach((variant) => {
      if (Array.isArray(variants[variant])) {
        variants[variant].forEach((option) => {
          total += product.variants[variant][option];
        });
      } else {
        total += product.variants[variant][variants[variant]];
      }
    });
    return total;
  }

  getDiscount(offer, price) {
    return price - price * (offer / 100);
  }

  getProductDetails(cartItems, favourites, product, offers) {
    let details = { ...(cartItems[product.id] || favourites[product.id]) };

    if (!Object.keys(details).length) {
      details = { quantity: 1 };
      if (Object.keys(product.variants).length) {
        Object.keys(product.variants).forEach((variant) => {
          details = {
            ...details,
            [variant]: product.variants[variant].multiSelect
              ? []
              : Object.keys(product.variants[variant])[0],
          };
        });
      }
    }

    let { total, quantity, ...variants } = details;
    details.total = this.getTotal(product, quantity, variants, offers);

    return details;
  }

  getRatingDistribution(product) {
    const distribution = { 5: 0, 4: 0, 3: 0, 2: 0, 1: 0 };

    product.rating.votes.forEach((vote) => {
      distribution[vote]++;
    });
    return distribution;
  }

  getCheckoutErrors = (errors, ...tests) => {
    for (let test of tests) {
      if (Object.keys(test.value || {}).length) {
        const { [test.name]: value, ...remainingErrors } = errors;
        errors = remainingErrors;
      } else {
        errors = { ...errors, [test.name]: test.message };
      }
    }

    return errors;
  };
}

export default ProductWorker;
