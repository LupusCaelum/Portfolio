---
title: 'Klangauge: Go çekirdekli çevrimdışı konuşma analizi ve telaffuz koçu'
description: 'Bir ses analiz terminalini Go çekirdeğiyle WASM üzerinde tarayıcıya nasıl taşıdım — kayıt cihazdan hiç çıkmadan dalga biçimi, perde, spektrogram ve hece-vurgu koçluğu.'
date: '2026-08-06'
tags: [go, wasm, vue, ses-analizi, telaffuz]
---

Syllabifier'da kelimeleri hecelere ayırıp vurguyu bulmuştuk. Bir sonraki doğal adım: **söyleneni ölçmek.** **Klangauge** işte bu — Go ile yazılmış bir ses analiz çekirdeğinin WASM'e derlenip tarayıcıya taşınmış hali. Mikrofonla kaydediyorsun, dalga biçimini, şiddetini, perdeni ve spektrogramını anında görüyorsun; heceleri, konuşma hızını ve vurgunu otomatik yorumlarla karşılaştırıyorsun.

Canlı dene: [lupuscaelum.github.io/klangauge](https://lupuscaelum.github.io/klangauge/)

## Neden tamamen çevrimdışı?

Dil öğrenen birinin ses kaydı en mahrem verisidir — kimseye gönderilmemeli. Klangauge'da **hiçbir şey cihazdan çıkmaz**: analiz çekirdeği Go'da yazıldı, tarayıcıya WASM olarak derlendi ve arayüzle aynı sayfada çalışıyor. Sunucu yok, API yok, takip yok. Bu aynı zamanda ücretsiz barındırma demek: GitHub Pages statik dosya servis ediyor, ses işlemenin tamamı ziyaretçinin cihazında.

## Analiz yığını

Ekranı dolduran grafikler tek bir `Analyze(samples, sampleRate)` çağrısından geliyor:

- **Spektrogram** — kısa süreli Fourier dönüşümü, `mjibson/go-dsp`
- **Perde çizgisi** — **YIN** algoritması (`go-yinfft`): sesli anlarda temel frekans, sessiz harflerde kaybolur
- **Şiddet eğrisi** — desibel cinsinden enerji; tepeler **hecelerdir**
- **Hece sayısı** — şiddet tepelerinden; konuşma hızı, artikülasyon, sesli oranı, perde aralığı ve ortalama şiddet buradan türetilir

## Dile duyarlı kurallar

Aynı metrik her dilde aynı anlama gelmiyor. Türkçe **hece-zamanlı** bir dil: doğal tempo daha yüksek. Almanca ve İngilizce **vurgu-zamanlı**: daha düşük. Bu yüzden hız ve artikülasyon **bantları** dile göre kayıyor — arayüz dilinden ayrı bir "analiz dili" seçicisi var, böylece Türkçe arayüz kullanıp Almanca konuşabilirsin.

## Perde karşılaştırma

Aynı kelimeyi iki kez söyle, ilkini "karşılaştırmaya al", sonra tekrar söyle. İki perde çizgisi üst üste çiziliyor: yeni pembe, saklı olan altın. Melodinin nerede ayrıştığını görsel olarak görmek, kulakla duymaktan çok daha net.

## Telaffuz koçu

Analiz iyi ama öğrenciye "şunu düzelt" diyebilmek lazım. Koç sekmesinde bir kelime yazıyorsun; **Syllabifier** beklenen heceleri ve vurguyu çiziyor. Sonra kelimeyi söylüyorsun; koç algılanan hece sayısını beklenenle, vurgu hecesini beklenenle karşılaştırıp üç dilde yorum üretiyor:

> Hece sayısı doğru: 3/3. · Vurgu doğru hecede.

Vurgu kuralları dillere göre: Türkçede son hece (kesin), Almancada önekleri atlayıp köke git (`verstehen` → `ste`), İngilizcede kaba kural ilk hece — ve son ikisi için "≈ yaklaşık" uyarısı, çünkü sözlüksüz tam vurgu bilinemez.

## Canlı gösterge

Kayıt sırasında **canlı seviye çubuğu** (dB) ve süzülen bir **canlı dalga** ekranı var. Kayıt bittikten sonra aynı görünüm analizle doluyor — 600 segmentlik halka, ~27 saniyelik pencereyi tutuyor.

## Teknoloji yığını

- **Go 1.26** — çekirdek; `go-dsp`, `go-yinfft`, `go-audio`
- **WASM** (`syscall/js`) — `klangaugeAnalyze` ve `klangaugeSyllabify` global API'leri
- **Vue 3 + Tailwind CSS 4 + Vite 8** — arayüz
- **GitHub Actions** — main'e push → Pages deploy (action'lar node24 sürümlerinde)

Kod: [github.com/LupusCaelum/klangauge](https://github.com/LupusCaelum/klangauge)

Dil öğretmeni olarak en sevdiğim kısım: öğrenciye "daha melodik oku" demek yerine iki perde çizgisini üst üste koyup göstermek. Sayılar yalan söylemez — ve bu sefer tarayıcıda, herkese açık ve tamamen ücretsizler.
