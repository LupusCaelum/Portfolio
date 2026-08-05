# ~ LupusCaelum — Portfolio

> Personal portfolio of **Umut Yaşar Sarısoy** — a web developer and a German teacher.

Built with Nuxt 4, Nuxt UI, Tailwind CSS and Three.js. Trilingual (EN / TR / DE), statically generated, and deployed to GitHub Pages.

## Live site

**[https://lupuscaelum.github.io/Portfolio/](https://lupuscaelum.github.io/Portfolio/)**

## Tech stack

| Layer        | Tooling                                                        |
| ------------ | -------------------------------------------------------------- |
| Framework    | [Nuxt 4](https://nuxt.com) + Vue 3                             |
| UI           | [Nuxt UI](https://ui.nuxt.com) + Tailwind CSS 4                |
| 3D           | [Three.js](https://threejs.org) + [TresJS](https://tresjs.org) |
| Content      | [@nuxt/content](https://content.nuxt.com) (SQLite)             |
| i18n         | [@nuxtjs/i18n](https://i18n.nuxtjs.org) (EN / TR / DE)         |
| Deploy       | GitHub Actions → GitHub Pages                                  |

## Features

- **Hero scene** — 3D starfield with a wireframe torus knot and mouse parallax (`HeroScene.vue`)
- **Floating shapes** — rotating wireframe geometry decorating each section (`FloatingShape.vue`)
- **Global spotlight** — a soft radial glow that follows the cursor
- **Blog** — markdown posts with full translation into all three locales
- **i18n** — English, Türkçe and Deutsch with locale-prefixed routes
- **Fully static** — `nuxt generate` prerenders all routes for GitHub Pages

## Theme

A "dark terminal" aesthetic:

- **neon** `#169BBA` · **night** `#0a0e14` · **surface** `#11171f`
- **line** `#22303d` · **fog** `#d9e2e8` · **acid** `#c8ff4d`
- Fonts: Space Grotesk + JetBrains Mono


## Project structure

```
content/                # blog posts per locale (en/tr/de)
app/
  assets/css/           # theme + marquee animation
  components/           # HeroScene, FloatingShape, ...
  pages/                # index, blog list + detail
  app.vue               # layout, header/footer, spotlight
i18n/                   # locale messages
.github/workflows/      # GitHub Pages deploy
```

The site is served under the `/Portfolio/` base URL.
