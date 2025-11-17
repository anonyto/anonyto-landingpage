import { useLanguage } from "../context/LanguageContext";
import { translations } from "../i18n/translations";

export function HowItWorksSection() {
  const { language } = useLanguage();
  const t = translations[language as keyof typeof translations];

  return (
    <section className="section-padding relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-50">
        <div className="absolute top-1/3 left-1/4 w-48 sm:w-64 h-48 sm:h-64 bg-blue-500/10 dark:bg-blue-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/3 right-1/4 w-48 sm:w-64 h-48 sm:h-64 bg-purple-500/10 dark:bg-purple-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="container-max px-4 relative z-10">
        <div className="text-center mb-12 sm:mb-16 lg:mb-20 scroll-animate">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-medium text-brand-neutral-900 dark:text-white mb-4">
            {t.howItWorks.title}
          </h2>
        </div>
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 mb-12 sm:mb-16">
          <div className="group relative bg-white dark:bg-brand-neutral-800 rounded-xl sm:rounded-2xl p-6 sm:p-8 border border-brand-neutral-200 dark:border-brand-neutral-700 hover:border-blue-500/50 dark:hover:border-blue-500/50 hover:shadow-xl hover:shadow-blue-500/10 transition-all duration-300 scroll-animate stagger-1">
            <div className="absolute top-4 right-4 sm:top-6 sm:right-6 w-14 h-14 sm:w-16 sm:h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl sm:rounded-2xl flex items-center justify-center text-white font-medium text-xl sm:text-2xl shadow-lg shadow-blue-500/30 group-hover:scale-110 transition-transform duration-300">
              1
            </div>

            <div className="pr-16 sm:pr-20">
              <h3 className="text-xl sm:text-2xl font-medium text-brand-neutral-900 dark:text-white mb-2 sm:mb-3">
                {t.howItWorks.step1.title}
              </h3>
              <div className="w-14 sm:w-16 h-1 bg-gradient-to-r from-blue-500 to-transparent rounded-full mb-3 sm:mb-4"></div>
              <p className="text-brand-neutral-600 dark:text-brand-neutral-300 leading-relaxed">
                {t.howItWorks.step1.desc}
              </p>
            </div>
          </div>
          <div className="group relative bg-white dark:bg-brand-neutral-800 rounded-xl sm:rounded-2xl p-6 sm:p-8 border border-brand-neutral-200 dark:border-brand-neutral-700 hover:border-purple-500/50 dark:hover:border-purple-500/50 hover:shadow-xl hover:shadow-purple-500/10 transition-all duration-300 scroll-animate stagger-2">
            <div className="absolute top-4 right-4 sm:top-6 sm:right-6 w-14 h-14 sm:w-16 sm:h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl sm:rounded-2xl flex items-center justify-center text-white font-medium text-xl sm:text-2xl shadow-lg shadow-purple-500/30 group-hover:scale-110 transition-transform duration-300">
              2
            </div>

            <div className="pr-16 sm:pr-20">
              <h3 className="text-xl sm:text-2xl font-medium text-brand-neutral-900 dark:text-white mb-2 sm:mb-3">
                {t.howItWorks.step2.title}
              </h3>
              <div className="w-14 sm:w-16 h-1 bg-gradient-to-r from-purple-500 to-transparent rounded-full mb-3 sm:mb-4"></div>
              <p className="text-brand-neutral-600 dark:text-brand-neutral-300 leading-relaxed">
                {t.howItWorks.step2.desc}
              </p>
            </div>
          </div>
          <div className="group relative bg-white dark:bg-brand-neutral-800 rounded-xl sm:rounded-2xl p-6 sm:p-8 border border-brand-neutral-200 dark:border-brand-neutral-700 hover:border-green-500/50 dark:hover:border-green-500/50 hover:shadow-xl hover:shadow-green-500/10 transition-all duration-300 scroll-animate stagger-3">
            <div className="absolute top-4 right-4 sm:top-6 sm:right-6 w-14 h-14 sm:w-16 sm:h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-xl sm:rounded-2xl flex items-center justify-center text-white font-medium text-xl sm:text-2xl shadow-lg shadow-green-500/30 group-hover:scale-110 transition-transform duration-300">
              3
            </div>

            <div className="pr-16 sm:pr-20">
              <h3 className="text-xl sm:text-2xl font-medium text-brand-neutral-900 dark:text-white mb-2 sm:mb-3">
                {t.howItWorks.step3.title}
              </h3>
              <div className="w-14 sm:w-16 h-1 bg-gradient-to-r from-green-500 to-transparent rounded-full mb-3 sm:mb-4"></div>
              <p className="text-brand-neutral-600 dark:text-brand-neutral-300 leading-relaxed">
                {t.howItWorks.step3.desc}
              </p>
            </div>
          </div>
          <div className="group relative bg-white dark:bg-brand-neutral-800 rounded-xl sm:rounded-2xl p-6 sm:p-8 border border-brand-neutral-200 dark:border-brand-neutral-700 hover:border-orange-500/50 dark:hover:border-orange-500/50 hover:shadow-xl hover:shadow-orange-500/10 transition-all duration-300 scroll-animate stagger-4">
            <div className="absolute top-4 right-4 sm:top-6 sm:right-6 w-14 h-14 sm:w-16 sm:h-16 bg-gradient-to-br from-orange-500 to-orange-600 rounded-xl sm:rounded-2xl flex items-center justify-center text-white font-medium text-xl sm:text-2xl shadow-lg shadow-orange-500/30 group-hover:scale-110 transition-transform duration-300">
              4
            </div>

            <div className="pr-16 sm:pr-20">
              <h3 className="text-xl sm:text-2xl font-medium text-brand-neutral-900 dark:text-white mb-2 sm:mb-3">
                {t.howItWorks.step4.title}
              </h3>
              <div className="w-14 sm:w-16 h-1 bg-gradient-to-r from-orange-500 to-transparent rounded-full mb-3 sm:mb-4"></div>
              <p className="text-brand-neutral-600 dark:text-brand-neutral-300 leading-relaxed">
                {t.howItWorks.step4.desc}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
