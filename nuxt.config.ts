// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  css: ['~/assets/css/main.css'],
  devtools: { enabled: true },
  // modules: ['@nuxt/image'],
  // image: {
  //   format: ['webp', 'jpg', 'png'],
  // },
  app: {
    head: {
      htmlAttrs: {
        lang: 'en',
      },
      title: 'Kramer Fish Fry',
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
    },
    pageTransition: {
      name: 'fade',
      mode: 'out-in', // default
    },
    layoutTransition: {
      name: 'fade',
      mode: 'out-in', // default
    },
  },
});
