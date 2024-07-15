import data from "../../lib/data/products.json";
import { currencies } from "country-data";

class ProductWorker {
  constructor() {
    this.products = data;
    this.searchExeptions = ["SKU", "weight"];
  }

  getTotal(product, quantity, variants) {
    let total = product.unitPrice.amount;
    total *= quantity;
    Object.keys(variants).forEach((variant) => {
      if (Array.isArray(variants[variant])) {
        variants[variant].forEach((element) => {
          total += product.variants[variant][element];
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
    let details = cartItems[product.id] || favourites[product.id];

    if (!details) {
      details = {
        quantity: 1,
        total: offers[product.id] || product.unitPrice.amount,
      };
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
