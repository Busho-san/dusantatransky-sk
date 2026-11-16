module.exports = {
  // Použije sa len pri `gatsby build --prefix-paths` (preview na GitHub Pages)
  pathPrefix: `/dusantatransky-sk`,
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
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
