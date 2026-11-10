import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Menu, Pause, Play, X } from 'lucide-react';
import { navItems } from '@/data/portfolio';

interface NavbarProps {
  motionOff: boolean;
  onToggleMotion: () => void;
}

export default function Navbar({ motionOff, onToggleMotion }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState<string>('home');

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const sections = navItems
      .map((item) => document.getElementById(item.id))
      .filter((el): el is HTMLElement => el !== null);
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: '-45% 0px -50% 0px' }
    );
    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  const closeMenu = () => setOpen(false);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-500 ${
        scrolled || open ? 'border-b border-line bg-ink/95 backdrop-blur-md' : 'border-b border-transparent bg-transparent'
      }`}
    >
      <nav aria-label="Navigasi utama" className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6 lg:px-10">
        <a href="#home" onClick={closeMenu} className="font-display text-2xl tracking-wide text-paper">
          FARROS<span className="text-crimson">.</span>
        </a>

        <ul className="hidden items-center gap-6 lg:flex">
          {navItems.map((item) => {
            const isActive = active === item.id;
            return (
              <li key={item.id}>
                <a
                  href={`#${item.id}`}
                  aria-current={isActive ? 'location' : undefined}
                  className={`group relative py-2 text-sm transition-colors duration-300 hover:text-paper ${
                    isActive ? 'text-paper' : 'text-muted'
                  }`}
                >
                  {item.label}
                  <span
                    className={`absolute inset-x-0 -bottom-0.5 h-px origin-left bg-crimson transition-transform duration-500 ${
                      isActive ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
                    }`}
                    aria-hidden="true"
                  />
                </a>
              </li>
            );
          })}
        </ul>

        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={onToggleMotion}
            aria-pressed={motionOff}
            aria-label={motionOff ? 'Aktifkan animasi' : 'Nonaktifkan animasi'}
            title={motionOff ? 'Aktifkan animasi' : 'Nonaktifkan animasi'}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-line text-muted transition-colors duration-300 hover:border-paper/40 hover:text-paper"
          >
            {motionOff ? <Play size={16} aria-hidden="true" /> : <Pause size={16} aria-hidden="true" />}
          </button>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? 'Tutup menu' : 'Buka menu'}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-line text-paper transition-colors duration-300 hover:border-paper/40 lg:hidden"
          >
            {open ? <X size={18} aria-hidden="true" /> : <Menu size={18} aria-hidden="true" />}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            id="mobile-menu"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden border-t border-line bg-ink lg:hidden"
          >
            <ul className="mx-auto flex max-w-6xl flex-col px-6 py-4">
              {navItems.map((item) => (
                <li key={item.id}>
                  <a
                    href={`#${item.id}`}
                    onClick={closeMenu}
                    className="block py-3 font-display text-3xl text-paper transition-colors hover:text-crimson"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
