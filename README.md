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
    │ ├── styles/
    │ └── utils/
    ├── static/
    ├── gatsby-browser.js
    ├── gatsby-config.js
    ├── LICENSE
    ├── package.json

- **.cache/**: Gatsby's cache directory to speed up builds.
- **lib/**: Contains compiled JavaScript files.
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