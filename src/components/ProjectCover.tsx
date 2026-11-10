interface ProjectCoverProps {
  title: string;
  tech: string[];
}

const gridStyle = {
  backgroundImage:
    'linear-gradient(#F2EFEB 1px, transparent 1px), linear-gradient(90deg, #F2EFEB 1px, transparent 1px)',
  backgroundSize: '32px 32px',
};

/**
 * Cover otomatis untuk proyek yang belum punya screenshot:
 * jendela terminal bergaya, bukan foto stok yang menyesatkan.
 */
export default function ProjectCover({ title, tech }: ProjectCoverProps) {
  const slug =
    title
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, '_')
      .replace(/^_+|_+$/g, '') || 'proyek';
  const fileName = tech.includes('Python') ? `${slug}.py` : slug;

  return (
    <div className="absolute inset-0 flex items-center justify-center overflow-hidden bg-raised p-6" aria-hidden="true">
      <div className="absolute inset-0 opacity-[0.06]" style={gridStyle} />
      <div className="absolute -right-12 -top-12 h-56 w-56 rounded-full bg-crimson/20 blur-3xl transition-colors duration-700 group-hover:bg-crimson/40" />

      <div className="relative w-full max-w-[17rem] rounded-lg border border-line bg-ink/85 shadow-2xl backdrop-blur-sm">
        <div className="flex items-center gap-1.5 border-b border-line px-3 py-2">
          <span className="h-2 w-2 rounded-full bg-crimson" />
          <span className="h-2 w-2 rounded-full bg-muted/40" />
          <span className="h-2 w-2 rounded-full bg-muted/40" />
          <span className="ml-2 truncate font-mono text-[0.65rem] text-muted">{fileName}</span>
        </div>
        <div className="space-y-1.5 px-4 py-4 font-mono text-xs leading-relaxed">
          <p className="truncate text-muted">
            <span className="text-crimson">$</span> {tech.includes('Python') ? 'python ' : 'run '}
            {fileName}
          </p>
          {tech.slice(0, 4).map((item) => (
            <p key={item} className="truncate text-paper/80">
              <span className="text-crimson">✓</span> {item}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
}
