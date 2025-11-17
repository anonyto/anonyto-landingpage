import {
  Shield,
  Lock,
  Database,
  Zap,
  Globe,
  Award,
  Target,
  BarChart3,
  Users,
  Settings,
  CheckCircle,
} from "lucide-react";
import { ArrowRight } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";
import { translations } from "../i18n/translations";

export function ModulesSection() {
  const { language } = useLanguage();
  const t = translations[language as keyof typeof translations];

  const modules = [
    {
      icon: Shield,
      name: "Anonymisation IA en temps réel",
      description:
        "Détection et anonymisation instantanée des données sensibles pendant que vous tapez",
      color: "blue",
    },
    {
      icon: Target,
      name: "Détection avancée des données sensibles",
      description:
        "Identifie les noms, données clients, processus internes, infos financières et plus",
      color: "orange",
    },
    {
      icon: Globe,
      name: "Fonctionne avec tous les outils IA",
      description:
        "Compatible avec ChatGPT, Copilot, Gemini et tout outil IA basé sur navigateur ou desktop",
      color: "green",
    },
    {
      icon: Settings,
      name: "Extension navigateur + intégration desktop",
      description:
        "Installation facile en moins de 2 minutes, aucun changement de flux de travail requis",
      color: "purple",
    },
    {
      icon: Target,
      name: "Niveaux de sensibilité personnalisables",
      description:
        "Contrôlez ce qui compte comme sensible selon les besoins de votre entreprise",
      color: "blue",
    },
    {
      icon: BarChart3,
      name: "Tableau de bord admin & logs d'audit",
      description:
        "Suivez l'utilisation, examinez les incidents et maintenez la conformité",
      color: "orange",
    },
    {
      icon: Users,
      name: "Politiques d'équipe & contrôle d'accès",
      description:
        "Définissez des règles par département, rôle ou niveau de sensibilité des données",
      color: "green",
    },
    {
      icon: Database,
      name: "Zéro stockage de données",
      description:
        "Nous ne conservons jamais votre contenu, traitement local ou éphémère uniquement",
      color: "purple",
    },
    {
      icon: CheckCircle,
      name: "Prêt pour le RGPD",
      description:
        "Construit avec la conformité à l'esprit pour les entreprises européennes et mondiales",
      color: "blue",
    },
    {
      icon: Lock,
      name: "Chiffrement de bout en bout",
      description: "Vos données restent chiffrées en transit et au repos",
      color: "orange",
    },
    {
      icon: Zap,
      name: "Performance ultra-rapide",
      description:
        "L'anonymisation se fait en millisecondes, pas de ralentissement perceptible",
      color: "green",
    },
    {
      icon: Award,
      name: "Support prioritaire",
      description:
        "Accès à notre équipe d'experts pour l'intégration et le support continu",
      color: "purple",
    },
  ];

  return (
    <section id="modules" className="section-padding relative overflow-hidden">
      <div className="container-max px-4">
        <div className="text-center mb-12 sm:mb-16 scroll-animate">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-medium mb-4 title-spacing text-balance">
            {t.modules.title}
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-brand-neutral-600 dark:text-brand-neutral-300 max-w-3xl mx-auto mb-6 sm:mb-8 px-4">
            {t.modules.subtitle}
          </p>
          <a
            href="https://join-anonyto.systeme.io/36805238"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background border border-input bg-background hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2"
          >
            {t.modules.cta}
            <ArrowRight className="ml-2 w-4 h-4" />
          </a>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6">
          {modules.map((module, index) => (
            <div
              key={index}
              className={`bg-white dark:bg-brand-neutral-800 rounded-xl p-5 sm:p-6 group cursor-pointer border border-brand-neutral-200 dark:border-brand-neutral-700 hover:shadow-md transition-all duration-300 scroll-animate stagger-${
                (index % 8) + 1
              }`}
            >
              <div
                className={`w-12 h-12 sm:w-14 sm:h-14 bg-brand-neutral-100 dark:bg-brand-neutral-700 rounded-xl flex items-center justify-center mb-3 sm:mb-4 group-hover:scale-110 transition-transform duration-300 border border-brand-neutral-200 dark:border-brand-neutral-600`}
              >
                <module.icon className="w-6 h-6 sm:w-7 sm:h-7 text-brand-neutral-700 dark:text-brand-neutral-300" />
              </div>
              <h3 className="text-base sm:text-lg font-medium text-brand-neutral-900 dark:text-white mb-2 group-hover:text-brand-primary-600 dark:group-hover:text-brand-primary-400 transition-colors">
                {module.name}
              </h3>
              <p className="text-sm text-brand-neutral-600 dark:text-brand-neutral-300 leading-relaxed">
                {module.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
