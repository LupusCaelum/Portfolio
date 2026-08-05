---
title: 'From German teacher to developer: why I built a syllabifier'
description: 'A story about rules, grammar, and rewriting a language engine the same way I teach German.'
date: '2026-08-06'
tags: [go, hikaye, öğrenme]
---

I teach German for a living, and I write code for a living too. The two crafts share something I keep coming back to: **everything is rules, until it is exceptions.**

## The teacher instinct

When a student asks *why* a word splits the way it does, I do not reach for a memorized list. I explain the pattern: *"After a stressed short vowel, the consonant doubles. The syllable boundary goes between the vowels first, then the consonants follow the ones that can start a syllable."* German teachers do this all day — rule, example, exception, repeat.

So when I wanted to build my first real Go project, the obvious idea was the one that already lived inside my head: **a rule-based syllable splitter.**

## Starting from nothing

The first decision was honest: no dictionaries. A word list would have made the demo look great and the engine useless. Rules make the engine work on *anything* — including the made-up word a student types just to break it.

The project grew in stages:

1. **Turkish first** — because it is the most systematic language I know: one vowel per syllable, clean vowel harmony, no syllable-initial clusters.
2. **German second** — because it is what I teach. Diphthongs stay together, `sch` never splits, and `-chen` is a diminutive only when the stem carries an umlaut (`machen` is a verb, `Mädchen` is a girl).
3. **English third** — the messy one: silent `e`, conditional `y`, and `-le` syllables.

## Shipping it to the browser

The CLI was the easy part. The fun part was realizing the *same Go code* could run in a browser via **WASM** — no server, no API, nothing to pay for. A student on a school computer just opens a link and types. That felt like the right thing to build.

The web app came with its own small joys: lazy-loaded WASM, special-character buttons (`ä ö ü ß`, `ç ğ ı ş`) so nobody has to fight a Turkish keyboard layout to type *Mädchen*, and shareable links so one person's question becomes a URL you can paste in a chat.

## What building it taught me

- Go's stdlib is enough. No framework, no packages — just `testing`, `syscall/js`, and a Makefile.
- **Heuristics are honesty.** The engine still trips on `kutu` (`ku` + `-tu`?) because suffix-stripping cannot know nouns. I document that instead of hiding it.
- Rules and exceptions are the same skill in teaching and programming. You explain the pattern, you add the guard, you move on.

If you want to break it, the live app is here: [lupuscaelum.github.io/syllabifier](https://lupuscaelum.github.io/syllabifier/)

The code is a student as well — it is still learning its exceptions.
