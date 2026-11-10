export const NAME = 'Abdulloh Farros';

export const images = {
  hero: {
    src: 'https://images.pexels.com/photos/8037008/pexels-photo-8037008.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    alt: 'Laptop menyala di ruangan gelap pada malam hari',
  },
  about: {
    src: 'https://images.pexels.com/photos/5473299/pexels-photo-5473299.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    alt: 'Ruang kerja gelap dengan dua monitor untuk pemrograman',
  },
  contact: {
    src: 'https://images.pexels.com/photos/11467638/pexels-photo-11467638.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    alt: 'Tangan di tengah cahaya merah yang pekat',
  },
} as const;
export const EMAIL = 'abdullohfarros@gmail.com';
export const GITHUB_URL = 'https://github.com/Bloodsz1';

export const navItems = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'projects', label: 'Projects' },
  { id: 'tech-stack', label: 'Tech Stack' },
  { id: 'journey', label: 'Learning Journey' },
  { id: 'contact', label: 'Contact' },
] as const;

export const heroCopy = {
  location: 'INDONESIA',
  positioning: 'Aspiring AI Applied Engineer',
  headline: 'Building practical solutions through code, AI, and automation.',
  description:
    'Saya sedang membangun fondasi di bidang software development dan applied AI. Fokus saya adalah memahami teknologi, membangun aplikasi praktis, dan mengintegrasikan AI untuk menyelesaikan masalah nyata.',
};

export const aboutParagraphs = [
  'Nama saya Abdulloh Farros. Saya memiliki ketertarikan pada pemrograman, artificial intelligence, dan automation.',
  'Saya percaya bahwa memahami teknologi tidak cukup hanya dengan mempelajari teori. Saya ingin membangun sesuatu, memahami bagaimana sistem bekerja, dan mengembangkan solusi yang benar-benar bisa digunakan.',
  'Saat ini saya sedang memperdalam Python, software development, API integration, dan penggunaan AI models dalam aplikasi nyata.',
];

export interface Project {
  number: string;
  image: { src: string; alt: string };
  title: string;
  category: string;
  summary: string;
  features: string[];
  tech: string[];
  repoUrl: string;
  repoLabel: string;
}

export const projects: Project[] = [
  {
    number: '01',
    image: {
      src: 'https://images.pexels.com/photos/38796481/pexels-photo-38796481.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
      alt: 'Perpustakaan gelap dengan rak buku kayu tinggi',
    },
    title: 'Library Management System',
    category: 'Aplikasi Desktop',
    summary:
      'Aplikasi manajemen perpustakaan berbasis Python dengan antarmuka grafis (GUI).',
    features: [],
    tech: ['Python', 'GUI'],
    repoUrl: 'https://github.com/Bloodsz1/Belajar-hal-dasar/tree/main/perpustakaan',
    repoLabel: 'Belajar-hal-dasar / perpustakaan',
  },
  {
    number: '02',
    image: {
      src: 'https://images.pexels.com/photos/35719566/pexels-photo-35719566.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
      alt: 'Tangan menulis daftar periksa di buku catatan',
    },
    title: 'To-Do List Application',
    category: 'Aplikasi Terminal',
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
    repoLabel: 'Belajar-hal-dasar / .vscode / apktugas.py',
  },
  {
    number: '03',
    image: {
      src: 'https://images.pexels.com/photos/11798249/pexels-photo-11798249.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
      alt: 'Data grafik saham pada layar komputer',
    },
    title: 'Pelacak Konten',
    category: 'Aplikasi Terminal',
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
    repoLabel: 'Pelacak-konten',
  },
];

export type TechStatus = 'studied' | 'exploring';

export interface TechGroup {
  category: string;
  items: { name: string; status: TechStatus }[];
}

export const techGroups: TechGroup[] = [
  {
    category: 'Programming',
    items: [{ name: 'Python', status: 'studied' }],
  },
  {
    category: 'Development Tools',
    items: [
      { name: 'Git', status: 'studied' },
      { name: 'GitHub', status: 'studied' },
      { name: 'Visual Studio Code', status: 'studied' },
    ],
  },
  {
    category: 'Data Handling',
    items: [
      { name: 'JSON', status: 'studied' },
      { name: 'Basic data processing', status: 'studied' },
    ],
  },
  {
    category: 'AI Tools',
    items: [
      { name: 'ChatGPT', status: 'studied' },
      { name: 'Claude', status: 'studied' },
      { name: 'Gemini', status: 'studied' },
    ],
  },
  {
    category: 'Automation',
    items: [{ name: 'n8n', status: 'exploring' }],
  },
];

export const exploringItems = [
  'HTTP and API fundamentals',
  'Making HTTP requests using Python',
  'API integration',
  'Connecting AI models to applications',
  'Practical workflow automation',
];

export const journeySteps = [
  {
    title: 'Python Programming',
    description:
      'Mempelajari dasar Python, fungsi, struktur data, pengelolaan file, JSON, dan object-oriented programming.',
  },
  {
    title: 'Software Development',
    description:
      'Berlatih Git dan GitHub, operasi CRUD, dan membangun aplikasi-aplikasi kecil.',
  },
  {
    title: 'Applied AI',
    description:
      'Mengeksplorasi AI tools, integrasi API, dan automation alur kerja.',
  },
];

export const certification = {
  title: "CS50's Introduction to Programming with Python",
  institution: 'Harvard University — CS50',
  status: 'Completed / Earned',
};

export const contactCopy =
  "I'm always interested in learning, building, and exploring practical applications of technology.";
