type SectionTitleProps = {
  eyebrow?: string;
  title: string;
  subtitle: string;
  tone?: 'default' | 'inverse';
};

export default function SectionTitle({ eyebrow, title, subtitle, tone = 'default' }: SectionTitleProps) {
  const isInverse = tone === 'inverse';

  return (
    <div className="mb-10 max-w-3xl">
      {eyebrow && (
        <p className={isInverse ? 'mb-3 inline-flex rounded-full border border-blue-200/70 bg-white/10 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-blue-50' : 'pill mb-3'}>
          {eyebrow}
        </p>
      )}
      <h2 className={isInverse ? 'text-3xl font-bold tracking-tight text-white md:text-4xl' : 'text-3xl font-bold tracking-tight text-slate-900 md:text-4xl'}>{title}</h2>
      <p className={isInverse ? 'mt-3 text-lg text-blue-100' : 'mt-3 text-lg text-slate-600'}>{subtitle}</p>
    </div>
  );
}
