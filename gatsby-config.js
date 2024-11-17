/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/reference/config-files/gatsby-config/
 */

/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  pathPrefix: "/e-commerce-template",  
  siteMetadata: {
    title: "E-commerce web template",
    description: "A web template for an e-commerce website",
    author: "Wegah Studios",
  },
  plugins: [
    {
      resolve: `gatsby-plugin-netlify`,
      options: {
        headers: {
          "/*": [
            // Disable the X-Frame-Options by not setting any value
            'X-Frame-Options: ""',
            // Optionally, allow framing from anywhere using Content-Security-Policy
            "Content-Security-Policy: frame-ancestors *",
          ],
        },
      },
    },
  ],
};
