import { ThemeProvider, useTheme } from "./context/ThemeContext";
import { LanguageProvider } from "./context/LanguageContext";
import { useState, useEffect } from "react";
import { BackgroundLayer } from "./components/BackgroundLayer";
import { Navbar } from "./sections/Navbar";
import { HeroSection } from "./sections/HeroSection";
import { SolutionSection } from "./sections/SolutionSection";
import { HowItWorksSection } from "./sections/HowItWorksSection";
import { ModulesSection } from "./sections/ModulesSection";
import { FeaturesSection } from "./sections/FeaturesSection";
import { SecuritySection } from "./sections/SecuritySection";
import { IntegrationsSection } from "./sections/IntegrationsSection";
import { PricingSection } from "./sections/PricingSection";
import { FAQSection } from "./sections/FAQSection";
import { ContactSection } from "./sections/ContactSection";
import { CTASection } from "./sections/CTASection";
import { Footer } from "./sections/Footer";

function AppContent() {
  const [activeSection, setActiveSection] = useState("");
  const { theme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      const sections = [
        "modules",
        "features",
        "security",
        "integrations",
        "pricing",
      ];
      const scrollPosition = window.scrollY + 100;

      for (const sectionId of sections) {
        const section = document.getElementById(sectionId);
        if (section) {
          const sectionTop = section.offsetTop;
          const sectionHeight = section.offsetHeight;

          if (
            scrollPosition >= sectionTop &&
            scrollPosition < sectionTop + sectionHeight
          ) {
            setActiveSection(sectionId);
            break;
          }
        }
      }

      const animateOnScroll = () => {
        const animationClasses = [
          ".scroll-animate",
          ".scroll-animate-left",
          ".scroll-animate-right",
          ".scroll-animate-scale",
          ".scroll-animate-fade",
        ];

        animationClasses.forEach((className) => {
          const elements = document.querySelectorAll(className);
          elements.forEach((element) => {
            const rect = element.getBoundingClientRect();
            const windowHeight = window.innerHeight;

            if (rect.top <= windowHeight * 0.85) {
              element.classList.add("animate-in");
            }
          });
        });
      };

      animateOnScroll();
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen relative">
      <BackgroundLayer />

      <div
        className={`relative z-10 transition-colors duration-300 ${
          theme === "dark" ? "text-white" : "text-brand-neutral-900"
        }`}
      >
        <Navbar activeSection={activeSection} />

        <HeroSection />

        <SolutionSection />

        <HowItWorksSection />

        <ModulesSection />

        <FeaturesSection />

        <SecuritySection />

        <IntegrationsSection />

        <PricingSection />

        <FAQSection />

        <ContactSection />

        <CTASection />

        <Footer />
      </div>
    </div>
  );
}

export default function App() {
  return (
    <ThemeProvider>
      <LanguageProvider>
        <AppContent />
      </LanguageProvider>
    </ThemeProvider>
  );
}
