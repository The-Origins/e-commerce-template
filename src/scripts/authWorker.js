import { AsYouType, isValidPhoneNumber } from "libphonenumber-js";
import callingCodes from "../../lib/callingCodes.json";

class AuthWorker {
  
  redact(str, startCharacters = 2, endCharacters = 2) {
    str = String(str);
    if (str.length <= startCharacters + endCharacters) {
      return str;
    }

    return (
      String(str).substring(0, startCharacters) +
      "*".repeat(str.length - (startCharacters + endCharacters)) +
      str.substring(str.length - endCharacters)
    );
  }

  formatString(string = "str", divider = "/", spacing = 2) {
    const regex = new RegExp(`.{1,${spacing}}`, "g");
    return this.removeStringFormat(string, divider).match(regex).join(divider);
  }

  removeStringFormat(string, divider) {
    return string.split(divider).join("");
  }

  formatPhoneNumber(prev, phoneNumber, countryCode) {
    const isValid = isValidPhoneNumber(prev, countryCode);
    const callingCode = callingCodes[countryCode].callingCode;
    let formattedPhoneNumber = phoneNumber;

    if (formattedPhoneNumber.length <= callingCode.length) {
      formattedPhoneNumber = callingCode;
    }

    if (!phoneNumber.startsWith(callingCode)) {
      formattedPhoneNumber = callingCode + phoneNumber;
    }

    const asYouType = new AsYouType(countryCode);
    formattedPhoneNumber = asYouType.input(formattedPhoneNumber);

    if (isValid && phoneNumber.length >= prev.length) {
      formattedPhoneNumber = prev;
    }
    return formattedPhoneNumber;
  }

  // callingCodes.json has this data stored locally
  // getCallingCodes() {
  //   let callingCodes = {};
  //   Object.keys(countries).forEach((country) => {
  //     if (
  //       countries[country].countryCallingCodes &&
  //       countries[country].countryCallingCodes.length
  //     ) {
  //       callingCodes[countries[country].alpha2] = {
  //         callingCode: countries[country].countryCallingCodes[0],
  //         countryName: countries[country].name,
  //       };
  //     }
  //   });
  //   return callingCodes;
  // }

  // currencies.json has this stored locally
  // getCurrencies() {
  //   const filteredCurrencies = {};
  //   Object.keys(currencies).forEach((currency) => {
  //     if (!this.ignoredCurrencies.includes(currency)) {
  //       filteredCurrencies[currency] = currencies[currency];
  //     }
  //   });
  //   return filteredCurrencies;
  // }

  luhnCheck(value) {
    let sum = 0;
    for (let i = 0; i < value.length; i++) {
      let intVal = parseInt(value.substr(i, 1));
      if (i % 2 === value.length % 2) {
        intVal *= 2;
        if (intVal > 9) {
          intVal -= 9;
        }
      }
      sum += intVal;
    }
    return sum % 10 === 0;
  }

  isCvvExpired(value) {
    const [month, year] = value.split("/").map(Number);
    const now = new Date();
    const currentYear = now.getFullYear() % 100; // Get last two digits of the year
    const currentMonth = now.getMonth() + 1; // getMonth() is zero-based

    if (year < currentYear || (year === currentYear && month < currentMonth)) {
      return true;
    }
    return false;
  }

  getErrors(errors = {}, validator = {}, target = {}, form = {}) {
    if (!Object.keys(validator).length || !validator[target.name]) {
      return errors;
    }

    for (const element of validator[target.name]) {
      if (!element.key(target.value, form)) {
        return { ...errors, [target.name]: element.message };
      }
    }
    const { [target.name]: value, ...rest } = errors;
    return rest;
  }
}

export default AuthWorker;
