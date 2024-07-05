import data from "../lib/data";
import { currencies } from "country-data";

class ProductWorker {
  constructor() {
    this.products = data.products;
  }

  getTotal(product, quantity, variants) {
    let total = product.unitPrice.amount;
    total *= quantity;
    Object.keys(variants).forEach((variant) => {
      if (Array.isArray(variants[variant])) {
        variants[variant].forEach((element) => {
          total += product.variants[variant][element].amount;
        });
      } else {
        total += product.variants[variant][variants[variant]].amount;
      }
    });
    return Number(total).toLocaleString("US");
  }

  getCurrencySymbol(currencyCode = "") {
    return currencies[currencyCode].symbol;
  }

  getDiscount(offer, price) {
    return price - price * (offer / 100);
  }

  getProductDetails(cartItems, favourites, product) {
    let details = {};
    if (cartItems[product.id]) {
      details = { ...cartItems[product.id].details };
      details.total = Number(cartItems[product.id].total).toLocaleString("US");
    } else if (favourites[product.id]) {
      details = { ...favourites[product.id].details };
      details.total = Number(favourites[product.id].total).toLocaleString("US");
    } else {
      details.quantity = 1;
      details.total = Number(product.unitPrice.amount).toLocaleString("US");
      if (Object.keys(product.variants).length) {
        Object.keys(product.variants).forEach((variant) => {
          if (variant.multiSelect) {
            const { multiSelect, ...options } = variant;
            // Object.keys(options).forEach((option, index) => {
            //   details[variant] = { ...details[variant], [option]: index === 0 };
            // });
            details = {
              ...details,
              [variant]: [Object.keys(options)[0]],
            };
          } else {
            details = {
              ...details,
              [variant]: Object.keys(product.variants[variant])[0],
            };
          }
        });
      }
    }
    return details;
  }

  getRatingDistribution(product) {
    const distribution = { 5: 0, 4: 0, 3: 0, 2: 0, 1: 0 };

    product.rating.votes.forEach((vote) => {
      distribution[vote]++;
    });
    return distribution;
  }

  //this is done by the api
  findProduct(id) {
    return this.products.find((product) => product.id === Number(id));
  }
}

export default ProductWorker;
