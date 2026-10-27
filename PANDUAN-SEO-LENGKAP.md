# Panduan SEO Lengkap — HeyNitara

**Domain:** https://heynitara.my.id/  
**Repo:** https://github.com/heynitara/heynitara  

Paket ZIP ini sudah berisi file SEO yang siap deploy. Ikuti langkah di bawah secara berurutan.

---

## 1. Deploy file ke GitHub (langkah paling penting)

1. Download ZIP revisi ini dan ekstrak.
2. Buka https://github.com/heynitara/heynitara
3. Klik **Add file** → **Upload files** (atau clone repo lalu copy-paste file).
4. Upload / replace file-file berikut ke **root** (folder yang sama dengan `index.html`):
   - `index.html` (sudah berisi meta SEO lengkap + Open Graph + Twitter Card + JSON-LD)
   - `robots.txt`
   - `sitemap.xml`
   - `favicon.svg`
   - `og-image.png` (1200×630)
   - `style.css` dan `script.js` (jika kamu ingin memastikan versi terbaru)
5. Commit message contoh: `SEO: add robots, sitemap, og tags, structured data`
6. Pastikan branch `main` (atau branch yang dipakai GitHub Pages) sudah ter-update.

**Catatan hosting:**
- Kalau kamu pakai **GitHub Pages** + custom domain `heynitara.my.id`, pastikan di Settings → Pages, source-nya benar (biasanya `/ (root)` dari branch `main`).
- Setelah push, tunggu 1–5 menit lalu cek apakah file muncul:
  - https://heynitara.my.id/robots.txt
  - https://heynitara.my.id/sitemap.xml
  - https://heynitara.my.id/og-image.png
  - https://heynitara.my.id/favicon.svg

Jika masih 404, coba hard-refresh atau cek apakah ada folder `docs/` yang dipakai sebagai source Pages.

---

## 2. Verifikasi file setelah deploy

Buka satu per satu di browser:

| URL | Harus muncul |
|-----|--------------|
| https://heynitara.my.id/robots.txt | Teks `User-agent: *` + Sitemap |
| https://heynitara.my.id/sitemap.xml | XML dengan `<loc>https://heynitara.my.id/</loc>` |
| https://heynitara.my.id/og-image.png | Gambar 1200×630 |
| https://heynitara.my.id/favicon.svg | Ikon hati pink |

---

## 3. Google Search Console (wajib)

**Link:** https://search.google.com/search-console

Meta tag verifikasi **sudah ada** di `index.html`:
```html
<meta name="google-site-verification" content="JvQeZSDfWKzhxuxxSExAhx30NiT0OHeTMU6V7iN75ZU" />
```

### Cara verifikasi (pakai HTML tag saja)
1. Pastikan `index.html` versi terbaru sudah di-upload & live.
2. Buka https://heynitara.my.id/ → klik kanan → **View Page Source**.
3. Cari teks `google-site-verification` — harus ketemu.
4. Di Search Console:
   - Pilih **URL prefix** → isi `https://heynitara.my.id/`
   - Pilih metode **HTML tag**
   - Klik **Verify**

### Submit Sitemap
1. Setelah terverifikasi, buka menu **Sitemaps**.
2. Di kolom “Add a new sitemap” ketik: `sitemap.xml`
3. Klik **Submit**.

### Request Indexing
1. Buka **URL Inspection**.
2. Masukkan `https://heynitara.my.id/`
3. Klik **Test live URL**.
4. Jika status “URL is available to Google”, klik **Request indexing**.

**Dokumentasi resmi:**
- https://search.google.com/search-console/about
- https://support.google.com/webmasters/answer/7451001 (submit sitemap)
- https://developers.google.com/search/docs/crawling-indexing/ask-google-to-recrawl

---

## 4. Bing Webmaster Tools (sangat disarankan)

**Link:** https://www.bing.com/webmasters/

1. Login dengan akun Microsoft.
2. Tambahkan site `https://heynitara.my.id/`
3. Verifikasi (bisa pakai import dari Google Search Console atau metode HTML tag).
4. Submit sitemap: `https://heynitara.my.id/sitemap.xml`

---

## 5. Cek tampilan saat di-share (Open Graph)

Setelah `og-image.png` dan meta OG sudah live:

1. **Facebook Sharing Debugger**  
   https://developers.facebook.com/tools/debug/  
   → masukkan `https://heynitara.my.id/` → klik **Scrape Again** beberapa kali jika gambar lama masih muncul.

2. **LinkedIn Post Inspector**  
   https://www.linkedin.com/post-inspector/

3. **Twitter / X Card Validator** (opsional)  
   https://cards-dev.twitter.com/validator

---

## 6. Langkah SEO tambahan yang membantu ranking

### A. Konten
- Pastikan nama produk, deskripsi, dan harga di `script.js` / data produk akurat.
- Tambahkan **alt text** yang deskriptif pada gambar produk (contoh: `alt="Strawberry Shortcake HeyNitara"`).
- Isi section About, FAQ, dan cara order dengan informasi nyata (area layanan, metode bayar, jam operasional).

### B. Kecepatan & Mobile
- Uji di https://pagespeed.web.dev/ → masukkan URL kamu.
- Pastikan tampilan mobile bagus (sudah responsive).

### C. Link internal & navigasi
- Situs ini single-page (`#home`, `#shop`, dll.). Sitemap hanya perlu homepage. Jangan masukkan `#about` ke sitemap.

### D. Google Business Profile (opsional tapi kuat)
Jika punya lokasi fisik / area layanan jelas:
https://business.google.com/

### E. Social proof
- Link Instagram / TikTok di footer biar valid (ganti `#` dengan URL asli).
- Minta customer review di WhatsApp lalu tampilkan (dengan izin).

---

## 7. Checklist akhir sebelum “selesai”

- [ ] `robots.txt`, `sitemap.xml`, `og-image.png`, `favicon.svg` bisa diakses (bukan 404)
- [ ] `index.html` sudah punya title, description, canonical, OG, Twitter, JSON-LD
- [ ] Domain terverifikasi di Google Search Console
- [ ] Sitemap sudah disubmit
- [ ] Homepage sudah di-request indexing
- [ ] Preview share di Facebook Debugger sudah menampilkan gambar yang benar
- [ ] WhatsApp number di site sudah benar (`62895393044401`)
- [ ] Tidak ada meta `noindex`

---

## 8. File yang ada di ZIP ini

| File | Fungsi |
|------|--------|
| `index.html` | Halaman utama + full SEO meta + Schema.org Store |
| `robots.txt` | Izinkan crawler + tunjukkan sitemap |
| `sitemap.xml` | Daftar URL kanonis |
| `favicon.svg` | Ikon browser (hati pink) |
| `og-image.png` | Gambar preview saat di-share (1200×630) |
| `style.css` / `script.js` | Stylesheet & JavaScript utama |
| `PANDUAN-SEO-LENGKAP.md` | File panduan ini |

---

## Troubleshooting cepat

**robots.txt / sitemap masih 404 setelah push**
→ Cek Settings → Pages di GitHub. Pastikan source = Deploy from a branch → main → / (root).  
→ Atau hapus cache browser / coba mode incognito.

**OG image tidak muncul**
→ Pastikan URL absolut `https://heynitara.my.id/og-image.png` bisa dibuka.  
→ Scrape ulang di Facebook Debugger.

**Search Console tidak verify**

---

Setelah semua langkah di atas selesai, situs sudah siap di-index oleh Google & Bing. Ranking akan naik seiring waktu tergantung konten, backlink, dan aktivitas. Fokus dulu ke konten produk yang unik + request indexing.

Semangat! ♡  
HeyNitara — Little things, big happiness.
