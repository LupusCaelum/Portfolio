export default defineI18nConfig(() => ({
  legacy: false,
  locale: 'en',
  fallbackLocale: 'en',
  messages: {
    en: {
      nav: { about: 'about', work: 'work', contact: 'contact', blog: 'blog' },
      blog: { eyebrow: 'blog', heading: 'Blog' },
      hero: {
        eyebrow: 'system_prompt, "hello, i\'m"',
        name: 'Umut Yaşar Sarısoy',
        tagline: 'Web Developer - I love creating beautiful and functional websites.'
      },
      about: {
        eyebrow: 'about',
        heading: "Hi, I'm Umut",
        body: "I'm a web developer and a German teacher from Turkey — two crafts with very different grammars. I build fast, accessible and beautiful websites, and I help people speak German with confidence."
      },
      skills: {
        eyebrow: 'stacks',
        heading: 'Skills',
        items: ['HTML', 'CSS', 'JavaScript', 'TypeScript', 'Vue', 'Nuxt', 'Tailwind CSS', 'Git', 'Linux', 'SQL', 'Networking', 'Pentesting', 'CRM / ERP', 'LMS']
      },
      timeline: {
        eyebrow: 'path',
        heading: 'Timeline',
        items: [
          { year: '2015', title: 'Cyber security & pentesting', description: 'Started exploring cyber security, penetration testing and ethical hacking.' },
          { year: '2017', title: 'CRM & ERP', description: 'Experimented with CRM and ERP systems and learned how business software is designed.' },
          { year: '2019', title: 'K12 & LMS', description: 'Worked on K12 and LMS (learning management) systems, combining education with software.' },
          { year: '2026', title: 'The comeback', description: 'Returning to development after years away — rebuilding this portfolio from scratch while learning Nuxt, Vue and modern front-end.' }
        ]
      },
      projects: {
        eyebrow: 'work',
        heading: 'Selected work',
        items: [
          { title: 'Portfolio site', description: 'The website you are looking at — built with Nuxt, Tailwind and TypeScript.', stack: ['Nuxt', 'Tailwind CSS', 'TypeScript'] },
          { title: 'Next project', description: 'A placeholder for your next idea. Replace me!', stack: ['Vue', 'Nuxt', 'Git'] }
        ]
      },
      contact: {
        eyebrow: 'contact',
        heading: "Let's talk",
        body: 'Have an idea or a question? My inbox is always open.'
      }
    },
    tr: {
      nav: { about: 'hakkımda', work: 'projeler', contact: 'iletişim', blog: 'blog' },
      blog: { eyebrow: 'blog', heading: 'Blog' },
      hero: {
        eyebrow: 'system_prompt, "merhaba, ben"',
        name: 'Umut Yaşar Sarısoy',
        tagline: 'Web Geliştirici - güzel ve işlevsel web siteleri oluşturmayı seviyorum.'
      },
      about: {
        eyebrow: 'hakkımda',
        heading: 'Merhaba, ben Umut',
        body: "Türkiye'den bir web geliştirici ve Almanca öğretmeniyim — gramerleri çok farklı iki iş. Hızlı, erişilebilir ve şık web siteleri kuruyorum; bir yandan da insanların Almancayı güvenle konuşmasına yardımcı oluyorum."
      },
      skills: {
        eyebrow: 'stacks',
        heading: 'Yetenekler',
        items: ['HTML', 'CSS', 'JavaScript', 'TypeScript', 'Vue', 'Nuxt', 'Tailwind CSS', 'Git', 'Linux', 'SQL', 'Ağ', 'Pentest', 'CRM / ERP', 'LMS']
      },
      timeline: {
        eyebrow: 'yol',
        heading: 'Zaman çizelgesi',
        items: [
          { year: '2015', title: 'Siber güvenlik & pentest', description: 'Siber güvenlik, sızma testleri ve etik hacklemeyi keşfetmeye başladım.' },
          { year: '2017', title: 'CRM & ERP', description: 'CRM ve ERP sistemleriyle deneyim kazandım; iş yazılımlarının nasıl tasarlandığını öğrendim.' },
          { year: '2019', title: 'K12 & LMS', description: 'Eğitimi yazılımla birleştiren K12 ve LMS (öğrenme yönetim) sistemleri üzerinde çalıştım.' },
          { year: '2026', title: 'Dönüş', description: 'Yıllar sonra yazılıma döndüm — bu portfolyoyu sıfırdan, Nuxt, Vue ve modern ön yüzü öğrenerek yeniden kuruyorum.' }
        ]
      },
      projects: {
        eyebrow: 'projeler',
        heading: 'Seçili işler',
        items: [
          { title: 'Portfolio sitesi', description: 'Baktığınız site — Nuxt, Tailwind ve TypeScript ile geliştirildi.', stack: ['Nuxt', 'Tailwind CSS', 'TypeScript'] },
          { title: 'Sıradaki proje', description: 'Bir sonraki fikrin için yer tutucu. Beni değiştir!', stack: ['Vue', 'Nuxt', 'Git'] }
        ]
      },
      contact: {
        eyebrow: 'iletişim',
        heading: 'Konuşalım',
        body: 'Bir fikrin veya sorun mu var? Mesaj kutum her zaman açık.'
      }
    },
    de: {
      nav: { about: 'über', work: 'projekte', contact: 'kontakt', blog: 'blog' },
      blog: { eyebrow: 'blog', heading: 'Blog' },
      hero: {
        eyebrow: 'system_prompt, "hallo, ich bin"',
        name: 'Umut Yaşar Sarısoy',
        tagline: 'Webentwickler - Ich liebe es, schöne und funktionale Websites zu erstellen.'
      },
      about: {
        eyebrow: 'über',
        heading: 'Hallo, ich bin Umut',
        body: 'Ich bin Webentwickler und Deutschlehrer aus der Türkei — zwei Handwerke mit ganz unterschiedlicher Grammatik. Ich baue schnelle, zugängliche und schöne Websites und helfe Menschen dabei, selbstbewusst Deutsch zu sprechen.'
      },
      skills: {
        eyebrow: 'stacks',
        heading: 'Fähigkeiten',
        items: ['HTML', 'CSS', 'JavaScript', 'TypeScript', 'Vue', 'Nuxt', 'Tailwind CSS', 'Git', 'Linux', 'SQL', 'Netzwerke', 'Pentesting', 'CRM / ERP', 'LMS']
      },
      timeline: {
        eyebrow: 'werdegang',
        heading: 'Werdegang',
        items: [
          { year: '2015', title: 'Cybersecurity & Pentesting', description: 'Begann, sich mit Cybersicherheit, Penetrationstests und ethischer Hacking zu beschäftigen.' },
          { year: '2017', title: 'CRM & ERP', description: 'Sammelte Erfahrung mit CRM- und ERP-Systemen und lernte, wie Unternehmenssoftware gestaltet wird.' },
          { year: '2019', title: 'K12 & LMS', description: 'Arbeitete an K12- und LMS-Systemen (Lernmanagement) und verband Bildung mit Software.' },
          { year: '2026', title: 'Das Comeback', description: 'Nach Jahren kehre ich zur Entwicklung zurück — baue dieses Portfolio von Grund auf neu und lerne dabei Nuxt, Vue und modernes Frontend.' }
        ]
      },
      projects: {
        eyebrow: 'projekte',
        heading: 'Ausgewählte Arbeiten',
        items: [
          { title: 'Portfolio-Website', description: 'Die Website, auf der du gerade bist — gebaut mit Nuxt, Tailwind und TypeScript.', stack: ['Nuxt', 'Tailwind CSS', 'TypeScript'] },
          { title: 'Nächstes Projekt', description: 'Ein Platzhalter für deine nächste Idee. Ersetze mich!', stack: ['Vue', 'Nuxt', 'Git'] }
        ]
      },
      contact: {
        eyebrow: 'kontakt',
        heading: 'Sprechen wir',
        body: 'Hast du eine Idee oder eine Frage? Mein Postfach ist immer offen.'
      }
    }
  }
}))
