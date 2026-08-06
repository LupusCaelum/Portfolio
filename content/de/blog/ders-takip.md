---
title: 'Ders Takip: ein Unterrichts-Assistent, den ich wirklich nutze'
description: 'Eine persönliche Nuxt-App für meinen Deutschunterricht — Schüler, Stundenerfassung und Rechnungen mit türkisch-fähigen PDFs. In Phasen gebaut, vom SQLite-Schema bis zu pdfkit.'
date: '2026-08-06'
tags: [nuxt, sqlite, pdf, tailwind]
---

Wenn man nebenbei eine Sprache unterrichtet, folgt einem die administrative Hälfte des Jobs — wer bezahlt hat, welche Stunde, welche Hausaufgabe — wie unbenotete Aufsätze. Meine Lösung ist **Ders Takip** (Türkisch für "Stunden-Tracker"), eine kleine Web-App mit **Nuxt 4**, **SQLite** und **Nuxt UI**.

Repo: [github.com/LupusCaelum/ders-takip](https://github.com/LupusCaelum/ders-takip)

## Was sie kann

- **Schüler** — anlegen, bearbeiten, löschen; Niveau, Telefon, E-Mail und Notizen.
- **Unterrichtsstunden** — Datum, Thema, Dauer und Hausaufgaben pro Schüler.
- **Rechnungen** — automatisch nummeriert (`INV-2026-0001`), Positionen und eine **PDF** mit korrekten türkischen Zeichen.
- **Dashboard** — aktive Schüler, heutige Stunden, offener Rechnungsbetrag.

Es ist eine Einzelbenutzer-App auf dem eigenen Rechner, geschützt durch ein einziges Passwort — denn der Sinn war, im Hintergrund zu verschwinden, nicht ein schicker Login-Flow.

## Das PDF-Problem, von dem niemand spricht

PDF-Erzeugung ist einfach, bis dein Text ein `ş`, `ö` oder `ü` enthält. **pdfkit** bringt Standardfonts mit, die diese Zeichen nicht abdecken — jedes türkische Wort wird zu leeren Kästchen. Die Lösung: die freie **DejaVu**-Schrift einbetten und als Font des Dokuments registrieren. Ein paar Kilobyte `.ttf` machten die Rechnungen tatsächlich druckbar.

## Lehren aus einem Bau in Phasen

Ich habe das Projekt bewusst in Phasen gebaut — zuerst Schema und Auth, dann Schüler und Stunden, dann Rechnungen, zuletzt das Dashboard — so blieb jeder Schritt an einer echten Datenbank testbar.

Die Roadmap geht weiter: Die nächste Phase (Faz 3) ist ein **Prüfungsmodul** — Probeprüfungsergebnisse pro Schüler mit Word-Export, geplant serverseitig.

## Warum Nuxt + SQLite

Nuxt 4 brachte Seiten und `server/api`-Routen in eine Codebasis — die Datenschicht liegt direkt neben der UI. **Drizzle ORM** hält das Schema typisiert, und **better-sqlite3** ist schnell genug, dass ich nie über die Datenbank nachdenke. Ein Werkzeugkasten in der Größe der Aufgabe — nicht mehr.
