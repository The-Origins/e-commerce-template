import { currencies } from "country-data";

class UserWorker {
  constructor() {
    this.ignoredCurrencies = [
      "USN",
      "USS",
      "UYI",
      "XBA",
      "XBB",
      "XBC",
      "XBD",
      "XXX",
    ];
  }

  getCurrencies() {
    const currencyArray = [];
    Object.keys(currencies).forEach((currency) => {
      if (!this.ignoredCurrencies.includes(currency)) {
        currencyArray.push(currencies[currency]);
      }
    });

    return currencyArray;
  }
}

export default UserWorker;
