import gymdenia from "@/assets/showcase/gymdenia.jpg";
import bvs from "@/assets/showcase/bvs.jpg";
import tropidenia from "@/assets/showcase/tropidenia.jpg";
import goldencoast from "@/assets/showcase/goldencoast.jpg";

export interface Project {
  id: number;
  title: string;
  category: "web" | "photography";
  description?: string;
  descriptionKey: string;
  imageUrl: string;
  tags: string[];
  clientName?: string;
}

export const showcaseProjects: Project[] = [
  // 🥇 PRIMERO: BVS Trabajos Verticales
  {
    id: 2,
    title: "BVS Trabajos Verticales",
    category: "web",
    descriptionKey: "portfolioShowcase.bvs.description",
    imageUrl: bvs,
    tags: ["Corporativo", "WordPress", "SEO"],
    clientName: "BVS",
  },

  // 🥈 SEGUNDO: Golden Coast Charter (NUEVO)
  {
    id: 4,
    title: "Golden Coast Charter",
    category: "web",
    descriptionKey: "portfolioShowcase.goldencoast.description",
    imageUrl: goldencoast,
    tags: ["Turismo", "Reservas", "Lujo"],
    clientName: "Golden Coast",
  },

  // 🥉 TERCERO: GymDenia
  {
    id: 1,
    title: "GymDenia",
    category: "web",
    descriptionKey: "portfolioShowcase.gymdenia.description",
    imageUrl: gymdenia,
    tags: ["Diseño Web", "Formularios", "Responsive"],
    clientName: "GymDenia",
  },

  // 🏅 CUARTO: TropiDenia
  {
    id: 3,
    title: "TropiDenia",
    category: "web",
    descriptionKey: "portfolioShowcase.tropidenia.description",
    imageUrl: tropidenia,
    tags: ["UI/UX", "React", "Reservas"],
    clientName: "TropiDenia",
  },
];
