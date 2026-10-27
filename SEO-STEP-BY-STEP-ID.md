# Panduan SEO HeyNitara — langkah demi langkah

Domain: https://heynitara.my.id/
Repo: https://github.com/heynitara/heynitara

## 1. Pasang file di repo
1. Download dan ekstrak ZIP ini.
2. Buka repo GitHub, pilih `Add file` → `Upload files`.
3. Upload `robots.txt`, `sitemap.xml`, `favicon.svg`, dan `og-image.png` ke folder root yang sama dengan `index.html` (bukan ke folder `assets/`).
4. Buka `index.html`, lalu gabungkan isi `snippets/index-head-seo.html` ke dalam `<head>` yang sudah ada. Jangan membuat tag `<title>`, description, canonical, OG, atau Twitter yang duplikat. Pertahankan link CSS dan JavaScript yang sekarang.
5. Commit perubahan ke branch `main`. Jika hosting otomatis deploy dari branch itu, tunggu deploy selesai. Jika perlu, jalankan deploy ulang dari dashboard hosting.

## 2. Uji file setelah deploy
Buka satu per satu:
- https://heynitara.my.id/robots.txt
- https://heynitara.my.id/sitemap.xml
- https://heynitara.my.id/favicon.svg
- https://heynitara.my.id/og-image.png

Pastikan semuanya tampil/terunduh dan bukan 404. Pastikan `sitemap.xml` berisi URL HTTPS domain yang benar. File robots tidak boleh memblokir sitemap.

## 3. Google Search Console
Link: https://search.google.com/search-console/about

1. Login dengan akun Google.
2. Pilih `Add property`.
3. Sebaiknya pilih **Domain** dan masukkan `heynitara.my.id` tanpa `https://` atau path. Google akan meminta verifikasi DNS.
4. Buka dashboard penyedia DNS domain (tempat kamu mengatur nameserver/DNS). Tambahkan TXT record persis sesuai kode verifikasi dari Search Console. Jangan menebak isi token.
5. Kembali ke Search Console dan tekan `Verify`. Propagasi DNS dapat memerlukan waktu.
6. Buka menu `Sitemaps`.
7. Pada kolom tambah sitemap, masukkan `sitemap.xml`, lalu tekan `Submit`.
8. Setelah itu buka `URL inspection`, masukkan `https://heynitara.my.id/`, lalu pilih `Test live URL`. Jika dapat diakses dan tidak diblokir, tekan `Request indexing`.
9. Periksa laporan `Pages`/`Indexing` dan `Sitemaps` beberapa hari berikutnya. Request indexing bukan jaminan langsung muncul di Google; proses bisa memakan waktu beberapa hari hingga beberapa minggu.

Dokumentasi resmi:
- Search Console: https://search.google.com/search-console/about
- Submit sitemap: https://support.google.com/webmasters/answer/7451001
- Minta crawling/indexing: https://developers.google.com/search/docs/crawling-indexing/ask-google-to-recrawl

## 4. Bing Webmaster Tools (opsional)
Link: https://www.bing.com/webmasters/

1. Login dan tambahkan `https://heynitara.my.id/`.
2. Verifikasi kepemilikan dengan metode yang ditawarkan.
3. Buka bagian Sitemaps dan submit `https://heynitara.my.id/sitemap.xml`.
4. Jika ditawarkan import dari Google Search Console, kamu boleh gunakan opsi itu.

## 5. Periksa tampilan share / OG image
- Facebook Sharing Debugger: https://developers.facebook.com/tools/debug/
- LinkedIn Post Inspector: https://www.linkedin.com/post-inspector/

Masukkan URL homepage. Jika gambar lama masih muncul, gunakan fitur scrape/refresh pada tool tersebut dan tunggu cache diperbarui. OG image sebaiknya dapat diakses publik, menggunakan URL absolut, dan berukuran 1200 × 630 px.

## 6. Konten yang membantu SEO
File teknis hanya membantu mesin pencari menemukan dan memahami situs; tidak menjamin ranking. Untuk toko/landing page HeyNitara:
- Pastikan setiap produk yang benar-benar dijual punya nama, deskripsi unik, harga yang akurat, dan foto dengan alt text yang menjelaskan produk.
- Gunakan judul halaman yang menjelaskan merek dan kategori utama tanpa menjejalkan kata kunci.
- Tulis informasi nyata tentang cara pesan, pengiriman, pembayaran, area layanan, dan kontak. Jangan membuat klaim statistik/testimoni yang belum benar.
- Buat tautan navigasi yang jelas ke bagian penting. Jika situs tetap satu halaman, sitemap cukup mencantumkan homepage; `#about`, `#shop`, dan `#faq` bukan URL halaman terpisah.
- Pastikan teks utama hadir di HTML yang bisa dibaca crawler. Jika daftar produk baru dibuat melalui JavaScript, uji apakah Google dapat merender dan memahami kontennya.
- Periksa tampilan mobile, kecepatan, kontras, dan tautan yang rusak.
- Jangan menambahkan `noindex` pada homepage yang ingin ditampilkan di hasil pencarian.

## 7. Checklist akhir
- [ ] HTTPS berjalan dan URL utama konsisten.
- [ ] `robots.txt`, `sitemap.xml`, `favicon.svg`, `og-image.png` semuanya dapat diakses.
- [ ] Metadata SEO digabung ke `<head>` tanpa duplikasi.
- [ ] Perubahan sudah di-commit dan deploy selesai.
- [ ] Domain terverifikasi di Search Console.
- [ ] Sitemap dikirim dan statusnya diperiksa.
- [ ] Homepage diperiksa lewat URL Inspection dan meminta indexing.
- [ ] Preview sosial diperiksa.
- [ ] Konten produk dan informasi bisnis akurat serta cukup unik.

Catatan: Paket ini mengasumsikan URL kanonis `https://heynitara.my.id/`. Kalau hosting mengarahkan ke hostname lain, samakan URL di `sitemap.xml`, `robots.txt`, canonical, dan Open Graph sebelum deploy.
