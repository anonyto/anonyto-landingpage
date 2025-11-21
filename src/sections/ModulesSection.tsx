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

  const icons = [
    Shield,
    Target,
    Globe,
    Settings,
    Target,
    BarChart3,
    Users,
    Database,
    CheckCircle,
    Lock,
    Zap,
    Award,
  ];

  const modules = t.modules.items.map((item, index) => ({
    icon: icons[index],
    name: item.name,
    description: item.description,
    color: ["blue", "orange", "green", "purple"][index % 4],
  }));

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
