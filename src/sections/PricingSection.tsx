import { CheckCircle } from "lucide-react";
import { useState } from "react";
import { useLanguage } from "../context/LanguageContext";
import { translations } from "../i18n/translations";

export function PricingSection() {
  const { language } = useLanguage();
  const t = translations[language as keyof typeof translations];
  const [isAnnual, setIsAnnual] = useState(true);

  return (
    <section id="pricing" className="section-padding">
      <div className="container-max px-4">
        <div className="text-center mb-8 sm:mb-12 scroll-animate">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-medium mb-6 sm:mb-8 px-4">
            {t.pricing.title}
          </h2>

          {/* Billing Toggle */}
          <div className="inline-flex items-center gap-3 sm:gap-4 bg-white dark:bg-brand-neutral-800 p-1.5 rounded-full shadow-lg border-2 border-brand-neutral-200 dark:border-brand-neutral-700">
            <button
              onClick={() => setIsAnnual(false)}
              className={`px-5 sm:px-7 py-2.5 sm:py-3 rounded-full text-sm sm:text-base font-semibold ${
                !isAnnual
                  ? "bg-brand-primary-600 text-white shadow-md"
                  : "text-brand-neutral-600 dark:text-brand-neutral-400"
              }`}
            >
              {t.pricing.starter.name}
            </button>
            <button
              onClick={() => setIsAnnual(true)}
              className={`px-5 sm:px-7 py-2.5 sm:py-3 rounded-full text-sm sm:text-base font-semibold ${
                isAnnual
                  ? "bg-brand-primary-600 text-white shadow-md"
                  : "text-brand-neutral-600 dark:text-brand-neutral-400"
              }`}
            >
              {t.pricing.pro.name}
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 max-w-5xl mx-auto">
          {/* Dynamic Pricing Card (Monthly/Annual) */}
          <div className="bg-gradient-to-br from-brand-primary-600 to-brand-primary-700 rounded-2xl sm:rounded-3xl p-6 sm:p-8 border-2 border-brand-primary-500 relative transform md:scale-105 shadow-2xl scroll-animate stagger-1">
            <div className="absolute -top-3 sm:-top-4 left-1/2 -translate-x-1/2 bg-brand-secondary-500 text-white px-4 sm:px-5 py-1.5 rounded-full text-xs sm:text-sm font-bold whitespace-nowrap shadow-lg">
              {t.pricing.badge}
            </div>

            <div className="mb-6">
              <h3 className="text-xl sm:text-2xl font-bold text-white mb-3">
                {isAnnual ? t.pricing.pro.name : t.pricing.starter.name}
              </h3>
              <div className="flex items-end gap-3 mb-2">
                <div className="flex flex-col">
                  <span className="text-lg sm:text-xl font-bold text-white/50 line-through leading-tight">
                    {isAnnual
                      ? t.pricing.pro.originalPrice
                      : t.pricing.starter.originalPrice}
                  </span>
                  <div className="flex items-baseline gap-2">
                    <span className="text-5xl sm:text-6xl font-bold text-white">
                      {isAnnual ? t.pricing.pro.price : t.pricing.starter.price}
                    </span>
                    <span className="text-sm sm:text-base text-white/80">
                      {isAnnual
                        ? t.pricing.pro.period
                        : t.pricing.starter.period}
                    </span>
                  </div>
                </div>
                <div className="mb-3">
                  <span className="bg-green-500 text-white text-xs sm:text-sm font-bold px-3 sm:px-4 py-1.5 sm:py-2 rounded-full shadow-lg">
                    {isAnnual ? t.pricing.discountAnnual : t.pricing.discount}
                  </span>
                </div>
              </div>
              <p className="text-sm sm:text-base text-white/90 mb-2">
                {isAnnual ? t.pricing.pro.desc : t.pricing.starter.desc}
              </p>
              {isAnnual && t.pricing.pro.savings && (
                <div className="inline-flex items-center gap-2 bg-green-500/20 backdrop-blur-sm px-3 py-1.5 rounded-full">
                  <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                  <p className="text-xs sm:text-sm text-green-100 font-semibold">
                    {t.pricing.pro.savings}
                  </p>
                </div>
              )}
            </div>

            <ul className="space-y-2.5 sm:space-y-3 mb-6 sm:mb-8">
              {(isAnnual
                ? t.pricing.pro.features
                : t.pricing.starter.features
              ).map((feature, index) => (
                <li
                  key={index}
                  className="flex items-center gap-3 text-sm sm:text-base text-white"
                >
                  <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0 text-green-300" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>

            <a
              href="https://join-anonyto.systeme.io/36805238"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-3 sm:py-3.5 px-4 sm:px-6 rounded-xl bg-white text-brand-primary-600 font-bold text-sm sm:text-base inline-flex items-center justify-center shadow-lg"
            >
              {isAnnual ? t.pricing.pro.cta : t.pricing.starter.cta}
            </a>
          </div>

          {/* Enterprise Card */}
          <div className="bg-white dark:bg-brand-neutral-800 rounded-2xl sm:rounded-3xl p-6 sm:p-8 border-2 border-brand-neutral-200 dark:border-brand-neutral-700 shadow-xl scroll-animate stagger-2">
            <div className="mb-6">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-brand-primary-100 dark:bg-brand-primary-900/30 rounded-full mb-3">
                <span className="text-xs font-bold text-brand-primary-700 dark:text-brand-primary-300">
                  PERSONNALISÉ
                </span>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-brand-neutral-900 dark:text-white mb-3">
                {t.pricing.enterprise.name}
              </h3>
              <div className="flex items-baseline gap-2 mb-3 sm:mb-4">
                <span className="text-3xl sm:text-4xl font-bold text-brand-neutral-900 dark:text-white">
                  {t.pricing.enterprise.price}
                </span>
              </div>
              <p className="text-sm sm:text-base text-brand-neutral-600 dark:text-brand-neutral-300 leading-relaxed">
                {t.pricing.enterprise.desc}
              </p>
            </div>

            <ul className="space-y-2.5 sm:space-y-3 mb-6 sm:mb-8">
              {t.pricing.enterprise.features.map((feature, index) => (
                <li
                  key={index}
                  className="flex items-center gap-3 text-sm sm:text-base text-brand-neutral-700 dark:text-brand-neutral-300"
                >
                  <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-green-500 flex-shrink-0" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>

            <button
              onClick={() => window.open("https://tally.so/r/wAQe9P", "_blank")}
              className="w-full py-3 sm:py-3.5 px-4 sm:px-6 rounded-xl bg-brand-primary-600 text-white font-bold text-sm sm:text-base inline-flex items-center justify-center shadow-lg"
            >
              {t.pricing.enterprise.cta}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
