import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useTranslation } from "react-i18next";

const Portfolio = () => {
  const { t } = useTranslation();

  // Proyectos de ejemplo - luego puedes reemplazarlos con imágenes reales
  const projects = [
    {
      id: 1,
      title: "Villa Moderna Costa Blanca",
      category: "Fotografía Inmobiliaria",
      image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&q=80",
    },
    {
      id: 2,
      title: "Restaurante Mediterráneo",
      category: "Fotografía Gastronómica",
      image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800&q=80",
    },
    {
      id: 3,
      title: "Hotel Boutique",
      category: "Fotografía Hostelería",
      image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800&q=80",
    },
    {
      id: 4,
      title: "Apartamento Lujo",
      category: "Fotografía Inmobiliaria",
      image: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=800&q=80",
    },
    {
      id: 5,
      title: "Cocina Gourmet",
      category: "Fotografía Gastronómica",
      image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=800&q=80",
    },
    {
      id: 6,
      title: "Casa con Piscina",
      category: "Fotografía Inmobiliaria",
      image: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=800&q=80",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1 pt-20">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-primary to-primary/80 text-white py-20">
          <div className="container mx-auto px-4">
            <Link
              to="/"
              className="inline-flex items-center gap-2 text-white/80 hover:text-white transition-colors mb-6"
            >
              <ArrowLeft className="h-4 w-4" />
              Volver al inicio
            </Link>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Nuestro Portafolio
            </h1>
            <p className="text-xl text-white/90 max-w-3xl">
              Explora nuestros proyectos realizados. Cada imagen cuenta una historia de profesionalidad y dedicación.
            </p>
          </div>
        </section>

        {/* Portfolio Grid */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects.map((project) => (
                <div
                  key={project.id}
                  className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer"
                >
                  <div className="aspect-[4/3] overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                      <p className="text-sm text-cta font-semibold mb-2">
                        {project.category}
                      </p>
                      <h3 className="text-xl font-bold">{project.title}</h3>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-secondary">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-4">¿Te gusta lo que ves?</h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Contacta con nosotros y hagamos realidad tu próximo proyecto
            </p>
            <Link
              to="/#contacto"
              className="inline-block bg-cta hover:bg-cta/90 text-white px-8 py-4 rounded-lg font-semibold transition-colors"
            >
              Solicitar Presupuesto
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Portfolio;
