export default function SectionTitle(_a) {
    var eyebrow = _a.eyebrow, title = _a.title, subtitle = _a.subtitle;
    return (<div className="mb-10 max-w-3xl">
      {eyebrow && <p className="pill mb-3">{eyebrow}</p>}
      <h2 className="text-3xl font-bold tracking-tight text-slate-900 md:text-4xl">{title}</h2>
      <p className="mt-3 text-lg text-slate-600">{subtitle}</p>
    </div>);
}
