import { ArrowRight, Phone } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";
import { translations } from "../i18n/translations";

export function CTASection() {
  const { language } = useLanguage();
  const t = translations[language as keyof typeof translations];

  return (
    <section className="section-padding bg-gradient-to-r from-brand-primary-600 to-brand-secondary-500 scroll-animate-scale">
      <div className="container-max text-center px-4">
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-display font-medium text-white mb-4 sm:mb-6 text-balance px-4">
          {t.cta.title}
        </h2>
        <p className="text-base sm:text-lg md:text-xl text-blue-50 mb-6 sm:mb-8 max-w-3xl mx-auto px-4">
          {t.cta.subtitle}
        </p>
        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center px-4">
          <a
            href="https://join-anonyto.systeme.io/36805238"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background bg-white text-brand-primary-600 hover:bg-gray-100 h-11 sm:h-12 px-6 sm:px-8 shadow-large group"
          >
            {t.cta.start}
            <ArrowRight className="ml-2 w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" />
          </a>
          <a
            href="https://join-anonyto.systeme.io/36805238"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background bg-transparent text-white border-2 border-white hover:bg-white hover:text-brand-primary-600 h-11 sm:h-12 px-6 sm:px-8 group"
          >
            {t.cta.contact}
            <Phone className="ml-2 w-4 h-4 sm:w-5 sm:h-5" />
          </a>
        </div>
      </div>
    </section>
  );
}
