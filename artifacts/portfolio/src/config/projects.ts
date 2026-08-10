export type VideoProvider = "guidde" | "loom" | "youtube" | "vimeo" | "file";

export interface ProjectVideo {
  provider: VideoProvider;
  url: string;
  webmUrl?: string;
  poster?: string;
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

export interface ProjectLink {
  label: string;
  url: string;
  /** lucide icon name to render, e.g. "ExternalLink" | "Linkedin" */
  icon?: "external" | "linkedin";
}

export interface ProjectShowcase {
  video?: ProjectVideo;
  pdf?: ProjectPdf;
  screenshots?: ProjectScreenshot[];
  /** Optional teaser/hero image shown in the modal media slot when no other media exists */
  teaserImage?: string;
}

export interface Project {
  id: string;
  category: string;
  status: string;
  title: string;
  description: string;
  /** Longer description shown in the expanded modal view */
  longDescription?: string;
  tags: string[];
  links?: ProjectLink[];
  /** Per-project disclaimer shown at the foot of the modal */
  disclaimer?: string;
  showcase?: ProjectShowcase;
}

import singulrTeaser from "@assets/Singulr_Teaser_1786356645607.png";

export const PROJECTS: Project[] = [
  {
    id: "singulr",
    category: "Cybersecurity / Governance / GRC",
    status: "PRIVATE BETA · LAUNCHING SOON",
    title: "Singulr",
    description:
      "A cybersecurity knowledge and governance platform designed to help organisations learn, interpret, explore and mature across frameworks, controls and governance requirements — with greater clarity and less fragmentation.",
    longDescription:
      "Singulr brings cybersecurity frameworks, controls, governance concepts and supporting intelligence into one connected platform. It is designed to make complex standards easier to understand, compare and operationalise — helping practitioners move from learning and interpretation through to informed governance and maturity decisions.",
    tags: [
      "Cybersecurity",
      "Governance",
      "Risk",
      "Compliance",
      "Security Frameworks",
      "Controls",
      "Cyber Maturity",
      "Knowledge Platform",
    ],
    links: [
      { label: "Visit Singulr", url: "https://singulr.com.au/", icon: "external" },
      {
        label: "LinkedIn",
        url: "https://www.linkedin.com/company/singulr-pty-ltd",
        icon: "linkedin",
      },
    ],
    disclaimer:
      "Singulr is an independently developed cybersecurity knowledge and governance platform. Product capabilities and screenshots may evolve prior to general availability.",
    showcase: {
      teaserImage: singulrTeaser,
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
    // Showcase temporarily hidden pending internal review approval.
    // To re-enable, uncomment the showcase block below.
    /*
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
    */
  },
  {
    id: "soe-portal",
    category: "Modern Workplace / Program Delivery",
    status: "Showcase Project",
    title: "SOE/MOE Refresh Orchestration Portal",
    description:
      "A delivery-focused portal built to support large-scale SOE refresh and uplift initiatives with governance, visibility, and execution structure.",
    tags: ["Windows 11", "Modern Desktop", "Program Delivery"],
    // Showcase temporarily hidden pending internal review approval.
    // To re-enable, uncomment the showcase block below.
    /*
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
    */
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
