export interface Product {
  id: string;
  name: string;
  category: string;
  slug: string;
  shortDescription: string;
  image: string;
  applications: string[];
  division: "core" | "trading"; // "core" = Water Treatment Chemicals/Equipment, "trading" = Also Traded products (oils/thermic fluids)
  temperatureRange?: string;
  brand?: string;
  brochureUrl?: string;
  isTradedProduct?: boolean;
}

export const products: Product[] = [
  // ==========================================
  // CORE PRODUCTS: Boiler Water Treatment Chemicals
  // ==========================================
  {
    id: "htc-20b-101-as",
    name: "HTC 20B 101 AS (ANTI-SCALANT)",
    category: "Boiler Chemicals",
    division: "core",
    slug: "htc-20b-101-as-anti-scalant",
    shortDescription: "Prevents scale build up, ensuring better heat transfer and reduced energy consumption in boiler systems.",
    image: "/Images/101_AS.png",
    applications: ["Boiler Water Treatment", "Energy Conservation"]
  },
  {
    id: "htc-20b-102-os",
    name: "HTC 20B 102 OS (OXYGEN SCAVENGER)",
    category: "Boiler Chemicals",
    division: "core",
    slug: "htc-20b-102-os-oxygen-scavenger",
    shortDescription: "Protects metal surfaces by removing dissolved oxygen, preventing pitting and severe corrosion.",
    image: "/Images/102_OS.png",
    applications: ["Boiler Water Treatment", "Corrosion Prevention"]
  },
  {
    id: "htc-20b-103-ph",
    name: "HTC 20B 103 PH (PH BOOSTER)",
    category: "Boiler Chemicals",
    division: "core",
    slug: "htc-20b-103-ph-booster",
    shortDescription: "Maintains optimal alkalinity and pH levels to protect against acidic corrosion and scale formation.",
    image: "/Images/103_PH.png",
    applications: ["Boiler Water Treatment", "pH Stabilization"]
  },
  {
    id: "htc-20b-104-sc",
    name: "HTC 20B 104 SC (SLUDGE CONDITIONER)",
    category: "Boiler Chemicals",
    division: "core",
    slug: "htc-20b-104-sc-sludge-conditioner",
    shortDescription: "Conditions hardness precipitates into free-flowing sludge, allowing easy removal during regular blowdown.",
    image: "/Images/104_SC.png",
    applications: ["Boiler Water Treatment", "Blowdown Optimization"]
  },
  {
    id: "htc-20b-105-cc",
    name: "HTC 20B 105 CC (CONDENSATE CONDITIONER)",
    category: "Boiler Chemicals",
    division: "core",
    slug: "htc-20b-105-cc-condensate-conditioner",
    shortDescription: "Neutralizes carbonic acid in steam and condensate return lines, dramatically extending pipe lifespan.",
    image: "/Images/105_CC.png",
    applications: ["Boiler Water Treatment", "Condensate Line Protection"]
  },
  {
    id: "htc-20b-106-pt",
    name: "HTC 20B 106 PT (PRE-TREATMENT)",
    category: "Boiler Chemicals",
    division: "core",
    slug: "htc-20b-106-pt-pre-treatment",
    shortDescription: "Prepares raw feed water for boilers, mitigating mineral fouling and improving thermal conductivity.",
    image: "/Images/106_PT.png",
    applications: ["Boiler Water Treatment", "Feedwater Prep"]
  },
  {
    id: "htc-20b-107-na",
    name: "HTC 20B 107 NA (NEUTRALIZATION AGENT)",
    category: "Boiler Chemicals",
    division: "core",
    slug: "htc-20b-107-na-neutralization-agent",
    shortDescription: "Balances acid and alkaline wastewater discharge streams to comply with effluent norms.",
    image: "/Images/107_NA.png",
    applications: ["Boiler Water Treatment", "Effluent Neutralization"]
  },
  {
    id: "htc-23d-108",
    name: "HTC 23D 108 (DESCALANT)",
    category: "Boiler Chemicals",
    division: "core",
    slug: "htc-23d-108-descalant",
    shortDescription: "Rapidly dissolves and removes stubborn scale encrustations, restoring boiler heat transfer efficiency.",
    image: "/Images/108_DS.png",
    applications: ["Boiler Water Treatment", "Descaling & Cleaning"]
  },
  
  // ==========================================
  // CORE PRODUCTS: Cooling Water Treatment Chemicals
  // ==========================================
  {
    id: "htc-30c-201-as",
    name: "HTC 30C 201 AS (ANTI-SCALANT)",
    category: "Cooling Water Chemicals",
    division: "core",
    slug: "htc-30c-201-as-anti-scalant",
    shortDescription: "Prevents scale formation and mineral precipitation in open and closed recirculating cooling towers.",
    image: "/Images/210_AS.png",
    applications: ["Cooling Tower Treatment", "Chiller Protection"]
  },
  {
    id: "htc-33a-202-bt",
    name: "HTC 33A 202 BT (BIOLOGICAL TREATMENT)",
    category: "Cooling Water Chemicals",
    division: "core",
    slug: "htc-33a-202-bt-biological-treatment",
    shortDescription: "Broad-spectrum oxidizing & non-oxidizing biocide controlling algae, bacteria, and biofilm in cooling loops.",
    image: "/Images/202_BC.png",
    applications: ["Cooling Water Treatment", "Algae & Biofilm Control"]
  },

  // ==========================================
  // CORE PRODUCTS: RO Membrane Chemicals
  // ==========================================
  {
    id: "htc-35-301-ro",
    name: "HTC 35 301 RO (RO ANTI-SCALANT)",
    category: "RO Chemicals",
    division: "core",
    slug: "htc-35-301-ro-ro-anti-scalant",
    shortDescription: "Inhibits membrane scaling from calcium carbonate, sulfates, and silica in reverse osmosis plants.",
    image: "/Images/301_RO.png",
    applications: ["RO Water Treatment", "Membrane Life Extension"]
  },

  // ==========================================
  // CORE PRODUCTS: Dosing Equipment & Testing Systems
  // ==========================================
  {
    id: "dosing-pumps",
    name: "ELECTRONIC DOSING PUMPS",
    category: "Equipment & Testing",
    division: "core",
    slug: "dosing-pumps",
    shortDescription: "Precision chemical metering pumps ensuring accurate automated chemical dosing for water and fluid systems.",
    image: "/Images/dosing_Pump.webp",
    applications: ["Automated Chemical Dosing", "Water Plants"]
  },
  {
    id: "water-hardness-test-kit",
    name: "WATER HARDNESS TEST KIT",
    category: "Equipment & Testing",
    division: "core",
    slug: "water-hardness-test-kit",
    shortDescription: "Fast, accurate field testing kit to monitor water hardness and ensure proper treatment chemistry.",
    image: "/Images/WaterTreatment_Kit.jpg",
    applications: ["Water Quality Testing", "Hardness Monitoring"]
  },
  {
    id: "water-treatment-plants",
    name: "WATER TREATMENT PLANTS",
    category: "Equipment & Testing",
    division: "core",
    slug: "water-treatment-plants",
    shortDescription: "Turnkey industrial water treatment plants including RO, DM, Softener, and Filtration systems.",
    image: "/Images/water_Treatment.jpg",
    applications: ["Turnkey Water Plants", "Industrial Purification"]
  },

  // ==========================================
  // ALSO TRADED BY AAKASH ENTERPRISE: Synthetic Heat Transfer Fluids (Thermic Fluids)
  // ==========================================
  {
    id: "maxothermie-550",
    name: "MAXOTHERMIE® 550",
    category: "Also Traded: Thermic Fluids",
    division: "trading",
    slug: "maxothermie-550",
    shortDescription: "Premium synthetic heat transfer fluid operating from -10°C to 305°C (extended up to 315°C). High resistance to oxidation and thermal degradation.",
    image: "/Images/thermic_fluid_drum.jpg",
    temperatureRange: "-10°C to 305°C (Ext. 315°C)",
    brand: "Synthetic Thermic Fluid",
    isTradedProduct: true,
    applications: ["Textiles & Plywood", "Chemical & Pharma", "Vegetable Oil Extraction", "Paints & Resins"]
  },
  {
    id: "maxothermie-600",
    name: "MAXOTHERMIE® 600",
    category: "Also Traded: Thermic Fluids",
    division: "trading",
    slug: "maxothermie-600",
    shortDescription: "High-temperature synthetic thermic fluid operating from -10°C to 320°C. Delivers outstanding thermal stability and long operational service life.",
    image: "/Images/thermic_fluid_drum.jpg",
    temperatureRange: "-10°C to 320°C",
    brand: "Synthetic Thermic Fluid",
    isTradedProduct: true,
    applications: ["High Temp Process Heat", "Chemical Plants", "Continuous Heating Systems"]
  },
  {
    id: "maxothermie-hhf",
    name: "MAXOTHERMIE® HHF (FLUSHING FLUID)",
    category: "Also Traded: Thermic Fluids",
    division: "trading",
    slug: "maxothermie-hhf-flushing-fluid",
    shortDescription: "Hot flash flushing fluid specially formulated for system cleaning, dislodging sludge, carbon deposits, and choked thermic fluid lines prior to refill.",
    image: "/Images/thermic_fluid_drum.jpg",
    temperatureRange: "System Cleaning & De-sludging",
    brand: "Synthetic Thermic Fluid",
    isTradedProduct: true,
    applications: ["System Flushing", "Sludge Removal", "Boiler & Heater Maintenance"]
  },
  {
    id: "maxothermie-fp",
    name: "MAXOTHERMIE® FP (FOOD GRADE)",
    category: "Also Traded: Thermic Fluids",
    division: "trading",
    slug: "maxothermie-fp-food-grade",
    shortDescription: "Specialized food-grade synthetic heat transfer fluid operating from -10°C to 320°C for sensitive food, edible oil, and pharmaceutical manufacturing.",
    image: "/Images/thermic_fluid_drum.jpg",
    temperatureRange: "-10°C to 320°C",
    brand: "Synthetic Thermic Fluid",
    isTradedProduct: true,
    applications: ["Food Processing", "Edible Oil Extraction", "Pharmaceuticals"]
  },
  {
    id: "maxothermie-650",
    name: "MAXOTHERMIE® 650",
    category: "Also Traded: Thermic Fluids",
    division: "trading",
    slug: "maxothermie-650",
    shortDescription: "Advanced synthetic heat transfer fluid with an operating range of 0°C to 330°C (extended up to 350°C), offering exceptional oxidation resistance.",
    image: "/Images/thermic_fluid_drum.jpg",
    temperatureRange: "0°C to 330°C (Ext. 350°C)",
    brand: "Synthetic Thermic Fluid",
    isTradedProduct: true,
    applications: ["Closed Loop Heating", "Refineries", "Specialty Chemical Synthesis"]
  },
  {
    id: "maxothermie-660",
    name: "MAXOTHERMIE® 660",
    category: "Also Traded: Thermic Fluids",
    division: "trading",
    slug: "maxothermie-660",
    shortDescription: "High-stability synthetic fluid for demanding industrial process heating operating between -7°C and 350°C with low vapor pressure.",
    image: "/Images/thermic_fluid_drum.jpg",
    temperatureRange: "-7°C to 350°C",
    brand: "Synthetic Thermic Fluid",
    isTradedProduct: true,
    applications: ["High-Temp Industrial Systems", "OEM Equipment", "Heavy Engineering"]
  },
  {
    id: "maxothermie-vpi",
    name: "MAXOTHERMIE® VPI (VAPOR & LIQUID PHASE)",
    category: "Also Traded: Thermic Fluids",
    division: "trading",
    slug: "maxothermie-vpi-vapor-phase",
    shortDescription: "Ultra-high temperature synthetic fluid operating between 12°C and 400°C, capable of both vapor phase and liquid phase operation.",
    image: "/Images/thermic_fluid_drum.jpg",
    temperatureRange: "12°C to 400°C",
    brand: "Synthetic Thermic Fluid",
    isTradedProduct: true,
    applications: ["Extreme Temperature Heat Transfer", "Vapor Phase Systems", "Petrochemicals"]
  }
];

export const productCategories = [
  "All Products",
  "Boiler Chemicals",
  "Cooling Water Chemicals",
  "RO Chemicals",
  "Equipment & Testing",
  "Also Traded: Thermic Fluids"
];
