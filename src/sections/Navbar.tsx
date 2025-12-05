import { useState, useEffect } from "react";
import { Menu, X, Moon, Sun } from "lucide-react";
import { useTheme } from "../context/ThemeContext";
import { useLanguage } from "../context/LanguageContext";
import { translations } from "../i18n/translations";
import { corezaLogos } from "../assets/logos";

interface NavbarProps {
  activeSection: string;
}

export function Navbar({ activeSection }: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const { theme, toggleTheme } = useTheme();
  const { language, setLanguage } = useLanguage();
  const t = translations[language as keyof typeof translations];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? theme === "dark"
            ? "bg-brand-neutral-900/95 backdrop-blur-md border-b border-brand-neutral-800"
            : "bg-white/95 backdrop-blur-md border-b border-brand-neutral-200"
          : "bg-transparent"
      }`}
    >
      <div className="container-max px-4">
        <div className="flex justify-between items-center h-14 sm:h-16">
          <a
            href="#hero"
            aria-label="Go to Hero Section"
            className="flex items-center focus:outline-none cursor-pointer"
            onClick={(e) => {
              e.preventDefault();
              window.location.href = window.location.origin + window.location.pathname + "?refresh=" + Date.now() + "#hero";
            }}
          >
            <img
              src={theme === "dark" ? corezaLogos.dark : corezaLogos.light}
              alt="Anonyto Logo"
              className="h-8 sm:h-10 w-auto object-contain"
            />
          </a>

          <div className="hidden lg:flex items-center space-x-8">
            <a
              href="#modules"
              className={`text-sm font-medium transition-colors ${
                activeSection === "modules"
                  ? "text-brand-primary-600 dark:text-brand-primary-400"
                  : "hover:text-brand-primary-600 dark:hover:text-brand-primary-400"
              }`}
            >
              {t.nav.modules}
            </a>
            <a
              href="#features"
              className={`text-sm font-medium transition-colors ${
                activeSection === "features"
                  ? "text-brand-primary-600 dark:text-brand-primary-400"
                  : "hover:text-brand-primary-600 dark:hover:text-brand-primary-400"
              }`}
            >
              {t.nav.features}
            </a>
            <a
              href="#security"
              className={`text-sm font-medium transition-colors ${
                activeSection === "security"
                  ? "text-brand-primary-600 dark:text-brand-primary-400"
                  : "hover:text-brand-primary-600 dark:hover:text-brand-primary-400"
              }`}
            >
              {t.nav.security}
            </a>
            <a
              href="#integrations"
              className={`text-sm font-medium transition-colors ${
                activeSection === "integrations"
                  ? "text-brand-primary-600 dark:text-brand-primary-400"
                  : "hover:text-brand-primary-600 dark:hover:text-brand-primary-400"
              }`}
            >
              {t.nav.integrations}
            </a>
            <a
              href="#pricing"
              className={`text-sm font-medium transition-colors ${
                activeSection === "pricing"
                  ? "text-brand-primary-600 dark:text-brand-primary-400"
                  : "hover:text-brand-primary-600 dark:hover:text-brand-primary-400"
              }`}
            >
              {t.nav.pricing}
            </a>
            <a
              href="#contact"
              className={`text-sm font-medium transition-colors ${
                activeSection === "contact"
                  ? "text-brand-primary-600 dark:text-brand-primary-400"
                  : "hover:text-brand-primary-600 dark:hover:text-brand-primary-400"
              }`}
            >
              {t.nav.contact}
            </a>
          </div>

          <div className="hidden lg:flex items-center space-x-4">
            <button
              onClick={toggleTheme}
              className={`p-2 rounded-xl transition-all duration-200 ${
                theme === "dark"
                  ? "bg-brand-neutral-800 hover:bg-brand-neutral-700 text-brand-secondary-400"
                  : "bg-brand-neutral-100 hover:bg-brand-neutral-200 text-brand-neutral-600"
              }`}
            >
              {theme === "light" ? (
                <Moon className="w-5 h-5" />
              ) : (
                <Sun className="w-5 h-5" />
              )}
            </button>

            <div className="relative">
              <button
                onClick={() => {
                  const options = document.getElementById(
                    "desktop-lang-options"
                  );
                  if (options) {
                    options.classList.toggle("hidden");
                  }
                }}
                className={`flex items-center gap-2 pl-3 pr-8 py-2 rounded-xl text-sm font-medium transition-all duration-200 ${
                  theme === "dark"
                    ? "bg-brand-neutral-800 border-brand-neutral-700 text-white hover:bg-brand-neutral-700"
                    : "bg-brand-neutral-100 border-brand-neutral-200 text-brand-neutral-700 hover:bg-brand-neutral-50"
                } border focus:outline-none focus:ring-2 focus:ring-brand-primary-500 cursor-pointer min-w-[90px]`}
              >
                <img
                  src={
                    language === "fr"
                      ? "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5f/Flag_of_Quebec.svg/320px-Flag_of_Quebec.svg.png"
                      : "https://flagcdn.com/w20/ca.png"
                  }
                  alt={language}
                  className="w-5 h-4 object-cover rounded-sm"
                />
                <span>{language.toUpperCase()}</span>
                <svg
                  className="w-4 h-4 absolute right-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
              <div
                id="desktop-lang-options"
                className={`hidden absolute top-full mt-1 right-0 rounded-xl shadow-lg border overflow-hidden min-w-[90px] z-50 ${
                  theme === "dark"
                    ? "bg-brand-neutral-800 border-brand-neutral-700"
                    : "bg-white border-brand-neutral-200"
                }`}
              >
                <button
                  onClick={() => {
                    setLanguage("fr");
                    document
                      .getElementById("desktop-lang-options")
                      ?.classList.add("hidden");
                  }}
                  className={`flex items-center gap-2 w-full px-3 py-2 text-sm font-medium transition-colors ${
                    language === "fr"
                      ? "bg-brand-primary-600 text-white"
                      : theme === "dark"
                      ? "text-white hover:bg-brand-neutral-700"
                      : "text-brand-neutral-700 hover:bg-brand-neutral-50"
                  }`}
                >
                  <img
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/5f/Flag_of_Quebec.svg/320px-Flag_of_Quebec.svg.png"
                    alt="FR"
                    className="w-5 h-4 object-cover rounded-sm"
                  />
                  <span>FR</span>
                </button>
                <button
                  onClick={() => {
                    setLanguage("en");
                    document
                      .getElementById("desktop-lang-options")
                      ?.classList.add("hidden");
                  }}
                  className={`flex items-center gap-2 w-full px-3 py-2 text-sm font-medium transition-colors ${
                    language === "en"
                      ? "bg-brand-primary-600 text-white"
                      : theme === "dark"
                      ? "text-white hover:bg-brand-neutral-700"
                      : "text-brand-neutral-700 hover:bg-brand-neutral-50"
                  }`}
                >
                  <img
                    src="https://flagcdn.com/w20/ca.png"
                    alt="EN"
                    className="w-5 h-4 object-cover rounded-sm"
                  />
                  <span>EN</span>
                </button>
              </div>
            </div>

            <a
              href="https://join-anonyto.systeme.io/36805238"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-md font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background bg-brand-primary-600 text-white hover:bg-brand-primary-700 h-10 px-3 sm:px-4 py-2 text-xs sm:text-sm"
            >
              {t.nav.demo}
            </a>
          </div>

          <button
            className="lg:hidden p-1.5 sm:p-2 rounded-xl"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-brand-neutral-200 dark:border-brand-neutral-800 bg-white dark:bg-brand-neutral-900">
          <div className="container-max py-4 sm:py-6 space-y-3 sm:space-y-4 px-4">
            <a
              href="#modules"
              onClick={() => setMobileMenuOpen(false)}
              className={`block text-sm font-medium transition-colors ${
                activeSection === "modules"
                  ? "text-brand-primary-600 dark:text-brand-primary-400"
                  : "hover:text-brand-primary-600 dark:hover:text-brand-primary-400"
              }`}
            >
              {t.nav.modules}
            </a>
            <a
              href="#features"
              onClick={() => setMobileMenuOpen(false)}
              className={`block text-sm font-medium transition-colors ${
                activeSection === "features"
                  ? "text-brand-primary-600 dark:text-brand-primary-400"
                  : "hover:text-brand-primary-600 dark:hover:text-brand-primary-400"
              }`}
            >
              {t.nav.features}
            </a>
            <a
              href="#security"
              onClick={() => setMobileMenuOpen(false)}
              className={`block text-sm font-medium transition-colors ${
                activeSection === "security"
                  ? "text-brand-primary-600 dark:text-brand-primary-400"
                  : "hover:text-brand-primary-600 dark:hover:text-brand-primary-400"
              }`}
            >
              {t.nav.security}
            </a>
            <a
              href="#integrations"
              onClick={() => setMobileMenuOpen(false)}
              className={`block text-sm font-medium transition-colors ${
                activeSection === "integrations"
                  ? "text-brand-primary-600 dark:text-brand-primary-400"
                  : "hover:text-brand-primary-600 dark:hover:text-brand-primary-400"
              }`}
            >
              {t.nav.integrations}
            </a>
            <a
              href="#pricing"
              onClick={() => setMobileMenuOpen(false)}
              className={`block text-sm font-medium transition-colors ${
                activeSection === "pricing"
                  ? "text-brand-primary-600 dark:text-brand-primary-400"
                  : "hover:text-brand-primary-600 dark:hover:text-brand-primary-400"
              }`}
            >
              {t.nav.pricing}
            </a>
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className={`block text-sm font-medium transition-colors ${
                activeSection === "contact"
                  ? "text-brand-primary-600 dark:text-brand-primary-400"
                  : "hover:text-brand-primary-600 dark:hover:text-brand-primary-400"
              }`}
            >
              {t.nav.contact}
            </a>
            <div className="flex items-center space-x-3 sm:space-x-4 pt-3 sm:pt-4 border-t border-brand-neutral-200 dark:border-brand-neutral-800">
              <button
                onClick={toggleTheme}
                className={`p-2 rounded-xl transition-all duration-200 ${
                  theme === "dark"
                    ? "bg-brand-neutral-800 hover:bg-brand-neutral-700 text-brand-secondary-400"
                    : "bg-brand-neutral-100 hover:bg-brand-neutral-200 text-brand-neutral-600"
                }`}
              >
                {theme === "light" ? (
                  <Moon className="w-5 h-5" />
                ) : (
                  <Sun className="w-5 h-5" />
                )}
              </button>
              <div className="relative">
                <button
                  onClick={() => {
                    const options = document.getElementById(
                      "mobile-lang-options"
                    );
                    if (options) {
                      options.classList.toggle("hidden");
                    }
                  }}
                  className={`flex items-center gap-2 pl-3 pr-8 py-2 rounded-xl text-sm font-medium transition-all duration-200 ${
                    theme === "dark"
                      ? "bg-brand-neutral-800 border-brand-neutral-700 text-white hover:bg-brand-neutral-700"
                      : "bg-brand-neutral-100 border-brand-neutral-200 text-brand-neutral-700 hover:bg-brand-neutral-50"
                  } border focus:outline-none focus:ring-2 focus:ring-brand-primary-500 cursor-pointer min-w-[90px]`}
                >
                  <img
                    src={
                      language === "fr"
                        ? "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5f/Flag_of_Quebec.svg/320px-Flag_of_Quebec.svg.png"
                        : "https://flagcdn.com/w20/ca.png"
                    }
                    alt={language}
                    className="w-5 h-4 object-cover rounded-sm"
                  />
                  <span>{language.toUpperCase()}</span>
                  <svg
                    className="w-4 h-4 absolute right-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>
                <div
                  id="mobile-lang-options"
                  className={`hidden absolute top-full mt-1 right-0 rounded-xl shadow-lg border overflow-hidden min-w-[90px] z-50 ${
                    theme === "dark"
                      ? "bg-brand-neutral-800 border-brand-neutral-700"
                      : "bg-white border-brand-neutral-200"
                  }`}
                >
                  <button
                    onClick={() => {
                      setLanguage("fr");
                      document
                        .getElementById("mobile-lang-options")
                        ?.classList.add("hidden");
                    }}
                    className={`flex items-center gap-2 w-full px-3 py-2 text-sm font-medium transition-colors ${
                      language === "fr"
                        ? "bg-brand-primary-600 text-white"
                        : theme === "dark"
                        ? "text-white hover:bg-brand-neutral-700"
                        : "text-brand-neutral-700 hover:bg-brand-neutral-50"
                    }`}
                  >
                    <img
                      src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/5f/Flag_of_Quebec.svg/320px-Flag_of_Quebec.svg.png"
                      alt="FR"
                      className="w-5 h-4 object-cover rounded-sm"
                    />
                    <span>FR</span>
                  </button>
                  <button
                    onClick={() => {
                      setLanguage("en");
                      document
                        .getElementById("mobile-lang-options")
                        ?.classList.add("hidden");
                    }}
                    className={`flex items-center gap-2 w-full px-3 py-2 text-sm font-medium transition-colors ${
                      language === "en"
                        ? "bg-brand-primary-600 text-white"
                        : theme === "dark"
                        ? "text-white hover:bg-brand-neutral-700"
                        : "text-brand-neutral-700 hover:bg-brand-neutral-50"
                    }`}
                  >
                    <img
                      src="https://flagcdn.com/w20/ca.png"
                      alt="EN"
                      className="w-5 h-4 object-cover rounded-sm"
                    />
                    <span>EN</span>
                  </button>
                </div>
              </div>
              <a
                href="https://join-anonyto.systeme.io/36805238"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background bg-brand-primary-600 text-white hover:bg-brand-primary-700 h-10 px-4 py-2 flex-1"
              >
                {t.nav.demo}
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
