📘 AXION BIBLE — Proyek Website

Versi: 2.1.0 | Terakhir: 31 Juli 2026
Jenis Dokumen: Sumber kebenaran mutlak untuk pengembangan website

---

🧠 0. Filosofi Dokumen Ini

AXION BIBLE adalah dokumen sakral yang mengatur seluruh aspek pengembangan website AXION Neuralis.

Dokumen ini menjawab pertanyaan: "APA yang wajib dan tidak boleh dilanggar dalam membuat website ini?"

Bukan blueprint teknis (cara buat), bukan roadmap (kapan selesai).
Ini adalah konstitusi yang harus dipatuhi semua tim.

---

🎯 1. Tujuan Website (Tidak Boleh Berubah)

Tujuan Penjelasan
Profil Perusahaan Menampilkan identitas, visi, misi, dan struktur AXION Neuralis
Dokumentasi Publik Menyediakan informasi tentang perusahaan untuk publik, investor, dan mitra
Pusat Informasi Menjadi sumber rujukan utama tentang AXION Neuralis
Branding Membangun citra profesional dan inovatif

---

🎨 2. Identitas Visual (Brand Identity — Tidak Boleh Diubah)

2.1 Warna Wajib

Nama Hex Penggunaan
Background Body #f6f8fa Latar belakang utama
Background Card #ffffff Kartu, kontainer, modal
Background Nav rgba(255,255,255,0.92) Navbar (transparan)
Text Primary #1a1a2e Judul, teks penting
Text Secondary #3d3d5c Paragraf, deskripsi
Text Muted #6b6b8a Teks kurang penting, footer
Accent #2d2d5e Tombol CTA, highlight, link aktif (WAJIB)
Accent Light #4a4a7a Hover, efek interaksi
Accent Secondary #00D4FF Teks "Neuralis" di latar gelap, aksen alternatif
Border Light #e2e6ed Garis pembatas, divider

⚠️ LARANGAN: Mengganti warna accent (#2d2d5e) tanpa persetujuan CEO.

2.2 Font & Tipografi

Font Utama

Elemen Spesifikasi
Font Inter (Google Fonts)
Weights 300, 400, 500, 600, 700, 800
Fallback -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif

Ukuran Heading (Wajib)

Level Desktop Mobile Weight Line Height
h1 2.5rem (40px) 2rem (32px) 800 1.2
h2 2rem (32px) 1.5rem (24px) 700 1.3
h3 1.5rem (24px) 1.25rem (20px) 600 1.4
h4 1.25rem (20px) 1.125rem (18px) 600 1.4
h5 1.125rem (18px) 1rem (16px) 600 1.5
h6 1rem (16px) 0.875rem (14px) 600 1.5

Body Text

Elemen Desktop Mobile Weight Line Height
Body 1rem (16px) 0.875rem (14px) 400 1.7
Small 0.875rem (14px) 0.75rem (12px) 400 1.5

Spacing Standar (Wajib)

Nama Nilai Penggunaan
--space-xs 4px Jarak sangat kecil
--space-sm 8px Jarak kecil (ikon ke teks)
--space-md 16px Jarak antar elemen sejenis
--space-lg 24px Jarak antar section kecil
--space-xl 40px Jarak antar section besar
--space-2xl 60px Jarak antar halaman

2.3 Logo & Penggunaan

Elemen Aturan
Nama Perusahaan AXION Neuralis (huruf kapital semua)
Singkatan AXN
Logo Teks AXION<span>Neuralis</span> dengan accent color
Posisi Wajib di pojok kiri atas setiap halaman

Ukuran Logo

Posisi Ukuran Minimum Maksimum
Desktop 24px height 40px height
Mobile 18px height 28px height

Jarak Aman Logo (Clear Space)

· Minimal: 16px di semua sisi logo
· Tidak boleh ada elemen lain yang lebih dekat dari 16px

Logo di Latar Gelap

Elemen Warna
Teks "AXION" #ffffff
Teks "Neuralis" #00D4FF
Background #0A0F1E atau #1A233A

Catatan: Saat ini website menggunakan latar terang. Jika dark mode ditambahkan (V1.1), gunakan aturan di atas.

---

🧱 3. Struktur Website (Wajib)

3.1 Halaman Wajib (Minimal)

No Halaman File Fungsi
1 Beranda index.html Hero, ringkasan profil, CTA
2 Profil Perusahaan about.html Visi, misi, struktur tim
3 Layanan services.html Produk/jasa AXION Neuralis
4 Kontak contact.html Form, email, sosial media
5 404 Error 404.html Halaman tidak ditemukan

3.2 Struktur Folder (Wajib)

```
axion-neuralis/
├── pages/
│   ├── index.html
│   ├── about.html
│   ├── services.html
│   ├── contact.html
│   └── 404.html
├── assets/
│   ├── images/
│   │   ├── hero/
│   │   ├── team/
│   │   └── icons/          # WAJIB SVG
│   ├── audio/
│   │   ├── tp1E.mp3        # English
│   │   └── tp1I.mp3        # Indonesia
│   └── fonts/
├── css/
│   └── style.css
├── js/
│   └── main.js
└── docs/
    └── AXION_BIBLE.md
```

3.3 Aturan Nama File

Jenis Format Contoh Alasan
HTML namahalaman.html about.html Konsisten
Gambar nama-deskriptif.webp hero-banner.webp SEO & performa
Ikon nama-ikon.svg arrow-right.svg Scalable & ringan
Audio kode-deskripsi.mp3 tp1E.mp3 Konsisten

Kode Audio (Penjelasan)

Kode Arti
tp1 Topic 1 (semua topik dalam 1 file audio)
E English
I Indonesia

Contoh: tp1E.mp3 = semua topik dalam bahasa Inggris

---

🧭 4. Navigasi & Footer (Wajib)

4.1 Navigasi (Sticky)

Elemen Wajib Keterangan
Logo ✅ Di kiri atas
Menu ✅ Beranda, Profil, Layanan, Kontak
Link Azriel Space ✅ azriel-space.pages.dev
Language Selector ✅ EN / ID
Audio Play All ✅ Tombol speaker

4.2 Footer (Wajib)

Minimal berisi:

· Copyright & hak cipta
· Semua link (WA, Telegram, Email, Website)
· Nama perusahaan

Link wajib di footer:

Link Tujuan
cutt.ly/Eyukdpcq AXION Neuralis
cutt.ly/1yuQVFhf Azriel Space
cutt.ly/xyuGKF4M WhatsApp azriel.py
cutt.ly/PyuGXYgP Grup WA AXION
cutt.ly/6yuGVgXp Grup WA Azriel Space
t.me/azrielpyy Telegram azriel.py
t.me/azrielspace Telegram Azriel Space
t.me/axionneuralis Telegram AXION
mailto:azrielspace852@gmail.com Email

---

🔧 5. Teknis Website (Wajib)

5.1 Responsive (Wajib)

Breakpoint Rentang Status
Mobile 0 - 640px Wajib
Tablet 641px - 1024px Wajib
Desktop 1024px Wajib

5.2 Browser Support (Wajib)

Browser Versi Minimal
Chrome 2 versi terakhir
Firefox 2 versi terakhir
Safari 2 versi terakhir
Edge 2 versi terakhir

5.3 Bahasa (Wajib)

Bahasa Status Cara Implementasi
Indonesia Wajib (utama) lang="id" di <html>
Inggris Wajib (pendukung) lang="en" di <html>

Aturan:

· Atribut lang pada tag <html> diubah secara dinamis menggunakan JavaScript saat pengguna memilih bahasa.
· Semua konten tersimpan dalam object JavaScript (1 file).
· Switch bahasa menggunakan toggle di navbar.

5.4 Meta Tag & SEO (Wajib)

Tag Wajib Format
charset ✅ UTF-8
viewport ✅ width=device-width, initial-scale=1.0
title ✅ AXION Neuralis — [nama halaman]
description ✅ Maks 160 karakter
og:title ✅ Sama dengan title
og:description ✅ Sama dengan description
og:image ✅ Logo/screenshot website
og:url ✅ https://axion-neuralis.pages.dev/
twitter:card ✅ summary_large_image
favicon ✅ .ico atau .svg

Catatan: og:url menggunakan domain resmi saat ini. Jika domain berubah di masa depan, perbarui di semua halaman.

5.5 Loading & Onboarding

Fitur Wajib Durasi Aturan
Loading Screen ✅ 1-3 detik Logo + spinner, hilang otomatis
Onboarding Step 1 ✅ - Pilih Bahasa (EN/ID)
Onboarding Step 2 ✅ - Tentang dokumentasi (isi konten)
Onboarding Step 3 ✅ - Lisensi & hak cipta
Onboarding ✅ - Tersimpan di localStorage (tidak muncul lagi)

5.6 Audio (Wajib)

Fitur Wajib Keterangan
Audio per topik ✅ Setiap section punya tombol speaker
Play All ✅ Tombol di navbar untuk putar semua
Toggle ✅ Play/Pause, ikon berubah
Teks transkrip ✅ Wajib ada untuk aksesibilitas
Format ✅ MP3, bitrate 128kbps

5.7 Aksesibilitas (Wajib)

No Aturan Standar
1 alt pada semua gambar Deskriptif
2 aria-label pada tombol ikon "Play audio topik 1"
3 Kontras warna Minimal 4.5:1
4 Navigasi keyboard Tab, Enter, Escape
5 role pada elemen interaktif button, dialog, dll.
6 Skip to content link (opsional tapi disarankan)

5.8 Performa (Wajib)

No Aturan Target
1 Gambar format WebP Semua gambar
2 Lazy loading Gambar di bawah fold
3 Ukuran gambar maksimal 1920px width (desktop)
4 Kompresi gambar < 200KB per gambar
5 First Contentful Paint < 1.5 detik
6 Lighthouse score 90 (Performance)

5.9 Form Kontak (Spesifikasi Minimal)

Kolom Tipe Wajib Validasi
Nama Text ✅ Minimal 2 karakter
Email Email ✅ Format email valid
Pesan Textarea ✅ Minimal 10 karakter
Submit Button ✅ -

Pengiriman:

· mailto:azrielspace852@gmail.com (default)
· (Opsional) Gunakan Formspree / Netlify Forms di V2

⚠️ Catatan: mailto: akan membuka aplikasi email pengguna, bukan mengirim langsung dari website. Untuk pengiriman langsung lewat halaman, gunakan Formspree/Netlify Forms pada versi selanjutnya (V2.0+).

---

🚫 6. Hal yang DILARANG (Hard Restriction)

No Larangan Sanksi
1 Mengganti warna accent (#2d2d5e) Wajib perbaiki sebelum deploy
2 Menghapus 404.html Tidak boleh deploy
3 Deploy tanpa testing Dilakukan rollback
4 Menggunakan gambar tanpa lisensi Dihapus & diganti
5 Menghapus footer copyright Peringatan keras
6 Menambahkan fitur tanpa persetujuan Direview & dibatalkan
7 Mengubah struktur folder Membingungkan tim, wajib konsisten
8 Konten negatif/tidak sesuai visi Dihapus & klarifikasi
9 Menggunakan framework berat tanpa izin Dibatalkan, pakai vanilla
10 Menghapus link wajib di footer Wajib dikembalikan
11 Mengubah dokumen ini tanpa persetujuan Perubahan dibatalkan

Siapa yang boleh mengubah dokumen ini?

Role Hak
CEO (Azriel) ✅ Full akses
Ketua Tim ✅ Dapat mengusulkan perubahan
Anggota Tim ❌ Tidak bisa mengubah

Prosedur perubahan:

1. Usulkan perubahan via issue/diskusi
2. Disetujui oleh CEO
3. Update versi & changelog
4. Informasikan ke semua tim

---

✅ 7. Hal yang WAJIB (Must Have)

No Wajib PIC Status
1 Navigasi sticky GP-01 ✅
2 Footer lengkap GP-01 ✅
3 Responsive (3 breakpoint) GP-02 ✅
4 Loading screen GP-03 ✅
5 Onboarding (3 langkah) GP-03 ✅
6 404.html GP-01 ✅
7 Dukungan 2 bahasa GP-06 ✅
8 Semantic HTML GP-01 ✅
9 Meta description & title GP-01 ✅
10 Open Graph tags GP-01 ✅
11 Favicon GP-04 ✅
12 Audio player per topik GP-03 ✅
13 Play All audio GP-03 ✅
14 Link Azriel Space GP-01 ✅
15 Optimasi gambar (WebP) GP-04 ⏳
16 Lazy loading gambar GP-01 ⏳
17 Aksesibilitas (alt, aria-label) GP-01 ⏳
18 Form kontak GP-03 ❌
19 Analytics (opsional) GP-05 ❌

Catatan Analytics (No. 19)

Rencana: Plausible atau Google Analytics — privasi diutamakan, tidak ada pelacakan iklan.
Target implementasi: V1.1 (setelah fitur dark/light mode selesai).
PIC: GP-05 (Debugging) akan memilih & memasang tools analytics.

---

📋 8. Standar Kode (Wajib)

8.1 HTML

· Semantic HTML (<header>, <nav>, <main>, <section>, <footer>)
· 1 halaman = 1 file HTML
· Meta tag lengkap (charset, viewport, description, OG)
· Atribut lang wajib di <html> (diubah dinamis via JS)

8.2 CSS

· Gunakan CSS variables (:root)
· Mobile-first approach
· Class naming: BEM (opsional, tapi konsisten)
· Gunakan spacing variables yang sudah ditentukan

8.3 JavaScript

· 1 file utama (main.js)
· Modular (fungsi terpisah)
· Error handling wajib
· LocalStorage untuk onboarding & preferensi
· Ubah atribut lang <html> saat switch bahasa

8.4 Commit Message (Wajib)

Format: [GP-XX] jenis: pesan singkat

Jenis:

· feat = fitur baru
· fix = perbaikan bug
· style = styling/perapihan
· docs = dokumentasi
· test = testing
· perf = performa

Contoh:

```
[GP-01] feat: tambah halaman about.html
[GP-02] fix: perbaiki responsive di mobile
[GP-03] style: tambah animasi navbar
[GP-05] test: update 404.html
```

---

🏛️ 9. Struktur Tim (Wajib)

Gugus Kode Tanggung Jawab
Pages GP-01 HTML, struktur halaman
Styling GP-02 CSS, responsive, UI/UX
Interaksi GP-03 JavaScript, audio, animasi
Aset GP-04 Gambar, ikon, audio, optimasi
Debugging GP-05 Testing, bug fix, performa, analytics
Konten GP-06 Copywriting, multilingual

---

📝 10. Changelog

Tanggal Versi Perubahan
31/07/2026 1.0.0 Inisialisasi AXION BIBLE
31/07/2026 1.1.0 Tambah struktur tim, alur pengerjaan, beta testing, 404.html
31/07/2026 2.0.0 Fokus ke proyek website, pisahkan dari perusahaan
31/07/2026 2.1.0 Lengkapi: font size, spacing, logo rules, meta tags, aksesibilitas, performa, form kontak, aturan edit dokumen, browser support, kode audio
31/07/2026 2.1.1 Final: tambah #00D4FF di warna, klarifikasi lang dinamis, catatan mailto, klarifikasi analytics, versi di judul

---

🔗 11. Dokumen Pendukung

Dokumen Fungsi Status
AXION BLUEPRINT Cara teknis membuat (cara) Belum dibuat
AXION ROADMAP Jadwal & milestone (kapan) Belum dibuat
AXION STYLEGUIDE Panduan visual detail Belum dibuat

---

— AXION Neuralis Team, 31 Juli 2026
Dokumen ini adalah sumber kebenaran mutlak untuk pengembangan website.
Tidak boleh diubah tanpa persetujuan CEO.

---
📜 SURAT PERNYATAAN RESMI

---

Dengan ini dinyatakan bahwa:

📘 AXION BIBLE — Proyek Website

Versi 2.1.1
Tanggal Berlaku: 31 Juli 2026

---

RESMI ditetapkan sebagai pedoman mutlak (sumber kebenaran) untuk seluruh proses pengembangan website AXION Neuralis.

---

🏛️ Berlaku Untuk:

No Aspek Keterangan
1 Seluruh Tim GP-01 s.d. GP-06 wajib mengacu ke dokumen ini
2 Seluruh Tahapan Desain → Pengembangan → Testing → Deploy
3 Seluruh Keputusan Setiap perubahan wajib merujuk ke Bible ini
4 Seluruh Output Kode, desain, konten, aset — semua mengikuti aturan

---

⚠️ Konsekuensi

Pelanggaran Tindakan
Melanggar aturan wajib (Hard Restriction) Pekerjaan ditolak/dibatalkan, wajib perbaiki
Mengubah dokumen tanpa izin Perubahan dibatalkan, teguran tertulis
Deploy tanpa mengikuti Bible Rollback + evaluasi tim

---

✅ Disahkan Oleh:

Jabatan Nama Tanda Tangan
Founder & CEO Chor Yonsu Frimaz Avril Lafieqta (Azriel) _________________

---

Dokumen ini mulai berlaku efektif pada: 31 Juli 2026
Berlaku sampai: Ada perubahan versi baru yang disahkan secara resmi.

---

📋 Lampiran

· 📘 AXION BIBLE v2.1.1 (dokumen utama)
· 🔗 Link akses: [dokumen ini akan disimpan di docs/AXION_BIBLE.md]

---

— AXION Neuralis, 31 Juli 2026

```
