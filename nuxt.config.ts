// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  css: ['~/assets/css/main.css'],
  devtools: { enabled: true },
  app: {
    head: {
      htmlAttrs: {
        lang: 'en',
      },
      title: 'Kramer Fish Fry',
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
    },
  },
});
