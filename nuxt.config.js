import dotenv from "dotenv";
let path = ".env";

dotenv.config({ path });

export default {
  target: "static",
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    titleTemplate: "%s",
    title: "morethanmin",
    htmlAttrs: {
      lang: "en"
    },
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        hid: "description",
        name: "description",
        content: "몰댄민의 포트폴리오/블로그"
      },
      {
        name: "google-site-verification",
        content: "Zou2V8zKDuVgkMCYaTcb5TDyOKWo-OmO4HvLaDCVJJs"
      }
      // {
      //   property: "og:type",
      //   content: "website"
      // },
      // {
      //   property: "og:url",
      //   content: "https://morethanmin.web.app"
      // },
      // {
      //   property: "og:image",
      //   content:
      //     "https://user-images.githubusercontent.com/72514247/143175436-6fec3b75-b6fd-40ab-a472-5b34674e9548.png"
      // },
      // {
      //   property: "og:site_name",
      //   content: "morethanmin"
      // },
      // {
      //   property: "og:locale",
      //   content: "ko_KR"
      // }
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "cat.png" }]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: [
    {
      path: "~/components", // will get any components nested in let's say /components/test too
      pathPrefix: false
    }
  ],
  srcDir: "src/",

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/vuetify
    "@nuxtjs/vuetify"
  ],
  // Modules: https://go.nuxtjs.dev/config-modules
  modules: ["@nuxt/content", "@nuxtjs/firebase", "@nuxtjs/sitemap"],
  sitemap: {
    hostname: "https://morethanmin.web.app"
  },
  firebase: {
    config: {
      apiKey: process.env.API_KEY,
      authDomain: process.env.AUTH_DOMAIN,
      projectId: process.env.PROJECT_ID,
      storageBucket: process.env.STORAGE_BUCKET,
      messagingSenderId: process.env.MESSAGING_SENDER_ID,
      appId: process.env.APP_ID,
      measurementId: process.env.MEASUREMENT_ID
    },
    services: {
      analytics: true
    }
  },

  /*
   ** Content module configuration
   ** See https://content.nuxtjs.org/configuration
   */
  content: {
    markdown: {},
    nestedProperties: ["category.name"]
  },
  /*
   ** Customize the progress-bar color
   */
  // Vuetify module configuration: https://go.nuxtjs.dev/config-vuetify
  vuetify: {
    customVariables: ["~/assets/scss/variables.scss"],
    theme: {
      themes: {
        light: {
          primary: "#22242a",
          secondary: "#f64c72"
        },
        dark: {
          primary: "#22242a",
          secondary: "#f64c72"
        }
      }
    }
  },
  loading: "~/components/Loading.vue",
  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {}
  // generate: {
  //   async routes() {
  //     const { $content } = require("@nuxt/content");
  //     const articles = await $content("articles", { deep: true })
  //       .only(["path"])
  //       .fetch();
  //     const categories = await $content("categories")
  //       .only(["path"])
  //       .fetch();
  //     const articleRoutes = articles.map(article =>
  //       article.path === "/index" ? "/" : `/archive/${article.path.slice(10)}`
  //     );
  //     const categoryRoutes = categories.map(category =>
  //       category.path === "/index" ? "/" : `/archive/${category.path.slice(12)}`
  //     );

  //     return [...articleRoutes, ...categoryRoutes];
  //   }
  // },
  // static: {
  //   prefix: true
  // }
};
