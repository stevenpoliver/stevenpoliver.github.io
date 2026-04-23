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

export interface ProjectShowcase {
  video?: ProjectVideo;
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
  },
  {
    id: "proposalhub",
    category: "Pre-Sales / Delivery Enablement",
    status: "Showcase Project",
    title: "Proposal Development Platform",
    description:
      "A proposal orchestration platform designed to improve scoping, effort estimation, governance, and delivery outcomes across consulting engagements.",
    tags: ["React", "Workflow", "Commercials", "Governance"],
  },
  {
    id: "soe-portal",
    category: "Modern Workplace / Program Delivery",
    status: "Showcase Project",
    title: "SOE Refresh Orchestration Portal",
    description:
      "A delivery-focused portal built to support large-scale SOE refresh and uplift initiatives with governance, visibility, and execution structure.",
    tags: ["Windows 11", "Modern Desktop", "Program Delivery"],
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
      (project.showcase?.screenshots && project.showcase.screenshots.length > 0),
  );
}
