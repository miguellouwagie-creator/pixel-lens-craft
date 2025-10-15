import { Code, Camera } from "lucide-react";
import { useTranslation } from "react-i18next";
import miguelPhoto from "@/assets/miguel-photo.jpeg";
import sergioPhoto from "@/assets/sergio-foto2.png";

const About = () => {
  const { t } = useTranslation();

  const team = [
    {
      nameKey: "about.miguel.name",
      roleKey: "about.miguel.role",
      descriptionKey: "about.miguel.description",
      photo: miguelPhoto,
      photoPosition: "object-center", // Miguel centrado
      skillsKeys: [
        "about.miguel.skill1",
        "about.miguel.skill2",
        "about.miguel.skill3",
      ],
      icon: Code,
    },
    {
      nameKey: "about.sergio.name",
      roleKey: "about.sergio.role",
      descriptionKey: "about.sergio.description",
      photo: sergioPhoto,
      photoPosition: "object-[center_20%]", // Sergio bajado un 20%
      skillsKeys: [
        "about.sergio.skill1",
        "about.sergio.skill2",
        "about.sergio.skill3",
      ],
      icon: Camera,
    },
  ];

  return (
    <section
      id="sobre-mi"
      className="py-16 md:py-20 bg-gradient-to-br from-slate-50 to-white"
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 animate-fade-in-up">
          <h2 className="text-3xl md:text-4xl font-bold mb-3 text-primary">
            {t("about.title")}
          </h2>
          <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto">
            {t("about.subtitle")}
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {team.map((member, index) => {
            const IconComponent = member.icon;
            return (
              <div
                key={member.nameKey}
                className="bg-white rounded-2xl p-6 shadow-md hover:shadow-xl transition-all animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-start gap-4 mb-4">
                  <div className="relative flex-shrink-0">
                    <div className="w-32 h-32 rounded-xl overflow-hidden shadow-lg">
                      <img
                        src={member.photo}
                        alt={t(member.nameKey)}
                        className={`w-full h-full object-cover ${member.photoPosition}`}
                      />
                    </div>
                    <div className="absolute -bottom-2 -right-2 bg-primary text-white p-2 rounded-lg shadow-lg">
                      <IconComponent className="h-4 w-4" />
                    </div>
                  </div>

                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-foreground mb-1">
                      {t(member.nameKey)}
                    </h3>
                    <div className="text-sm font-semibold text-cta mb-3">
                      {t(member.roleKey)}
                    </div>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {t(member.descriptionKey)}
                    </p>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2 mt-4">
                  {member.skillsKeys.map((skillKey) => (
                    <span
                      key={skillKey}
                      className="px-3 py-1 bg-primary/10 text-primary rounded-full text-xs font-medium"
                    >
                      {t(skillKey)}
                    </span>
                  ))}
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
