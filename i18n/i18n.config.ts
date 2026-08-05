export default defineI18nConfig(() => ({
  legacy: false,
  locale: 'en',
  fallbackLocale: 'en',
  messages: {
    en: {
      nav: { about: 'about', work: 'work', contact: 'contact' },
      hero: {
        eyebrow: 'system_prompt, "hello, i\'m"',
        name: 'Umut Yaşar Sarısoy',
        tagline: 'Web Developer - I love creating beautiful and functional websites.'
      }
    },
    tr: {
      nav: { about: 'hakkımda', work: 'projeler', contact: 'iletişim' },

      hero: {
        eyebrow: 'system_prompt, "merhaba, ben"',
        name: 'Umut Yaşar Sarısoy',
        tagline: 'Web Geliştirici - güzel ve işlevsel web siteleri oluşturmayı seviyorum.'
      }
    },
    de: {
      nav: { about: 'über', work: 'projekte', contact: 'kontakt' },

      hero: {
        eyebrow: 'system_prompt, "hallo, ich bin"',
        name: 'Umut Yaşar Sarısoy',
        tagline: 'Webentwickler - Ich liebe es, schöne und funktionale Websites zu erstellen.'
      }
    }
  }
}))
