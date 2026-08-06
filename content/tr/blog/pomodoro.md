---
title: 'Pomodoro: odaklanmanı sağlayan bongo kedi'
description: 'Bash\'i sıfırdan, her saniye klavyene vuran ASCII kedi animasyonlu çapraz platform Pomodoro zamanlayıcısı yaparak öğrendim — rave renkler ve tek tıklık Windows kurulumuyla.'
date: '2026-08-06'
tags: [bash, cli, linux, eğlenceli]
---

Bir dili öğrenmenin en iyi yolu, gerçekten kullanacağın bir şey yapmak. İlk gerçek Bash projem **Pomodoro** oldu — terminal animasyonu, her saniye klavyeye vuran ve rengini rave gibi değiştiren minik bir ASCII kedi olan zamanlayıcı.

Dene ya da kur: [github.com/LupusCaelum/pomodoro](https://github.com/LupusCaelum/pomodoro)

## Bash'i inşa ederek öğrenmek

Bir to-do list scriptiyle başladım ve devam ettim. Bash Linux'ta her yerde, o yüzden işletim sisteminin ana dilini öğrenmek gibi geldi. Yolda kaptığım kurallar:

- Her script `#!/bin/bash` ile başlar.
- `$1`, `$2`, `$@` komutun arkasına yazdığın argümanlar — ve bir fonksiyonun içinde `$1`, fonksiyonun kendi ilk argümanıdır, script'in değil.
- `case "$1" in ... esac`, script'i küçük bir komut satırı uygulamasına çeviren şeydir.
- `while [ "$x" -gt 0 ]; do ... done` döngü kurar; `$(( ... ))` aritmetik yapar; `${1:-25}` "hiçbir şey verilmediyse 25 kullan" demektir.

Bunların hiçbiri ilk gün belli değil. Ama hepsi sonsuza kadar işine yarar.

## Geri sayım döngüsü

Zamanlayıcının kalbi bir saniyelik döngü:

```bash
while [ "$kalan" -gt 0 ]; do
  dk=$((kalan / 60))
  sn=$((kalan % 60))
  kedi "$dk" "$sn"
  sleep 1
  kalan=$((kalan - 1))
done
```

`kalan` toplam saniyeden geriye sayar. Tam bölme ve modülo onu `MM:SS`'ye çevirir. `kedi` de kedinin ta kendisi — her tikte kendini yerinde yeniden çizer.

## Bongo kedi

"Rave" kısmı en eğlencelisi. ANSI kaçış kodları her şeyi yapıyor:

- `\e[31m`–`\e[37m` metni yedi renge boyar; `\e[0m` sıfırlar.
- `\e[2K` satırı temizler, yeniden çizim iz bırakmaz.
- `\e[5A` imleci beş satır yukarı taşır — böylece beş satırlık bir çizim yerinde animasyon yapar.

Her saniye renk bir adım kayar (`sn % 7 + 31`), diğer her saniye kedi diğer patisini kaldırır (`sn % 2`). İki minik aritmetik ifade, durağan bir çizimi vuran ve renk değiştiren bir kediye çeviriyor.

## Ses ve bildirim, üç sistemde

Son mil, her yerde çalışmasını sağlamaktı. Script `uname -s` ile işletim sistemini algılayıp doğru araçları seçiyor:

- **Linux** — bildirim için `notify-send`, konuşma için Türkçe sesli Piper TTS.
- **macOS** — bildirim için `osascript`, konuşma için yerleşik `say`. Sıfır ek kurulum.
- **Windows** — Git Bash kullanıcıları terminal zili ve konsol mesajı alır.

`command -v` bir aracın var olup olmadığını kontrol eder; Piper yoksa script sessizce terminal bipine düşer.

## Yayınlamak

Bash `.exe`'ye derlenemez, o yüzden Windows kullanıcıları için `kur.bat` yazdım — çift tıkla, gerekirse Git Bash'i sessizce kurar, script'i yerine kopyalar ve PATH'e ekler. Linux ve macOS tek satırlık `./install.sh` alıyor. İkisi de her GitHub release'ine ekli.

Küçük bir CLI yapmak bana herhangi bir dersten daha çok şey öğretti: pipe'lar, çıkış kodları, imleç kaçışları, `>` ile `>>` farkı. Ve en güzeli — kedi artık her odak seansımda masamda oturuyor.
