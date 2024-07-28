import { AsYouType, isValidPhoneNumber } from "libphonenumber-js";
import callingCodes from "../../lib/callingCodes.json";
import cardValidator from "card-validator";

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

  getErrors(errors = {}, target, form = {}) {
    const validator = {
      password: [
        {
          key: (value) => value.length >= 8,
          message: "Password must be at least 8 characters long",
        },
        {
          key: (value) => /[A-Z]/.test(value),
          message: "Password must contain at least one uppercase letter",
        },
        {
          key: (value) => /[a-z]/.test(value),
          message: "Password must contain at least one lowercase letter",
        },
        {
          key: (value) => /\d/.test(value),
          message: "Password must contain at least one number",
        },
        { key: (value) => value !== "", message: "Password is required" },
      ],
      confirmPassword: {
        key: (value, form) => value === form.password,
        message: "passwords must match",
      },
      phoneNumber: {
        key: (value, form) => isValidPhoneNumber(value, form.phoneCode),
        message: "invalid phone number",
      },
      email: {
        key: (value) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value),
        message: "invalid email",
      },
      cardName: {
        key: (value) => cardValidator.cardholderName(value).isValid,
        message: "invalid card holder name",
      },
      cardNumber: {
        key: (value) =>
          cardValidator.number(this.removeStringFormat(value, "-")).isValid,
        message: "invalid card number",
      },
      cardExpiry: {
        key: (value) => cardValidator.expirationDate(value).isValid,
        message: "invalid expiry",
      },
      cardCvv: {
        key: (value) => cardValidator.cvv(value).isValid,
        message: "invalid cvv",
      },
    };

    //checks for length by default
    if (!target.value.length) {
      return { ...errors, [target.name]: "required" };
    }

    //checks for errors using validator
    if (validator[target.name]) {
      if (Array.isArray(validator[target.name])) {
        for (let element of validator[target.name]) {
          if (!element.key(target.value, form)) {
            return { ...errors, [target.name]: element.message };
          }
        }
      } else {
        if (!validator[target.name].key(target.value, form)) {
          return { ...errors, [target.name]: validator[target.name].message };
        }
      }
    }
    //if no errors remove it from errors array
    const { [target.name]: value, ...remainingErrors } = errors;
    return remainingErrors;
  }
}

export default AuthWorker;
