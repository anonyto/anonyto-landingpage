import { Facebook, Twitter, Linkedin, Github } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";
import { translations } from "../i18n/translations";
import { corezaLogos } from "../assets/logos";

export function Footer() {
  const { language } = useLanguage();
  const t = translations[language as keyof typeof translations];

  return (
    <footer className="bg-brand-neutral-900 text-brand-neutral-300 py-12 sm:py-16">
      <div className="container-max px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10 mb-10 sm:mb-12">
          <div className="lg:col-span-1">
            <div className="flex items-center mb-4 sm:mb-6">
              <img
                src={corezaLogos.dark}
                alt="Anonyto Logo"
                className="h-8 sm:h-10 w-auto object-contain"
              />
            </div>
            <p className="text-sm sm:text-base text-brand-neutral-400 mb-4 sm:mb-6 leading-relaxed">
              {t.footer.tagline}
            </p>
            <div className="flex space-x-3 sm:space-x-4">
              <a
                href="#"
                className="w-9 h-9 sm:w-10 sm:h-10 bg-brand-neutral-800 rounded-lg sm:rounded-xl flex items-center justify-center hover:bg-brand-primary-600 transition-colors"
              >
                <Facebook className="w-4 h-4 sm:w-5 sm:h-5" />
              </a>
              <a
                href="#"
                className="w-9 h-9 sm:w-10 sm:h-10 bg-brand-neutral-800 rounded-lg sm:rounded-xl flex items-center justify-center hover:bg-brand-primary-600 transition-colors"
              >
                <Twitter className="w-4 h-4 sm:w-5 sm:h-5" />
              </a>
              <a
                href="#"
                className="w-9 h-9 sm:w-10 sm:h-10 bg-brand-neutral-800 rounded-lg sm:rounded-xl flex items-center justify-center hover:bg-brand-primary-600 transition-colors"
              >
                <Linkedin className="w-4 h-4 sm:w-5 sm:h-5" />
              </a>
              <a
                href="#"
                className="w-9 h-9 sm:w-10 sm:h-10 bg-brand-neutral-800 rounded-lg sm:rounded-xl flex items-center justify-center hover:bg-brand-primary-600 transition-colors"
              >
                <Github className="w-4 h-4 sm:w-5 sm:h-5" />
              </a>
            </div>
          </div>
          <div>
            <h4 className="font-medium text-white mb-4 sm:mb-6 text-sm sm:text-base">
              {t.footer.product.title}
            </h4>
            <ul className="space-y-2 sm:space-y-3">
              <li>
                <a
                  href="#"
                  className="hover:text-white transition-colors text-sm sm:text-base"
                >
                  {t.footer.product.features}
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-white transition-colors text-sm sm:text-base"
                >
                  {t.footer.product.modules}
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-white transition-colors text-sm sm:text-base"
                >
                  {t.footer.product.pricing}
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-white transition-colors text-sm sm:text-base"
                >
                  {t.footer.product.updates}
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-white transition-colors text-sm sm:text-base"
                >
                  {t.footer.product.roadmap}
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-medium text-white mb-4 sm:mb-6 text-sm sm:text-base">
              {t.footer.resources.title}
            </h4>
            <ul className="space-y-2 sm:space-y-3">
              <li>
                <a
                  href="#"
                  className="hover:text-white transition-colors text-sm sm:text-base"
                >
                  {t.footer.resources.documentation}
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-white transition-colors text-sm sm:text-base"
                >
                  {t.footer.resources.guides}
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-white transition-colors text-sm sm:text-base"
                >
                  {t.footer.resources.support}
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-white transition-colors text-sm sm:text-base"
                >
                  {t.footer.resources.api}
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-white transition-colors text-sm sm:text-base"
                >
                  {t.footer.resources.blog}
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-medium text-white mb-4 sm:mb-6 text-sm sm:text-base">
              {t.footer.company.title}
            </h4>
            <ul className="space-y-2 sm:space-y-3">
              <li>
                <a
                  href="#"
                  className="hover:text-white transition-colors text-sm sm:text-base"
                >
                  {t.footer.company.about}
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-white transition-colors text-sm sm:text-base"
                >
                  {t.footer.company.contact}
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-white transition-colors text-sm sm:text-base"
                >
                  {t.footer.company.careers}
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-white transition-colors text-sm sm:text-base"
                >
                  {t.footer.company.partners}
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-white transition-colors text-sm sm:text-base"
                >
                  {t.footer.company.press}
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-brand-neutral-800 pt-6 sm:pt-8 mb-6 sm:mb-8">
          <div className="max-w-md">
            <h4 className="font-medium text-white mb-2 text-sm sm:text-base">
              {t.footer.newsletter}
            </h4>
            <p className="text-sm sm:text-base text-brand-neutral-400 mb-3 sm:mb-4">
              {t.footer.newsletterDesc}
            </p>
            <div className="flex flex-col sm:flex-row gap-2 sm:gap-0">
              <input
                type="email"
                placeholder={t.footer.emailPlaceholder}
                className="flex-1 px-3 sm:px-4 py-2.5 sm:py-3 bg-brand-neutral-800 border border-brand-neutral-700 rounded-lg sm:rounded-l-xl sm:rounded-r-none text-white placeholder-brand-neutral-400 focus:outline-none focus:ring-2 focus:ring-brand-primary-500 text-sm sm:text-base"
              />
              <button className="px-4 sm:px-6 py-2.5 sm:py-3 bg-brand-primary-600 hover:bg-brand-primary-700 text-white rounded-lg sm:rounded-r-xl sm:rounded-l-none transition-colors text-sm sm:text-base whitespace-nowrap">
                {t.footer.subscribe}
              </button>
            </div>
          </div>
        </div>
        <div className="border-t border-brand-neutral-800 pt-6 sm:pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-brand-neutral-400 text-xs sm:text-sm text-center md:text-left">
            {t.footer?.copyright || "2025 COREZA. Tous droits réservés."}
          </p>
          <div className="flex flex-wrap justify-center gap-4 sm:gap-6">
            <a
              href="#"
              className="text-brand-neutral-400 hover:text-white text-xs sm:text-sm transition-colors"
            >
              {t.footer.legal.privacy}
            </a>
            <a
              href="#"
              className="text-brand-neutral-400 hover:text-white text-xs sm:text-sm transition-colors"
            >
              {t.footer.legal.terms}
            </a>
            <a
              href="#"
              className="text-brand-neutral-400 hover:text-white text-xs sm:text-sm transition-colors"
            >
              {t.footer.legal.cookies}
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
