import { Shield, Eye, Target, Zap } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";
import { translations } from "../i18n/translations";

export function SolutionSection() {
  const { language } = useLanguage();
  const t = translations[language as keyof typeof translations];

  return (
    <section className="section-padding relative overflow-hidden">
      <div className="container-max px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12 sm:mb-16 scroll-animate">
            <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-gradient-to-r from-brand-primary-100 to-brand-secondary-100 dark:from-brand-primary-900/30 dark:to-brand-secondary-900/30 border border-brand-primary-200 dark:border-brand-primary-800 mb-4 sm:mb-6">
              <Shield className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-brand-primary-600 dark:text-brand-primary-400" />
              <span className="text-xs sm:text-sm font-medium text-brand-primary-700 dark:text-brand-primary-300">
                {t.solution.subtitle}
              </span>
            </div>

            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-medium text-brand-neutral-900 dark:text-white mb-4 sm:mb-6 leading-tight px-4">
              {t.solution.title}
            </h2>

            <p className="text-base sm:text-lg md:text-xl text-brand-neutral-600 dark:text-brand-neutral-400 max-w-3xl mx-auto leading-relaxed px-4">
              {t.solution.intro}
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-12">
            <div className="group relative bg-white dark:bg-brand-neutral-800 rounded-xl sm:rounded-2xl p-6 sm:p-8 border border-brand-neutral-200 dark:border-brand-neutral-700 hover:border-transparent hover:shadow-2xl hover:shadow-blue-500/10 dark:hover:shadow-blue-500/20 transition-all duration-300 scroll-animate stagger-1 hover:-translate-y-2">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/0 to-blue-500/0 group-hover:from-blue-500/5 group-hover:to-transparent rounded-xl sm:rounded-2xl transition-all duration-300"></div>

              <div className="relative">
                <div className="w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg sm:rounded-xl flex items-center justify-center mb-4 sm:mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-blue-500/30">
                  <Eye className="w-6 h-6 sm:w-7 sm:h-7 text-white" />
                </div>

                <h3 className="text-lg sm:text-xl font-medium text-brand-neutral-900 dark:text-white mb-2 sm:mb-3">
                  {t.solution.steps.analyze}
                </h3>

                <div className="w-10 sm:w-12 h-1 bg-gradient-to-r from-blue-500 to-transparent rounded-full mb-3 sm:mb-4"></div>

                <p className="text-brand-neutral-600 dark:text-brand-neutral-400 text-sm leading-relaxed">
                  Détection instantanée et analyse intelligente de vos données
                </p>
              </div>
            </div>
            <div className="group relative bg-white dark:bg-brand-neutral-800 rounded-xl sm:rounded-2xl p-6 sm:p-8 border border-brand-neutral-200 dark:border-brand-neutral-700 hover:border-transparent hover:shadow-2xl hover:shadow-purple-500/10 dark:hover:shadow-purple-500/20 transition-all duration-300 scroll-animate stagger-2 hover:-translate-y-2">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/0 to-purple-500/0 group-hover:from-purple-500/5 group-hover:to-transparent rounded-xl sm:rounded-2xl transition-all duration-300"></div>

              <div className="relative">
                <div className="w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-br from-purple-500 to-purple-600 rounded-lg sm:rounded-xl flex items-center justify-center mb-4 sm:mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-purple-500/30">
                  <Target className="w-6 h-6 sm:w-7 sm:h-7 text-white" />
                </div>

                <h3 className="text-lg sm:text-xl font-medium text-brand-neutral-900 dark:text-white mb-2 sm:mb-3">
                  {t.solution.steps.detect}
                </h3>

                <div className="w-10 sm:w-12 h-1 bg-gradient-to-r from-purple-500 to-transparent rounded-full mb-3 sm:mb-4"></div>

                <p className="text-brand-neutral-600 dark:text-brand-neutral-400 text-sm leading-relaxed">
                  Identification précise des informations sensibles et
                  confidentielles
                </p>
              </div>
            </div>
            <div className="group relative bg-white dark:bg-brand-neutral-800 rounded-xl sm:rounded-2xl p-6 sm:p-8 border border-brand-neutral-200 dark:border-brand-neutral-700 hover:border-transparent hover:shadow-2xl hover:shadow-green-500/10 dark:hover:shadow-green-500/20 transition-all duration-300 scroll-animate stagger-3 hover:-translate-y-2">
              <div className="absolute inset-0 bg-gradient-to-br from-green-500/0 to-green-500/0 group-hover:from-green-500/5 group-hover:to-transparent rounded-xl sm:rounded-2xl transition-all duration-300"></div>

              <div className="relative">
                <div className="w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-br from-green-500 to-green-600 rounded-lg sm:rounded-xl flex items-center justify-center mb-4 sm:mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-green-500/30">
                  <Shield className="w-6 h-6 sm:w-7 sm:h-7 text-white" />
                </div>

                <h3 className="text-lg sm:text-xl font-medium text-brand-neutral-900 dark:text-white mb-2 sm:mb-3">
                  {t.solution.steps.anonymize}
                </h3>

                <div className="w-10 sm:w-12 h-1 bg-gradient-to-r from-green-500 to-transparent rounded-full mb-3 sm:mb-4"></div>

                <p className="text-brand-neutral-600 dark:text-brand-neutral-400 text-sm leading-relaxed">
                  Protection automatique et masquage sécurisé des données
                </p>
              </div>
            </div>
            <div className="group relative bg-white dark:bg-brand-neutral-800 rounded-xl sm:rounded-2xl p-6 sm:p-8 border border-brand-neutral-200 dark:border-brand-neutral-700 hover:border-transparent hover:shadow-2xl hover:shadow-orange-500/10 dark:hover:shadow-orange-500/20 transition-all duration-300 scroll-animate stagger-4 hover:-translate-y-2">
              <div className="absolute inset-0 bg-gradient-to-br from-orange-500/0 to-orange-500/0 group-hover:from-orange-500/5 group-hover:to-transparent rounded-xl sm:rounded-2xl transition-all duration-300"></div>

              <div className="relative">
                <div className="w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-br from-orange-500 to-orange-600 rounded-lg sm:rounded-xl flex items-center justify-center mb-4 sm:mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-orange-500/30">
                  <Zap className="w-6 h-6 sm:w-7 sm:h-7 text-white" />
                </div>

                <h3 className="text-lg sm:text-xl font-medium text-brand-neutral-900 dark:text-white mb-2 sm:mb-3">
                  {t.solution.steps.preserve}
                </h3>

                <div className="w-10 sm:w-12 h-1 bg-gradient-to-r from-orange-500 to-transparent rounded-full mb-3 sm:mb-4"></div>

                <p className="text-brand-neutral-600 dark:text-brand-neutral-400 text-sm leading-relaxed">
                  Conservation du contexte pour une productivité maximale
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
