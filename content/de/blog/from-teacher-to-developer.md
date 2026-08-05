---
title: 'Vom Deutschlehrer zum Entwickler: Warum ich einen Silbentrenner gebaut habe'
description: 'Eine Geschichte über Regeln, Grammatik und das Neuschreiben einer Sprach-Engine — so, wie ich Deutsch unterrichte.'
date: '2026-08-06'
tags: [go, geschichte, lernen]
---

Ich unterrichte Deutsch für meinen Lebensunterhalt und schreibe auch Code für meinen Lebensunterhalt. Beide Handwerke teilen etwas, zu dem ich immer zurückkehre: **Alles ist Regeln — bis zu den Ausnahmen.**

## Der Lehrerinstinkt

Wenn ein Schüler fragt, warum ein Wort so getrennt wird, nehme ich keine auswendig gelernte Liste. Ich erkläre das Muster: *„Nach einem betonten kurzen Vokal wird der Konsonant verdoppelt. Die Silbengrenze verläuft zuerst zwischen den Vokalen, dann folgen die Konsonanten denen, die eine Silbe beginnen können."* Deutschlehrer machen das den ganzen Tag — Regel, Beispiel, Ausnahme, wieder von vorn.

Als ich mein erstes echtes Go-Projekt bauen wollte, war die offensichtliche Idee die, die schon in meinem Kopf lebte: **ein regelbasierter Silbentrenner.**

## Von null anfangen

Die erste Entscheidung war ehrlich: keine Wörterbücher. Eine Wortliste hätte die Demo großartig und den Motor nutzlos gemacht. Regeln lassen den Motor mit *allem* funktionieren — auch mit dem erfundenen Wort, das ein Schüler nur eingibt, um es zu zerstören.

Das Projekt wuchs in Etappen:

1. **Zuerst Türkisch** — weil es die systematischste Sprache ist, die ich kenne: ein Vokal pro Silbe, saubere Vokalharmonie, keine Konsonantenblöcke am Silbenanfang.
2. **Dann Deutsch** — weil ich es unterrichte. Diphthonge bleiben zusammen, `sch` wird nie getrennt, und `-chen` ist nur ein Diminutiv, wenn der Stamm einen Umlaut trägt (`machen` ist ein Verb, `Mädchen` ein Mädchen).
3. **Dann Englisch** — das chaotische: stummes `e`, bedingtes `y` und `-le`-Silben.

## In den Browser bringen

Das CLI war der einfache Teil. Der spaßige Teil war die Erkenntnis, dass *derselbe Go-Code* per **WASM** auch im Browser laufen kann — kein Server, keine API, nichts zu bezahlen. Ein Schüler am Schulcomputer öffnet einfach einen Link und tippt. Das fühlte sich wie das Richtige an.

Die Web-App brachte eigene kleine Freuden: lazy-loaded WASM, Sonderzeichen-Buttons (`ä ö ü ß`, `ç ğ ı ş`), damit niemand gegen ein türkisches Tastaturlayout kämpfen muss, um *Mädchen* zu tippen, und teilbare Links, die die Frage einer Person zu einer URL machen, die man in den Chat einfügt.

## Was das Bauen mich gelehrt hat

- Gos Standardbibliothek reicht. Kein Framework, keine Pakete — nur `testing`, `syscall/js` und ein Makefile.
- **Heuristiken sind Ehrlichkeit.** Der Motor scheitert immer noch an `kutu` (`ku` + `-tu`?), weil Suffix-Trennung Nomen nicht kennen kann. Das dokumentiere ich, statt es zu verstecken.
- Regeln und Ausnahmen sind dieselbe Fähigkeit im Unterrichten und im Programmieren. Du erklärst das Muster, du fügst den Wächter hinzu, du gehst weiter.

Zum Zerlegen ist die Live-App hier: [lupuscaelum.github.io/syllabifier](https://lupuscaelum.github.io/syllabifier/)

Der Code ist auch ein Schüler — er lernt seine Ausnahmen noch.
