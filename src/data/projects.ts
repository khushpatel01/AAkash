import { images } from "@/config/images";

export interface Project {
  id: string;
  title: string;
  slug: string;
  industry: string;
  location: string;
  solution: string;
  capacity?: string;
  image: string;
  challenge: string;
  result: string;
}

export const projects: Project[] = [
  {
    id: "pharma-ro",
    title: "High-Purity RO System for Pharma Client",
    slug: "high-purity-ro-pharma",
    industry: "Pharmaceuticals",
    location: "Mumbai, Maharashtra",
    solution: "RO Plant",
    capacity: "5,000 LPH",
    image: images.industries.pharma,
    challenge: "Client required consistent USP grade water with zero downtime.",
    result: "Successfully commissioned a double-pass RO system, achieving required water quality."
  },
  {
    id: "textile-etp",
    title: "Zero Liquid Discharge ETP",
    slug: "zld-etp-textile",
    industry: "Textile",
    location: "Surat, Gujarat",
    solution: "ETP & ZLD",
    capacity: "500 KLD",
    image: images.industries.textile,
    challenge: "Strict environmental regulations required elimination of wastewater discharge.",
    result: "Implemented an advanced ZLD system, recovering 95% of water for process reuse."
  }
];
