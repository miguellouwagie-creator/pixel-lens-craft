// src/data/showcaseData.ts
import gymdenia from "@/assets/showcase/gymdenia.jpg";
import bvs from "@/assets/showcase/bvs.jpg";
import tropidenia from "@/assets/showcase/tropidenia.jpg";

export interface Project {
  id: number;
  title: string;
  category: "web" | "photography";
  description: string;
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
    description:
      "Presencia digital que transmite confianza al instante. Transformamos su imagen online para reflejar su liderazgo en el sector.",
    imageUrl: bvs,
    tags: ["Corporativo", "WordPress", "SEO"],
    clientName: "BVS",
  },

  // 🥈 SEGUNDO: GymDenia
  {
    id: 1,
    title: "GymDenia",
    category: "web",
    description:
      "Web que multiplica consultas y captación de socios. Formularios optimizados que convierten visitantes en clientes potenciales cada día.",
    imageUrl: gymdenia,
    tags: ["Diseño Web", "Formularios", "Responsive"],
    clientName: "GymDenia",
  },

  // 🥉 TERCERO: TropiDenia
  {
    id: 3,
    title: "TropiDenia",
    category: "web",
    description:
      "Sistema de reservas que generó +40% más ingresos. Eliminamos intermediarios y comisiones para control total del negocio.",
    imageUrl: tropidenia,
    tags: ["UI/UX", "React", "Reservas"],
    clientName: "TropiDenia",
  },
];
