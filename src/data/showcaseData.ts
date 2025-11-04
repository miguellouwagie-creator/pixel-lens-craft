// src/data/showcaseData.ts
import gymdenia from "@/assets/showcase/gymdenia.jpg";
import bvs from "@/assets/showcase/bvs.jpg";
import tropidenia from "@/assets/showcase/tropidenia.jpg";
import goldencoast from "@/assets/showcase/goldencoast.jpg";

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
    id: 1,
    title: "BVS Trabajos Verticales",
    category: "web",
    description:
      "Presencia digital que transmite confianza al instante. Transformamos su imagen online para reflejar su liderazgo en el sector.",
    imageUrl: bvs,
    tags: ["Corporativo", "WordPress", "SEO"],
    clientName: "BVS",
  },

  // 🥈 SEGUNDO: Golden Coast Charter
  {
    id: 2,
    title: "Golden Coast Charter",
    category: "web",
    description:
      "Plataforma de reservas online que revolucionó su negocio de charters náuticos. Sistema de calendario en tiempo real y pasarela de pago integrada.",
    imageUrl: goldencoast,
    tags: ["Next.js", "Reservas", "Pasarela de Pago"],
    clientName: "Golden Coast Charter",
  },

  // 🥉 TERCERO: GymDenia
  {
    id: 3,
    title: "GymDenia",
    category: "web",
    description:
      "Web que multiplica consultas y captación de socios. Formularios optimizados que convierten visitantes en clientes potenciales cada día.",
    imageUrl: gymdenia,
    tags: ["Diseño Web", "Formularios", "Responsive"],
    clientName: "GymDenia",
  },

  // 🏅 CUARTO: TropiDenia
  {
    id: 4,
    title: "TropiDenia",
    category: "web",
    description:
      "Sistema de reservas que generó +40% más ingresos. Eliminamos intermediarios y comisiones para control total del negocio.",
    imageUrl: tropidenia,
    tags: ["UI/UX", "React", "Reservas"],
    clientName: "TropiDenia",
  },
];
