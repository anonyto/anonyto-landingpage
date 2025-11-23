import { CheckCircle } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";
import { translations } from "../i18n/translations";

export function PricingSection() {
  const { language } = useLanguage();
  const t = translations[language as keyof typeof translations];

  return (
    <section id="pricing" className="section-padding">
      <div className="container-max px-4">
        <div className="text-center mb-12 sm:mb-16 scroll-animate">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-medium mb-3 sm:mb-4 px-4">
            {t.pricing.title}
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 max-w-6xl mx-auto">
          <div className="bg-white dark:bg-brand-neutral-800 rounded-xl sm:rounded-2xl p-6 sm:p-8 border-2 border-brand-neutral-200 dark:border-brand-neutral-700 hover:border-brand-primary-500 dark:hover:border-brand-primary-500 transition-all duration-300 scroll-animate stagger-1">
            <div className="mb-6">
              <h3 className="text-xl sm:text-2xl font-bold text-brand-neutral-900 dark:text-white mb-2">
                {t.pricing.starter.name}
              </h3>
              <div className="flex items-end gap-3 mb-3 sm:mb-4">
                <div className="flex flex-col">
                  <span className="text-lg sm:text-xl font-bold text-brand-neutral-400 dark:text-brand-neutral-500 line-through leading-tight">
                    {t.pricing.starter.originalPrice}
                  </span>
                  <div className="flex items-baseline gap-2">
                    <span className="text-4xl sm:text-5xl font-bold text-brand-neutral-900 dark:text-white">
                      {t.pricing.starter.price}
                    </span>
                    <span className="text-sm sm:text-base text-brand-neutral-600 dark:text-brand-neutral-400">
                      {t.pricing.starter.period}
                    </span>
                  </div>
                </div>
                <div className="mb-2">
                  <span className="bg-green-500 text-white text-xs sm:text-sm font-bold px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-full shadow-lg">
                    {t.pricing.discount}
                  </span>
                </div>
              </div>
              <p className="text-sm sm:text-base text-brand-neutral-600 dark:text-brand-neutral-300">
                {t.pricing.starter.desc}
              </p>
            </div>

            <ul className="space-y-2 sm:space-y-3 mb-6 sm:mb-8">
              {t.pricing.starter.features.map((feature, index) => (
                <li key={index} className="flex items-center gap-2 text-sm sm:text-base text-brand-neutral-700 dark:text-brand-neutral-300">
                  <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-green-500 flex-shrink-0" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>

            <a
              href="https://join-anonyto.systeme.io/36805238"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-2.5 sm:py-3 px-4 sm:px-6 rounded-lg border-2 border-brand-neutral-300 dark:border-brand-neutral-600 hover:bg-brand-neutral-50 dark:hover:bg-brand-neutral-700 text-brand-neutral-900 dark:text-white font-medium transition-colors text-sm sm:text-base inline-flex items-center justify-center"
            >
              {t.pricing.starter.cta}
            </a>
          </div>
          <div className="bg-brand-primary-600 rounded-xl sm:rounded-2xl p-6 sm:p-8 border-2 border-brand-primary-600 relative transform md:scale-105 shadow-xl scroll-animate stagger-2">
            <div className="absolute -top-3 sm:-top-4 left-1/2 -translate-x-1/2 bg-brand-secondary-500 text-white px-3 sm:px-4 py-1 rounded-full text-xs sm:text-sm font-medium whitespace-nowrap">
              {t.pricing.badge}
            </div>

            <div className="mb-6">
              <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">
                {t.pricing.pro.name}
              </h3>
              <div className="flex items-end gap-3 mb-1">
                <div className="flex flex-col">
                  <span className="text-lg sm:text-xl font-bold text-white/50 line-through leading-tight">
                    {t.pricing.pro.originalPrice}
                  </span>
                  <div className="flex items-baseline gap-2">
                    <span className="text-4xl sm:text-5xl font-bold text-white">
                      {t.pricing.pro.price}
                    </span>
                    <span className="text-sm sm:text-base text-white/80">
                      {t.pricing.pro.period}
                    </span>
                  </div>
                </div>
                <div className="mb-2">
                  <span className="bg-green-500 text-white text-xs sm:text-sm font-bold px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-full shadow-lg">
                    {t.pricing.discountAnnual}
                  </span>
                </div>
              </div>
              <p className="text-sm sm:text-base text-white/90 mb-2">
                {t.pricing.pro.desc}
              </p>
              {t.pricing.pro.savings && (
                <p className="text-xs sm:text-sm text-green-300 font-medium">
                  {t.pricing.pro.savings}
                </p>
              )}
            </div>

            <ul className="space-y-2 sm:space-y-3 mb-6 sm:mb-8">
              {t.pricing.pro.features.map((feature, index) => (
                <li key={index} className="flex items-center gap-2 text-sm sm:text-base text-white">
                  <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>

            <a
              href="https://join-anonyto.systeme.io/36805238"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-2.5 sm:py-3 px-4 sm:px-6 rounded-lg bg-white text-brand-primary-600 hover:bg-gray-100 font-medium transition-colors text-sm sm:text-base inline-flex items-center justify-center"
            >
              {t.pricing.pro.cta}
            </a>
          </div>
          <div className="bg-white dark:bg-brand-neutral-800 rounded-xl sm:rounded-2xl p-6 sm:p-8 border-2 border-brand-neutral-200 dark:border-brand-neutral-700 hover:border-brand-primary-500 dark:hover:border-brand-primary-500 transition-all duration-300 scroll-animate stagger-3">
            <div className="mb-6">
              <h3 className="text-xl sm:text-2xl font-bold text-brand-neutral-900 dark:text-white mb-2">
                {t.pricing.enterprise.name}
              </h3>
              <div className="flex items-baseline gap-2 mb-3 sm:mb-4">
                <span className="text-2xl sm:text-3xl font-bold text-brand-neutral-900 dark:text-white">
                  {t.pricing.enterprise.price}
                </span>
              </div>
              <p className="text-sm sm:text-base text-brand-neutral-600 dark:text-brand-neutral-300">
                {t.pricing.enterprise.desc}
              </p>
            </div>

            <ul className="space-y-2 sm:space-y-3 mb-6 sm:mb-8">
              {t.pricing.enterprise.features.map((feature, index) => (
                <li key={index} className="flex items-center gap-2 text-sm sm:text-base text-brand-neutral-700 dark:text-brand-neutral-300">
                  <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-green-500 flex-shrink-0" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>

            <button
              onClick={() => window.open('https://tally.so/r/wAQe9P', '_blank')}
              className="w-full py-2.5 sm:py-3 px-4 sm:px-6 rounded-lg bg-brand-primary-600 text-white hover:bg-brand-primary-700 font-medium transition-colors text-sm sm:text-base inline-flex items-center justify-center"
            >
              {t.pricing.enterprise.cta}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
