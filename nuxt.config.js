import pkg from "./package.json";

export default {
  mode: "universal",

  /*
   ** Headers of the page
   */
  head: {
    title: pkg.name,
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: pkg.description }
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }]
  },

  /*
   ** Customize the progress-bar color
   */
  loading: { color: "#3b8070" },

  /*
   ** Global CSS
   */
  css: [],

  /*
   ** Plugins to load before mounting the App
   */
  plugins: [],

  /*
   ** Nuxt.js modules
   */
  modules: [
    // Doc: https://github.com/nuxt-community/axios-module#usage
    "@nuxtjs/axios",
    "@nuxtjs/pwa",
    "@nuxtjs/vuetify",
    // TODO: Remove it if you want to eject from codeSandbox
    "./codesandbox",
    "nuxt-fire"
  ],

  fire: {
    useOnly: ["auth", "firestore", "functions"],
    config: {
      development: {
        apiKey: "AIzaSyA8uGyN6Y9kpNr7Uooc9n3Qmw7acb7K4RM",
        authDomain: "truckergeo-358e6.firebaseapp.com",
        databaseURL: "https://truckergeo-358e6.firebaseio.com",
        projectId: "truckergeo-358e6",
        storageBucket: "truckergeo-358e6.appspot.com",
        messagingSenderId: "288901401350"
      },
      production: {
        apiKey: "AIzaSyA8uGyN6Y9kpNr7Uooc9n3Qmw7acb7K4RM",
        authDomain: "truckergeo-358e6.firebaseapp.com",
        databaseURL: "https://truckergeo-358e6.firebaseio.com",
        projectId: "truckergeo-358e6",
        storageBucket: "truckergeo-358e6.appspot.com",
        messagingSenderId: "288901401350"
      }
    }
  },

  /*
   ** Axios module configuration
   */
  axios: {
    // See https://github.com/nuxt-community/axios-module#options
  },

  /*
   ** Build configuration
   */
  build: {
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {}
  }
};
