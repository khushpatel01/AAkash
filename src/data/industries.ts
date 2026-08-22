import { images } from "@/config/images";

export interface Industry {
  id: string;
  title: string;
  slug: string;
  shortDescription: string;
  image: string;
}

export const industries: Industry[] = [
  {
    id: "power",
    title: "Power Plants",
    slug: "power",
    shortDescription: "High-purity water solutions for turbines and boilers.",
    image: images.industries.power
  },
  {
    id: "pharmaceuticals",
    title: "Pharmaceuticals",
    slug: "pharmaceuticals",
    shortDescription: "USP grade purified water and clean steam solutions.",
    image: images.industries.pharma
  },
  {
    id: "food-beverage",
    title: "Food & Beverage",
    slug: "food-beverage",
    shortDescription: "Safe, compliant water treatment for food processing.",
    image: images.industries.food
  },
  {
    id: "textile",
    title: "Textile",
    slug: "textile",
    shortDescription: "Process water optimization and effluent color removal.",
    image: images.industries.textile
  },
  {
    id: "chemical",
    title: "Chemical & Petrochemical",
    slug: "chemical",
    shortDescription: "Robust cooling water and process water programs.",
    image: images.industries.power // Placeholder
  },
  {
    id: "manufacturing",
    title: "Manufacturing",
    slug: "manufacturing",
    shortDescription: "Reliable water systems for general industrial operations.",
    image: images.industries.power // Placeholder
  },
  {
    id: "hospitality",
    title: "Hotels & Hospitality",
    slug: "hospitality",
    shortDescription: "Soft water and drinking water systems for guests.",
    image: images.industries.food // Placeholder
  },
  {
    id: "healthcare",
    title: "Hospitals & Healthcare",
    slug: "healthcare",
    shortDescription: "Critical water systems for medical applications.",
    image: images.industries.pharma // Placeholder
  }
];
