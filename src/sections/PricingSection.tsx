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

          {/* Billing Toggle - For PRO Plan Only */}
          <div className="relative inline-flex items-center gap-2 p-1 bg-brand-neutral-100 dark:bg-brand-neutral-800/50 rounded-full">
            <button
              onClick={() => setIsAnnual(false)}
              className={`relative z-10 px-6 sm:px-8 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${
                !isAnnual
                  ? "text-white"
                  : "text-brand-neutral-600 dark:text-brand-neutral-400 hover:text-brand-neutral-900 dark:hover:text-brand-neutral-200"
              }`}
            >
              {language === "fr" ? "Mensuel" : "Monthly"}
            </button>
            <button
              onClick={() => setIsAnnual(true)}
              className={`relative z-10 px-6 sm:px-8 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${
                isAnnual
                  ? "text-white"
                  : "text-brand-neutral-600 dark:text-brand-neutral-400 hover:text-brand-neutral-900 dark:hover:text-brand-neutral-200"
              }`}
            >
              {language === "fr" ? "Annuel" : "Annual"}
            </button>
            {/* Sliding background */}
            <div
              className={`absolute top-1 bottom-1 bg-brand-primary-600 rounded-full transition-all duration-300 ease-out shadow-sm ${
                !isAnnual
                  ? "left-1 w-[calc(50%-0.25rem)]"
                  : "right-1 w-[calc(50%-0.25rem)]"
              }`}
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 max-w-7xl mx-auto items-stretch">
          {/* FREE Card */}
          <div className="bg-white dark:bg-brand-neutral-800 rounded-2xl sm:rounded-3xl p-6 sm:p-8 border-2 border-brand-neutral-200 dark:border-brand-neutral-700 shadow-xl scroll-animate stagger-1 flex flex-col h-full min-h-[600px] transition-all duration-300">
            <div className="mb-6 flex-grow">
              <h3 className="text-3xl sm:text-4xl font-light text-brand-neutral-900 dark:text-white mb-4 tracking-wide">
                {t.pricing.free.name}
              </h3>
              <div className="flex items-baseline gap-2 mb-3 sm:mb-4">
                <span className="text-5xl sm:text-6xl font-semibold text-brand-neutral-900 dark:text-white">
                  {t.pricing.free.price}
                </span>
                <span className="text-sm sm:text-base text-brand-neutral-600 dark:text-brand-neutral-400 transition-all duration-300">
                  {isAnnual
                    ? t.pricing.free.annual.period
                    : t.pricing.free.monthly.period}
                </span>
              </div>
              <p className="text-sm sm:text-base text-brand-neutral-600 dark:text-brand-neutral-300 leading-relaxed mb-4">
                {t.pricing.free.desc}
              </p>

              <ul className="space-y-2.5 sm:space-y-3 mb-6">
                {t.pricing.free.features.map((feature, index) => (
                  <li
                    key={index}
                    className="flex items-center gap-3 text-sm sm:text-base text-brand-neutral-700 dark:text-brand-neutral-300"
                  >
                    <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-green-500 flex-shrink-0" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            <a
              href="https://join-anonyto.systeme.io/36805238"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-3 sm:py-3.5 px-4 sm:px-6 rounded-xl bg-brand-primary-600 text-white font-bold text-sm sm:text-base inline-flex items-center justify-center shadow-lg hover:bg-brand-primary-700 transition-colors mt-auto"
            >
              {t.pricing.free.cta}
            </a>
          </div>

          {/* PRO Card (Monthly/Annual) */}
          <div className="bg-gradient-to-br from-brand-primary-600 to-brand-primary-700 rounded-2xl sm:rounded-3xl p-6 sm:p-8 border-2 border-brand-primary-500 relative transform md:scale-105 shadow-2xl scroll-animate stagger-2 flex flex-col h-full min-h-[600px] transition-all duration-300">
            <div className="absolute -top-3 sm:-top-4 left-1/2 -translate-x-1/2 bg-brand-secondary-500 text-white px-4 sm:px-5 py-1.5 rounded-full text-xs sm:text-sm font-bold whitespace-nowrap shadow-lg">
              {t.pricing.badge}
            </div>

            <div className="mb-6 flex-grow">
              <h3 className="text-3xl sm:text-4xl font-light text-white mb-4 tracking-wide">
                {t.pricing.pro.name}
              </h3>
              <div className="flex items-end gap-3 mb-2">
                <div className="flex flex-col">
                  <span className="text-lg sm:text-xl font-bold text-white/50 line-through leading-tight transition-all duration-300">
                    {isAnnual
                      ? t.pricing.pro.annual.originalPrice
                      : t.pricing.pro.monthly.originalPrice}
                  </span>
                  <div className="flex items-baseline gap-2">
                    <span className="text-5xl sm:text-6xl font-semibold text-white transition-all duration-300">
                      {isAnnual
                        ? t.pricing.pro.annual.price
                        : t.pricing.pro.monthly.price}
                    </span>
                    <span className="text-sm sm:text-base text-white/80 transition-all duration-300">
                      {isAnnual
                        ? t.pricing.pro.annual.period
                        : t.pricing.pro.monthly.period}
                    </span>
                  </div>
                </div>
                <div className="mb-3">
                  <span className="bg-green-500 text-white text-xs sm:text-sm font-bold px-3 sm:px-4 py-1.5 sm:py-2 rounded-full shadow-lg transition-all duration-300">
                    {isAnnual ? t.pricing.discountAnnual : t.pricing.discount}
                  </span>
                </div>
              </div>
              <p className="text-sm sm:text-base text-white/90 mb-2 transition-all duration-300">
                {isAnnual
                  ? t.pricing.pro.annual.desc
                  : t.pricing.pro.monthly.desc}
              </p>
              <div
                className={`overflow-hidden transition-all duration-300 ${
                  isAnnual ? "max-h-20 opacity-100" : "max-h-0 opacity-0"
                }`}
              >
                {isAnnual && t.pricing.pro.annual.savings && (
                  <div className="inline-flex items-center gap-2 bg-green-500/20 backdrop-blur-sm px-3 py-1.5 rounded-full mb-4">
                    <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                    <p className="text-xs sm:text-sm text-green-100 font-semibold">
                      {t.pricing.pro.annual.savings}
                    </p>
                  </div>
                )}
              </div>

              <ul className="space-y-2.5 sm:space-y-3 mb-6">
                {(isAnnual
                  ? t.pricing.pro.annualFeatures
                  : t.pricing.pro.monthlyFeatures
                ).map((feature, index) => (
                  <li
                    key={index}
                    className="flex items-center gap-3 text-sm sm:text-base text-white transition-all duration-300"
                    style={{ transitionDelay: `${index * 50}ms` }}
                  >
                    <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0 text-green-300" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            <a
              href="https://join-anonyto.systeme.io/36805238"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-3 sm:py-3.5 px-4 sm:px-6 rounded-xl bg-white text-brand-primary-600 font-bold text-sm sm:text-base inline-flex items-center justify-center shadow-lg hover:bg-brand-neutral-50 transition-colors mt-auto"
            >
              {t.pricing.pro.cta}
            </a>
          </div>

          {/* Enterprise Card */}
          <div className="bg-white dark:bg-brand-neutral-800 rounded-2xl sm:rounded-3xl p-6 sm:p-8 border-2 border-brand-neutral-200 dark:border-brand-neutral-700 shadow-xl scroll-animate stagger-3 flex flex-col h-full min-h-[600px] transition-all duration-300">
            <div className="mb-6 flex-grow">
              <h3 className="text-3xl sm:text-4xl font-light text-brand-neutral-900 dark:text-white mb-4 tracking-wide">
                {t.pricing.enterprise.name}
              </h3>
              <div className="flex items-baseline gap-2 mb-3 sm:mb-4">
                <span className="text-5xl sm:text-6xl font-semibold text-brand-neutral-900 dark:text-white">
                  {t.pricing.enterprise.price}
                </span>
              </div>
              <p className="text-sm sm:text-base text-brand-neutral-600 dark:text-brand-neutral-300 leading-relaxed mb-4">
                {t.pricing.enterprise.desc}
              </p>

              <ul className="space-y-2.5 sm:space-y-3 mb-6">
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
            </div>

            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                const contactSection = document.getElementById("contact");
                if (contactSection) {
                  contactSection.scrollIntoView({ behavior: "smooth" });
                  // Set form type to enterprise after a short delay
                  setTimeout(() => {
                    const enterpriseBtn = document.querySelector('[data-form-type="enterprise"]') as HTMLButtonElement;
                    if (enterpriseBtn) {
                      enterpriseBtn.click();
                    }
                  }, 500);
                }
              }}
              className="w-full py-3 sm:py-3.5 px-4 sm:px-6 rounded-xl bg-brand-primary-600 text-white font-bold text-sm sm:text-base inline-flex items-center justify-center shadow-lg hover:bg-brand-primary-700 transition-colors mt-auto cursor-pointer"
            >
              {t.pricing.enterprise.cta}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
