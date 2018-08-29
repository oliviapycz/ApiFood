require('dotenv').config()

module.exports = {
  /*
  ** Headers of the page
  */
 head: {
  title: 'ApiFoodInterface',
  meta: [
    { charset: 'utf-8' },
    { name: 'viewport', content: 'width=device-width, initial-scale=1' },
    { hid: 'description', name: 'description', content: 'Nuxt.js project' },
    { name: 'app-mobile-web-app-capable', content: 'yes' },
    { name: 'app-mobile-web-app-status-bar-style', content: 'black' },
    { name: 'app-mobile-web-app-title', content: 'ApiFoodInterface' },
    { name: 'msapplication-TileImage', content: '/static/icon.png' },
    { name: 'msapplication-TileColor', content: '#fff' },
    { name: 'theme-color', content: '#3b8070' },

  ],
  link: [
    { rel: 'icon', type: 'image/x-icon', href: '/arcim.png' },
    { rel: 'stylesheet', href: 'https://cdnjs.cloudflare.com/ajax/libs/bulma/0.6.0/css/bulma.min.css' },
    { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Source+Code+Pro:400,700' },
    { rel: 'stylesheet', href: 'https://use.fontawesome.com/releases/v5.2.0/css/all.css'},
    { rel: 'apple-touch-icon', href: '/static/icon.png'}
  ]
},
  /*
  ** Global CSS
  */
  css: ['assets/main.css'],
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#3B8070' },
  /*
  ** Modules
  */
  modules: [
    '@nuxtjs/dotenv',
    '@nuxtjs/bulma',
    '@nuxtjs/pwa'
  ],
  /*
  ** Customize app manifest
  */
  manifest: {
    name: 'Api Food Interface',
    short_name: 'AπFood',
    display: 'standalone',
    orientation: 'portrait-primary',
    background_color: '#fff',
    theme_color: '#3b8070',
    description: 'An Open Source Api Fodd Interface fro the Community',
    dir: 'ltr',
    lang: 'en-US',
    icons: [
      {
        "src": "/static/icon.png",
        "type": "image/png"
      },
    ]
  },
  /*
  ** Add axios globally
  */
  build: {
    vendor: ['axios'],
    /*
    ** Run ESLINT on save
    */
    extend (config, ctx) {
      if (ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  }
}
