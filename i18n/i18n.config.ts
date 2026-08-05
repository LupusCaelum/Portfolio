export default defineI18nConfig(() => ({
  legacy: false,
  locale: 'en',
  fallbackLocale: 'en',
  messages: {
    en: {
      nav: { about: 'about', work: 'work', contact: 'contact' }
    },
    tr: {
      nav: { about: 'hakkımda', work: 'projeler', contact: 'iletişim' }
    },
    de: {
      nav: { about: 'über', work: 'projekte', contact: 'kontakt' }
    }
  }
}))
