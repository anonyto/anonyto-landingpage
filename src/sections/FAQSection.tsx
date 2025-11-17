import { useLanguage } from "../context/LanguageContext";
import { translations } from "../i18n/translations";

export function FAQSection() {
  const { language } = useLanguage();
  const t = translations[language as keyof typeof translations];

  return (
    <section className="section-padding">
      <div className="container-max px-4">
        <div className="text-center mb-12 sm:mb-16 scroll-animate">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-medium mb-3 sm:mb-4 px-4">
            {t.faq.title}
          </h2>
        </div>

        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
          <div className="bg-white dark:bg-brand-neutral-800 rounded-lg sm:rounded-xl p-5 sm:p-6 border border-brand-neutral-200 dark:border-brand-neutral-700 scroll-animate stagger-1">
            <h3 className="text-base sm:text-lg font-medium text-brand-neutral-900 dark:text-white mb-2 sm:mb-3">
              {t.faq.q1.q}
            </h3>
            <p className="text-sm sm:text-base text-brand-neutral-600 dark:text-brand-neutral-300 leading-relaxed">
              {t.faq.q1.a}
            </p>
          </div>
          <div className="bg-white dark:bg-brand-neutral-800 rounded-lg sm:rounded-xl p-5 sm:p-6 border border-brand-neutral-200 dark:border-brand-neutral-700 scroll-animate stagger-2">
            <h3 className="text-base sm:text-lg font-medium text-brand-neutral-900 dark:text-white mb-2 sm:mb-3">
              {t.faq.q2.q}
            </h3>
            <p className="text-sm sm:text-base text-brand-neutral-600 dark:text-brand-neutral-300 leading-relaxed">
              {t.faq.q2.a}
            </p>
          </div>
          <div className="bg-white dark:bg-brand-neutral-800 rounded-lg sm:rounded-xl p-5 sm:p-6 border border-brand-neutral-200 dark:border-brand-neutral-700 scroll-animate stagger-3">
            <h3 className="text-base sm:text-lg font-medium text-brand-neutral-900 dark:text-white mb-2 sm:mb-3">
              {t.faq.q3.q}
            </h3>
            <p className="text-sm sm:text-base text-brand-neutral-600 dark:text-brand-neutral-300 leading-relaxed">
              {t.faq.q3.a}
            </p>
          </div>
          <div className="bg-white dark:bg-brand-neutral-800 rounded-lg sm:rounded-xl p-5 sm:p-6 border border-brand-neutral-200 dark:border-brand-neutral-700 scroll-animate stagger-4">
            <h3 className="text-base sm:text-lg font-medium text-brand-neutral-900 dark:text-white mb-2 sm:mb-3">
              {t.faq.q4.q}
            </h3>
            <p className="text-sm sm:text-base text-brand-neutral-600 dark:text-brand-neutral-300 leading-relaxed">
              {t.faq.q4.a}
            </p>
          </div>
          <div className="bg-white dark:bg-brand-neutral-800 rounded-lg sm:rounded-xl p-5 sm:p-6 border border-brand-neutral-200 dark:border-brand-neutral-700 scroll-animate stagger-5">
            <h3 className="text-base sm:text-lg font-medium text-brand-neutral-900 dark:text-white mb-2 sm:mb-3">
              {t.faq.q5.q}
            </h3>
            <p className="text-sm sm:text-base text-brand-neutral-600 dark:text-brand-neutral-300 leading-relaxed">
              {t.faq.q5.a}
            </p>
          </div>
          <div className="bg-white dark:bg-brand-neutral-800 rounded-lg sm:rounded-xl p-5 sm:p-6 border border-brand-neutral-200 dark:border-brand-neutral-700 scroll-animate stagger-6">
            <h3 className="text-base sm:text-lg font-medium text-brand-neutral-900 dark:text-white mb-2 sm:mb-3">
              {t.faq.q6.q}
            </h3>
            <p className="text-sm sm:text-base text-brand-neutral-600 dark:text-brand-neutral-300 leading-relaxed">
              {t.faq.q6.a}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
