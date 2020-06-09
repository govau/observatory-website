module.exports = {
  proxy: {
    prefix: "/graphql",
    url: "http://localhost:3000",
  },
  siteMetadata: {
    title: `Observatory`,
    description: `The Observatory’s goal is to measure how people interact with government services. It empowers and supports teams to provide better services and outcomes for everyone.`,
    author: `Digital Transformation Agency`,
    dtaBlogs: [
      {
        text: "gov.au Observatory: Digital Constellations from user journeys",
        link:
          "https://www.dta.gov.au/blogs/govau-observatory-digital-constellations-user-journeys",
      },
      {
        text: "Seen but not clicked – lowering rankings to improve search",
        link:
          "https://www.dta.gov.au/blogs/seen-not-clicked-lowering-rankings-improve-search",
      },
      {
        text: "Start smaller to build better",
        link: "https://www.dta.gov.au/blogs/start-smaller-build-better",
      },
    ],
    menuLinks: [
      {
        text: "Home",
        link: "/",
      },
      {
        text: "Blogs",
        link: "/blogs",
      },
      {
        text: "Terms of Service",
        link: "/terms-of-service",
      },
      {
        text: "Events",
        link: "/events",
      },
      {
        text: "Contact us",
        link: "/contact-us",
      },
    ],
    footerLinks: [
      {
        text: "Github for this site",
        link: "https://github.com/govau/observatory-website",
      },
      {
        text: "Github for our projects",
        link: "https://github.com/govau/galileo",
      },
      {
        text: "Privacy Policy",
        link: "/privacy",
      },
    ],
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-typescript`,
    `gatsby-plugin-sass`,
    `gatsby-plugin-lodash`,
    {
      resolve: `gatsby-plugin-breadcrumb`,
      options: {
        // useAutoGen: required 'true' to use autogen
        useAutoGen: true,
        // autoGenHomeLabel: optional 'Home' is default
        // autoGenHomeLabel: `Root`,
        // crumbLabelUpdates: optional, update specific crumbLabels in the path
        crumbLabelUpdates: [
          {
            pathname: "/blogs",
            crumbLabel: "Blogs",
          },
        ],
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `content`,
        path: `${__dirname}/content`,
      },
    },
    {
      resolve: "gatsby-plugin-mailchimp",
      options: {
        endpoint:
          "https://dta.us12.list-manage.com/subscribe/post?u=81bbb1d15242b2224ee11e3fe&amp;id=c4764336ba",
        timeout: 3500, // number; the amount of time, in milliseconds, that you want to allow mailchimp to respond to your request before timing out. defaults to 3500
      },
    },
    `gatsby-transformer-remark`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gov.au Analytics platform`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#FFF`,
        theme_color: `#FFF`,
        display: `minimal-ui`,
        icon: `src/images/favicon.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: "gatsby-plugin-google-tagmanager",
      options: {
        id: "######",

        // Include GTM in development.
        // Defaults to false meaning GTM will only be loaded in production.
        includeInDevelopment: false,

        // datalayer to be set before GTM is loaded
        // should be an object or a function that is executed in the browser
        // Defaults to null
        defaultDataLayer: { platform: "gatsby" },

        // Specify optional GTM environment details.
        // gtmAuth: "YOUR_GOOGLE_TAGMANAGER_ENVIRONMENT_AUTH_STRING",
        // gtmPreview: "YOUR_GOOGLE_TAGMANAGER_ENVIRONMENT_PREVIEW_NAME",
        // dataLayerName: "YOUR_DATA_LAYER_NAME",
      },
    },

    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
};
