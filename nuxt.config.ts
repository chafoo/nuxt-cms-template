import i18n from "./src/config/i18n"

const isDevEnv = process.env.NODE_ENV === "development"

export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: "dao",
    htmlAttrs: {
      lang: "en",
    },
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: "" },
      { name: "format-detection", content: "telephone=no" },
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
  },
  // Source of nuxt related folder structure
  srcDir: "src/",

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ["~/assets/scss/base.scss", "~/assets/scss/globals/index.scss"],

  styleResources: {
    scss: ["~/assets/scss/variables/index.scss", "~/assets/scss/utils/index.scss"],
  },

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: false,

  //
  router: {
    middleware: ["nuxt-server-init"],
  },

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/typescript
    "@nuxt/typescript-build",
    "@nuxtjs/style-resources",
    "@nuxtjs/composition-api/module",
    "@pinia/nuxt",
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    "@nuxtjs/axios",
    // https://go.nuxtjs.dev/content
    "@nuxt/content",
    // https://i18n.nuxtjs.org/
    "@nuxtjs/i18n",
    // https://image.nuxtjs.org/
    "@nuxt/image",
  ],

  // https://i18n.nuxtjs.org/options-reference
  i18n,

  // https://image.nuxtjs.org/api/options
  image: {
    screens: {
      xs: 0,
      sm: 414,
      md: 768,
      lg: 1024,
      xl: 1920,
    },
  },

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    // Workaround to avoid enforcing hard-coded localhost:3000: https://github.com/nuxt-community/axios-module/issues/308
    baseURL: "/",
  },

  // Content module configuration: https://go.nuxtjs.dev/config-content
  content: {
    liveEdit: isDevEnv,
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},
}
