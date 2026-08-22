export interface Service {
  id: string;
  title: string;
  slug: string;
  shortDescription: string;
  icon: string;
}

export const services: Service[] = [
  {
    id: "installation",
    title: "Plant Installation",
    slug: "plant-installation",
    shortDescription: "Turnkey mechanical and electrical installation.",
    icon: "Wrench"
  },
  {
    id: "commissioning",
    title: "Plant Commissioning",
    slug: "plant-commissioning",
    shortDescription: "System start-up and performance testing.",
    icon: "PlayCircle"
  },
  {
    id: "amc",
    title: "AMC & Maintenance",
    slug: "amc-maintenance",
    shortDescription: "Comprehensive annual maintenance contracts.",
    icon: "ShieldCheck"
  },
  {
    id: "testing",
    title: "Water Testing",
    slug: "water-testing",
    shortDescription: "Detailed laboratory analysis of water samples.",
    icon: "TestTube"
  },
  {
    id: "chemical-supply",
    title: "Chemical Supply",
    slug: "chemical-supply",
    shortDescription: "Reliable delivery of treatment chemicals.",
    icon: "Truck"
  },
  {
    id: "consultation",
    title: "Technical Consultation",
    slug: "technical-consultation",
    shortDescription: "Expert advice on system design and optimization.",
    icon: "Users"
  },
  {
    id: "troubleshooting",
    title: "Troubleshooting",
    slug: "troubleshooting",
    shortDescription: "Rapid response to operational issues.",
    icon: "Activity"
  },
  {
    id: "upgradation",
    title: "System Upgradation",
    slug: "system-upgradation",
    shortDescription: "Modernizing existing plants for better efficiency.",
    icon: "ArrowUpCircle"
  }
];
