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
    head: {
      link: [
        { rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg' }
      ]
    }
  },

  routeRules: {
    '/': { prerender: true }
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
