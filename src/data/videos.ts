export interface Video {
  id: string;
  title: string;
  category: string;
  duration: string;
  thumbnail: string;
  url: string; // Placeholder or actual embed URL
  description: string;
}

export const videos: Video[] = [
  {
    id: "company-overview",
    title: "AAkash AquaTech Corporate Overview",
    category: "Company Overview",
    duration: "2:45",
    thumbnail: "https://images.unsplash.com/photo-1598285584557-048700778c18?auto=format&fit=crop&w=800&q=80",
    url: "https://www.youtube.com/watch?v=dQw4w9WgXcQ", // Placeholder
    description: "Learn about our mission, facilities, and comprehensive water treatment solutions."
  },
  {
    id: "ro-plant-demo",
    title: "1000 LPH RO Plant Demonstration",
    category: "RO Plant",
    duration: "4:12",
    thumbnail: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?auto=format&fit=crop&w=800&q=80",
    url: "https://www.youtube.com/watch?v=dQw4w9WgXcQ", // Placeholder
    description: "A walkthrough of our industrial RO plant design and operation."
  }
];

export const videoCategories = [
  "All",
  "Company Overview",
  "Water Treatment Process",
  "RO Plant",
  "ETP",
  "STP",
  "Boiler Treatment",
  "Cooling Water",
  "Product Demonstration"
];
