---
title: 'Pomodoro: a bongo cat that keeps your focus'
description: 'I learned Bash from scratch by building a cross-platform Pomodoro timer — with an ASCII cat that drums on your keyboard every second, rave colors and a one-click Windows installer.'
date: '2026-08-06'
tags: [bash, cli, linux, fun]
---

The best way to learn a language is to build something you will actually use. My first real Bash project was **Pomodoro** — a timer whose terminal animation is a little ASCII cat drumming on a keyboard, switching colors every second like a rave.

Try it or install it: [github.com/LupusCaelum/pomodoro](https://github.com/LupusCaelum/pomodoro)

## Learning Bash by building

I started with a to-do list script and kept going. Bash is everywhere on Linux, so it felt like learning the operating system's native tongue. The rules I picked up along the way:

- Every script starts with `#!/bin/bash`.
- `$1`, `$2`, `$@` are the arguments you type after the command — and inside a function, `$1` is the function's own first argument, not the script's.
- `case "$1" in ... esac` is how you turn a script into a little command-line app.
- `while [ "$x" -gt 0 ]; do ... done` loops; `$(( ... ))` does math; `${1:-25}` means "use 25 if nothing was given".

None of this is obvious on day one. All of it is useful forever.

## The countdown loop

The heart of the timer is a one-second loop:

```bash
while [ "$kalan" -gt 0 ]; do
  dk=$((kalan / 60))
  sn=$((kalan % 60))
  kedi "$dk" "$sn"
  sleep 1
  kalan=$((kalan - 1))
done
```

`kalan` counts down from the total seconds. Integer division and modulo turn it into `MM:SS`. `kedi` is the cat — it redraws itself in place every tick.

## The bongo cat

The "rave" part is the fun part. ANSI escape codes do everything:

- `\e[31m`–`\e[37m` paint text in seven colors; `\e[0m` resets.
- `\e[2K` clears a line so redraws leave no smudges.
- `\e[5A` moves the cursor up five lines, which lets a five-line drawing animate in place.

Every second the color steps to the next one (`sn % 7 + 31`), and every other second the cat lifts its other paw (`sn % 2`). Two tiny arithmetic expressions turn a static drawing into a drumming, color-cycling cat.

## Sound and notifications across three systems

The last mile was making it work everywhere. The script detects its OS with `uname -s` and picks the right tools:

- **Linux** — `notify-send` for the popup, Piper TTS with a Turkish voice for speech.
- **macOS** — `osascript` for the notification, the built-in `say` command for speech. Zero extra installs.
- **Windows** — Git Bash users get the terminal bell and a console message.

`command -v` checks whether a tool exists, so the script quietly falls back to a terminal beep when Piper is missing.

## Shipping it

Bash can't compile to an `.exe`, so for Windows users I wrote `kur.bat` — double-click it and it installs Git Bash silently if needed, copies the script into place and adds it to the PATH. Linux and macOS get a one-liner `./install.sh`. Both are attached to every GitHub release.

Building a small CLI taught me more about my machine than any tutorial: pipes, exit codes, cursor escapes, the difference between `>` and `>>`. And the best part — the cat now sits on my desktop during every focus session.
