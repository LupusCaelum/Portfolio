---
title: 'Ders Takip: a teaching sidekick I actually use'
description: 'A personal Nuxt app for my German classes — students, lesson logs and invoices that generate Turkish-aware PDFs. Built in phases, from SQLite schema to pdfkit.'
date: '2026-08-06'
tags: [nuxt, sqlite, pdf, tailwind]
---

When you teach a language on the side, the admin half of the job — who paid, which lesson, what homework — follows you around like ungraded essays. My fix was **Ders Takip** (Turkish for "lesson tracker"), a small web app built with **Nuxt 4**, **SQLite** and **Nuxt UI**.

Repo: [github.com/LupusCaelum/ders-takip](https://github.com/LupusCaelum/ders-takip)

## What it does

- **Students** — add, edit, delete; keep level, phone, e-mail and notes.
- **Lesson sessions** — log date, topic, duration and homework per student.
- **Invoices** — auto-numbered (`INV-2026-0001`), line items, and a **PDF** with proper Turkish characters.
- **Dashboard** — active students, today's lessons, pending invoice total.

It's a single-user local app, protected by one password, because it runs on my own machine — the point was to disappear, not to have a login flow.

## The PDF problem nobody mentions

PDF generation is easy until your text contains `ş`, `ö` or `ü`. **pdfkit** ships with standard fonts that don't cover them, so every Turkish word renders as tofu boxes. The fix was embedding the open-licensed **DejaVu** fonts and registering them as the document's font. A few kilobytes of `.ttf` made the invoices actually printable.

## Lessons from a phased build

I built this in deliberate phases — schema and auth first, then students and sessions, then invoices, then the dashboard — which kept every step testable on a live database.

The roadmap continues: the next phase (Faz 3) is an **exam module** — per-student mock exam results with a Word export, planned to run on the server side.

## Why Nuxt + SQLite

Nuxt 4 gave me one codebase for pages and `server/api` routes, so the data layer lives next to the UI. **Drizzle ORM** keeps the schema typed, and **better-sqlite3** is fast enough that I never think about the database at all. It's a toolbox the size of the job — nothing more.
