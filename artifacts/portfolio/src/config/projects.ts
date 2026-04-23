export type VideoProvider = "guidde" | "loom" | "youtube" | "vimeo";

export interface ProjectVideo {
  provider: VideoProvider;
  url: string;
}

export interface ProjectScreenshot {
  src: string;
  caption?: string;
  alt?: string;
}

export interface ProjectPdf {
  url: string;
  startPage?: number;
  label?: string;
}

export interface ProjectShowcase {
  video?: ProjectVideo;
  pdf?: ProjectPdf;
  screenshots?: ProjectScreenshot[];
}

export interface Project {
  id: string;
  category: string;
  status: string;
  title: string;
  description: string;
  tags: string[];
  showcase?: ProjectShowcase;
}

export const PROJECTS: Project[] = [
  {
    id: "security-accelerators",
    category: "Cyber Security / Consulting",
    status: "Flagship Build · In Progress",
    title: "Security & Governance Accelerator",
    description:
      "A growing collection of practical tools, concepts, and frameworks aimed at accelerating cyber maturity assessments, design thinking, and delivery consistency.",
    tags: ["Security", "Architecture", "Risk", "Advisory"],
    showcase: {
      screenshots: [
        { src: "screenshots/security-hub/slide-18.jpg", caption: "Platform walk-through" },
        { src: "screenshots/security-hub/slide-19.jpg" },
        { src: "screenshots/security-hub/slide-20.jpg" },
        { src: "screenshots/security-hub/slide-21.jpg" },
        { src: "screenshots/security-hub/slide-22.jpg" },
        { src: "screenshots/security-hub/slide-23.jpg" },
        { src: "screenshots/security-hub/slide-24.jpg" },
        { src: "screenshots/security-hub/slide-25.jpg" },
        { src: "screenshots/security-hub/slide-26.jpg" },
        { src: "screenshots/security-hub/slide-27.jpg" },
        { src: "screenshots/security-hub/slide-28.jpg" },
        { src: "screenshots/security-hub/slide-29.jpg" },
        { src: "screenshots/security-hub/slide-30.jpg" },
      ],
    },
  },
  {
    id: "proposalhub",
    category: "Pre-Sales / Delivery Enablement",
    status: "Showcase Project",
    title: "Proposal Development Platform",
    description:
      "A proposal orchestration platform designed to improve scoping, effort estimation, governance, and delivery outcomes across consulting engagements.",
    tags: ["React", "Workflow", "Commercials", "Governance"],
    showcase: {
      screenshots: [
        { src: "screenshots/proposalhub/slide-12.jpg" },
        { src: "screenshots/proposalhub/slide-13.jpg" },
        { src: "screenshots/proposalhub/slide-14.jpg" },
        { src: "screenshots/proposalhub/slide-15.jpg" },
        { src: "screenshots/proposalhub/slide-16.jpg" },
        { src: "screenshots/proposalhub/slide-17.jpg" },
        { src: "screenshots/proposalhub/slide-18.jpg" },
        { src: "screenshots/proposalhub/slide-19.jpg" },
        { src: "screenshots/proposalhub/slide-20.jpg" },
        { src: "screenshots/proposalhub/slide-21.jpg" },
        { src: "screenshots/proposalhub/slide-22.jpg" },
        { src: "screenshots/proposalhub/slide-23.jpg" },
        { src: "screenshots/proposalhub/slide-24.jpg" },
        { src: "screenshots/proposalhub/slide-25.jpg" },
      ],
    },
  },
  {
    id: "soe-portal",
    category: "Modern Workplace / Program Delivery",
    status: "Showcase Project",
    title: "SOE/MOE Refresh Orchestration Portal",
    description:
      "A delivery-focused portal built to support large-scale SOE refresh and uplift initiatives with governance, visibility, and execution structure.",
    tags: ["Windows 11", "Modern Desktop", "Program Delivery"],
    showcase: {
      screenshots: [
        { src: "screenshots/soe-portal/slide-17.jpg" },
        { src: "screenshots/soe-portal/slide-18.jpg" },
        { src: "screenshots/soe-portal/slide-19.jpg" },
        { src: "screenshots/soe-portal/slide-20.jpg" },
        { src: "screenshots/soe-portal/slide-21.jpg" },
        { src: "screenshots/soe-portal/slide-22.jpg" },
        { src: "screenshots/soe-portal/slide-23.jpg" },
        { src: "screenshots/soe-portal/slide-24.jpg" },
        { src: "screenshots/soe-portal/slide-25.jpg" },
        { src: "screenshots/soe-portal/slide-26.jpg" },
        { src: "screenshots/soe-portal/slide-27.jpg" },
        { src: "screenshots/soe-portal/slide-28.jpg" },
        { src: "screenshots/soe-portal/slide-29.jpg" },
      ],
    },
  },
];

export function getEmbedUrl(video: ProjectVideo): string {
  const { provider, url } = video;
  if (provider === "youtube") {
    const idMatch = url.match(/(?:v=|youtu\.be\/|embed\/)([\w-]{11})/);
    const id = idMatch ? idMatch[1] : url;
    return `https://www.youtube.com/embed/${id}`;
  }
  if (provider === "vimeo") {
    const idMatch = url.match(/vimeo\.com\/(?:video\/)?(\d+)/);
    const id = idMatch ? idMatch[1] : url;
    return `https://player.vimeo.com/video/${id}`;
  }
  return url;
}

export function hasShowcaseMedia(project: Project): boolean {
  return Boolean(
    project.showcase?.video ||
      project.showcase?.pdf ||
      (project.showcase?.screenshots && project.showcase.screenshots.length > 0),
  );
}

export function getPdfEmbedUrl(pdf: ProjectPdf, basePath: string): string {
  const cleanBase = basePath.endsWith("/") ? basePath : basePath + "/";
  const cleanUrl = pdf.url.startsWith("/") ? pdf.url.slice(1) : pdf.url;
  const fragment = pdf.startPage
    ? `#page=${pdf.startPage}&toolbar=1&navpanes=0&view=FitH`
    : "#toolbar=1&navpanes=0&view=FitH";
  return `${cleanBase}${cleanUrl}${fragment}`;
}
