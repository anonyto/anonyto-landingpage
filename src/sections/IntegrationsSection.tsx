import { ExternalLink } from "lucide-react";
import { useTheme } from "../context/ThemeContext";
import { useLanguage } from "../context/LanguageContext";
import { translations } from "../i18n/translations";

export function IntegrationsSection() {
  const { theme } = useTheme();
  const { language } = useLanguage();
  const t = translations[language as keyof typeof translations];

  const integrations = [
    { name: "ChatGPT", logo: "https://cdn.simpleicons.org/openai" },
    { name: "Google Gemini", logo: "https://cdn.simpleicons.org/google" },
    { name: "Claude", logo: "https://cdn.simpleicons.org/anthropic" },
    {
      name: "Perplexity",
      logo: "https://cdn.simpleicons.org/perplexity",
    },
    { name: "Chrome", logo: "https://cdn.simpleicons.org/googlechrome" },
    { name: "Firefox", logo: "https://cdn.simpleicons.org/firefox" },
    { name: "Safari", logo: "https://cdn.simpleicons.org/safari" },
    { name: "Slack", logo: "https://cdn.simpleicons.org/slack" },
  ];

  return (
    <section
      id="integrations"
      className="section-padding relative overflow-hidden"
    >
      <div className="container-max px-4">
        <div className="text-center mb-12 sm:mb-16 scroll-animate">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-medium mb-4 text-balance">
            {t.integrations.title}
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-brand-neutral-600 dark:text-brand-neutral-300 max-w-3xl mx-auto mb-6 sm:mb-8 px-4">
            {t.integrations.subtitle}
          </p>
          <a
            href="https://join-anonyto.systeme.io/36805238"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background border border-input bg-background hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2"
          >
            {t.integrations.cta}
            <ExternalLink className="ml-2 w-4 h-4" />
          </a>
        </div>
        <div className="relative max-w-5xl mx-auto">
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 sm:gap-4 lg:gap-6">
            {integrations.map((integration, index) => (
              <div
                key={index}
                className={`group scroll-animate-scale stagger-${
                  (index % 8) + 1
                }`}
              >
                <div className="w-full h-20 sm:h-24 md:h-28 bg-white dark:bg-brand-neutral-800 rounded-lg sm:rounded-xl lg:rounded-2xl flex items-center justify-center p-3 sm:p-4 lg:p-6 shadow-sm border border-brand-neutral-200 dark:border-brand-neutral-700 hover:shadow-lg hover:border-brand-neutral-300 dark:hover:border-brand-neutral-600 transition-all duration-300 hover:scale-105 relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-brand-primary-500/5 to-brand-secondary-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <img
                    src={integration.logo}
                    alt={integration.name}
                    className="max-w-full max-h-full object-contain group-hover:scale-110 transition-transform duration-300 relative z-10"
                    style={{
                      filter:
                        theme === "dark" ? "brightness(0) invert(1)" : "none",
                    }}
                  />
                  <div className="absolute top-2 right-2 w-1.5 h-1.5 bg-brand-primary-500 rounded-full opacity-0 group-hover:opacity-100 animate-bounce-subtle"></div>
                  <div className="absolute bottom-2 left-2 w-1 h-1 bg-brand-secondary-500 rounded-full opacity-0 group-hover:opacity-100 animate-bounce-subtle animation-delay-200"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="mt-12 sm:mt-16 text-center scroll-animate">
          <div className="inline-flex flex-col sm:flex-row items-center gap-4 sm:gap-8 text-xs sm:text-sm text-brand-neutral-500 dark:text-brand-neutral-400 px-4">
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
              <span>{t.integrations.badges.certified}</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse animation-delay-200"></div>
              <span>{t.integrations.badges.enterprise}</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-purple-500 rounded-full animate-pulse animation-delay-400"></div>
              <span>{t.integrations.badges.secure}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
