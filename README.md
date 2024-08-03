<p align="center">
  <a href="https://www.gatsbyjs.com">
    <img alt="Gatsby" src="https://www.gatsbyjs.com/Gatsby-Monogram.svg" width="60" />
  </a>
</p>

<h1 align="center">E-commerce Web Template</h1>

A comprehensive E-commerce template solution for all stores using [React](https://react.dev/), [Gatsby](https://www.gatsbyjs.com) for static site generation and better SEO, [Redux](https://redux.js.org/) for state management, and [MUI](https://mui.com/material-ui/getting-started/) as the graphic library.

Featuring a simple, responsive and stylish theme, this template includes:

- All necessary pages
- User customization dashboard
- Simple cart logic
- Simple checkout logic
- Simple search filter logic
- Simple Auth components and logic
- Isolated modular logic approach, allowing you to customize the visuals while retaining the logic using workers

An overall simple, comprehensive, and customizable setup designed to meet your E-commerce needs.

## 🚀 Getting Started

1. **Dependencies**

   This project relies on several key libraries and frameworks. Ensure you have the following installed:

   - **Node.js** (>= 14.0.0)
   - **npm** (>= 6.0.0) or **yarn** (>= 1.22.0)

   The main libraries and frameworks used in this template are:

   - **React**: [React](https://react.dev/) - Version ^18.2.0
   - **Gatsby**: [Gatsby](https://www.gatsbyjs.com) - Version ^5.12.4
   - **Redux**: [Redux](https://redux.js.org/) - Version ^4.x or higher
   - **MUI (Material-UI)**: [MUI](https://mui.com/material-ui/getting-started/) - Version ^5.14.18

   Additional dependencies include:

   - **@emotion/react**: ^11.11.1
   - **@emotion/styled**: ^11.11.0
   - **@mui/icons-material**: ^5.14.18
   - **@mui/x-date-pickers**: ^6.18.5
   - **@reduxjs/toolkit**: ^2.0.1
   - **axios**: ^1.7.2
   - **card-validator**: ^10.0.0
   - **country-data**: ^0.0.31
   - **dayjs**: ^1.11.10
   - **gatsby-plugin-layout**: ^4.13.1
   - **libphonenumber-js**: ^1.11.4
   - **react-dom**: ^18.2.0
   - **react-redux**: ^9.0.2
   - **react-router-dom**: ^6.24.1
   - **react-swipeable**: ^7.0.1
   - **redux-persist**: ^6.0.0

2. **Installation**

   To install the dependencies, run the following command in the root directory of the project:

   ```sh
   npm install
   # or
   yarn install
   ```

3. **Running the Development Server**

   To start the development server, use the following command:

   ```sh
   gatsby develop
   ```

   This will run the site in development mode. Open [http://localhost:8000](http://localhost:8000) to view it in the browser. The page will reload if you make edits.

4. **Building for Production**

   To build the project for production, use the following command:

   ```sh
   gatsby build
   ```

   The build outputs will be stored in the `public` directory. You can then use `gatsby serve` to run the production build locally.

5. **Cleaning the Project**

   To clean the project's cache and public directories, use the following command:

   ```sh
   npm run clean
   # or
   yarn clean
   ```

## Project Structure

The following is the directory structure of the project:

    .
    ├── .cache/
    ├── lib/
    ├── public/
    ├── src/
    │ ├── components/
    │ ├── pages/
    | ├── state/
    │ ├── styles/
    | ├── theme/
    │ └── utils/
    ├── static/
    ├── gatsby-browser.js
    ├── gatsby-config.js
    ├── LICENSE
    ├── package.json

- **.cache/**: Gatsby's cache directory to speed up builds.
- **lib/**: Contains compiled JavaScript files.

  - **data/**: Place holder data to simulate a data base.

- **public/**: Contains the built files for deployment.
- **src/**: Contains the source code of the application.

  - **components/**: Reusable React components.
  - **pages/**: Page components corresponding to the routes.
  - **state/**: Redux functionality and state management.
  - **styles/**: Styling files (e.g., CSS, SCSS).
  - **theme/**: Theme customization and functions.
  - **utils/**: Utility functions and helpers.

- **static/**: Contains static assets like images and fonts.
- **gatsby-browser.js**: Customizes and extends default Gatsby settings affecting the browser.
- **gatsby-config.js**: Configuration file for Gatsby plugins and site metadata.
- **LICENSE**: The license for the project.
- **package.json**: Contains project metadata and dependencies.
- **README.md**: The main readme file for the project.

## Customization

This section covers how to customize your e-commerce template, including colors, fonts, and the project title. Customization is managed through the `theme.js` file and the `index.css` file.

1. **Customizing Colors**

   To customize the colors used in the application, edit the `palette` section in the `theme.js` file located in the `src/theme` directory. This section allows you to define the primary and secondary colors, text colors, and various status colors.

   ```javascript
   import { createTheme } from "@mui/material";

   const theme = createTheme({
     palette: {
       primary: { main: "#FF2681" },
       secondary: { main: "#26FFFF" },
       text: { primary: "#000000", secondary: "#707070" },
       status: {
         product: {
           "In stock": "#707070",
           "Few left": "#FF9000",
           "Out of stock": "#FF0000",
           other: "#FF0000",
         },
         order: {
           processing: "#0382FF",
           fulfilling: "#FF9000",
           fulfilled: "#15FF02",
         },
         payment: {
           paid: "#15FF02",
           failed: "#FF0000",
           pending: "#FF9000",
         },
         delivery: {
           pending: "#FF9000",
           delivered: "#15FF02",
           failed: "#FF0000",
         },
       },
     },
   });
   ```

2. **Customizing fonts**
   To change the fonts used in your application, modify the `typography` section in the `theme.js` file. This allows you to set different font families and weights for the primary and secondary fonts.

   ```javascript
   const theme = createTheme({
     typography: {
       fontFamily: "Your primary font, sans-serif",
       fontWeightLight: 200,
       fontWeightRegular: 500,
       fontWeightBold: 700,
       secondaryFont: {
         fontFamily: "Your secondary font, sans-serif",
         fontWeightLight: 200,
         fontWeightRegular: 400,
         fontWeightBold: 700,
       },
     },
   });
   ```

3. **Importing Fonts**

   The `index.css` file, located in the `src/styles` directory, is used to import fonts. Modify this file to include the fonts you want from [Google Fonts]("https://fonts.google.com/").

   ```css
   @import url("https://fonts.googleapis.com/css2?family=your+primary+font:ital,wght@0,400;0,700;1,400&family=your+secondary+font:wght@300..700&display=swap");
   ```

4. **Changing the Project Title**

   The project title is specified in the `title` attribute of the theme object in `theme.js`. This is your website name. To update the project title, change the value of the `title` attribute.

   ```javascript
   const theme = createTheme({
     title: "Your Custom Title",
     // other theme settings
   });
   ```

## Placeholder Data

The `lib/data` directory contains placeholder data to simulate various aspects of a database. This directory is to be deleted and but it's data serves as a guidline of what the front end is to receive from the API.

## 1. **user**

The `lib/data/user.json` directory contains placeholder data representing user information. This data simulates user profiles, payment methods, addresses, recent activity, and more. Below is a detailed description of the data structure with JavaScript data types:

```javascript
const user = {
  name: {
    first: "string",
    last: "string",
  },
  email: "string",
  phone: {
    code: "string",
    number: "string",
  },
  payments: {
    currency: "string",
    recent: "number",
    saved: [
      {
        type: "string",
        number: "string",
        details: {
          //...cvv, number, name
        },
      },
    ],
  },
  addresses: {
    recent: "number",
    saved: [
      {
        name: "string",
        region: "string",
        country: "string",
        city: "string",
        street: "string",
        address: "string",
        location: {
          type: "string",
          info: "string",
          deliveryFee: {
            amount: "number",
            currency: "string",
          },
        },
      },
    ],
  },
  recent: {
    searches: ["string"],
    viewedProducts: ["...ids"],
  },
  orders: ["...ids"],
  notifications: {
    items: [
      {
        title: "string",
        description: "string",
        dateCreated: "string",
        unread: "boolean",
      },
    ],
    new: "boolean",
  },
  favourites: {
    productID: { quantity: "number", total: "number", "...variants, size, color etc"},
  },
  cart: {
    total: "number",
    items: {
     productID: { quantity: "number", total: "number", "...variants, size, color etc"},
    },
  },
};
```

**Attributes**

- `name`: `object` An object containing the user's first and last name.
  - `first`: `string` The user's first name.
  - `last`: `string` The user's last name.
- `email`: `string` The user's email address.
- `phone`: `object` An object containing the user's phone information.
  - `code`: `string` The country code of the user's phone number.
  - `number`: `string` The user's phone number.
- `payments`: `object` An object containing the user's payment information.
  - `currency`: `string` The currency used for payments.
  - `recent`: `number` The most recently used payment method.
  - `saved`: `array of objects` An array of saved payment methods.
    - `type`: `string` The type of payment method (e.g., mobile, card).
    - `number`: `string` The masked payment method number.
    - `details`: `object` An object containing detailed payment information.
      - `number`: `string` The payment method number.
      - `name`: `string` The name on the payment method.
      - `cvv`: `string` The CVV code of the payment method.
      - `expiry`: `string` The expiry date of the payment method.
- `addresses`: `object` An object containing the user's address information.
  - `recent`: `number` The most recently used address.
  - `saved`: `array of objects` An array of saved addresses.
    - `name`: `string` The name of the address.
    - `region`: `string` The region of the address.
    - `country`: `string` The country of the address.
    - `city`: `string` The city of the address.
    - `street`: `string` The street of the address.
    - `address`: `string` The full address.
    - `location`: `object` An object containing detailed location information.
      - `type`: `string` The type of location (e.g., home, pick-up station).
      - `info`: `string` Additional information about the location.
      - `deliveryFee`: `object` An object containing the delivery fee information.
        - `amount`: `number` The amount of the delivery fee.
        - `currency`: `string` The currency of the delivery fee.
- `recent`: `object` An object containing the user's recent activity.
  - `searches`: `array of strings` Recent searches performed by the user.
  - `viewedProducts`: `array of strings` IDs of recently viewed products.
- `orders`: `array of strings` IDs of the user's orders.
- `notifications`: `object` An object containing the user's notifications.
  - `items`: `array of objects` An array of notification items.
    - `title`: `string` The title of the notification.
    - `description`: `string` The description of the notification.
    - `dateCreated`: `string` The date the notification was created.
    - `unread`: `boolean` Whether the notification is unread.
  - `new`: `boolean` Whether there are new notifications.
- `favourites`: `object` An object containing the user's favorite products.
  - `productID`: `object` An object containing information about the favorited product.
    - `quantity`: `number` The quantity of the favorited product.
    - `total`: `number` The total cost of the favorited product.
    - Other properties (e.g., size, color, etc.).
- `cart`: `object` An object containing the user's cart information.
  - `total`: `number` The total cost of items in the cart.
  - `items`: `object` An object containing the items in the cart.
    - `productID`: `object` An object containing information about a cart item.
      - `quantity`: `number` The quantity of the cart item.
      - `total`: `number` The total cost of the cart item.
      - Other properties (e.g., size, color, etc.).

## 2. **Product**

The `lib/data/products.json` directory simulates a database of products available in the e-commerce store. This data includes information about each product, below is a javascript object of product data.

```javascript
const product = {
  images: ["string"], // Array of image URLs
  id: "string",
  name: "string",
  description: "string",
  unitPrice: {
    currency: "string",
    amount: "number",
  },
  features: {
    feature1: "string",
    feature2: "string",
  },
  variants: {
    variant: {
     option1:"number",
     option2:"number"
     multiSelect: "boolean", //controlls wether a user can select multiple choices
    },
    //other variants
  },
  rating: {
    votes: ["number"], // Array of vote numbers
    score: "number",
    reviews: [
      {
        userName: "string",
        dateCreated: "string",
        rating: "number",
        review: {
          title: "string",
          body: "string",
        },
      },
    ],
  },
  stock: "number",
  state: "string",
  brand: "string",
  categories: ["string"], // Array of category strings
  type: "string",
};
```

**Attributes**

- `images`: `array of strings` URLs of the product images.
- `id`: `string` The unique identifier for the product.
- `name`: `string` The name of the product.
- `description`: `string` A description of the product.
- `unitPrice`: An object containing the unit price information.
  - `currency`: `string` The currency of the unit price.
  - `amount`: `number` The amount of the unit price.
- `features`: `object` An object containing the product's features.
  - `feature1`: `string` The value of feature 1.
  - `feature2`: `string` The value of feature 2.
- `variants`: An object containing the product's variants.
  - `variant`: `object` An object containing the available options for the variant and their price increment.
    - `option1`: `number` The price increment of the option, `default is 0`.
    - `option2`: `number` The price increment of the option, `default is 0`.
    - `multiSelect`: `boolean` Controls whether a user can select multiple options, default is false.
- `rating`: An object containing the product's rating information.
  - `votes`: `array of numbers` An array of vote numbers.
  - `score`: `number` The average score of the product.
  - `reviews`: `array of objects` An array of review objects.
    - `userName`: `string` The name of the user who wrote the review.
    - `dateCreated`: `string` The date the review was created.
    - `rating`: `number` The rating given by the user.
    - `review`: `object` An object containing the review details.
      - `title`: `string` The title of the review.
      - `body`: `string` The body of the review.
- `stock`: `number` The stock quantity of the product.
- `state`: `string` The availability state of the product (e.g., In stock).
- `brand`: `string` The brand of the product.
- `categories`: `array of strings` The categories the product belongs to.
- `type`: `string` The type of product.

## 3. **Order**

The `lib/data/orders.json` directory simulates a database of orders placed by users. This data includes comprehensive information about each order, below is a javascript object of order data.

```javascript
const order = {
  id: "string",
  status: "string",
  dateCreated: "string",
  total: "number",
  payment: {
    details: {
      type: "string",
      number: "string",
      details: {
        //cvv, name, number
      },
    },
    status: "string",
    currency: "string",
  },
  delivery: {
    status: "string",
    details: {
      name: "string",
      region: "string",
      country: "string",
      city: "string",
      street: "string",
      address: "string",
      type: "string",
      location: {
        info: "string",
        deliveryFee: {
          amount: "number",
          currency: "string",
        },
      },
    },
  },
  items: {
    productID: {
      quantity: "number",
      total: "number",
      //variants
    },
  },
};
```

**Attributes**

- `id`: `string` The unique identifier for the order.
- `status`: `string` The current status of the order (e.g., processing, completed).
- `dateCreated`: `string` The date when the order was created.
- `total`: `number` The total amount for the order.
- `payment`: An object containing payment information.
  - `details`: An object with payment details.
    - `type`: `string` The type of payment method (e.g., Mobile, Card).
    - `number`: `string` The payment method number.
    - `details`: `object` Object containing details such as cvv, name, number if applicable.
  - `status`: `string` The payment status (e.g., pending, completed).
  - `currency`: `string` The currency used for the payment.
- `delivery`: An object containing delivery information.
  - `status`: `string` The delivery status (e.g., pending, delivered).
  - `details`: An object with delivery details.
    - `name`: `string` The name associated with the delivery address.
    - `region`: `string` The region of the delivery address.
    - `country`: `string` The country of the delivery address.
    - `city`: `string` The city of the delivery address.
    - `street`: `string` The street of the delivery address.
    - `address`: `string` The full delivery address.
    - `type`: `string` The type of delivery location (e.g., office, home).
    - `location`: An object with additional location details.
      - `info`: `string` Additional information about the location.
      - `deliveryFee`: An object with delivery fee details.
        - `amount`: `number` The amount of the delivery fee.
        - `currency`: `string` The currency of the delivery fee.
- `items`: An object where each key is a product ID and the value is an object containing item details.
  - `quantity`: `number` The quantity of the product.
  - `total`: `number` The total price for the item.

## 4. **Session**

The `lib/data/session.json` directory simulates session storage for user sessions. This data includes information about user sessions, the current implementation is not exhaustive but it shows the approach. `Region` data is fetched from [ipapi]("https://ipapi.co/") Below is a javascript object of session data.

```javascript
const session = {
  region: {
    ip: "string",
    city: "string",
    region: "string",
    region_code: "string",
    country_code: "string",
    country_code_iso3: "string",
    country_name: "string",
    country_capital: "string",
    country_tld: "string",
    continent_code: "string",
    in_eu: "boolean",
    postal: "string",
    latitude: "number",
    longitude: "number",
    timezone: "string",
    utc_offset: "string",
    country_calling_code: "string",
    currency: "string",
    currency_name: "string",
    languages: "string",
    asn: "string",
    org: "string",
  },
  recent: {
    searches: ["string"],
    viewedProducts: ["string"],
  },
};
```

**Attributes**

- `region`: An object containing details about the user's geographical and network region.

  - `ip`: `string` The IP address of the user.
  - `city`: `string` The city of the user.
  - `region`: `string` The state or region.
  - `region_code`: `string` The region code.
  - `country_code`: `string` The country code.
  - `country_code_iso3`: `string` The ISO 3166-1 alpha-3 country code.
  - `country_name`: `string` The name of the country.
  - `country_capital`: `string` The capital city of the country.
  - `country_tld`: `string` The top-level domain of the country.
  - `continent_code`: `string` The continent code.
  - `in_eu`: `boolean` Whether the user is in the EU.
  - `postal`: `string` The postal or ZIP code.
  - `latitude`: `number` The latitude of the location.
  - `longitude`: `number` The longitude of the location.
  - `timezone`: `string` The time zone ID.
  - `utc_offset`: `string` The UTC offset.
  - `country_calling_code`: `string` The country calling code.
  - `currency`: `string` The currency used in the region.
  - `currency_name`: `string` The name of the currency.
  - `languages`: `string` A comma-separated list of languages spoken.
  - `asn`: `string` The Autonomous System Number (ASN).
  - `org`: `string` The organization or ISP.

- `recent`: An object containing recent user activity.
  - `searches`: `array of strings` An array of recent search queries.
  - `viewedProducts`: `array of strings` An array of IDs of recently viewed products.

## 5. **Spotlights**

The `/lib/data/spotlights.json` directory contains data for highlighting specific products or updates that the company wants to feature. This may include promotions, featured products, or special announcements. Below is a javascript object of spotlight data.

```javascript
const spotlights = {
  title: "string",
  description: "string",
  image: "string",
  action: {
    title: "string",
    path: "string",
  },
};
```

**Attributes**

- `title`: `string` The title of the spotlight section.
- `description`: `string` A brief description of the spotlight content.
- `image`: `string` URL to the image representing the spotlight.
- `action`: `object`
  - `title`: `string` The text to display for the action button.
  - `path`: `string` The URL path to navigate when the action button is clicked.

## 6. **Offers**

The `/lib/data/offers.json` directory simulates a database of product offers and discounts. This data includes information about special offers, and product promotions. Below is a javascript object of offers data.

```javascript
const offers = {
  productID: "number",
};
```

**Attributes**

- `productID`: `number` Represents the product ID as a key with its corresponding offer value (discount or special offer).

Each subdirectory in `lib/data` plays a crucial role in simulating various functionalities of the e-commerce application. Use these placeholders as a guideline to test and develop different features and scenarios.

## Functionality

## 1. **Utils**

- ## **AuthWorker**

  path : `/utils/authworker.js`

  The AuthWorker class contains several methods that perform specific tasks related to authentication. These tasks include redacting sensitive information, formatting strings, validating phone numbers, and validating various form inputs like passwords, emails, and credit card details.

  **Methods**

  1.  `redact()`

  - **Functionality**: Redacts part of a string for security purposes.
  - **Parameters**:
    - `str`: `String` - String to be redacted.
    - `startCharacters`: `Number` - Number of characters to show at the start - `default: 2`.
    - `endCharacters`: `Number` - Number of characters to show at the end - `default: 2`.
  - **Usage**:

    ```javascript
    authWorker.redact("1234567890", 2, 2); // Output: "12********90"
    ```

  2.  `formatString()`

  - **Functionality**: Formats a `string` by adding a `divider` after a specified number of characters.
  - **Parameters**:
    - `string`: `String` - The string to format.
    - `divider`: `String` - Character to insert.
  - `spacing`: `Number` - Number of characters between dividers.
  - **Usage**:

    ```javascript
    const handleChange = ({ target }) => {
      if (target.name === "cardNumber") {
        setForm((prev) => ({
          ...prev,
          [target.name]: authWorker.formatString(target.value, "-", 4),
        }));
        // Output: "4111-1111-1111-1111"
      }
    };

    handleChange({ target: { name: "cardNumber", value: "411111111111111" } });
    ```

  3.  `removeStringFormat()`

  - **Functionality**: Removes a specified `divider` from a string, for use in saving formated strings to the database.
  - **Parameters**:
    - `string`: `String` - The string to clean.
    - `divider`: `String` - Character to remove.
  - **Usage**:

    ```javascript
    const handleSubmit = () => {
      savePayment({
        number: authWorker.removeStringFormat("4111-1111-1111-1111", "-"),
      });
      // Output: "411111111111111"
    };
    ```

  4.  `formatPhoneNumber()`

  - **Functionality**: Formats a `phone number` according to international standards while `typing`.
  - **Parameters**:
    - `prev`: `String` - Previous phone number value.
    - `phoneNumber`: `String` - New phone number (typing).
    - `countryCode`: `String` - Country code.
  - **Usage**:

    ```javascript
    const handleChange = ({ target }) => {
      if (target.name === "phoneNumber") {
        setForm((prev) => ({
          ...prev,
          [target.name]: authWorker.formatPhoneNumber(
            prev.phoneNumber,
            target.value,
            "US"
          ),
        }));
        // Output: "+1 212 341 2321"
      }
    };

    handleChange({ target: { name: "phoneNumber", value: "+12123412321" } });
    ```

  5.  `getErrors()`

  - **Functionality**: Validates form `input` fields based on predefined rules, and adds or removes the error messages.
  - **Parameters**:
    - `errors`: `Object` - Existing errors object.
    - `target`: `Object` - Form field to validate.
    - `form`: `Object` - Entire form data for cross-field validation.
  - **Usage**:

    ```javascript
    const handleChange = ({ target }) => {
      setErrors(authWorker.getErrors(errors, target, form));
      // Output: {email:"required", password:"invalid password"}
      setForm((prev) => ({ ...prev, [target.name]: target.value }));
    };

    handleChange({ target: { name: "email", value: "" } });
    ```

- ## **FetchWorker**

  **path** : `/utils/fetchWorker.js`

  The `FetchWorker` class is designed to simulate fetching data from an API for an e-commerce platform. It uses local JSON files from `lib/data/` (`orders.json`, `products.json`, `offers.json`, `spotlights.json`) to provide mock data for various types of requests. Below is a detailed breakdown of each function within the class, along with their functionality and parameters.

  **Methods**

  1.  `fetchResults()`

  - **Functionality**: Simulates an API request to fetch a list of products based on the provided query. It filters products based on the query parameter and limits the number of results if the limit parameter is specified.
  - **Parameters**:
    - `query`: `String` - The search query to filter products (e.g., "clothing", "electronics").
    - `scope`: `String` - The scope of the search (not used in the current implementation).
    - `limit`: `Number` - The maximum number of results to return.
  - **Usage**:

    ```javascript
    const results = await fetchWorker.fetchResults("clothing", "all", 10);
    ```

  2.  `fetchOffers()`

  - **Functionality**: Simulates fetching all available product offers from the local `/lib/data/offers.json` file.
  - **Parameters**: `none`
  - **Usage**:

    ```javascript
    const offers = await fetchWorker.fetchOffers();
    ```

  3.  `fetchSpotlights()`

  - **Functionality**: Simulates fetching e-commerce highlights from the local `/lib/data/spotlights.json` file.
  - **Parameters**: `none`
  - **Usage**:

    ```javascript
    const spotlights = await fetchWorker.fetchSpotlights();
    ```

  4.  `fetchRecentlyViewedProducts()`

  - **Functionality**: Fetches the recently viewed products for a user based on their login status. It uses the `fetchProducts()` function to fetch the products.
  - **Parameters**:
    - `user`: `Object` - User object from redux state containing login status and recent viewed products.
    - `session`: `Object` - Session object from redux state containing recent viewed products if the user is not logged in.
  - **Usage**:

    ```javascript
    const recentProducts = await fetchWorker.fetchRecentlyViewedProducts(
      user,
      session
    );
    ```

  5.  `fetchProducts()`

  - **Functionality**: Simulates an API request to fetch products by their IDs from the local `/lib/data/products.json` file.
  - **Parameters**:
    - `ids`: `Array` - An array of product IDs to fetch.
  - **Usage**:

    ```javascript
    const products = await fetchWorker.fetchProducts(["1", "2", "3"]);
    ```

  6.  `fetchProduct()`

  - **Functionality**: Simulates an API request to fetch a single product by its ID from the local `/lib/data/products.json` file.
  - **Parameters**:
    - `id`: `String` - The ID of the product to fetch.
  - **Usage**:

    ```javascript
    const product = await fetchWorker.fetchProduct("123");
    ```

  7.  `fetchOrders()`

  - **Functionality**: Simulates an API request to fetch orders by their IDs from the local `/lib/data/orders.json` file.
  - **Parameters**:
    - `ids`: `Array` - An array of order IDs to fetch.
  - **Usage**

    ```javascript
    const orders = await fetchWorker.fetchOrders(["1", "2", "3"]);
    ```

  8.  `fetchOrder()`

  - **Functionality**: Simulates an API request to fetch a single order by its ID from the local `/lib/data/orders.json` file.
  - **Parameters**:
    - `id`: `String` - The ID of the order to fetch.
  - **Usage**:

    ```javascript
    const product = await fetchWorker.fetchOrder("456");
    ```

- ## **ProductWorker**

  path : `/utils/productWorker.js`

  The `ProductWorker` class provides various methods to handle product-related operations such as calculating the total price, applying discounts, fetching product details, and obtaining rating distributions for an e-commerce platform. Below is a detailed breakdown of each function within the class, along with their functionality and parameters.

  **Methods**

  1.  `getTotal()`

  - **Functionality**: Calculates the total price of a product based on the quantity, selected variants, and any applicable offers or discounts.
  - **Parameters**:
    - `product`: `Object` - The product object containing details like unit price and variants.
    - `quantity`: `Number` - The quantity of the product to be purchased.
    - `variants`: `Object` - An object representing the selected variants and their options.
    - `offers`: `Object` - An object containing offers applicable to the product.
  - **Usage**:

    ```javascript
    const total = productWorker.getTotal(
      product,
      2,
      { size: "M", color: "Red" },
      offers
    );
    ```

  2.  `getDiscount()`

  - **Functionality**: Calculates the discounted price based on the given offer percentage.
  - **Parameters**:
    - `offer`: `Number` - The discount percentage to be applied.
    - `price`: `Number` - The original price of the product.
  - **Usage**:

    ```javascript
    const discountedPrice = productWorker.getDiscount(20, 100);
    ```

  3.  `getProductDetails()`

  - **Functionality**: Fetches the details of a product, including its quantity, selected variants, and total price, considering any offers. It checks the cart items and favorites to get the existing details if available. If a variant is `multiSelect` it sets the default detail to an `Array`, on select the items will be added to the array.
  - **Parameters**:
    - `cartItems`: `Object` - An object containing the items in the user's cart.
    - `favourites`: `Object` - An object containing the user's favorite products.
    - `product`: `Object` - The product object containing details like variants.
    - `offers`: `Object` - An object containing offers applicable to the product.
  - **Usage**:

    ```javascript
    const productDetails = productWorker.getProductDetails(
      {
        1: {
          quantity: 2,
          total: 100,
          variant1: "option1",
          variant2: ["option1", "option2"],
        },
      },
      {
        2: {
          quantity: 4,
          total: 200,
          variant1: "option1",
          variant2: "option2",
        },
      },
      product,
      offers
    );
    ```

  4.  `getRatingDistribution()`

  - **Functionality**: Provides the distribution of ratings for a product based on the votes it has received.
  - **Parameters**:
    - `product`: `Object` - The product object containing rating details and votes.
  - **Usage**:

    ```javascript
    const ratingDistribution = productWorker.getRatingDistribution(product);
    ```

- ## **ResultsWorker**

  path : `/utils/resultsWorker.js`

  The `ResultsWorker` class handles the processing, filtering, and pagination of product search results for an e-commerce platform. It uses the `ProductWorker` class to assist with price calculations and exception handling. Below is a detailed breakdown of each function within the class, along with their functionality and parameters.

  **Usage**

  ```javascript
  import ResultsWorker from "/utils/resultsWorker";

  const resultsWorker = new ResultsWorker();

  // Example data
  const productData = [...];  // Array of product data
  const searchParams = {...};  // Search parameters (e.g., filters)
  const offers = {...};  // Offers data

  // Parse initial product info
  resultsWorker.parseInfo(productData, searchParams, offers);

  // Apply filters and get filtered results
  const filters = {
    brand: "Nike",
    category: "Shoes",
    min: 50,
    max: 200,
    color: "Red",
  };
  const filteredResults = resultsWorker.filterResults(filters, productData, searchParams, offers);

  // Get paginated results for the first page
  const paginatedResults = resultsWorker.getResults(filteredResults, 1);
  console.log(paginatedResults);
  ```

  **Methods**

  1. `parseInfo()`

  - **Functionality**: Processes the raw data to extract price ranges, available categories, brands, and features. It also initializes filter options and sets the minimum and maximum prices.
  - **Parameters**:
    - `data`: `Array` - The array of product data to be processed.
    - `params`: `Object` - The search parameters (e.g., selected filters) used to refine the data.
    - `offers`: `Object` - An object containing offers applicable to the products.
  - **Usage**:

    ```javascript
    resultsWorker.parseInfo(productData, searchParams, offers);
    ```

  2. `filterResults()`

  - **Functionality**: Filters the product data based on the specified filters such as brand, category, and price range. It then calls parseInfo to update the filter options and price ranges.
  - **Parameters**:
    - `filters`: `Object` - The filters to apply (e.g., brand, category, min price, max price).
    - `data`: `Array` - The array of product data to be filtered.
    - `params`: `Object` - The search parameters (e.g., selected filters) used to refine the data.
    - `offers`: `Object` - An object containing offers applicable to the products.
  - **Usage**:

    ```javascript
    const filteredResults = resultsWorker.filterResults(
      filters,
      productData,
      searchParams,
      offers
    );
    ```

  3. `getResults()`

  - **Functionality**: Paginates the filtered product data and returns the data for the specified page along with pagination details.
  - **Parameters**:
    - `data`: `Array` - The array of filtered product data.
    - `page`: `Number` - The page number to retrieve.
  - **Usage**:

    ```javascript
    const paginatedResults = resultsWorker.getResults(filteredResults, 1);
    ```

## 2. **State**

**Usage**

```javascript
const dispatch = useDispatch();
dispatch(myReducer());
dispatch(myAsyncThunk());
```

- ## **Store Reducer**

  **Path**: `/reducers/storeReducer.js`

  The `storeReducer` is the root reducer for the Redux store, combining multiple slice reducers into a single reducer. It utilizes Redux Toolkit's `combineReducers` and `persistReducer` to manage state persistence and combination of different slices.

  1. `userReducer`

     - **Description**: Manages the user-related state, including user data, authentication status, and user-specific actions.
     - **Path**: `./user`
     - **Usage**: Imported and combined in the store reducer.

  2. `sessionReducer`

     - **Description**: Manages session-related state, including session data and recent activities.
     - **Path**: `./session`
     - **Usage**: Imported and combined in the store reducer.

  3. `snackBarReducer`

     - **Description**: Manages the snackbar state for displaying notifications to the user.
     - **Path**: `./snackBar`
     - **Usage**: Imported and combined in the store reducer.

  4. `currencyReducer`

     - **Description**: Manages the currency state for the application, controlling the currency the website uses.
     - **Path**: `./currency`
     - **Usage**: Persisted using `redux-persist` and combined in the store reducer.

  5. `currencyPersistConfig`

     - **Description**: Configuration for persisting the `currency` slice state.
     - **Properties**:
       - `key`: `String` - Key used for localStorage (`currency`).
       - `storage`: `Object` - The storage engine used (localStorage from `redux-persist`).

- ## **User Slice**

  path : `/state/user.js`

  The `userSlice` manages the user state for the e-commerce platform using Redux Toolkit. It handles user data fetching, user actions (like login, logout, and registration), and updates to user-related information. Below is a detailed breakdown of each function within the slice, along with their functionality and parameters.

  **Initial state**

  ```javascript
  {
    isFetching: true,
    isLoggedIn: false,
    data: {}
  }
  ```

  **Reducers**

  1. `setUserCart`

  - **Functionality**: Updates the user's favourite products locally before the API response for a more responsive UI.
  - **Parameters**:
    - `state`: `Object` - The current state of the slice.
    - `action`: `Object` - The action payload containing the updated cart items.
  - **Usage**:

    ```javascript
    dispatch(setUserCart(updatedCartItems));
    ```

  2. `setUserFavourites`

  - **Functionality**: Updates the user's favourite products locally before the API response for a more responsive UI.
  - **Parameters**:
    - `state`: `Object` - The current state of the slice.
    - `action`: `Object` - The action payload containing the updated cart items.
  - **Usage**:

    ```javascript
    dispatch(setUserFavourites(updatedUserFavourites));
    ```

  **ExtraReducers**

  1. `fetchUser`

     - `fulfilled`: Sets the fetching status to false and updates the user data and login status when the fetch is successful.
     - `pending`: Sets the fetching status to true when the fetch is pending.
     - `rejected`: Sets the fetching status to false

  **Async Thunks**
  The current implimentation of these functions are only as an example. Use these functions to handle the user redux state.

  1. `fetchUser`: Fetches user from api and updates the user state.

  2. `loginUser`: Logs in user and updates currency and session, then fetches updated user data.

  3. `logoutUser`: Logs out the user and fetches updated user data.

  4. `registerUser`: Handles user registration and fetches updated user data.

  5. `checkOutUser`: Handles user checkout and fetches updated user data.

  6. `verifyCode`: Handles code verification and calls success handler.

  7. `updateUser`: Handles the updating of the user then fetches the most updated user data.

- ## **Session slice**

  path: `/state/session.js`

  The `sessionSlice` manages the session state for the application using Redux Toolkit. It handles fetching session data, which includes region and recent session details. Below is a detailed breakdown of each function within the slice, along with their functionality and parameters.

  **Initial state**

  ```javascript
  {
    isFetching: true,
    region: {},
    recent: {}
  }
  ```

  **ExtraReducers**

  1. `fetchSession`

     - `fulfilled`: Updates region and recent data, sets isFetching to false.
     - `pending`: Sets isFetching to true.
     - `rejected`: Sets isFetching to false.

  **Async Thunks**

  1. `fetchSession`

  - **Functionality**: Simulates an API request to fetch session data with a delay. If the currency is not already set, it sets the currency to the region's currency.
  - **Parameters**:
    - `props`: `Object` - Additional properties for the request (not used in this thunk).
    - `dispatch`: `Function` - Redux dispatch function.
    - `getState`: `Function` - Function to get the current state of the Redux store.

- ## **Currency slice**

  **Path**: `/state/currency.js`

  The `currencySlice` manages the currency state of the application using Redux Toolkit. It handles setting the currency used across the website. This value is stored in `local storage` for persistance.

  **Initial state**

  ```javascript
  initialValues: {
  }
  ```

  **Reducers**

  1. `setCurrency()`

  - **Functionality**: Sets the currency state to the provided value.
  - **Parameters**:
    - `state`: `Object` - The current state of the currency.
    - `action`: `Object` - Redux action containing the payload with the new currency value.
  - **Usage**:

    ```javascript
    dispatch(setCurrency({ code: "USD", symbol: "$" }));
    ```

- ## **Snackbar slice**

  **Path**: `/state/snackBar.js`

  The `snackBarSlice` manages the state of the snackbar component in the application using Redux Toolkit. It handles displaying notifications to the user with different types and messages. This document details the functionality, parameters, and usage of each function within the slice.

  **initial state**

  ```javascript
  {
    on: false,
    type: "info",
    title: "",
    message: "",
  }
  ```

  **Reducers**

  1. `setSnackBar()`

  - **Description**: Sets the snackbar state to the provided value.
  - **Parameters**:
    - `state`: Object - The current state of the snackbar.
    - `action`: Object - Redux action containing the payload with the new snackbar state.
  - **Usage**:

    ```javascript
    dispatch(
      setSnackBar({
        on: true,
        type: "SUCCESS",
        title: "Success!",
        message: "Operation completed successfully.",
      })
    );
    ```

## Conclusion

This E-commerce Web Template is designed to be a powerful yet easy-to-use solution for setting up your online store. By leveraging modern technologies such as React, Gatsby, Redux, and MUI, this template ensures a responsive, high-performance, and visually appealing web experience for your customers.

**Key Benefits**

- **Performance**: Gatsby's static site generation enhances the speed and performance of your site, leading to better SEO and user experience.

- **State Management**: Redux simplifies state management across your application, making it easier to manage complex states and interactions.

- **Customization**: The modular approach allows you to customize the visual aspects without altering the core logic, providing flexibility and maintainability.

- **User Experience**: MUI's robust set of components ensures a consistent and professional look and feel, enhancing the overall user experience.

**Next Steps**

- **Explore and Customize**: Dive into the codebase to explore the various components and logic. Customize the visuals to match your brand's identity.

- **Deploy**: Once you have tailored the template to your needs, follow the deployment instructions to launch your e-commerce site.

- **Expand Features**: Consider adding additional features such as payment gateways, advanced filtering, or user analytics to further enhance your store.

##