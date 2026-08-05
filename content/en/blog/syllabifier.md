---
title: 'Syllabifier: A rule-based syllable engine in Go'
description: 'How I built a zero-dependency, rule-based syllable splitter and affix analyzer for Turkish, German and English — and shipped it to the browser with WASM.'
date: '2026-08-06'
tags: [go, wasm, algorithms, javascript]
---

Every once in a while you build a small tool that quietly does one thing well. **Syllabifier** is that tool for me: it splits words into syllables and pulls words apart into roots and affixes — for **Turkish**, **German** and **English**.

Try it live: [lupuscaelum.github.io/syllabifier](https://lupuscaelum.github.io/syllabifier/)

## Why rule-based?

The tempting shortcut is a word list (a dictionary). It is accurate for the words you have and useless for the words you do not. A rule-based engine needs **no data at all**: it works on any input, even made-up words, because it encodes how a language *behaves* rather than what it *contains*.

The core guarantee is simple: **every syllable contains exactly one vowel.** Split around vowel nuclei, then distribute the consonants around them. That invariant keeps every result pronounceable.

## The algorithms, per language

The three languages need three different rule sets:

- **Turkish** — each syllable has exactly one vowel and at most a one-consonant onset. Consonant clusters split by count: `0–1` → next syllable, `2` → in the middle, `3` → first two stay behind.
- **German** — adjacent vowels form a single nucleus (diphthongs like `ei` and `au`). Inseparable clusters (`sch`, `ch`, `ck`, `tz`, `ph`, `th`, `qu`) stay together.
- **English** — `y` counts as a vowel at the end of a word; silent final `e` does not; `-le` forms its own syllable (`table` → `ta-ble`); onset digraphs (`th`, `sh`, `ch`, `ph`, `wh`, `qu`) stay together.

That is the whole engine: a few maps, a cluster table, and `unicode` handling for `ö`, `ü`, `ı` and friends.

## Affix analysis

Heceleme is only half the story. The `affix` package holds **curated lists per language** and strips the longest match first, chaining suffixes for agglutinative Turkish:

```
geliyoruz  →  gel + -uz (1. çoğul kişi) + -iyor (şimdiki zaman)
```

Turkish needed special handling: **vowel harmony** variants (`-ler/-lar`) and **consonant assimilation** (`kitap` + `-cı` → `kitapçı`). German got a guard so `machen` (a verb) is not confused with `Mädchen` (a diminutive) — `-chen` only counts when the stem carries an umlaut.

## CLI, JSON, and WASM

The same core powers three surfaces:

1. A **CLI** (`syllabifier tr kitaplar -affixes`) with `--json` output.
2. Prebuilt **binaries** for Windows, Linux and macOS, released on every tag via GitHub Actions.
3. A **web app** — the Go core is compiled to **WASM** and runs entirely in the browser. No server, no API, no tracking. Type a word, get syllables instantly, share the `?q=&lang=` link.

The web app is a few hundred lines of vanilla HTML/CSS/JS with a **lazy-loaded WASM module** and per-language special-character buttons (`ä ö ü ß`, `ç ğ ı ş`).

## Tech stack

- **Go 1.26** — zero external dependencies
- **syscall/js** for the WASM boundary
- **GitHub Actions** — CI (`gofmt`, `go vet`, tests, coverage) + releases + Pages deploy
- **Vanilla JS** — the web app deliberately has no framework

Code: [github.com/LupusCaelum/syllabifier](https://github.com/LupusCaelum/syllabifier)

Building a rule engine is a lovely way to learn a language from the inside — more on that in the next post.
