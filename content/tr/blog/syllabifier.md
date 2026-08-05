---
title: 'Syllabifier: Go ile kural tabanlı heceleme motoru'
description: 'Türkçe, Almanca ve İngilizce için sıfır bağımlılıklı, kural tabanlı hece ve ek ayrıştırıcısını nasıl geliştirdim — ve WASM ile tarayıcıya nasıl taşıdım.'
date: '2026-08-06'
tags: [go, wasm, algoritmalar, javascript]
---

Bazen tek bir işi iyi yapan küçük bir araç yaparsın. **Syllabifier** benim için o araç oldu: kelimeleri hecelere ayırıyor, kökü ve ekleri çözüyor — **Türkçe**, **Almanca** ve **İngilizce** için.

Canlı dene: [lupuscaelum.github.io/syllabifier](https://lupuscaelum.github.io/syllabifier/)

## Neden kural tabanlı?

Kolay yol sözlük kullanmak. Elindeki kelimeler için doğrudur ama elinde olmayanlar için işe yaramaz. Kural tabanlı motor **hiç veri istemez**: her girdide, hatta uydurma kelimelerde bile çalışır, çünkü dilin *içerdiği* şeyleri değil *davranışını* kodlar.

Temel garanti basit: **her hecede tam bir ünlü vardır.** Önce ünlü çekirdeklerine ayır, sonra ünsüzleri çevresine dağıt. Bu değişmez, her sonucu telaffuz edilebilir yapar.

## Dillere göre algoritmalar

Üç dil, üç farklı kural seti:

- **Türkçe** — her hecede bir ünlü ve en fazla tek ünsüzle başlangıç. Ünsüz kümeleri sayıya göre bölünür: `0–1` → sonraki heceye, `2` → ortadan, `3` → ilk ikisi öncekinde kalır.
- **Almanca** — ardışık ünlüler tek çekirdek sayılır (`ei`, `au` gibi diftonglar). Ayrılamayan kümeler (`sch`, `ch`, `ck`, `tz`, `ph`, `th`, `qu`) bir arada kalır.
- **İngilizce** — kelime sonundaki `y` ünlü sayılır; sessiz son `e` sayılmaz; `-le` kendi hecesini kurar (`table` → `ta-ble`); baştaki digraphlar (`th`, `sh`, `ch`, `ph`, `wh`, `qu`) bir arada kalır.

Motorun tamamı bu: birkaç harita, bir küme tablosu ve `ö`, `ü`, `ı` gibi karakterleri tanıyan `unicode` işlemleri.

## Ek analizi

Heceleme hikâyenin yarısı. `affix` paketi **dil başına küratörlü listeler** tutar ve önce en uzun eşleşmeyi ayırır; eklemeli Türkçede sonekleri zincirler:

```
geliyoruz  →  gel + -uz (1. çoğul kişi) + -iyor (şimdiki zaman)
```

Türkçe özel muamele istedi: **ünlü uyumu** varyantları (`-ler/-lar`) ve **sert ünsüz benzeşmesi** (`kitap` + `-cı` → `kitapçı`). Almanca bir guard aldı ki `machen` (fiil) ile `Mädchen` (küçültme) karışmasın — `-chen` yalnızca kökte umlaut varsa küçültme sayılıyor.

## CLI, JSON ve WASM

Aynı çekirdek üç yüzeyi besler:

1. **CLI** (`syllabifier tr kitaplar -affixes`) ve `--json` çıktısı.
2. Her tag'de GitHub Actions ile derlenen **Windows, Linux ve macOS binary'leri**.
3. Bir **web uygulaması** — Go çekirdeği **WASM**'e derlenmiş, tamamen tarayıcıda çalışıyor. Sunucu yok, API yok, takip yok. Kelimeyi yaz, anında hecele, `?q=&lang=` linkini paylaş.

Web uygulaması birkaç yüz satır sade HTML/CSS/JS: **geç yüklenen WASM modülü** ve dile özel karakter butonları (`ä ö ü ß`, `ç ğ ı ş`).

## Teknoloji yığını

- **Go 1.26** — sıfır dış bağımlılık
- WASM sınırı için **syscall/js**
- **GitHub Actions** — CI (`gofmt`, `go vet`, testler, coverage) + release + Pages deploy
- **Vanilla JS** — web uygulaması bilinçli olarak frameworksüz

Kod: [github.com/LupusCaelum/syllabifier](https://github.com/LupusCaelum/syllabifier)

Kural motoru yapmak, bir dili içeriden öğrenmenin güzel bir yolu — detayı bir sonraki yazıda.
