import orders from "../../lib/data/orders.json";
import products from "../../lib/data/products.json";

class FetchWorker {
  async fetchResults(query, scope, limit) {
    const searchString = new URLSearchParams({
      query,
      scope,
      limit,
    }).toString();
    // /myapi/search?${searchString}

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
    const data = await simulateApiRequest();
    return data;
  }

  async fetchCategory(query, limit) {
    const simulateApiRequest = () => {
      return new Promise((resolve) => {
        const fetchingTimeOut = setTimeout(() => {
          const data =
            products.slice(0)
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
          const product = products.find((product) => product.id === Number(id));
          resolve(product);
          clearTimeout(fetchingTimeOut);
        }, 1000);
      });
    };
    const product = await simulateApiRequest();
    return product;
  }

  async fetchOrders() {
    //only as example
    const simulateApiRequest = () => {
      return new Promise((resolve) => {
        const fetchingTimeOut = setTimeout(() => {
          resolve(orders);
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
          const order = orders.find((order) => order.id === id);
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
