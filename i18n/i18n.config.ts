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
      },
      about: {
        eyebrow: 'about',
        heading: "Hi, I'm Umut",
        body: "I'm a web developer based in Turkey. I love building fast, accessible and good-looking websites. Currently learning Nuxt, TypeScript and the craft of front-end development."
      },
      skills: {
        eyebrow: 'stacks',
        heading: 'Skills'
      },
    },
    tr: {
      nav: { about: 'hakkımda', work: 'projeler', contact: 'iletişim' },

      hero: {
        eyebrow: 'system_prompt, "merhaba, ben"',
        name: 'Umut Yaşar Sarısoy',
        tagline: 'Web Geliştirici - güzel ve işlevsel web siteleri oluşturmayı seviyorum.'
      },
      about: {
        eyebrow: 'hakkımda',
        heading: 'Merhaba, ben Umut',
        body: "Türkiye'de yaşayan bir web geliştiriciyim. Hızlı, erişilebilir ve şık web siteleri oluşturmayı seviyorum. Şu anda Nuxt, TypeScript ve ön yüz geliştirme zanaatını öğreniyorum."
      },
      skills: {
        eyebrow: 'stacks',
        heading: 'Yetenekler'
      },
    },
    de: {
      nav: { about: 'über', work: 'projekte', contact: 'kontakt' },

      hero: {
        eyebrow: 'system_prompt, "hallo, ich bin"',
        name: 'Umut Yaşar Sarısoy',
        tagline: 'Webentwickler - Ich liebe es, schöne und funktionale Websites zu erstellen.'
      },
      about: {
        eyebrow: 'über',
        heading: 'Hallo, ich bin Umut',
        body: 'Ich bin ein Webentwickler aus der Türkei. Ich baue gerne schnelle, zugängliche und schöne Websites. Aktuell lerne ich Nuxt, TypeScript und das Handwerk der Frontend-Entwicklung.'
      },
      skills: {
        eyebrow: 'stacks',
        heading: 'Fähigkeiten'
      },
    }
  }
}))
