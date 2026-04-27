import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight, Sparkles, FileText, ExternalLink } from "lucide-react";
import { Project, getEmbedUrl, getPdfEmbedUrl, hasShowcaseMedia } from "@/config/projects";

interface ShowcaseModalProps {
  project: Project | null;
  onClose: () => void;
}

export default function ShowcaseModal({ project, onClose }: ShowcaseModalProps) {
  const [slideIndex, setSlideIndex] = useState(0);

  useEffect(() => {
    setSlideIndex(0);
  }, [project?.id]);

  useEffect(() => {
    if (!project) return;
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight") setSlideIndex((i) => i + 1);
      if (e.key === "ArrowLeft") setSlideIndex((i) => i - 1);
    };
    window.addEventListener("keydown", handleKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", handleKey);
      document.body.style.overflow = "";
    };
  }, [project, onClose]);

  const screenshots = project?.showcase?.screenshots ?? [];
  const video = project?.showcase?.video;
  const pdf = project?.showcase?.pdf;
  const hasMedia = project ? hasShowcaseMedia(project) : false;
  const basePath = (import.meta as any).env?.BASE_URL ?? "/";
  const pdfEmbedUrl = pdf ? getPdfEmbedUrl(pdf, basePath) : null;
  const pdfDownloadUrl = pdf
    ? (basePath.endsWith("/") ? basePath : basePath + "/") +
      (pdf.url.startsWith("/") ? pdf.url.slice(1) : pdf.url)
    : null;
  const safeIndex = screenshots.length
    ? ((slideIndex % screenshots.length) + screenshots.length) % screenshots.length
    : 0;
  const currentShot = screenshots[safeIndex];

  return (
    <AnimatePresence>
      {project && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-sm"
          onClick={onClose}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.96, y: 12 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.96, y: 12 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto glass rounded-2xl border border-white/10 shadow-[0_20px_80px_rgba(0,0,0,0.5)]"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="sticky top-0 z-10 flex items-start justify-between gap-4 p-5 sm:p-6 border-b border-white/10 bg-[var(--background)]/80 backdrop-blur-md">
              <div className="min-w-0 flex-1">
                <div className="text-[0.65rem] font-bold uppercase tracking-widest text-[var(--accent-yellow)] mb-1">
                  {project.category}
                </div>
                <h3 className="text-xl sm:text-2xl font-semibold tracking-tight truncate">
                  {project.title}
                </h3>
              </div>
              <button
                onClick={onClose}
                aria-label="Close showcase"
                className="shrink-0 w-9 h-9 rounded-full flex items-center justify-center bg-white/5 hover:bg-white/10 border border-white/10 hover:border-[var(--accent-yellow)]/40 text-foreground hover:text-[var(--accent-yellow)] transition-all"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <div className="p-5 sm:p-6 space-y-6">
              {video && (
                <div className="relative w-full aspect-video rounded-xl overflow-hidden border border-white/10 bg-black">
                  {video.provider === "file" ? (
                    <video
                      poster={video.poster}
                      controls
                      playsInline
                      preload="metadata"
                      className="absolute inset-0 w-full h-full bg-black"
                    >
                      <source src={video.url} type="video/mp4" />
                      {video.webmUrl && (
                        <source src={video.webmUrl} type="video/webm" />
                      )}
                      Your browser does not support the video tag.
                    </video>
                  ) : (
                    <iframe
                      src={getEmbedUrl(video)}
                      title={`${project.title} walkthrough`}
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      className="absolute inset-0 w-full h-full"
                    />
                  )}
                </div>
              )}

              {pdf && pdfEmbedUrl && (
                <div className="space-y-3">
                  <div className="flex items-center justify-between gap-3 flex-wrap">
                    <div className="flex items-center gap-2 text-xs font-medium text-muted-foreground">
                      <FileText className="w-3.5 h-3.5 text-[var(--accent-yellow)]" />
                      {pdf.label ?? "Reference deck"}
                      {pdf.startPage && (
                        <span className="text-[0.65rem] uppercase tracking-wider text-muted-foreground/70">
                          · starts page {pdf.startPage}
                        </span>
                      )}
                    </div>
                    {pdfDownloadUrl && (
                      <a
                        href={pdfDownloadUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-xs font-medium text-[var(--accent-yellow)] hover:text-[var(--accent-yellow)]/80 transition-colors"
                      >
                        Open in new tab
                        <ExternalLink className="w-3 h-3" />
                      </a>
                    )}
                  </div>
                  <div className="relative w-full h-[70vh] min-h-[420px] rounded-xl overflow-hidden border border-white/10 bg-black/40">
                    <iframe
                      src={pdfEmbedUrl}
                      title={`${project.title} deck`}
                      className="absolute inset-0 w-full h-full"
                    />
                  </div>
                </div>
              )}

              {screenshots.length > 0 && (
                <div className="space-y-3">
                  <div className="relative w-full aspect-video rounded-xl overflow-hidden border border-white/10 bg-black/40">
                    <AnimatePresence mode="wait">
                      <motion.img
                        key={currentShot.src}
                        src={currentShot.src}
                        alt={currentShot.alt ?? currentShot.caption ?? project.title}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.2 }}
                        className="absolute inset-0 w-full h-full object-cover"
                      />
                    </AnimatePresence>

                    {screenshots.length > 1 && (
                      <>
                        <button
                          onClick={() => setSlideIndex((i) => i - 1)}
                          aria-label="Previous screenshot"
                          className="absolute left-2 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full flex items-center justify-center bg-black/60 hover:bg-black/80 border border-white/10 hover:border-[var(--accent-yellow)]/50 text-white transition-all"
                        >
                          <ChevronLeft className="w-4 h-4" />
                        </button>
                        <button
                          onClick={() => setSlideIndex((i) => i + 1)}
                          aria-label="Next screenshot"
                          className="absolute right-2 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full flex items-center justify-center bg-black/60 hover:bg-black/80 border border-white/10 hover:border-[var(--accent-yellow)]/50 text-white transition-all"
                        >
                          <ChevronRight className="w-4 h-4" />
                        </button>
                      </>
                    )}
                  </div>

                  {currentShot.caption && (
                    <p className="text-sm text-muted-foreground text-center px-4">
                      {currentShot.caption}
                    </p>
                  )}

                  {screenshots.length > 1 && (
                    <div className="flex items-center justify-center gap-2 pt-1">
                      {screenshots.map((_, i) => (
                        <button
                          key={i}
                          onClick={() => setSlideIndex(i)}
                          aria-label={`Go to screenshot ${i + 1}`}
                          className={`h-1.5 rounded-full transition-all ${
                            i === safeIndex
                              ? "w-6 bg-[var(--accent-yellow)]"
                              : "w-1.5 bg-white/20 hover:bg-white/40"
                          }`}
                        />
                      ))}
                    </div>
                  )}
                </div>
              )}

              {!hasMedia && (
                <div className="relative w-full aspect-video rounded-xl overflow-hidden border border-dashed border-white/10 bg-gradient-to-br from-[var(--accent-yellow)]/[0.03] via-transparent to-blue-500/[0.04] flex flex-col items-center justify-center gap-3 px-6 text-center">
                  <div className="w-12 h-12 rounded-full flex items-center justify-center bg-[var(--accent-yellow)]/10 text-[var(--accent-yellow)] border border-[var(--accent-yellow)]/20">
                    <Sparkles className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-base font-semibold text-foreground">
                      Preview coming soon
                    </div>
                    <p className="text-sm text-muted-foreground max-w-md mt-1">
                      A walkthrough and visuals for this project are in the works. In the
                      meantime, reach out via LinkedIn for a guided demo.
                    </p>
                  </div>
                </div>
              )}

              <div>
                <p className="text-foreground/90 leading-relaxed">{project.description}</p>
              </div>

              <div className="flex flex-wrap gap-2 pt-2 border-t border-white/10">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs font-medium px-2.5 py-1 rounded border border-white/10 bg-white/5 text-muted-foreground"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <p className="text-[0.7rem] leading-relaxed text-[var(--accent-yellow)]/80 italic">
                (Disclaimer: This is a personal concept project. All branding, product names, screens and data shown are illustrative only and do not reflect any client, employer or live production system.)
              </p>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
