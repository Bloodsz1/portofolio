import { Github, Instagram, Video } from 'lucide-react';
import { GITHUB_URL, INSTAGRAM_HANDLE, INSTAGRAM_URL, TIKTOK_HANDLE, TIKTOK_URL } from '@/data/portfolio';

export default function Footer() {
  return (
    <footer className="border-t border-line">
      <div className="mx-auto flex max-w-6xl flex-col gap-8 px-6 py-12 md:flex-row md:items-center md:justify-between lg:px-10">
        <div>
          <a href="#home" className="font-display text-3xl tracking-wide text-paper">
            FARROS<span className="text-crimson">.</span>
          </a>
          <p className="mt-2 text-sm text-muted">Aspiring AI Applied Engineer</p>
        </div>

        <div className="flex flex-col gap-4 text-sm text-muted md:items-end">
          <div className="flex flex-wrap items-center gap-x-6 gap-y-3 md:justify-end">
            <a
              href={GITHUB_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 transition-colors duration-300 hover:text-paper"
            >
              <Github size={16} aria-hidden="true" />
              GitHub
            </a>
            <a
              href={TIKTOK_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 transition-colors duration-300 hover:text-paper"
            >
              <Video size={16} aria-hidden="true" />
              TikTok {TIKTOK_HANDLE}
            </a>
            <a
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 transition-colors duration-300 hover:text-paper"
            >
              <Instagram size={16} aria-hidden="true" />
              Instagram {INSTAGRAM_HANDLE}
            </a>
          </div>
          <p>&copy; {new Date().getFullYear()} Abdulloh Farros. Hak cipta dilindungi.</p>
        </div>
      </div>
    </footer>
  );
}
