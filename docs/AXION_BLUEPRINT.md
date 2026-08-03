```markdown```


📐 AXION BLUEPRINT — Proyek Website

Versi: 1.0.3
Tanggal Rilis: 31 Juli 2026
Status: ⏳ Belum dimulai
Dokumen Terkait: BIBLE v2.1.1 | ROADMAP v1.0.1

---

🏗️ 2. Struktur Folder (FULL — Final)

```
axion-neuralis/                                 # ROOT PROYEK
│
├── pages/                                      # SEMUA HALAMAN HTML
│   ├── index.html                              # Beranda
│   ├── about.html                              # Profil Perusahaan
│   ├── services.html                           # Layanan
│   ├── contact.html                            # Kontak
│   └── 404.html                                # Halaman Tidak Ditemukan
│
├── assets/                                     # SEMUA ASET
│   ├── images/
│   │   ├── hero/                               # Gambar hero/banner
│   │   │   ├── hero-banner.webp                # Banner utama (≤200KB)
│   │   │   └── og-image.webp                   # Untuk OG Tag (≤200KB)
│   │   ├── team/                               # Foto tim
│   │   │   └── azriel.webp                     # Foto Azriel (≤200KB)
│   │   └── icons/                              # SEMUA IKON (WAJIB SVG)
│   │       ├── logo.svg                        # Logo AXION Neuralis
│   │       ├── favicon.svg                     # Favicon
│   │       ├── arrow-right.svg                 # Panah kanan
│   │       ├── arrow-left.svg                  # Panah kiri
│   │       ├── play.svg                        # Ikon Play
│   │       ├── pause.svg                       # Ikon Pause
│   │       ├── speaker.svg                     # Ikon Speaker (Play All)
│   │       ├── language.svg                    # Ikon Ganti Bahasa
│   │       ├── close.svg                       # Ikon Tutup (onboarding/modal)
│   │       └── check.svg                       # Ikon Centang (onboarding selesai)
│   ├── audio/                                  # SEMUA AUDIO (MP3 128kbps)
│   │   ├── tp1E.mp3                            # Topic 1 — English
│   │   └── tp1I.mp3                            # Topic 1 — Indonesia
│   └── fonts/                                  # (KOSONG — Inter dari Google Fonts)
│
├── css/                                        # SEMUA CSS
│   └── style.css                               # FILE CSS UTAMA (1 file aja)
│
├── js/                                         # SEMUA JAVASCRIPT
│   └── main.js                                 # FILE JS UTAMA (1 file aja)
│
└── docs/                                       # DOKUMENTASI PROYEK
    ├── AXION_BIBLE.md                          # Konstitusi (v2.1.1)
    ├── AXION_ROADMAP.md                        # Jadwal (v1.0.1)
    └── AXION_BLUEPRINT.md                      # Panduan Teknis (v1.0.3) ← ini
```

---

📋 2.1 Total File Wajib (✅ FINAL — 25 FILE)

Jenis Jumlah Format Keterangan
HTML 5 .html index, about, services, contact, 404
CSS 1 .css style.css
JavaScript 1 .js main.js
Gambar Hero 2 .webp hero-banner, og-image
Gambar Tim 1 .webp azriel
Ikon 10 .svg logo, favicon, arrow-right, arrow-left, play, pause, speaker, language, close, check
Audio 2 .mp3 tp1E, tp1I
Dokumentasi 3 .md BIBLE, ROADMAP, BLUEPRINT
TOTAL 25 - Semua wajib ada sebelum deploy

---

🖼️ 3. Detail Ikon SVG (✅ 10 IKON — LENGKAP)

GP-04 wajib sediakan semua ikon di bawah ini dengan format SVG murni (bukan PNG/JPG yang diubah ekstensi):

No Nama File Fungsi Ukuran Minimal Warna
1 logo.svg Logo di navbar & footer 24x24px #2d2d5e (AXION) + #00D4FF (Neuralis)
2 favicon.svg Favicon tab browser 32x32px #2d2d5e
3 arrow-right.svg Tombol CTA / link 16x16px #2d2d5e
4 arrow-left.svg Navigasi back 16x16px #2d2d5e
5 play.svg Tombol play audio 20x20px #2d2d5e
6 pause.svg Tombol pause audio 20x20px #2d2d5e
7 speaker.svg Tombol Play All di navbar 24x24px #2d2d5e
8 language.svg Tombol switch bahasa 24x24px #2d2d5e
9 close.svg Tombol tutup modal (onboarding) 16x16px #6b6b8a
10 check.svg Ikon selesai (onboarding step 3) 20x20px #2d2d5e

---

📝 4. Changelog

Versi Tanggal Perubahan
1.0.0 31/07/2026 Inisialisasi AXION BLUEPRINT
1.0.1 31/07/2026 Perbaiki 9 link footer, sticky navbar + hamburger, path relatif, audio toggle + play all, onboarding localStorage, loading fallback, semantic HTML, aksesibilitas, render multilingual, tambah aset favicon & og-image
1.0.2 31/07/2026 Struktur folder FULL — tambah semua ikon (10 SVG), detail ukuran & warna tiap ikon, total file 22, tabel path relatif
1.0.3 31/07/2026 Perbaiki total ikon: 9 → 10, total file: 22 → 25 ✅

---

Disahkan oleh:
Chor Yonsu Frimaz Avril Lafieqta (Azriel)
Founder & CEO AXION Neuralis
31 Juli 2026

```
