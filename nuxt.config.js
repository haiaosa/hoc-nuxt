import pkg from './package'
import axios from 'axios'

export default {
  mode: 'universal',

  generate: {
    async routes() {
      let response = await axios.get(
        'http://jsonplaceholder.typicode.com/posts'
      )
      return response.data.map(post => `posts/${post.id}`)
    }
  },

  /*
   ** Headers of the page
   */
  head: {
    title: pkg.name,
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: pkg.description }
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }]
  },

  /*
   ** Customize the progress-bar color
   */
  loading: { color: '#fff' },

  /*
   ** Global CSS
   */
  css: [
    // '~/assets/debug.css',
    '~/assets/styles.css'
  ],

  /*
   ** Plugins to load before mounting the App
   */
  plugins: [
    '~/plugins/axios',
    // chi can khai bao vue-line-clamp cho nay thoi
    { src: '~/plugins/vue-line-clamp.js', ssr: false }
  ],

  /*
   ** Nuxt.js modules
   */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    '@nuxtjs/vuetify'
  ],
  /*
   ** Axios module configuration
   */
  axios: {
    // See https://github.com/nuxt-community/axios-module#options
    baseURL: 'http://jsonplaceholder.typicode.com/'
  },
  /*
   ** Vuetify module configuration
   */
  vuetify: {
    theme: {
      primary: '#00796B',
      secondary: '#7C4DFF',
      accent: '#EF6C00',
      error: '#8D6E63',
      info: '#6A1B9A',
      success: '#E57373',
      warning: '#00ACC1'
    }
  },

  /*
   ** Build configuration
   */
  build: {
    postcss: {
      preset: {
        features: {
          customProperties: false
        }
      }
    },
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {}
  },
  /*
   ** Page transition config
   */
  transition: {
    name: 'page',
    mode: 'in-out',
    beforeEnter(el) {
      console.log('Before enter...')
    }
  },
  /*
   ** Layout transition config
   */
  layoutTransition: {
    name: 'layout',
    mode: 'in-out'
  }
}
