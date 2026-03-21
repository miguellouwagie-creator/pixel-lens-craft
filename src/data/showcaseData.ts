// src/data/showcaseData.ts
import gymdenia from "@/assets/showcase/gymdenia.jpg";
import bvs from "@/assets/showcase/bvs.jpg";
import tropidenia from "@/assets/showcase/tropidenia.jpg";
import goldencoast from "@/assets/showcase/goldencoast.jpg";
import photo1 from "@/assets/editada-1.jpeg";
import photo2 from "@/assets/editada-2.png";
import photo3 from "@/assets/editada-3.png";
import photo4 from "@/assets/editada-4.png";

export type ProjectCategory = "web" | "photography" | "branding";

export interface Project {
  id: number;
  title: string;
  category: ProjectCategory;
  description: string;
  imageUrl: string;
  tags: string[];
  clientName?: string;
  span?: "large" | "medium" | "small"; // Used for masonry grid sizing
}

export const showcaseProjects: Project[] = [
  {
    id: 1,
    title: "Golden Coast Charter",
    category: "web",
    description: "Maritime booking platform with real-time calendar and integrated payments.",
    imageUrl: goldencoast,
    tags: ["Next.js", "Booking", "Payments"],
    clientName: "Golden Coast",
    span: "large",
  },
  {
    id: 5,
    title: "Editorial Campaign",
    category: "photography",
    description: "Corporate portrait session focusing on leadership and architecture.",
    imageUrl: photo1,
    tags: ["Corporate", "Portrait", "Light"],
    clientName: "N/A",
    span: "small",
  },
  {
    id: 2,
    title: "BVS Trabajos Verticales",
    category: "web",
    description: "Digital presence transmitting instant trust and industry leadership.",
    imageUrl: bvs,
    tags: ["Corporate", "WordPress", "SEO"],
    clientName: "BVS",
    span: "small",
  },
  {
    id: 6,
    title: "Product Narrative",
    category: "photography",
    description: "Cinematic product photography highlighting textures and forms.",
    imageUrl: photo2,
    tags: ["Product", "Studio", "Macro"],
    clientName: "N/A",
    span: "medium",
  },
  {
    id: 3,
    title: "GymDenia",
    category: "web",
    description: "Conversion-optimized landing page multiplying member acquisitions.",
    imageUrl: gymdenia,
    tags: ["Web Design", "Forms", "Responsive"],
    clientName: "GymDenia",
    span: "medium",
  },
  {
    id: 7,
    title: "Urban Architecture",
    category: "photography",
    description: "Architectural photography capturing geometric harmony.",
    imageUrl: photo4,
    tags: ["Architecture", "Urban", "Lines"],
    clientName: "N/A",
    span: "large",
  },
  {
    id: 4,
    title: "TropiDenia",
    category: "web",
    description: "Booking system that generated +40% more direct revenue.",
    imageUrl: tropidenia,
    tags: ["UI/UX", "React", "Booking"],
    clientName: "TropiDenia",
    span: "small",
  },
  {
    id: 8,
    title: "Brand Lifestyle",
    category: "photography",
    description: "Lifestyle brand photography integrating product and subject.",
    imageUrl: photo3,
    tags: ["Lifestyle", "Brand", "Color"],
    clientName: "N/A",
    span: "small",
  },
];
