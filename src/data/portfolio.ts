export const NAME = 'Abdulloh Farros';
export const EMAIL = 'abdullohfarros@gmail.com';
export const GITHUB_URL = 'https://github.com/Bloodsz1';
export const TIKTOK_HANDLE = '@bloods_2.0';
export const TIKTOK_URL = 'https://www.tiktok.com/@bloods_2.0';

/**
 * Tombol "Unduh CV" di Hero dan Contact.
 * Taruh file PDF di folder `public/` (mis. public/cv-abdulloh-farros.pdf),
 * lalu isi dengan '/cv-abdulloh-farros.pdf'. Biarkan null untuk menyembunyikan tombol.
 */
export const CV_URL: string | null = null;

/**
 * Foto profil untuk section About.
 * Taruh foto di `public/` (mis. public/foto-farros.jpg), lalu isi
 * { src: '/foto-farros.jpg', alt: 'Foto Abdulloh Farros' }.
 * Biarkan null untuk menampilkan monogram "AF".
 */
export const PROFILE_PHOTO: { src: string; alt: string } | null = null;

export const images = {
  hero: {
    src: 'https://images.pexels.com/photos/8037008/pexels-photo-8037008.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    alt: 'Laptop menyala di ruangan gelap pada malam hari',
  },
  contact: {
    src: 'https://images.pexels.com/photos/11467638/pexels-photo-11467638.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    alt: 'Tangan di tengah cahaya merah yang pekat',
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
  headline: 'Membangun solusi praktis lewat kode, AI, dan otomasi.',
  description:
    'Saya sedang membangun fondasi di software development dan applied AI. Saya belajar dengan membuat: aplikasi Python, alur otomasi, dan konten yang performanya bisa diukur.',
};

export const tickerItems = [
  'Python',
  'Software Development',
  'Applied AI',
  'Integrasi API',
  'Otomasi',
  'Content Creator',
  'Investasi Saham',
];

export const aboutParagraphs = [
  'Saya Abdulloh Farros, biasa dipanggil Farros. Saya tertarik pada pemrograman, artificial intelligence, dan otomasi, terutama bagaimana ketiganya bisa dipakai untuk pekerjaan nyata.',
  'Saya percaya memahami teknologi tidak cukup dengan teori. Saya ingin membangun sesuatu, memahami bagaimana sistem bekerja, dan membuat solusi yang benar-benar bisa dipakai. Proyek-proyek di portofolio ini adalah latihan nyata: mengelola tugas, mengelola perpustakaan, dan melacak performa konten.',
  'Saat ini saya memperdalam Python, software development, integrasi API, dan penggunaan model AI di dalam aplikasi.',
  `Di luar kode, saya membuat konten di TikTok (${TIKTOK_HANDLE}) dan aktif berinvestasi di bursa saham Indonesia (IDX).`,
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

export const heroFacts = [
  {
    value: String(projects.filter((p) => p.status === 'selesai').length),
    label: 'proyek selesai di GitHub',
  },
  { value: 'CS50P', label: 'sertifikat Harvard' },
  { value: 'Python', label: 'bahasa utama' },
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

export const certification: {
  title: string;
  institution: string;
  status: string;
  /** Link verifikasi sertifikat (opsional). Tombol muncul otomatis jika diisi. */
  verifyUrl: string | null;
} = {
  title: "CS50's Introduction to Programming with Python",
  institution: 'Harvard University — CS50',
  status: 'Selesai · sertifikat diperoleh',
  verifyUrl: null,
};

export const contactCopy =
  'Saya selalu tertarik untuk belajar, membangun, dan menjelajahi penerapan teknologi yang praktis. Punya ide, peluang kolaborasi, atau sekadar ingin ngobrol? Silakan hubungi saya.';
