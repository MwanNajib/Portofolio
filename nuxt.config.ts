// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",
  devtools: { enabled: true },

  modules: ["@nuxtjs/tailwindcss", "@nuxtjs/google-fonts", "@nuxtjs/i18n"],

  i18n: {
    locales: [
      { code: "en", name: "English", file: "en.json" },
      { code: "id", name: "Bahasa Indonesia", file: "id.json" },
    ],
    defaultLocale: "id",
    lazy: true,
    langDir: "i18n/locales/",
    strategy: "prefix_except_default",
  },

  googleFonts: {
    families: {
      Poppins: {
        wght: [400, 500, 600, 700, 800],
        ital: [400],
      },
      Inter: {
        wght: [400, 500, 600, 700],
      },
    },
    display: "swap",
    prefetch: true,
    preconnect: true,
  },

  css: ["~/assets/css/tailwind.css"],

  app: {
    head: {
      title: "Portofolio | Muhammad Wisnu Ainun Najib",
      meta: [
        { charset: "utf-8" },
        { name: "viewport", content: "width=device-width, initial-scale=1" },
        {
          name: "description",
          content: "Ini adalah situs portofolio Muhammad Wisnu Ainun Najib",
        },
      ],
      link: [
        {
          rel: "stylesheet",
          href: "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css",
        },
      ],
    },
  },
});
