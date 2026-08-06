---
title: 'Pomodoro: eine Bongo-Katze, die dich bei der Stange hält'
description: 'Ich habe Bash von Grund auf gelernt, indem ich einen plattformübergreifenden Pomodoro-Timer gebaut habe — mit einer ASCII-Katze, die jede Sekunde auf die Tastatur trommelt, Rave-Farben und einem Windows-Installationsklick.'
date: '2026-08-06'
tags: [bash, cli, linux, spaß]
---

Die beste Art, eine Sprache zu lernen, ist, etwas zu bauen, das man wirklich nutzt. Mein erstes echtes Bash-Projekt war **Pomodoro** — ein Timer, dessen Terminal-Animation eine kleine ASCII-Katze ist, die auf eine Tastatur trommelt und jede Sekunde die Farbe wechselt wie auf einer Rave-Party.

Ausprobieren oder installieren: [github.com/LupusCaelum/pomodoro](https://github.com/LupusCaelum/pomodoro)

## Bash lernen, indem man baut

Ich habe mit einem To-do-Skript angefangen und weitergemacht. Bash ist überall auf Linux, also fühlte es sich an, als würde ich die Muttersprache des Betriebssystems lernen. Die Regeln, die ich unterwegs aufgeschnappt habe:

- Jedes Skript beginnt mit `#!/bin/bash`.
- `$1`, `$2`, `$@` sind die Argumente hinter dem Befehl — und innerhalb einer Funktion ist `$1` das eigene erste Argument der Funktion, nicht das des Skripts.
- `case "$1" in ... esac` macht aus einem Skript eine kleine Kommandozeilen-App.
- `while [ "$x" -gt 0 ]; do ... done` loopt; `$(( ... ))` rechnet; `${1:-25}` heißt "nimm 25, wenn nichts angegeben wurde".

Keines davon ist am ersten Tag offensichtlich. Alles davon ist für immer nützlich.

## Die Countdown-Schleife

Das Herz des Timers ist eine Ein-Sekunden-Schleife:

```bash
while [ "$kalan" -gt 0 ]; do
  dk=$((kalan / 60))
  sn=$((kalan % 60))
  kedi "$dk" "$sn"
  sleep 1
  kalan=$((kalan - 1))
done
```

`kalan` zählt von den Gesamtsekunden herunter. Ganzzahldivision und Modulo machen daraus `MM:SS`. `kedi` ist die Katze — sie zeichnet sich bei jedem Tick neu an Ort und Stelle.

## Die Bongo-Katze

Der "Rave"-Teil ist der lustige Teil. ANSI-Escape-Codes können alles:

- `\e[31m`–`\e[37m` färben Text in sieben Farben; `\e[0m` setzt zurück.
- `\e[2K` löscht eine Zeile, damit Neuziehungen keine Schlieren hinterlassen.
- `\e[5A` bewegt den Cursor fünf Zeilen nach oben — so kann eine fünfzeilige Zeichnung an Ort und Stelle animieren.

Jede Sekunde rückt die Farbe eine Stufe weiter (`sn % 7 + 31`), und jede zweite Sekunde hebt die Katze die andere Pfote (`sn % 2`). Zwei winzige Rechenausdrücke verwandeln eine statische Zeichnung in eine trommelnde, farbwechselnde Katze.

## Ton und Benachrichtigung auf drei Systemen

Die letzte Meile war, es überall zum Laufen zu bringen. Das Skript erkennt das Betriebssystem mit `uname -s` und wählt die richtigen Werkzeuge:

- **Linux** — `notify-send` für den Popup, Piper TTS mit türkischer Stimme für Sprache.
- **macOS** — `osascript` für die Benachrichtigung, der eingebaute Befehl `say` für Sprache. Null zusätzliche Installationen.
- **Windows** — Git-Bash-Nutzer bekommen die Terminalglocke und eine Konsolenmeldung.

`command -v` prüft, ob ein Werkzeug existiert, sodass das Skript bei fehlendem Piper leise auf einen Terminal-Piepton zurückfällt.

## Veröffentlichen

Bash lässt sich nicht zu einer `.exe` kompilieren. Also habe ich für Windows-Nutzer `kur.bat` geschrieben — doppelklicken, und es installiert Git Bash bei Bedarf still, kopiert das Skript an seinen Platz und fügt es dem PATH hinzu. Linux und macOS bekommen ein Einzeiler-`./install.sh`. Beide hängen an jedem GitHub-Release.

Ein kleines CLI zu bauen, hat mich mehr über meinen Rechner gelehrt als jedes Tutorial: Pipes, Exit-Codes, Cursor-Escapes, der Unterschied zwischen `>` und `>>`. Und das Beste — die Katze sitzt jetzt bei jeder Fokus-Session auf meinem Schreibtisch.
