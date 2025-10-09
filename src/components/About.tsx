import { Code, Camera } from "lucide-react";

const About = () => {
  const team = [
    {
      name: "Miguel",
      role: "Desarrollo Web",
      photo: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop",
      description: "Especialista en desarrollo web con React, TypeScript y tecnologías modernas",
      experience: "Experiencia en BULL Vertical Services",
      skills: ["React", "TypeScript", "Vite", "Tailwind CSS"],
      icon: Code,
    },
    {
      name: "Javier",
      role: "Fotografía Profesional",
      photo: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop",
      description: "Fotógrafo profesional especializado en empresas y propiedades",
      experience: "Captura la esencia de cada negocio",
      skills: ["Corporativa", "Inmobiliaria", "Productos", "Eventos"],
      icon: Camera,
    },
  ];

  return (
    <section id="nosotros" className="py-20 md:py-28 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-foreground">
            Conoce al Equipo
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            Dos hermanos apasionados por la tecnología y la fotografía, unidos para hacer crecer tu negocio
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {team.map((member, index) => {
            const IconComponent = member.icon;
            return (
              <div
                key={member.name}
                className="group hover-lift animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="relative mb-6">
                  <div className="aspect-square rounded-2xl overflow-hidden shadow-xl">
                    <img
                      src={member.photo}
                      alt={member.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 bg-primary text-white p-4 rounded-xl shadow-lg">
                    <IconComponent className="h-8 w-8" />
                  </div>
                </div>

                <div className="text-center mt-10">
                  <h3 className="text-2xl font-bold mb-2 text-foreground">{member.name}</h3>
                  <div className="text-lg font-semibold text-cta mb-4">{member.role}</div>
                  <p className="text-muted-foreground mb-4 leading-relaxed">{member.description}</p>
                  <p className="text-sm text-foreground font-medium mb-4">{member.experience}</p>

                  <div className="flex flex-wrap gap-2 justify-center">
                    {member.skills.map((skill) => (
                      <span
                        key={skill}
                        className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default About;
