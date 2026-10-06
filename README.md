# Ifen Faridian Rahmadan — Web Portfolio

Web portofolio personal interaktif untuk **Ifen Faridian Rahmadan** (Expert Industrial Engineer & Fullstack System Integrator), dibangun menggunakan **Svelte 5**, **Tailwind CSS v4**, **TypeScript**, dan **Vite**.

![OG Preview Banner](./public/og-image.svg)

---

## 🛠️ Tech Stack & Arsitektur

- **Framework**: Svelte 5 (`@sveltejs/vite-plugin-svelte`)
- **Styling**: Tailwind CSS v4 (`@tailwindcss/vite` & CSS Custom Properties)
- **Bahasa**: TypeScript (`strict` mode)
- **Bundler**: Vite 6+
- **Deploy**: GitHub Actions CI/CD ke GitHub Pages (`github.io`)

---

## 💻 Cara Menjalankan Aplikasi Secara Lokal

### Prasyarat
- **Node.js**: v18.0.0 atau lebih baru (Disarankan Node 20 LTS)
- **npm**: v9.0.0 atau lebih baru

### Langkah-langkah

1. **Clone Repository**:
   ```bash
   git clone https://github.com/jeddenkah/portfolio-web.git
   cd portfolio-web
   ```

2. **Install Dependencies**:
   ```bash
   npm install
   ```

3. **Jalankan Server Development**:
   ```bash
   npm run dev
   ```
   Buka browser di `http://localhost:5173` untuk melihat tampilan portofolio secara *live-reload*.

4. **Pemeriksaan Tipe & Svelte Diagnostic**:
   ```bash
   npm run check
   ```

5. **Build untuk Produksi**:
   ```bash
   npm run build
   ```
   Hasil build siap saji akan dibuat di folder `dist/`.

6. **Preview Production Build**:
   ```bash
   npm run preview
   ```

---

## 🚀 Cara Setting GitHub Pages agar Langsung Live (github.io)

Repository ini telah dilengkapi dengan **GitHub Actions Workflow** otomatis di `.github/workflows/deploy.yml`. Setiap kali Anda melakukan `git push` ke branch `main`, aplikasi akan otomatis di-build dan di-deploy.

### Langkah Setting di Dashboard GitHub:

1. **Push Seluruh Kode ke Repository**:
   ```bash
   git add .
   git commit -m "feat: complete portfolio & github pages setup"
   git push origin main
   ```

2. **Buka Repository di GitHub**:
   - Masuk ke tab **Settings** di bagian atas repository Anda.

3. **Pilih Menu GitHub Pages**:
   - Pada sidebar sebelah kiri, klik **Pages** (di bawah kelompok *Code and automation*).

4. **Ubah Build Source ke GitHub Actions**:
   - Pada opsi **Build and deployment** > **Source**:
   - Ganti pilihan dari *Deploy from a branch* menjadi **`GitHub Actions`**.

5. **Selesai! Workflow Otomatis Berjalan**:
   - Buka tab **Actions** di repo Anda untuk melihat status build.
   - Dalam 1-2 menit, situs Anda akan langsung live di alamat:
     ```text
     https://jeddenkah.github.io/portfolio-web/
     ```

---

## 🔍 Fitur SEO & Optimasi Search Engine

Portofolio ini sudah dioptimalkan agar ramah Search Engine (Google/Bing) dan pratinjau media sosial:

- **Primary Meta Tags**: Meta title, description, keywords, & author.
- **Open Graph (og:tags)**: Tampilan pratinjau banner kartu interaktif saat link dibagikan di LinkedIn, WhatsApp, Telegram, Discord, dan Facebook.
- **Twitter Card**: `summary_large_image` support.
- **Structured Data (JSON-LD)**: Schema.org `@graph` (`Person`, `WebSite`, `ProfilePage`) untuk Knowledge Graph Google.
- **Indexing Files**:
  - `public/robots.txt` (mengizinkan crawler)
  - `public/sitemap.xml` (sitemap resmi)
  - `public/og-image.svg` (banner 1200x630px)

---

## 📄 Lisensi & Hak Cipta

Didesain & Dikembangkan oleh **Ifen Faridian Rahmadan** © 2026.
