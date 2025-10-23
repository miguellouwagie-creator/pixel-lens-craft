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
  {
    id: 1,
    title: "GymDenia",
    category: "web",
    description:
      "Web que multiplica consultas y captación de socios. Formularios optimizados que convierten visitantes en clientes potenciales cada día.",
    imageUrl: "/src/assets/showcase/gymdenia.jpg",
    tags: ["Diseño Web", "Formularios", "Responsive"],
    clientName: "GymDenia",
  },
  {
    id: 2,
    title: "BVS Trabajos Verticales",
    category: "web",
    description:
      "Presencia digital que transmite confianza al instante. Transformamos su imagen online para reflejar su liderazgo en el sector.",
    imageUrl: "/src/assets/showcase/bvs.jpg",
    tags: ["Corporativo", "WordPress", "SEO"],
    clientName: "BVS",
  },
  {
    id: 3,
    title: "TropiDenia",
    category: "web",
    description:
      "Sistema de reservas que generó +40% más ingresos. Eliminamos intermediarios y comisiones para control total del negocio.",
    imageUrl: "/src/assets/showcase/tropidenia.jpg",
    tags: ["UI/UX", "React", "Reservas"],
    clientName: "TropiDenia",
  },
];
