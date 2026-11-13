module.exports = {
  siteMetadata: {
    title: `Dušan Tatranský | Marketing, kreativita a AI školenia pre firmy`,
    description: `Creative & Strategy Director v Promiseo, 15+ rokov v marketingu. Praktické AI workshopy pre firmy a marketingové tímy na Slovensku, u vás vo firme alebo online.`,
    siteUrl: `https://www.dusantatransky.sk`,
  },
  plugins: [
    {
      resolve: `gatsby-plugin-react-helmet`
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-transformer-sharp`
    },
    {
      resolve: `gatsby-plugin-sharp`
    },
    {
      resolve: `gatsby-plugin-styled-components`,
      options: {
        // Add any options here
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Dušan Tatranský`,
        short_name: `Tatranský`,
        lang: `sk`,
        start_url: `/`,
        background_color: `#f5f5f5`,
        theme_color: `#f68848`,
        display: `minimal-ui`,
        icon: `src/images/fav.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "UA-142530935-1",
        // Defines where to place the tracking script - `true` in the head and `false` in the body
        head: false,
        // Set Variation ID. 0 for original 1,2,3....
        variationId: "0",
      },
    },
    {
      resolve: `gatsby-plugin-google-tagmanager`,
      options: {
        id: "GTM-5SRW448",
  
        // Include GTM in development.
        // Defaults to false meaning GTM will only be loaded in production.
        includeInDevelopment: false,
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
