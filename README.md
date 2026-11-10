# Portofolio — Abdulloh Farros

Situs portofolio pribadi: proyek Python, perjalanan belajar menuju Applied AI, dan kontak.
Dibangun dengan React 19, TypeScript, Vite, Tailwind CSS, dan Framer Motion.

## Menjalankan

```bash
npm install
npm run dev        # server pengembangan
npm run build      # build produksi ke dist/
npm run preview    # pratinjau hasil build
npm run typecheck  # cek tipe TypeScript
npm run lint
```

## Mengubah isi

Hampir semua teks dan data ada di satu file: [`src/data/portfolio.ts`](src/data/portfolio.ts).

| Yang ingin diubah | Lokasi |
| --- | --- |
| Teks hero, tentang, kontak | `heroCopy`, `aboutParagraphs`, `contactCopy` |
| Daftar proyek | `projects` |
| Tech stack dan yang sedang dipelajari | `techGroups`, `exploringItems` |
| Sertifikat | `certification` |

### Slot opsional (muncul otomatis saat diisi)

- **Tombol CV**: taruh PDF di `public/`, lalu isi `CV_URL` (mis. `'/cv-abdulloh-farros.pdf'`).
- **Foto profil**: taruh foto di `public/`, lalu isi `PROFILE_PHOTO`. Tanpa foto, section About menampilkan monogram.
- **Screenshot proyek**: taruh gambar di `public/projects/`, lalu isi `image` pada proyek terkait. Tanpa `image`, kartu memakai cover terminal otomatis.
- **Demo langsung**: isi `demoUrl` pada proyek. Tombol "Lihat demo" muncul otomatis.
- **Verifikasi sertifikat**: isi `certification.verifyUrl`.

### Menambah proyek baru

Tambahkan objek baru ke array `projects`. Gunakan `status: 'berjalan'` untuk proyek yang sedang dibangun
(kartu diberi badge) atau `'rencana'` untuk proyek yang baru direncanakan (tampil sebagai kartu lebar bergaris putus).
Saat proyeknya selesai, ubah menjadi `'selesai'` dan lengkapi `features`, `repoUrl`, serta screenshot/demo.

## Deploy

Situs ini statis, jadi cocok untuk Vercel, Netlify, atau Cloudflare Pages:

- Build command: `npm run build`
- Output directory: `dist`

Setelah punya alamat situs, set environment variable `VITE_SITE_URL` (mis. `https://namamu.vercel.app`, tanpa
garis miring di akhir) supaya canonical dan gambar pratinjau link (Open Graph) memakai alamat lengkap.

Untuk GitHub Pages, atur `base` di `vite.config.ts` sesuai nama repo.

## Aset

- `public/favicon.svg`, `public/apple-touch-icon.png`: ikon situs.
- `public/og-image.png` (1200×630): gambar pratinjau saat link dibagikan.
- `public/robots.txt`.
