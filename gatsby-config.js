module.exports = {
  proxy: {
    prefix: "/graphql",
    url: "http://localhost:3000",
  },
  siteMetadata: {
    title: `Observatory`,
    description: `The Observatory’s goal is to measure how people interact with government services. It empowers and supports teams to provide better services and outcomes for everyone.`,
    author: `Digital Transformation Agency`,
    siteUrl: `https://observatory.service.gov.au/`,
    menuLinks: [
      {
        text: "Home",
        link: "/",
      },
      {
        text: "Get started",
        link: "/get-started",
      },
      {
        text: "Google Analytics 360",
        link: "/analytics-360",
      },
      {
        text: "Events",
        link: "/events",
      },
      {
        text: "Blog",
        link: "/blogs",
      },
      {
        text: "Research",
        link: "/research",
      },
      {
        text: "Resources",
        link: "/resources",
      },
    ],
    footerLinks: [
      {
        text: "Privacy Policy",
        link: "/privacy",
      },
      {
        text: "Blogs",
        link: "/blogs",
      },
      {
        text: "Events",
        link: "/events",
      },
      {
        text: "Source code",
        link: "/resources#source-code",
      },
      {
        text: "Contact us",
        link: "/contact-us",
      },
    ],
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-typescript`,
    `gatsby-plugin-sass`,
    `gatsby-plugin-lodash`,
    `gatsby-plugin-mdx`,
    `gatsby-plugin-sitemap`,
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
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-autolink-headers`,
            options: {
              isIconAfterHeader: true,
              elements: [`h2`, `h3`, `h3`],
            },
          },
        ],
      },
    },
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
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        // The property ID; the tracking code won't be generated without it
        trackingId: "UA-61222473-43",
        // Defines where to place the tracking script - `true` in the head and `false` in the body
        head: true,
      },
    },

    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
};
