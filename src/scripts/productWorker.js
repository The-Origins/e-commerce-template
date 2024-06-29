import data from "../lib/data";
import { currencies } from "country-data";

class ProductWorker {
  constructor() {
    this.products = data.products;
  }

  getTotal(unitPrice, ...variants) {
    let total = unitPrice.amount;
    variants.forEach((variant) => {
      total += variant.priceIncrement;
    });
    return total;
  }

  getCurrencySymbol(currencyCode = "") {
    return currencies[currencyCode].symbol;
  }

  getDiscount(offer, price) {
    return price - (price * (offer / 100))
  }

  getProductDetails(cartItems, favourites, product) {
    let details = {};
    if (cartItems[product.id]) {
      details = cartItems[product.id].details;
    } else if (favourites[product.id]) {
      details = favourites[product.id].details;
    } else {
      details.quantity = 1;
      if (Object.keys(product.variants).length) {
        Object.keys(product.variants).forEach((variant) => {
          details = {
            ...details,
            [variant]: Object.keys(product.variants[variant])[0],
          };
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
