export default function QuoteCard() {
  return (
    <div className="glass rounded-2xl p-6 relative overflow-hidden group">
      <div className="flex gap-4 items-start">
        <div className="text-4xl text-[var(--accent-yellow)] font-serif leading-none mt-1">"</div>
        <p className="text-sm md:text-base italic text-foreground leading-relaxed pr-2">
          I don't just architect solutions. I partner with organisations to deliver high value outcomes that are secure, scalable and built to weather the modern IT climate.
        </p>
      </div>
    </div>
  );
}
