export interface Certification {
  id: string;
  abbr: string;
  name: string;
  issuer: string;
  credlyUrl?: string;
  imageUrl?: string;
  style: "isaca" | "isc2" | "zero-trust";
}

// =========================================================================
// TO UPDATE CREDLY URLS, REPLACE THE PLACEHOLDERS BELOW WITH YOUR ACTUAL URLS
// =========================================================================
export const CERTIFICATIONS: Certification[] = [
  {
    id: "cism",
    abbr: "CISM",
    name: "Certified Information Security Manager",
    issuer: "ISACA",
    credlyUrl: "https://www.credly.com/badges/b0fecc3f-bf5f-477a-83a7-74227f731a6a",
    imageUrl: "https://images.credly.com/size/340x340/images/d0891dee-6360-496c-9981-40652523b502/dbdea6794f1a6bbcc18d90eea923421aac7df6b5.png",
    style: "isaca",
  },
  {
    id: "cissp",
    abbr: "CISSP",
    name: "Certified Information Systems Security Professional",
    issuer: "ISC2",
    credlyUrl: "https://www.credly.com/badges/b57bac1e-c582-4072-945c-2d35d585f6f8",
    imageUrl: "https://images.credly.com/size/340x340/images/6eeb0a98-33cb-4f72-bfc3-f89d65a3286c/image.png",
    style: "isc2",
  },
  {
    id: "ccsp",
    abbr: "CCSP",
    name: "Certified Cloud Security Professional",
    issuer: "ISC2",
    credlyUrl: "https://www.credly.com/badges/fb4f41d1-4050-4b66-9bfb-e316af673ab8",
    imageUrl: "https://images.credly.com/size/340x340/images/38b12225-5b48-44e1-8750-20928cc595ea/image.png",
    style: "isc2",
  },
  {
    id: "sscp",
    abbr: "SSCP",
    name: "Systems Security Certified Practitioner",
    issuer: "ISC2",
    credlyUrl: "https://www.credly.com/badges/20829e28-c2a0-4b8d-86b8-32bc62db161d",
    imageUrl: "https://images.credly.com/size/340x340/images/c4320f01-2ff4-4508-984a-415fc94e3aec/image.png",
    style: "isc2",
  },
  {
    id: "cc",
    abbr: "CC",
    name: "Certified in Cybersecurity",
    issuer: "ISC2",
    credlyUrl: "https://www.credly.com/badges/af84991e-6aa7-41c6-baa4-d2c2ab879643",
    imageUrl: "https://images.credly.com/size/340x340/images/2030e43f-8003-4d4b-9630-847add403c87/image.png",
    style: "isc2",
  },
  {
    id: "zero-trust",
    abbr: "Zero Trust",
    name: "Zero Trust Architect",
    issuer: "Zero Trust",
    style: "zero-trust",
  },
];
