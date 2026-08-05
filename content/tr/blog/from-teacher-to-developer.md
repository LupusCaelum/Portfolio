---
title: 'Almanca öğretmeninden geliştiriciye: neden bir heceleyici yaptım'
description: 'Kurallar, gramer ve bir dil motorunu Almanca öğretir gibi yeniden yazmanın hikâyesi.'
date: '2026-08-06'
tags: [go, hikaye, öğrenme]
---

Bir yandan Almanca öğretiyorum, bir yandan kod yazıyorum. İki işin ortak bir yanı var: **her şey kurallardır — istisnalara kadar.**

## Öğretmen içgüdüsü

Bir öğrenci bir kelimenin neden o şekilde bölündüğünü sorduğunda ezber bir listeye bakmam. Kalıbı anlatırım: *"Vurgulu kısa ünlüden sonra ünsüz çiftlenir. Önce ünlüler arasından hece sınırı geçer, sonra ünsüzler hece başlatabilenlere katılır."* Almanca öğretmenleri bütün gün bunu yapar — kural, örnek, istisna, tekrar.

İlk gerçek Go projemi kurmak istediğimde akla gelen fikir zaten kafamın içinde yaşayan fikirdi: **kural tabanlı bir heceleyici.**

## Sıfırdan başlamak

İlk karar dürüsttü: sözlük yok. Kelime listesi demoyu harika, motoru işe yaramaz yapardı. Kurallar motoru *her şeyde* çalıştırır — öğrencinin sırf kırmak için yazdığı uydurma kelimede bile.

Proje aşama aşama büyüdü:

1. **Önce Türkçe** — çünkü bildiğim en sistematik dil: hece başına bir ünlü, temiz ünlü uyumu, hece başında küme yok.
2. **Sonra Almanca** — çünkü öğrettiğim dil bu. Diftonglar bir arada, `sch` asla bölünmez, `-chen` yalnızca kökte umlaut varsa küçültmedir (`machen` bir fiil, `Mädchen` bir kız).
3. **Sonra İngilizce** — dağınık olan: sessiz `e`, koşullu `y` ve `-le` heceleri.

## Tarayıcıya taşımak

CLI kolay kısımdı. Eğlenceli olan, **aynı Go kodunun** WASM ile tarayıcıda da çalışabildiğini fark etmekti — sunucu yok, API yok, ödenecek bir şey yok. Okul bilgisayarındaki bir öğrenci bağlantıyı açar ve yazar. Doğru şeyi inşa etmek bu hissettirdi.

Web uygulaması kendi küçük keyiflerini getirdi: geç yüklenen WASM, kimsenin *Mädchen* yazmak için Türkçe klavyeyle savaşmasın diye özel karakter butonları (`ä ö ü ß`, `ç ğ ı ş`) ve bir kişinin sorusunu sohbete yapıştırılabilir URL'ye çeviren paylaşım linkleri.

## Bu iş bana ne öğretti

- Go'nun standart kütüphanesi yeter. Framework yok, paket yok — sadece `testing`, `syscall/js` ve bir Makefile.
- **Sezgisel çözümler dürüstlüktür.** Motor hâlâ `kutu`ya takılır (`ku` + `-tu`?) çünkü sonek kırpma isimleri bilemez. Bunu saklamak yerine belgeliyorum.
- Kurallar ve istisnalar, öğretmenlikte de programlamada da aynı beceri. Kalıbı anlatırsın, guard'ı eklersin, yoluna devam edersin.

Kırmak istersen canlı uygulama burada: [lupuscaelum.github.io/syllabifier](https://lupuscaelum.github.io/syllabifier/)

Kod da bir öğrenci — hâlâ istisnalarını öğreniyor.
