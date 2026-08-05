// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    '@nuxt/eslint',
    '@nuxt/ui',
    '@nuxtjs/i18n',
    '@nuxt/content',
    '@tresjs/nuxt'
  ],
  i18n: {
    locales: [
      { code: 'en', name: 'English', language: 'en' },
      { code: 'tr', name: 'Türkçe', language: 'tr' },
      { code: 'de', name: 'Deutsch', language: 'de' }
    ],
    defaultLocale: 'en',
    detectBrowserLanguage: false
  },
  devtools: {
    enabled: true
  },

  css: ['~/assets/css/main.css'],

  app: {
    baseURL: '/Portfolio/'
  },

  nitro: {
    prerender: {
      routes: [
        '/', '/tr', '/de',
        '/blog', '/tr/blog', '/de/blog',
        '/blog/hello-world', '/tr/blog/hello-world', '/de/blog/hello-world'
      ]
    }
  },

  compatibilityDate: '2026-06-30',

  eslint: {
    config: {
      stylistic: {
        commaDangle: 'never',
        braceStyle: '1tbs'
      }
    }
  }
})
