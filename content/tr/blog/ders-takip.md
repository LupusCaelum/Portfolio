---
title: 'Ders Takip: kendimin gerçekten kullandığı ders asistanı'
description: 'Almanca derslerim için kişisel Nuxt uygulaması — öğrenciler, ders kayıtları ve Türkçe karakter destekli PDF üreten faturalar. SQLite şemasından pdfkit\'e, faz faz inşa edildi.'
date: '2026-08-06'
tags: [nuxt, sqlite, pdf, tailwind]
---

Yan tarafta dil dersi verirken işin idari yarısı — kim ödedi, hangi ders, ne ödevdi — not defteri gibi peşinden gelir. Çözümüm **Ders Takip** oldu: **Nuxt 4**, **SQLite** ve **Nuxt UI** ile kurulu küçük bir web uygulaması.

Kod: [github.com/LupusCaelum/ders-takip](https://github.com/LupusCaelum/ders-takip)

## Ne yapıyor

- **Öğrenciler** — ekle, düzenle, sil; seviye, telefon, e-posta ve not tut.
- **Ders kayıtları** — öğrenci başına tarih, konu, süre ve ödev.
- **Faturalar** — otomatik numaralama (`INV-2026-0001`), kalem satırları ve Türkçe karakterli **PDF**.
- **Panel** — aktif öğrenci, bugünkü dersler, bekleyen fatura tutarı.

Tek kullanıcılı, yerel bir uygulama; tek şifreyle korunuyor çünkü kendi makinemde çalışıyor — asıl mesele ortadan kaybolmasıydı, şık bir giriş akışı değil.

## Kimsenin bahsetmediği PDF sorunu

PDF üretmek, metnin içinde `ş`, `ö` veya `ü` geçene kadar kolaydır. **pdfkit** Türkçe karakterleri kapsamayan standart fontlarla gelir; bu yüzden her Türkçe kelime boş kutuya dönüşür. Çözüm, özgür lisanslı **DejaVu** fontlarını gömüp belgenin fontu olarak tanıtmaktı. Birkaç kilobaytlık `.ttf`, faturaları gerçekten yazdırılabilir hâle getirdi.

## Faz faz inşa etmenin dersleri

Projeyi bilinçli fazlara böldüm — önce şema ve kimlik doğrulama, sonra öğrenci ve oturumlar, sonra faturalar, en son panel — böylece her adım canlı veritabanında test edilebilir kaldı.

Yol haritası devam ediyor: bir sonraki faz (Faz 3) **sınav modülü** — öğrenci başına deneme sınavı sonuçları ve Word çıktısı, sunucu tarafında çalışacak şekilde planlanıyor.

## Neden Nuxt + SQLite

Nuxt 4, sayfalar ile `server/api` rotalarını tek kod tabanında birleştirdi; veri katmanı arayüzün yanında duruyor. **Drizzle ORM** şemayı tipli tutuyor, **better-sqlite3** ise veritabanını hiç düşünmeyeceğim kadar hızlı. İşin boyutuna uyan bir alet çantası — fazlası değil.
