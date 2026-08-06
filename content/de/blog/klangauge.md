---
title: 'Klangauge: Offline-Sprachanalyse und Aussprache-Coach mit Go-Kern'
description: 'Wie ich ein Sprach-Analyseterminal per Go-Kern als WASM in den Browser gebracht habe — Wellenform, Tonhöhe, Spektrogramm und Silbenbetonungs-Coaching, ohne dass eine Aufnahme das Gerät verlässt.'
date: '2026-08-06'
tags: [go, wasm, vue, sprachanalyse, aussprache]
---

Mit dem Syllabifier haben wir Wörter in Silben getrennt und die Betonung gefunden. Der nächste natürliche Schritt: **das Gesprochene messen.** **Klangauge** ist genau das — ein in Go geschriebener Sprachanalyse-Kern, als WASM kompiliert und in den Browser gebracht. Du nimmst mit dem Mikrofon auf und siehst sofort Wellenform, Intensität, Tonhöhe und Spektrogramm; Silben, Sprechtempo und Betonung werden mit automatischen, regelbasierten Kommentaren verglichen.

Ausprobieren: [lupuscaelum.github.io/klangauge](https://lupuscaelum.github.io/klangauge/)

## Warum komplett offline?

Die Sprachaufnahme eines Lernenden ist die intimste Daten, die es gibt — sie sollte niemanden erreichen. Bei Klangauge **verlässt nichts das Gerät**: Der Analyse-Kern ist in Go geschrieben, wird als WASM in den Browser kompiliert und läuft auf derselben Seite wie die Oberfläche. Kein Server, keine API, kein Tracking. Das heißt nebenbei auch kostenloses Hosting: GitHub Pages liefert nur statische Dateien, die gesamte Audio-Verarbeitung findet auf dem Gerät des Besuchers statt.

## Der Analyse-Stack

Die Grafiklandschaft auf dem Bildschirm entsteht aus einem einzigen Aufruf: `Analyze(samples, sampleRate)`.

- **Spektrogramm** — Kurzzeit-Fourier-Transformation, `mjibson/go-dsp`
- **Tonhöhenlinie** — **YIN**-Algorithmus (`go-yinfft`): Grundfrequenz in stimmhaften Momenten, verschwindet bei stimmlosen Lauten
- **Intensitätskurve** — Energie in Dezibel; die Gipfel sind **Silben**
- **Silbenzahl** — aus den Intensitätsgipfeln; Sprechtempo, Artikulation, Stimmanteil, Tonhöhenumfang und mittlere Lautstärke werden daraus abgeleitet

## Sprachsensitive Regeln

Dieselbe Metrik bedeutet nicht in jeder Sprache dasselbe. Türkisch ist eine **silbenzählende** Sprache: das natürliche Tempo ist höher. Deutsch und Englisch sind **akzentzählend**: eher niedriger. Deshalb verschieben sich die Tempo- und Artikulations- **Bänder** je nach Sprache — mit einem eigenen „Analysesprache"-Wähler, getrennt von der Oberflächensprache, sodass du eine türkische Oberfläche nutzen und Deutsch sprechen kannst.

## Tonhöhenvergleich

Sprich dasselbe Wort zweimal, nimm die erste Aufnahme „zum Vergleich", dann sprich erneut. Die beiden Tonhöhenlinien liegen übereinander: neu in Rosa, gespeichert in Gold. Zu *sehen*, wo die Melodie auseinanderläuft, ist viel deutlicher, als es nur zu *hören*.

## Der Aussprache-Coach

Analyse ist gut, aber du willst dem Lernenden sagen können: „korrigier das". Im Coach-Reiter tippst du ein Wort; der **Syllabifier** zeichnet die erwarteten Silben und die Betonung. Dann sprichst du das Wort; der Coach vergleicht die erkannte Silbenzahl mit der erwarteten und die betonte Silbe mit der erwarteten — und erzeugt Kommentare in drei Sprachen:

> Silbenzahl richtig: 3/3. · Betonung auf der richtigen Silbe.

Die Betonungsregeln sind sprachspezifisch: Türkisch → letzte Silbe (sicher), Deutsch → Präfixe überspringen und zum Stamm (`verstehen` → `ste`), Englisch → Faustregel erste Silbe — und für die letzten beiden gibt es einen „≈ Näherung"-Hinweis, weil Betonung ohne Wörterbuch nicht exakt bekannt ist.

## Live-Anzeige

Während der Aufnahme gibt es eine **Live-Pegelanzeige** (dB) und ein fließendes **Live-Wellenform**-Fenster. Nach dem Stopp füllt sich dieselbe Ansicht mit der Analyse — ein Ring aus 600 Segmenten hält ein Fenster von ~27 Sekunden.

## Tech-Stack

- **Go 1.26** — der Kern; `go-dsp`, `go-yinfft`, `go-audio`
- **WASM** (`syscall/js`) — die globalen APIs `klangaugeAnalyze` und `klangaugeSyllabify`
- **Vue 3 + Tailwind CSS 4 + Vite 8** — die Oberfläche
- **GitHub Actions** — Push auf `main` → Pages-Deploy (Action-Versionen auf node24)

Code: [github.com/LupusCaelum/klangauge](https://github.com/LupusCaelum/klangauge)

Als Sprachlehrer ist mein Lieblingsteil: Statt zu sagen „lies melodischer", legt man zwei Tonhöhenlinien übereinander und zeigt es. Zahlen lügen nicht — und diesmal im Browser, öffentlich und völlig kostenlos.
