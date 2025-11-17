import {
  Briefcase,
  FileText,
  Users,
  DollarSign,
  Target,
  Lightbulb,
  Shield,
} from "lucide-react";
import { useLanguage } from "../context/LanguageContext";
import { translations } from "../i18n/translations";

export function FeaturesSection() {
  const { language } = useLanguage();
  const t = translations[language as keyof typeof translations];

  const features = [
    {
      icon: Briefcase,
      title: "Entreprises adoptant l'IA",
      description:
        "Pour les organisations qui veulent utiliser l'IA en toute sécurité sans exposer leurs données",
      color: "blue",
    },
    {
      icon: FileText,
      title: "Équipes juridiques",
      description:
        "Protégez la confidentialité client tout en bénéficiant de l'assistance IA pour la rédaction",
      color: "orange",
    },
    {
      icon: Users,
      title: "RH & Paie",
      description:
        "Gérez les données sensibles des employés sans risque de fuite d'informations personnelles",
      color: "green",
    },
    {
      icon: DollarSign,
      title: "Départements financiers",
      description:
        "Utilisez l'IA pour l'analyse financière sans exposer de chiffres confidentiels",
      color: "purple",
    },
    {
      icon: Target,
      title: "Support & Service client",
      description:
        "Répondez plus rapidement aux clients avec l'IA tout en protégeant leurs informations",
      color: "blue",
    },
    {
      icon: Lightbulb,
      title: "R&D & Ingénierie",
      description:
        "Accélérez l'innovation avec l'IA sans compromettre la propriété intellectuelle",
      color: "orange",
    },
    {
      icon: Briefcase,
      title: "Agences gérant les données clients",
      description:
        "Protégez les données de vos clients tout en utilisant l'IA pour améliorer vos services",
      color: "green",
    },
    {
      icon: Shield,
      title: "Entreprises conformes RGPD/ISO/HIPAA",
      description:
        "Maintenez votre conformité tout en adoptant les outils IA modernes",
      color: "purple",
    },
  ];

  return (
    <section id="features" className="section-padding">
      <div className="container-max px-4">
        <div className="text-center mb-12 sm:mb-16 scroll-animate">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-medium mb-4 text-balance">
            {t.features.title}
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-brand-neutral-600 dark:text-brand-neutral-300 max-w-3xl mx-auto px-4">
            {t.features.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 lg:gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className={`bg-white dark:bg-brand-neutral-800 rounded-xl p-6 sm:p-8 group border border-brand-neutral-200 dark:border-brand-neutral-700 hover:shadow-md transition-all duration-300 scroll-animate stagger-${
                (index % 8) + 1
              }`}
            >
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-brand-neutral-100 dark:bg-brand-neutral-700 rounded-lg sm:rounded-xl flex items-center justify-center mb-4 sm:mb-6 group-hover:scale-110 transition-transform duration-300 border border-brand-neutral-200 dark:border-brand-neutral-600">
                <feature.icon className="w-5 h-5 sm:w-6 sm:h-6 text-brand-neutral-700 dark:text-brand-neutral-300" />
              </div>
              <h3 className="text-lg sm:text-xl font-medium text-brand-neutral-900 dark:text-white mb-2 sm:mb-3">
                {feature.title}
              </h3>
              <p className="text-sm sm:text-base text-brand-neutral-600 dark:text-brand-neutral-300 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
