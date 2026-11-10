export const NAME = 'Abdulloh Farros';
export const EMAIL = 'abdullohfarros@gmail.com';
export const GITHUB_URL = 'https://github.com/Bloodsz1';
export const TIKTOK_HANDLE = '@farros.z1';
export const TIKTOK_URL = 'https://www.tiktok.com/@farros.z1';
export const INSTAGRAM_HANDLE = '@farros.py';
export const INSTAGRAM_URL = 'https://www.instagram.com/farros.py';

/**
 * Tombol "Unduh CV" di Hero dan Contact.
 * Taruh file PDF di folder `public/` (mis. public/cv-abdulloh-farros.pdf),
 * lalu isi dengan '/cv-abdulloh-farros.pdf'. Biarkan null untuk menyembunyikan tombol.
 */
export const CV_URL: string | null = null;

/**
 * Foto profil hitam-putih untuk Hero (dan monogram diganti di About bila diisi).
 * File: public/images/farros.webp
 */
export const PROFILE_PHOTO: { src: string; alt: string } | null = {
  src: '/images/farros.webp',
  alt: 'Potret hitam putih Abdulloh Farros memakai kacamata dan jas',
};

export const images = {
  contact: {
    src: '/images/github-avatar.webp',
    alt: 'Swafoto Abdulloh Farros berkacamata kuning di kebun teh',
  },
} as const;

export const navItems = [
  { id: 'home', label: 'Beranda' },
  { id: 'about', label: 'Tentang' },
  { id: 'projects', label: 'Proyek' },
  { id: 'tech-stack', label: 'Tech Stack' },
  { id: 'journey', label: 'Perjalanan' },
  { id: 'certification', label: 'Sertifikasi' },
  { id: 'contact', label: 'Kontak' },
] as const;

export const heroCopy = {
  location: 'INDONESIA',
  positioning: 'Aspiring AI Applied Engineer',
  greeting: "Hello, I'm",
  roles: ['Python Developer &', 'Applied AI Learner'] as const,
  headline: 'Membangun solusi praktis lewat kode, AI, dan otomasi.',
  tagline: ['Membangun solusi praktis', 'lewat kode, AI, dan otomasi.'] as const,
  description:
    'Saya sedang membangun fondasi di software development dan applied AI. Saya belajar dengan membuat: aplikasi Python, alur otomasi, dan integrasi API.',
};

/**
 * Logo yang melayang di latar belakang seluruh halaman (PNG transparan di public/logos/).
 * Urutan mengikuti posisi di FloatingLogos.tsx.
 */
export const backgroundLogos: { name: string; src: string }[] = [
  { name: 'Python', src: '/logos/python.png' },
  { name: 'Visual Studio Code', src: '/logos/vscode.png' },
  { name: 'Claude', src: '/logos/claude.png' },
  { name: 'OpenAI', src: '/logos/openai.png' },
  { name: 'Folder', src: '/logos/folder.png' },
];

export const tickerItems = [
  'Python',
  'Software Development',
  'Applied AI',
  'Integrasi API',
  'Otomasi',
  'Investasi Saham',
  'Investasi Bitcoin',
];

export const aboutParagraphs = [
  'Saya Abdulloh Farros, biasa dipanggil Farros. Saya tertarik pada pemrograman, artificial intelligence, dan otomasi, terutama bagaimana ketiganya bisa dipakai untuk pekerjaan nyata.',
  'Saya percaya memahami teknologi tidak cukup dengan teori. Saya ingin membangun sesuatu, memahami bagaimana sistem bekerja, dan membuat solusi yang benar-benar bisa dipakai. Proyek-proyek di portofolio ini adalah latihan nyata: mengelola tugas, mengelola perpustakaan, dan melacak performa konten.',
  'Saat ini saya memperdalam Python, software development, integrasi API, dan penggunaan model AI di dalam aplikasi.',
  'Di luar kode, saya aktif berinvestasi di bursa saham Indonesia (IDX) dan juga di Bitcoin.',
];

export type ProjectStatus = 'selesai' | 'berjalan' | 'rencana';

export interface Project {
  number: string;
  /**
   * Screenshot proyek. Taruh gambar di `public/projects/` lalu isi
   * { src: '/projects/nama.png', alt: '...' }. Jika dikosongkan, kartu
   * memakai cover otomatis (jendela terminal) tanpa foto stok.
   */
  image?: { src: string; alt: string };
  title: string;
  category: string;
  status: ProjectStatus;
  summary: string;
  features: string[];
  tech: string[];
  repoUrl?: string;
  /** Link demo langsung (opsional). Tombol muncul otomatis jika diisi. */
  demoUrl?: string;
}

export const projects: Project[] = [
  {
    number: '01',
    title: 'Library Management System',
    image: {
      src: '/projects/library.webp',
      alt: 'Dasbor aplikasi perpustakaan FARROS: total buku, anggota, peminjaman terbaru, dan buku per subjek',
    },
    category: 'Aplikasi Desktop',
    status: 'selesai',
    summary:
      'Aplikasi manajemen perpustakaan dengan antarmuka grafis Tkinter. Mengelola koleksi buku dan anggota, mencatat peminjaman, menghitung denda keterlambatan, dan menyajikan laporan.',
    features: [
      'Kelola buku: tambah, edit, hapus, dan cari berdasarkan judul',
      'Data anggota dengan batas maksimal pinjam per anggota',
      'Peminjaman dan pengembalian dengan jatuh tempo serta denda per hari',
      'Laporan: ringkasan, buku terpopuler, anggota teraktif, dan daftar keterlambatan',
      'Ekspor laporan ke CSV dan pengaturan perpustakaan yang bisa diubah',
    ],
    tech: ['Python', 'Tkinter', 'JSON', 'CSV'],
    repoUrl: 'https://github.com/Bloodsz1/Belajar-hal-dasar/tree/main/perpustakaan',
  },
  {
    number: '02',
    title: 'To-Do List Application',
    category: 'Aplikasi Terminal',
    status: 'selesai',
    summary:
      'Aplikasi manajemen tugas berbasis terminal yang menyimpan data tugas dalam file JSON.',
    features: [
      'Tambah, lihat, edit, dan hapus tugas',
      'Atur deadline dan prioritas tugas',
      'Tandai selesai dan batalkan status selesai',
      'Cari tugas dan filter berdasarkan prioritas atau status',
      'Statistik tugas',
    ],
    tech: ['Python', 'JSON', 'datetime', 'pathlib'],
    repoUrl: 'https://github.com/Bloodsz1/Belajar-hal-dasar/blob/main/.vscode/apktugas.py',
  },
  {
    number: '03',
    title: 'Pelacak Konten',
    category: 'Aplikasi Terminal',
    status: 'selesai',
    summary:
      'Program untuk mencatat konten, jumlah views, dan konsepnya, lengkap dengan ringkasan dan analisis performa.',
    features: [
      'Tambah, lihat, dan hapus konten dengan konfirmasi',
      'Ringkasan jumlah konten per konsep',
      'Total views per konsep',
      'Dashboard statistik dengan konten terbaik dan terendah',
      'Analisis performa dan konsep dengan rata-rata views tertinggi',
    ],
    tech: ['Python', 'JSON', 'date', 'pathlib'],
    repoUrl: 'https://github.com/Bloodsz1/Pelacak-konten',
  },
  {
    number: '04',
    title: 'Proyek AI & API berikutnya',
    category: 'AI & Otomasi',
    status: 'rencana',
    summary:
      'Langkah berikutnya: menghubungkan model AI ke aplikasi lewat API untuk mengotomatiskan pekerjaan nyata. Detail, screenshot, dan demo akan ditambahkan di sini setelah proyeknya jadi.',
    features: [],
    tech: ['Python', 'HTTP & API', 'Model AI', 'n8n'],
  },
];

export type TechStatus = 'studied' | 'exploring';

export interface TechGroup {
  category: string;
  items: { name: string; status: TechStatus }[];
}

export const techGroups: TechGroup[] = [
  {
    category: 'Pemrograman',
    items: [{ name: 'Python', status: 'studied' }],
  },
  {
    category: 'Alat Pengembangan',
    items: [
      { name: 'Git', status: 'studied' },
      { name: 'GitHub', status: 'studied' },
      { name: 'Visual Studio Code', status: 'studied' },
    ],
  },
  {
    category: 'Pengolahan Data',
    items: [
      { name: 'JSON', status: 'studied' },
      { name: 'Pengolahan data dasar', status: 'studied' },
    ],
  },
  {
    category: 'Alat AI',
    items: [
      { name: 'ChatGPT', status: 'studied' },
      { name: 'Claude', status: 'studied' },
      { name: 'Gemini', status: 'studied' },
    ],
  },
  {
    category: 'Otomasi',
    items: [{ name: 'n8n', status: 'exploring' }],
  },
];

export const exploringItems = [
  'Dasar-dasar HTTP dan API',
  'Membuat HTTP request dengan Python',
  'Integrasi API',
  'Menghubungkan model AI ke aplikasi',
  'Otomasi alur kerja yang praktis',
];

export const journeySteps = [
  {
    title: 'Pemrograman Python',
    description:
      'Mempelajari dasar Python, fungsi, struktur data, pengelolaan file, JSON, dan object-oriented programming.',
  },
  {
    title: 'Software Development',
    description:
      'Berlatih Git dan GitHub, operasi CRUD, dan membangun aplikasi-aplikasi kecil.',
  },
  {
    title: 'Applied AI & Otomasi',
    description:
      'Mengeksplorasi alat AI, integrasi API, dan otomasi alur kerja.',
  },
];

export interface Certificate {
  number: string;
  title: string;
  issuer: string;
  /** Teks besar di sisi kanan baris (tahun atau nama program). */
  badge: string;
  /**
   * Berkas sertifikat yang tampil di jendela pratinjau.
   * Taruh file di `public/certificates/` lalu isi, mis.
   * { src: '/certificates/cs50p.pdf', alt: 'Sertifikat CS50P Abdulloh Farros', kind: 'pdf' }
   * (kind: 'pdf' atau 'image'). Biarkan null jika belum ada.
   */
  file: { src: string; alt: string; kind: 'image' | 'pdf' } | null;
  /** Tautan verifikasi resmi dari penerbit (biasanya https://certificates.cs50.io/...). */
  verifyUrl: string | null;
}

export const certificates: Certificate[] = [
  {
    number: '01',
    title: "CS50's Introduction to Programming with Python",
    issuer: 'Harvard University · CS50',
    badge: 'CS50P',
    file: { src: '/certificates/cs50p.webp', alt: 'Sertifikat CS50P Abdulloh Farros dari Harvard CS50', kind: 'image' },
    verifyUrl: 'https://cs50.harvard.edu/certificates/be144f2b-476b-43ba-b9d3-b6eaaeb86114',
  },
];

export const contactCopy =
  'Saya selalu tertarik untuk belajar, membangun, dan menjelajahi penerapan teknologi yang praktis. Punya ide, peluang kolaborasi, atau sekadar ingin ngobrol? Silakan hubungi saya.';

export const heroStats = [
  {
    value: String(projects.filter((p) => p.status === 'selesai').length),
    label: 'Proyek selesai di GitHub',
    href: '#projects',
  },
  {
    value: String(certificates.length),
    label: 'Sertifikat Harvard CS50P',
    href: '#certification',
  },
  {
    value: String(techGroups.flatMap((group) => group.items).length),
    label: 'Alat & keterampilan',
    href: '#tech-stack',
  },
];
