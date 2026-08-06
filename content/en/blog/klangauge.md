---
title: 'Klangauge: an offline speech-analysis terminal and pronunciation coach, powered by Go'
description: 'How I shipped a speech-analysis core written in Go to the browser as WASM — waveform, pitch, spectrogram and syllable-stress coaching without a recording ever leaving the device.'
date: '2026-08-06'
tags: [go, wasm, vue, speech-analysis, pronunciation]
---

With the Syllabifier we split words into syllables and found stress. The next natural step: **measure what is actually spoken.** That is **Klangauge** — a speech-analysis core written in Go, compiled to WASM and running right in the browser. You record with the mic and instantly see waveform, intensity, pitch and spectrogram; syllables, speech rate and stress are compared against automatic, rule-based comments.

Try it live: [lupuscaelum.github.io/klangauge](https://lupuscaelum.github.io/klangauge/)

## Why fully offline?

A language learner's voice recording is about as private as data gets — it should never leave the machine. In Klangauge **nothing leaves the device**: the analysis core is written in Go, compiled to WASM, and runs on the same page as the UI. No server, no API, no tracking. It also means free hosting: GitHub Pages serves static files while all audio processing happens on the visitor's device.

## The analysis stack

The whole landscape of graphs comes from a single call: `Analyze(samples, sampleRate)`.

- **Spectrogram** — short-time Fourier transform via `mjibson/go-dsp`
- **Pitch line** — the **YIN** algorithm (`go-yinfft`): fundamental frequency in voiced moments, disappearing on voiceless sounds
- **Intensity curve** — energy in decibels; peaks are **syllables**
- **Syllable count** — derived from intensity peaks, along with speech rate, articulation, voiced ratio, pitch range and mean intensity

## Language-aware rules

The same metric does not mean the same thing in every language. Turkish is **syllable-timed**: the natural tempo runs higher. German and English are **stress-timed**: it runs lower. So the rate and articulation **bands** shift per language — via a dedicated "analysis language" selector, separate from the UI language, so you can keep a Turkish interface while speaking German.

## Pitch compare

Say the same word twice, set the first take "as compare", then say it again. Both pitch lines are overlaid: new in pink, stored in gold. *Seeing* where the melody diverges is far clearer than only *hearing* it.

## The pronunciation coach

Analysis is good, but you want to tell the learner "fix that". In the coach tab you type a word; the **Syllabifier** draws the expected syllables and stress. Then you say the word; the coach compares detected syllable count vs. expected and stressed syllable vs. expected, producing feedback in three languages:

> Syllable count is right: 3/3. · Stress on the right syllable.

Stress rules are language-specific: Turkish → final syllable (certain), German → skip prefixes and hit the stem (`verstehen` → `ste`), English → first-syllable rule of thumb — and the last two carry an "≈ approximate" note, because stress without a dictionary is not exact.

## Live view

During recording there is a **live level meter** (dB) and a scrolling **live waveform** window. When you stop, the same view fills with the analysis — a 600-bucket ring holding about a 27-second window.

## Tech stack

- **Go 1.26** — the core; `go-dsp`, `go-yinfft`, `go-audio`
- **WASM** (`syscall/js`) — the `klangaugeAnalyze` and `klangaugeSyllabify` global APIs
- **Vue 3 + Tailwind CSS 4 + Vite 8** — the UI
- **GitHub Actions** — push to `main` → Pages deploy (actions on node24 majors)

Code: [github.com/LupusCaelum/klangauge](https://github.com/LupusCaelum/klangauge)

As a language teacher, my favorite part is this: instead of telling a student "read more melodically", you overlay two pitch lines and show them. Numbers do not lie — and this time they live in the browser, public and completely free.
