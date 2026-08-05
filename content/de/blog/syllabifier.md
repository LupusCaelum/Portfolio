---
title: 'Syllabifier: Ein regelbasierter Silbentrenner in Go'
description: 'Wie ich einen regelbasierten Silbentrenner und Affix-Analysator ohne jede Abhängigkeit für Türkisch, Deutsch und Englisch gebaut habe — und per WASM in den Browser gebracht.'
date: '2026-08-06'
tags: [go, wasm, algorithmen, javascript]
---

Ab und zu baust du ein kleines Werkzeug, das eine Sache einfach gut macht. **Syllabifier** ist so ein Werkzeug für mich: Er trennt Wörter in Silben und zerlegt Wörter in Stamm und Affixe — für **Türkisch**, **Deutsch** und **Englisch**.

Ausprobieren: [lupuscaelum.github.io/syllabifier](https://lupuscaelum.github.io/syllabifier/)

## Warum regelbasiert?

Der verlockende Umweg ist eine Wortliste (ein Wörterbuch). Für die Wörter, die du hast, ist sie genau — und für die anderen nutzlos. Ein regelbasierter Motor braucht **überhaupt keine Daten**: Er funktioniert mit jeder Eingabe, sogar mit erfundenen Wörtern, weil er codiert, wie sich eine Sprache *verhält*, statt was sie *enthält*.

Die Kernaussage ist einfach: **Jede Silbe enthält genau einen Vokal.** Erst in Vokal-Kerne aufteilen, dann die Konsonanten darum herum verteilen. Diese Invariante hält jedes Ergebnis aussprechbar.

## Die Algorithmen pro Sprache

Die drei Sprachen brauchen drei verschiedene Regelsätze:

- **Türkisch** — jede Silbe hat genau einen Vokal und höchstens einen Konsonanten am Anfang. Konsonantenblöcke werden nach Anzahl geteilt: `0–1` → in die nächste Silbe, `2` → in der Mitte, `3` → die ersten beiden bleiben.
- **Deutsch** — benachbarte Vokale bilden einen einzigen Kern (Diphthonge wie `ei` und `au`). Untrennbare Blöcke (`sch`, `ch`, `ck`, `tz`, `ph`, `th`, `qu`) bleiben zusammen.
- **Englisch** — `y` zählt am Wortende als Vokal; stummes `e` nicht; `-le` bildet eine eigene Silbe (`table` → `ta-ble`); anlautende Digraphen (`th`, `sh`, `ch`, `ph`, `wh`, `qu`) bleiben zusammen.

Das ist der ganze Motor: ein paar Maps, eine Blocktabelle und `unicode`-Behandlung für `ö`, `ü`, `ı` und Freunde.

## Affix-Analyse

Silbentrennung ist nur die halbe Geschichte. Das `affix`-Paket hält **kuratierte Listen pro Sprache** und trennt zuerst die längste Übereinstimmung — und verknüpft Suffixe für das agglutinierende Türkisch:

```
geliyoruz  →  gel + -uz (1. Person Plural) + -iyor (Präsens)
```

Türkisch brauchte Sonderbehandlung: **Vokalharmonie**-Varianten (`-ler/-lar`) und **Konsonantenassimilation** (`kitap` + `-cı` → `kitapçı`). Deutsch bekam eine Wächterfunktion, damit `machen` (ein Verb) nicht mit `Mädchen` (ein Diminutiv) verwechselt wird — `-chen` zählt nur, wenn der Stamm einen Umlaut trägt.

## CLI, JSON und WASM

Derselbe Kern speist drei Oberflächen:

1. Ein **CLI** (`syllabifier tr kitaplar -affixes`) mit `--json`-Ausgabe.
2. Fertig kompilierte **Binaries** für Windows, Linux und macOS — bei jedem Tag über GitHub Actions.
3. Eine **Web-App** — der Go-Kern wird zu **WASM** kompiliert und läuft komplett im Browser. Kein Server, keine API, kein Tracking. Wort eintippen, Silben sofort sehen, `?q=&lang=`-Link teilen.

Die Web-App ist ein paar hundert Zeilen Vanilla-HTML/CSS/JS mit **lazy-loaded WASM-Modul** und sprachspezifischen Sonderzeichen-Buttons (`ä ö ü ß`, `ç ğ ı ş`).

## Tech-Stack

- **Go 1.26** — null externe Abhängigkeiten
- **syscall/js** für die WASM-Grenze
- **GitHub Actions** — CI (`gofmt`, `go vet`, Tests, Coverage) + Releases + Pages-Deploy
- **Vanilla JS** — die Web-App bewusst ohne Framework

Code: [github.com/LupusCaelum/syllabifier](https://github.com/LupusCaelum/syllabifier)

Einen Regel-Motor zu bauen ist ein schöner Weg, eine Sprache von innen zu lernen — mehr dazu im nächsten Beitrag.
