import { useEffect, useRef } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Download, ExternalLink, X } from 'lucide-react';
import type { Certificate } from '@/data/portfolio';

interface CertificateModalProps {
  certificate: Certificate | null;
  onClose: () => void;
}

/** Jendela pratinjau sertifikat: Esc menutup, fokus terkunci di dalam, scroll halaman dikunci. */
export default function CertificateModal({ certificate, onClose }: CertificateModalProps) {
  const dialogRef = useRef<HTMLDivElement>(null);
  const closeRef = useRef<HTMLButtonElement>(null);
  const onCloseRef = useRef(onClose);
  onCloseRef.current = onClose;
  const isOpen = certificate !== null;

  useEffect(() => {
    if (!isOpen) return;
    const previous = document.activeElement as HTMLElement | null;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    closeRef.current?.focus();

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onCloseRef.current();
        return;
      }
      if (event.key !== 'Tab' || !dialogRef.current) return;
      const focusable = dialogRef.current.querySelectorAll<HTMLElement>('a[href], button:not([disabled])');
      if (focusable.length === 0) return;
      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };

    window.addEventListener('keydown', onKeyDown);
    return () => {
      window.removeEventListener('keydown', onKeyDown);
      document.body.style.overflow = previousOverflow;
      previous?.focus();
    };
  }, [isOpen]);

  return (
    <AnimatePresence>
      {certificate && (
        <motion.div
          key="certificate-modal"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
          onClick={() => onClose()}
          className="fixed inset-0 z-[70] flex items-center justify-center bg-ink/85 p-4 backdrop-blur-sm md:p-8"
        >
          <div
            ref={dialogRef}
            role="dialog"
            aria-modal="true"
            aria-labelledby="certificate-title"
            onClick={(event) => event.stopPropagation()}
            className="flex max-h-full w-full max-w-4xl flex-col overflow-hidden border border-line bg-surface"
          >
            <div className="flex items-center justify-between border-b border-line px-6 py-4">
              <p className="text-xs font-semibold uppercase tracking-label text-crimson">
                Sertifikat / {certificate.badge}
              </p>
              <button
                ref={closeRef}
                type="button"
                onClick={onClose}
                aria-label="Tutup jendela sertifikat"
                className="flex h-10 w-10 items-center justify-center rounded-full text-paper transition-colors hover:text-crimson"
              >
                <X size={22} aria-hidden="true" />
              </button>
            </div>

            <div className="min-h-0 flex-1 overflow-auto bg-raised p-4 md:p-6">
              {certificate.file ? (
                certificate.file.kind === 'pdf' ? (
                  <iframe
                    src={certificate.file.src}
                    title={certificate.file.alt}
                    className="h-[60vh] w-full bg-white"
                  />
                ) : (
                  <img
                    src={certificate.file.src}
                    alt={certificate.file.alt}
                    className="mx-auto max-h-[60vh] w-auto max-w-full object-contain"
                  />
                )
              ) : (
                <p className="py-16 text-center text-muted">Berkas sertifikat belum diunggah.</p>
              )}
            </div>

            <div className="flex flex-col gap-5 border-t border-line px-6 py-5 md:flex-row md:items-center md:justify-between">
              <div>
                <h2 id="certificate-title" className="font-display text-2xl leading-tight text-paper md:text-3xl">
                  {certificate.title}
                </h2>
                <p className="mt-1 text-sm text-muted">{certificate.issuer}</p>
              </div>
              <div className="flex flex-wrap gap-3">
                {certificate.file && (
                  <a
                    href={certificate.file.src}
                    download
                    className="inline-flex items-center gap-2 border border-line px-4 py-2.5 text-sm font-medium text-paper transition-colors hover:border-crimson hover:text-crimson"
                  >
                    <Download size={16} aria-hidden="true" />
                    Unduh
                  </a>
                )}
                {certificate.verifyUrl && (
                  <a
                    href={certificate.verifyUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 border border-line px-4 py-2.5 text-sm font-medium text-paper transition-colors hover:border-crimson hover:text-crimson"
                  >
                    Buka sumber asli
                    <ExternalLink size={16} aria-hidden="true" />
                  </a>
                )}
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
