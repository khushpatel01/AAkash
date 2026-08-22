export interface BlogPost {
  id: string;
  title: string;
  slug: string;
  date: string;
  excerpt: string;
  content: string; // Markdown or HTML in a real app
  author: string;
  image: string;
}

export const blogPosts: BlogPost[] = [
  {
    id: "importance-of-cooling-water-treatment",
    title: "The Importance of Effective Cooling Water Treatment",
    slug: "importance-of-cooling-water-treatment",
    date: "2026-08-15",
    excerpt: "Learn why proper chemical treatment is essential for maintaining cooling tower efficiency.",
    content: "Full article content goes here...",
    author: "Technical Team",
    image: "https://images.unsplash.com/photo-1621501783510-a4a9557b42b1?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "understanding-ro-antiscalants",
    title: "Understanding RO Antiscalants",
    slug: "understanding-ro-antiscalants",
    date: "2026-08-01",
    excerpt: "How antiscalants work to protect reverse osmosis membranes from scaling and fouling.",
    content: "Full article content goes here...",
    author: "R&D Department",
    image: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?auto=format&fit=crop&w=800&q=80"
  }
];
