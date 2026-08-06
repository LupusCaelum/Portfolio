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
        tagline: 'Teacher by day · developer by night'
      },
      about: {
        eyebrow: 'about',
        heading: 'Hi, I\'m Umut',
        body: 'I\'m a web developer and a German teacher from Turkey — two crafts with very different grammars. I build fast, accessible and beautiful websites, and I help people speak German with confidence.'
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
          { title: 'Ders Takip', description: 'A personal language-teaching manager — student tracking, lesson sessions and invoicing with Turkish-aware PDF invoices. Nuxt 4, SQLite and Tailwind.', stack: ['Nuxt', 'SQLite', 'Tailwind CSS'], url: 'https://github.com/LupusCaelum/ders-takip' },
          { title: 'Syllabifier', description: 'A rule-based syllable splitter and affix analyzer for Turkish, German and English. Go core compiled to WASM — runs fully in the browser.', stack: ['Go', 'WASM', 'JavaScript'], url: 'https://lupuscaelum.github.io/syllabifier/' },
          { title: 'Klangauge', description: 'An offline speech-analysis terminal and pronunciation coach — Go core compiled to WASM, audio never leaves the browser. Waveform, pitch, spectrogram and syllable-stress coaching in TR/DE/EN.', stack: ['Go', 'WASM', 'Vue'], url: 'https://lupuscaelum.github.io/klangauge/' },
          { title: 'Pomodoro (Bongo Cat)', description: 'A cross-platform Pomodoro timer with a bongo cat that drums on your keyboard every second. Written in pure Bash — installable on Linux, macOS and Windows in one click.', stack: ['Bash', 'CLI', 'Linux'], url: 'https://github.com/LupusCaelum/pomodoro' }
        ]
      },
      contact: {
        eyebrow: 'contact',
        heading: 'Let\'s talk',
        body: 'Have an idea or a question? My inbox is always open.'
      }
    },
    tr: {
      nav: { about: 'hakkımda', work: 'projeler', contact: 'iletişim', blog: 'blog' },
      blog: { eyebrow: 'blog', heading: 'Blog' },
      hero: {
        eyebrow: 'system_prompt, "merhaba, ben"',
        name: 'Umut Yaşar Sarısoy',
        tagline: 'Gündüzleri Öğretmen · Geceleri Yazılımcı geliştirici'
      },
      about: {
        eyebrow: 'hakkımda',
        heading: 'Merhaba, ben Umut',
        body: 'Türkiye\'den bir web geliştirici ve Almanca öğretmeniyim — gramerleri çok farklı iki iş. Hızlı, erişilebilir ve şık web siteleri kuruyorum; bir yandan da insanların Almancayı güvenle konuşmasına yardımcı oluyorum.'
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
          { title: 'Ders Takip', description: 'Kişisel dil eğitimi yönetim aracı — öğrenci takibi, ders kayıtları ve Türkçe karakter destekli PDF faturalar. Nuxt 4, SQLite ve Tailwind.', stack: ['Nuxt', 'SQLite', 'Tailwind CSS'], url: 'https://github.com/LupusCaelum/ders-takip' },
          { title: 'Syllabifier', description: 'Türkçe, Almanca ve İngilizce için kural tabanlı hece ve ek ayrıştırıcı. Go çekirdeği WASM\'e derlenmiş — tamamen tarayıcıda çalışır.', stack: ['Go', 'WASM', 'JavaScript'], url: 'https://lupuscaelum.github.io/syllabifier/' },
          { title: 'Klangauge', description: 'Çevrimdışı konuşma analizi terminali ve telaffuz koçu — Go çekirdeği WASM\'e derlenmiş, ses kaydı tarayıcıdan hiç çıkmaz. Dalga biçimi, perde, spektrogram ve hece-vurgu koçluğu TR/DE/EN.', stack: ['Go', 'WASM', 'Vue'], url: 'https://lupuscaelum.github.io/klangauge/' },
          { title: 'Pomodoro (Bongo Cat)', description: 'Her saniye klavyene vuran bir bongo kedi eşliğinde çalışan çapraz platform Pomodoro zamanlayıcısı. Saf Bash ile yazıldı — Linux, macOS ve Windows\'ta tek tıkla kurulur.', stack: ['Bash', 'CLI', 'Linux'], url: 'https://github.com/LupusCaelum/pomodoro' }
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
        tagline: 'Tagesüber Lehrer · Nachts Sofwareentwickler'
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
          { title: 'Ders Takip', description: 'Ein persönlicher Unterrichts-Manager für Sprachlehrer — Schülerverwaltung, Stundenerfassung und Rechnungen mit türkisch-fähigen PDFs. Nuxt 4, SQLite und Tailwind.', stack: ['Nuxt', 'SQLite', 'Tailwind CSS'], url: 'https://github.com/LupusCaelum/ders-takip' },
          { title: 'Syllabifier', description: 'Ein regelbasierter Silbentrenner und Affix-Analysator für Türkisch, Deutsch und Englisch. Go-Kern als WASM kompiliert — läuft komplett im Browser.', stack: ['Go', 'WASM', 'JavaScript'], url: 'https://lupuscaelum.github.io/syllabifier/' },
          { title: 'Klangauge', description: 'Ein Offline-Terminal für Sprachanalyse und ein Aussprache-Coach — Go-Kern als WASM kompiliert, die Aufnahme verlässt nie den Browser. Wellenform, Tonhöhe, Spektrogramm und Coaching für Silbenbetonung auf TR/DE/EN.', stack: ['Go', 'WASM', 'Vue'], url: 'https://lupuscaelum.github.io/klangauge/' },
          { title: 'Pomodoro (Bongo Cat)', description: 'Ein plattformübergreifender Pomodoro-Timer, bei dem eine Bongo-Katze jede Sekunde auf deine Tastatur trommelt. Reines Bash — mit einem Klick für Linux, macOS und Windows installierbar.', stack: ['Bash', 'CLI', 'Linux'], url: 'https://github.com/LupusCaelum/pomodoro' }
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
