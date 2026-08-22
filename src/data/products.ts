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
  {
    id: "wat-c-20b-antiscalant",
    name: "WAT C 20B Anti-Scalant",
    category: "Boiler Chemicals",
    slug: "wat-c-20b-antiscalant",
    shortDescription: "Advanced antiscalant for high-pressure boilers.",
    image: images.products.chemicals,
    applications: ["Boiler Water Treatment"]
  },
  {
    id: "wat-c-20b-os",
    name: "WAT C 20B OS Oxygen Scavenger",
    category: "Boiler Chemicals",
    slug: "wat-c-20b-os-oxygen-scavenger",
    shortDescription: "Removes dissolved oxygen to prevent pitting corrosion.",
    image: images.products.chemicals,
    applications: ["Boiler Water Treatment"]
  },
  {
    id: "wat-c-30c-antiscalant",
    name: "WAT C 30C Anti-Scalant",
    category: "Cooling Water Chemicals",
    slug: "wat-c-30c-antiscalant",
    shortDescription: "Prevents scale formation in open cooling towers.",
    image: images.products.chemicals,
    applications: ["Cooling Water Treatment"]
  },
  {
    id: "wat-c-33a-biocide",
    name: "WAT C 33A Biological Treatment",
    category: "Cooling Water Chemicals",
    slug: "wat-c-33a-biological-treatment",
    shortDescription: "Broad-spectrum biocide for microbiological control.",
    image: images.products.chemicals,
    applications: ["Cooling Water Treatment"]
  },
  {
    id: "ro-antiscalant-premium",
    name: "Premium RO Anti-Scalant",
    category: "RO Chemicals",
    slug: "premium-ro-anti-scalant",
    shortDescription: "Highly effective antiscalant for reverse osmosis membranes.",
    image: images.products.chemicals,
    applications: ["RO Water Treatment"]
  },
  {
    id: "dosing-pump-5lph",
    name: "Electronic Dosing Pump 5 LPH",
    category: "Dosing Equipment",
    slug: "electronic-dosing-pump-5-lph",
    shortDescription: "Precision chemical dosing pump.",
    image: images.products.equipment,
    applications: ["Chemical Dosing"]
  },
  {
    id: "ro-plant-1000lph",
    name: "Industrial RO Plant 1000 LPH",
    category: "Water Treatment Equipment",
    slug: "industrial-ro-plant-1000-lph",
    shortDescription: "Complete skid-mounted RO system.",
    image: images.solutions.plants,
    applications: ["Water Purification"]
  }
];

export const productCategories = [
  "All",
  "Boiler Chemicals",
  "Cooling Water Chemicals",
  "RO Chemicals",
  "Wastewater Chemicals",
  "Dosing Equipment",
  "Water Treatment Equipment"
];
