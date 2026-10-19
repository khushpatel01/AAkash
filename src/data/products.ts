import { images } from "@/config/images";

export interface Product {
  id: string;
  name: string;
  category: string;
  slug: string;
  shortDescription: string;
  image: string;
  applications: string[];
}

export const products: Product[] = [
  // Boiler Water Treatment Chemicals
  {
    id: "htc-20b-101-as",
    name: "HTC 20B 101 AS(ANTI-SCALANT)",
    category: "Boiler Chemicals",
    slug: "htc-20b-101-as-anti-scalant",
    shortDescription: "Prevents scale build up, ensuring better heat transfer and reduced energy consumption.",
    image: "/Images/101_AS.png",
    applications: ["Boiler Water Treatment"]
  },
  {
    id: "htc-20b-102-os",
    name: "HTC 20B 102 OS (OXYGEN SCAVENGER)",
    category: "Boiler Chemicals",
    slug: "htc-20b-102-os-oxygen-scavenger",
    shortDescription: "Protects metal surfaces by removing dissolved oxygen, preventing corrosion.",
    image: "/Images/102_OS.png",
    applications: ["Boiler Water Treatment"]
  },
  {
    id: "htc-20b-103-ph",
    name: "HTC 20B 103 PH (PH BOOSTER)",
    category: "Boiler Chemicals",
    slug: "htc-20b-103-ph-booster",
    shortDescription: "Maintains optimal pH levels to prevent corrosion and scale formation.",
    image: "/Images/103_PH.png",
    applications: ["Boiler Water Treatment"]
  },
  {
    id: "htc-20b-104-sc",
    name: "HTC 20B 104 SC (SLUDGE CONDITIONER)",
    category: "Boiler Chemicals",
    slug: "htc-20b-104-sc-sludge-conditioner",
    shortDescription: "Prevents sludge formation, allowing easy removal and improving system cleanliness.",
    image: "/Images/104_SC.png",
    applications: ["Boiler Water Treatment"]
  },
  {
    id: "htc-20b-105-cc",
    name: "HTC 20B 105 CC(CONDENSATE CONDITIONER)",
    category: "Boiler Chemicals",
    slug: "htc-20b-105-cc-condensate-conditioner",
    shortDescription: "Protects condensate return lines from corrosion, ensuring longevity.",
    image: "/Images/105_CC.png",
    applications: ["Boiler Water Treatment"]
  },
  {
    id: "htc-20b-106-pt",
    name: "HTC 20B 106 PT (PRE-TREATMENT)",
    category: "Boiler Chemicals",
    slug: "htc-20b-106-pt-pre-treatment",
    shortDescription: "Prepares water for boiler feed to improve overall system efficiency.",
    image: "/Images/106_PT.png",
    applications: ["Boiler Water Treatment"]
  },
  {
    id: "htc-20b-107-na",
    name: "HTC 20B 107 NA (NEUTRALIZATION AGENT)",
    category: "Boiler Chemicals",
    slug: "htc-20b-107-na-neutralization-agent",
    shortDescription: "Balances pH levels to ensure safe discharge of treated water.",
    image: "/Images/107_NA.png",
    applications: ["Boiler Water Treatment"]
  },
  {
    id: "htc-23d-108",
    name: "HTC 23D 108 (DESCALANT)",
    category: "Boiler Chemicals",
    slug: "htc-23d-108-descalant",
    shortDescription: "Efficiently removes existing scale deposits, restoring system efficiency.",
    image: "/Images/108_DS.png",
    applications: ["Boiler Water Treatment"]
  },
  
  // Cooling Water Treatment Chemicals
  {
    id: "htc-30c-201-as",
    name: "HTC 30C 201 AS (ANTI-SCALANT)",
    category: "Cooling Water Chemicals",
    slug: "htc-30c-201-as-anti-scalant",
    shortDescription: "Prevents scale deposits in cooling systems, ensuring optimal heat transfer.",
    image: "/Images/210_AS.png",
    applications: ["Cooling Water Treatment"]
  },
  {
    id: "htc-33a-202-bt",
    name: "HTC 33A 202 BT (BIOLOGICAL TREATMENT)",
    category: "Cooling Water Chemicals",
    slug: "htc-33a-202-bt-biological-treatment",
    shortDescription: "Control the growth of microorganisms, preventing fouling and improving efficiency.",
    image: "/Images/202_BC.png",
    applications: ["Cooling Water Treatment"]
  },

  // Other Products
  {
    id: "htc-35-301-ro",
    name: "HTC 35 301 RO(RO ANTI-SCALANT)",
    category: "RO Chemicals",
    slug: "htc-35-301-ro-ro-anti-scalant",
    shortDescription: "Prevents scaling in reverse osmosis systems, enhancing membrane life and efficiency.",
    image: "/Images/301_RO.png",
    applications: ["RO Water Treatment"]
  },
  {
    id: "dosing-pumps",
    name: "DOSING PUMPS",
    category: "Dosing Equipment",
    slug: "dosing-pumps",
    shortDescription: "precision Chemical dosing to ensure accurate treatment for various water systems.",
    image: "/Images/dosing_Pump.webp",
    applications: ["Chemical Dosing"]
  },
  {
    id: "water-hardness-test-kit",
    name: "WATER HARDNESS TEST KIT",
    category: "Testing Kits",
    slug: "water-hardness-test-kit",
    shortDescription: "simple and reliable testing for water hardness levels to monitor treatment efficiency.",
    image: "/Images/WaterTreatment_Kit.jpg",
    applications: ["Water Testing"]
  },
  {
    id: "water-treatment-plants",
    name: "WATER TREATMENT PLANTS",
    category: "Water Treatment Equipment",
    slug: "water-treatment-plants",
    shortDescription: "Comprehensive systems designed to provide clean, treated water for various industrial applications.",
    image: "/Images/water_Treatment.jpg",
    applications: ["Water Purification"]
  }
];

export const productCategories = [
  "All",
  "Boiler Chemicals",
  "Cooling Water Chemicals",
  "RO Chemicals",
  "Testing Kits",
  "Dosing Equipment",
  "Water Treatment Equipment"
];
