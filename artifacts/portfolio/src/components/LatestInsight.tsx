import { Linkedin, ArrowUpRight } from "lucide-react";
import { INSIGHTS, INSIGHTS_FEED_URL } from "@/config/insight";

export default function LatestInsight() {
  return (
    <div className="glass rounded-2xl p-6 relative overflow-hidden group">
      <div className="flex items-center justify-between mb-5">
        <div className="flex items-center gap-2">
          <span className="flex items-center justify-center w-7 h-7 rounded-full bg-[var(--accent-yellow)]/10 text-[var(--accent-yellow)]">
            <Linkedin className="w-3.5 h-3.5" />
          </span>
          <h3 className="text-lg font-semibold tracking-tight">Writing & Insights</h3>
        </div>
        <a
          href={INSIGHTS_FEED_URL}
          target="_blank"
          rel="noreferrer"
          className="flex items-center gap-1 text-xs font-medium text-[var(--accent-yellow)] hover:text-[var(--accent-yellow)]/80 transition-colors"
        >
          View on LinkedIn
          <ArrowUpRight className="w-3.5 h-3.5" />
        </a>
      </div>

      <ul className="space-y-1">
        {INSIGHTS.map((article) => (
          <li key={article.title}>
            <a
              href={article.url}
              target="_blank"
              rel="noreferrer"
              className="flex items-start justify-between gap-4 py-2.5 px-3 -mx-3 rounded-lg hover:bg-white/5 transition-colors group/item"
            >
              <div className="flex flex-col min-w-0 flex-1">
                <span className="text-sm text-foreground/90 font-medium leading-snug truncate group-hover/item:text-[var(--accent-yellow)] transition-colors">
                  {article.title}
                </span>
                <span className="text-[0.65rem] uppercase tracking-wider text-muted-foreground font-medium mt-0.5">
                  {article.date}
                </span>
              </div>
              <ArrowUpRight className="w-4 h-4 text-muted-foreground group-hover/item:text-[var(--accent-yellow)] group-hover/item:-translate-y-0.5 group-hover/item:translate-x-0.5 transition-all duration-300 shrink-0 mt-1" />
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
