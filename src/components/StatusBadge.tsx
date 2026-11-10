import type { ProjectStatus } from '@/data/portfolio';

const labels: Record<ProjectStatus, string> = {
  selesai: 'Selesai',
  berjalan: 'Sedang dibangun',
  rencana: 'Dalam rencana',
};

interface StatusBadgeProps {
  status: ProjectStatus;
  className?: string;
}

export default function StatusBadge({ status, className = '' }: StatusBadgeProps) {
  const tone =
    status === 'berjalan'
      ? 'border-crimson/60 text-paper'
      : status === 'rencana'
        ? 'border-dashed border-muted/60 text-muted'
        : 'border-line text-muted';

  return (
    <span
      className={`inline-flex items-center gap-2 rounded-full border px-3 py-1 text-[0.7rem] font-medium uppercase tracking-label ${tone} ${className}`}
    >
      {status === 'berjalan' && (
        <span className="relative flex h-2 w-2 items-center justify-center" aria-hidden="true">
          <span className="absolute h-full w-full rounded-full bg-crimson animate-pulse-ring" />
          <span className="h-2 w-2 rounded-full bg-crimson" />
        </span>
      )}
      {labels[status]}
    </span>
  );
}
