require("dotenv").config({
  path: `.env`,
})

module.exports = {
  siteMetadata: {
    title: "Min Zhuang",
    author: "Chew Min Zhuang, Hunter Chang - Gatsby template",
    description: "Chew Min Zhuang developer portfolio"
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'Min Zhuang Portfolio',
        short_name: 'Min',
        start_url: '/',
        background_color: '#663399',
        theme_color: '#663399',
        display: 'minimal-ui',
        icon: 'src/images/min-icon.png', // This path is relative to the root of the site.
      },
    },
    'gatsby-plugin-sass',
    'gatsby-plugin-offline'
  ],
}
