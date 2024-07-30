<p align="center">
  <a href="https://www.gatsbyjs.com">
    <img alt="Gatsby" src="https://www.gatsbyjs.com/Gatsby-Monogram.svg" width="60" />
  </a>
</p>

<h1 align="center">E-commerce Web Template</h1>

A comprehensive E-commerce template solution for all stores using [React](https://react.dev/), [Gatsby](https://www.gatsbyjs.com) for static site generation and better SEO, [Redux](https://redux.js.org/) for state management, and [MUI](https://mui.com/material-ui/getting-started/) as the graphic library.

Featuring a simple but stylish theme, this template includes:

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

1. **user**

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

2. **Product**

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
       - `option1`: `number` The price increment of the option, default is 0.
       - `option2`: `number` The price increment of the option, default is 0.
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

3. **Order**

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

4. **Session**

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

5. **Spotlights**

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

6. **Offers**

   The `/lib/data/offers.json` directory simulates a database of product offers and discounts. This data includes information about special offers, and product promotions. Below is a javascript object of offers data.

   ```javascript
   const offers = {
     1: 13,
     11: 10,
     13: 5,
     18: 5,
     29: 6,
     4: 22,
     10: 15,
   };
   ```

   **Offers**  
   **Attributes**

   - `productID`: `number`  
     Represents the product ID as a key with its corresponding offer value (discount or special offer).

Each subdirectory in `lib/data` plays a crucial role in simulating various functionalities of the e-commerce application. Use these placeholders as a guideline to test and develop different features and scenarios.

```

```
