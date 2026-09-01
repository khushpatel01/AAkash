import { images } from "@/config/images";
import boiler from "../Images/Boiler.png";
import cooling from "../Images/Cooling Water Treatment.png";
import RO from "../Images/RO.png"
import Wastewater from "../Images/WasteWater.png"
import waterTretment from "../Images/waterTretment.png"
import ChemicalTreatment from "../Images/ChemicalTreatment.png"
import { StaticImageData } from "next/image";

export interface Solution {
  id: string;
  title: string;
  slug: string;
  shortDescription: string;
  description: string;
  icon: string;
  image: string | StaticImageData;
  benefits: string[];
}

export const solutions: Solution[] = [
  {
    id: "boiler",
    title: "Boiler Water Treatment",
    slug: "boiler-water-treatment",
    shortDescription: "Prevent scaling, corrosion, and carryover in boiler systems.",
    description: "Our comprehensive boiler water treatment programs ensure maximum efficiency and protection of your boiler assets. We provide customized solutions to prevent scaling, corrosion, and optimize energy consumption.",
    icon: "Droplet",
    image: boiler,
    benefits: [
      "Extends boiler life",
      "Reduces fuel consumption",
      "Prevents unexpected shutdowns",
      "Improves steam quality"
    ]
  },
  {
    id: "cooling",
    title: "Cooling Water Treatment",
    slug: "cooling-water-treatment",
    shortDescription: "Control scale, corrosion, and microbiological growth.",
    description: "Effective cooling water treatment is critical for system reliability. We offer advanced chemical programs to control scale, corrosion, and microbiological fouling in open and closed cooling systems.",
    icon: "Snowflake",
    image: cooling,
    benefits: [
      "Optimizes heat transfer efficiency",
      "Reduces water consumption",
      "Prevents legionella growth",
      "Minimizes maintenance costs"
    ]
  },
  {
    id: "ro",
    title: "RO Water Treatment",
    slug: "ro-water-treatment",
    shortDescription: "Maximize membrane life and permeate recovery.",
    description: "Our RO treatment chemicals, including antiscalants and cleaners, are formulated to maximize reverse osmosis membrane performance, increase recovery rates, and reduce cleaning frequency.",
    icon: "Filter",
    image: RO,
    benefits: [
      "Increases membrane lifespan",
      "Reduces energy consumption",
      "Lowers cleaning frequency",
      "Maintains consistent water quality"
    ]
  },
  {
    id: "wastewater",
    title: "Wastewater Treatment",
    slug: "wastewater-treatment",
    shortDescription: "Efficient treatment for environmental compliance.",
    description: "We provide high-performance coagulants, flocculants, and biological treatments to ensure your effluent meets environmental discharge limits while optimizing treatment costs.",
    icon: "Recycle",
    image: Wastewater,
    benefits: [
      "Ensures regulatory compliance",
      "Reduces sludge volume",
      "Optimizes chemical usage",
      "Improves effluent clarity"
    ]
  },
  {
    id: "plants",
    title: "Water Treatment Plants",
    slug: "water-treatment-plants",
    shortDescription: "Turnkey equipment solutions and engineered systems.",
    description: "From RO plants to advanced effluent treatment systems, we design, install, and commission engineered water treatment plants tailored to your specific industrial requirements.",
    icon: "Factory",
    image: waterTretment,
    benefits: [
      "Custom-engineered designs",
      "High-quality components",
      "Reliable automation",
      "Turnkey execution"
    ]
  },
  {
    id: "chemicals",
    title: "Chemical Treatment Programs",
    slug: "chemical-treatment-programs",
    shortDescription: "Customized chemical solutions for complex needs.",
    description: "We develop customized specialty chemical programs designed specifically for your unique process water challenges, backed by expert technical service.",
    icon: "FlaskConical",
    image: ChemicalTreatment,
    benefits: [
      "Targeted problem solving",
      "Cost-effective dosing",
      "Comprehensive technical support",
      "Continuous optimization"
    ]
  }
];
