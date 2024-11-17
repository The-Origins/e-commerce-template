import orders from "../../lib/data/orders.json";
import products from "../../lib/data/products.json";
import offers from "../../lib/data/offers.json";
import spotlights from "../../lib/data/spotlights.json";

class FetchWorker {
  async fetchResults(query, scope, limit) {
    // const searchString = new URLSearchParams({
    //   query,
    //   scope,
    //   limit,
    // }).toString();
    // /myapi/search?${searchString}

    //this is all done by the api
    const simulateApiRequest = () => {
      return new Promise((resolve) => {
        // only as an example
        const fetchingTimeOut = setTimeout(() => {
          let data;
          switch (query) {
            case "clothing":
              data = products.slice(0, 9);
              break;
            case "electronics":
              data = products.slice(10, 20);
              break;
            case "food":
              data = products.slice(21);
              break;
            case "beverages":
              data = products.slice(21);
              break;
            default:
              data = products;
          }
          resolve(data);
          clearTimeout(fetchingTimeOut);
        }, 1000);
      });
    };
    let data = await simulateApiRequest();

    if (limit) {
      data = data.slice(0, limit);
    }

    return data;
  }

  async fetchOffers() {
    const simulateApiRequest = () => {
      return new Promise((resolve) => {
        const fetchingTimeOut = setTimeout(() => {
          resolve(offers);
          clearTimeout(fetchingTimeOut);
        }, 1000);
      });
    };
    const data = await simulateApiRequest();
    return data;
  }

  async fetchSpotlights() {
    const simulateApiRequest = () => {
      return new Promise((resolve) => {
        const fetchingTimeOut = setTimeout(() => {
          resolve(spotlights);
          clearTimeout(fetchingTimeOut);
        }, 1000);
      });
    };
    const data = await simulateApiRequest();
    return data;
  }

  async fetchRecentlyViewedProducts(user, session) {
    const data = await this.fetchProducts(
      user.isLoggedIn
        ? user.data.recent.veiwedProducts
        : session.recent.veiwedProducts
    );
    return data;
  }

  async fetchProducts(ids) {
    const simulateApiRequest = () => {
      return new Promise((resolve) => {
        const fetchingTimeOut = setTimeout(() => {
          const data = products.filter((product) => ids.includes(product.id));
          resolve(data);
          clearTimeout(fetchingTimeOut);
        }, 1000);
      });
    };
    const data = await simulateApiRequest();
    return data;
  }

  async fetchProduct(id) {
    const simulateApiRequest = () => {
      return new Promise((resolve) => {
        const fetchingTimeOut = setTimeout(() => {
          const product = products.find((product) => product.id === String(id));
          resolve(product);
          clearTimeout(fetchingTimeOut);
        }, 1000);
      });
    };
    const product = await simulateApiRequest();
    return product;
  }

  async fetchOrders(ids) {
    //only as example
    const simulateApiRequest = () => {
      return new Promise((resolve) => {
        const fetchingTimeOut = setTimeout(() => {
          const data = orders.filter((order) => ids.includes(order.id));
          resolve(data);
          clearTimeout(fetchingTimeOut);
        }, 1000);
      });
    };
    const data = await simulateApiRequest();
    return data;
  }

  async fetchOrder(id) {
    const simulateApiRequest = () => {
      return new Promise((resolve) => {
        const fetchingTimeOut = setTimeout(() => {
          const order = orders.find((order) => order.id === String(id));
          resolve(order);
          clearTimeout(fetchingTimeOut);
        }, 1000);
      });
    };
    const order = await simulateApiRequest();
    return order;
  }
}

export default FetchWorker;
