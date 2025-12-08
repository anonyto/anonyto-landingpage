import {
  ArrowRight,
  Shield,
  Eye,
  Lock,
  CheckCircle,
  AlertCircle,
  Play,
} from "lucide-react";
import { useState, useEffect } from "react";
import { useLanguage } from "../context/LanguageContext";
import { translations } from "../i18n/translations";
import { VideoModal } from "../components/VideoModal";
import demoVideo from "../assets/demo.mp4";

export function HeroSection() {
  const { language } = useLanguage();
  const t = translations[language as keyof typeof translations];

  const [terminalStep, setTerminalStep] = useState(0);
  const [commandText, setCommandText] = useState("");
  const [isProcessing, setIsProcessing] = useState(false);
  const [showResults, setShowResults] = useState(false);
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);

  const [headlineText, setHeadlineText] = useState("");
  const [subheadlineText, setSubheadlineText] = useState("");
  const [descText, setDescText] = useState("");
  const [showCursor, setShowCursor] = useState(true);

  const sensitiveData = [
    { label: t.hero.terminal.dataLabels.email, value: "john.doe@company.com", type: "email" },
    { label: t.hero.terminal.dataLabels.phone, value: "+1-514-555-0123", type: "phone" },
    { label: t.hero.terminal.dataLabels.ssn, value: "123-45-6789", type: "ssn" },
    { label: t.hero.terminal.dataLabels.card, value: "4532 1234 5678 9012", type: "card" },
  ];

  const fullHeadline = t.hero.headline;
  const fullSubheadline = t.hero.subheadline;
  const fullDesc = t.hero.desc;

  // Reset animations when language changes
  useEffect(() => {
    setHeadlineText("");
    setSubheadlineText("");
    setDescText("");
    setShowCursor(true);
    setCommandText("");
    setTerminalStep(0);
    setIsProcessing(false);
    setShowResults(false);
  }, [language]);

  useEffect(() => {
    if (headlineText.length < fullHeadline.length) {
      const timeout = setTimeout(() => {
        setHeadlineText(fullHeadline.slice(0, headlineText.length + 1));
      }, 60);
      return () => clearTimeout(timeout);
    } else if (subheadlineText.length < fullSubheadline.length) {
      const timeout = setTimeout(() => {
        setSubheadlineText(
          fullSubheadline.slice(0, subheadlineText.length + 1)
        );
      }, 50);
      return () => clearTimeout(timeout);
    } else if (descText.length < fullDesc.length) {
      const timeout = setTimeout(() => {
        setDescText(fullDesc.slice(0, descText.length + 1));
      }, 20);
      return () => clearTimeout(timeout);
    } else {
      setShowCursor(false);
    }
  }, [headlineText, subheadlineText, descText, fullHeadline, fullSubheadline, fullDesc]);

  useEffect(() => {
    if (!showCursor) return;
    const interval = setInterval(() => {
      setShowCursor((prev) => !prev);
    }, 500);
    return () => clearInterval(interval);
  }, [showCursor]);

  useEffect(() => {
    const fullCommand = t.hero.terminal.command;

    if (terminalStep === 0 && commandText.length < fullCommand.length) {
      const timeout = setTimeout(() => {
        setCommandText(fullCommand.slice(0, commandText.length + 1));
      }, 80);
      return () => clearTimeout(timeout);
    } else if (
      terminalStep === 0 &&
      commandText.length === fullCommand.length
    ) {
      const timeout = setTimeout(() => {
        setIsProcessing(true);
        setTerminalStep(1);
      }, 800);
      return () => clearTimeout(timeout);
    } else if (terminalStep === 1) {
      const timeout = setTimeout(() => {
        setIsProcessing(false);
        setShowResults(true);
        setTerminalStep(2);
      }, 2000);
      return () => clearTimeout(timeout);
    }
  }, [commandText, terminalStep, t.hero.terminal.command]);

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center overflow-hidden py-20"
    >
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-64 sm:w-80 md:w-96 h-64 sm:h-80 md:h-96 bg-brand-primary-500/10 dark:bg-brand-primary-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-64 sm:w-80 md:w-96 h-64 sm:h-80 md:h-96 bg-green-500/10 dark:bg-green-500/10 rounded-full blur-3xl animate-pulse animation-delay-1000"></div>
      </div>
      <div className="container-max relative z-10 px-4 md:px-8 w-full">
        <div className="max-w-[1800px] mx-auto">
          <div className="space-y-6 animate-fade-in">
            <div className="relative shadow-2xl">
              <div className="bg-gradient-to-r from-brand-neutral-200 to-brand-neutral-300 dark:from-brand-neutral-800 dark:to-brand-neutral-900 rounded-t-xl px-3 sm:px-5 py-3 sm:py-4 flex items-center justify-between border-b border-brand-neutral-300 dark:border-brand-neutral-700">
                <div className="flex items-center gap-2 sm:gap-3">
                  <div className="flex gap-1.5 sm:gap-2">
                    <div className="w-2.5 sm:w-3.5 h-2.5 sm:h-3.5 rounded-full bg-red-500"></div>
                    <div className="w-2.5 sm:w-3.5 h-2.5 sm:h-3.5 rounded-full bg-yellow-500"></div>
                    <div className="w-2.5 sm:w-3.5 h-2.5 sm:h-3.5 rounded-full bg-green-500"></div>
                  </div>
                  <span className="text-xs sm:text-sm font-mono text-brand-neutral-600 dark:text-brand-neutral-400">
                    anonyto-cli v2.0.0
                  </span>
                </div>
                <div className="flex items-center gap-1.5 sm:gap-2">
                  <Shield className="w-3.5 sm:w-4 h-3.5 sm:h-4 text-green-500 dark:text-green-400" />
                  <span className="text-xs sm:text-sm font-mono text-green-600 dark:text-green-400">
                    Protected
                  </span>
                </div>
              </div>
              <div className="relative bg-gradient-to-br from-white via-gray-50 to-gray-100 dark:from-brand-neutral-900 dark:via-brand-neutral-900 dark:to-black rounded-b-xl p-5 sm:p-8 md:p-10 lg:p-16 font-mono border-x border-b border-brand-neutral-300 dark:border-brand-neutral-700">
                <div className="grid lg:grid-cols-2 gap-6 sm:gap-8 md:gap-10 lg:gap-16 min-h-[400px] sm:min-h-[500px] lg:min-h-[600px]">
                  <div className="space-y-4 sm:space-y-6 md:space-y-8">
                    <div className="flex items-start gap-2 sm:gap-3 md:gap-4">
                      <span className="text-green-500 dark:text-green-400 text-base sm:text-lg mt-1">$</span>
                      <div className="flex-1">
                        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-brand-neutral-900 dark:text-white leading-tight">
                          {headlineText}
                          {headlineText === fullHeadline && (
                            <>
                              <br />
                              <span className="bg-gradient-to-r from-brand-primary-600 via-green-500 to-yellow-500 dark:from-brand-primary-400 dark:via-green-400 dark:to-yellow-400 bg-clip-text text-transparent animate-gradient">
                                {subheadlineText}
                              </span>
                            </>
                          )}
                          {(headlineText.length < fullHeadline.length ||
                            subheadlineText.length < fullSubheadline.length) &&
                            showCursor && (
                              <span className="inline-block w-0.5 sm:w-1 h-6 sm:h-8 md:h-10 lg:h-12 xl:h-14 bg-green-500 dark:bg-green-400 ml-1 animate-pulse"></span>
                            )}
                        </h1>
                      </div>
                    </div>
                    {descText.length > 0 && (
                      <div className="flex items-start gap-2 sm:gap-3 md:gap-4 pt-4 sm:pt-6 border-t border-brand-neutral-300 dark:border-brand-neutral-700">
                        <span className="text-brand-neutral-400 dark:text-brand-neutral-500 text-base sm:text-lg">
                          #
                        </span>
                        <p className="text-base sm:text-lg md:text-xl text-brand-neutral-700 dark:text-brand-neutral-300 leading-relaxed">
                          {descText}
                          {descText.length < fullDesc.length && showCursor && (
                            <span className="inline-block w-0.5 h-5 sm:h-6 bg-brand-neutral-600 dark:bg-brand-neutral-400 ml-1 animate-pulse"></span>
                          )}
                        </p>
                      </div>
                    )}
                    <div className="flex items-center gap-2 text-sm sm:text-base text-brand-neutral-600 dark:text-brand-neutral-400 pt-4 sm:pt-6">
                      <div className="w-2 sm:w-2.5 h-2 sm:h-2.5 bg-green-500 dark:bg-green-400 rounded-full animate-pulse"></div>
                      <span className="text-xs sm:text-sm md:text-base">{t.hero.terminal.statusOnline}</span>
                    </div>
                    <div className="flex flex-col sm:flex-row items-start gap-4 pt-6">
                      <a
                        href="https://join-anonyto.systeme.io/36805238"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group relative inline-flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-brand-primary-600 to-brand-primary-700 hover:from-brand-primary-700 hover:to-brand-primary-800 text-white text-base font-semibold rounded-xl transition-all duration-300 hover:shadow-2xl hover:shadow-brand-primary-600/50 hover:scale-105 overflow-hidden whitespace-nowrap w-full sm:w-auto"
                      >
                        <span className="relative z-10">
                          {t.hero.newsletter.button}
                        </span>
                        <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-1000"></div>
                      </a>
                      <button
                        onClick={() => setIsVideoModalOpen(true)}
                        className="group relative inline-flex items-center justify-center gap-2 px-8 py-4 bg-transparent border-2 border-brand-neutral-400 dark:border-brand-neutral-700 hover:border-brand-primary-600 hover:bg-brand-primary-600/10 text-brand-neutral-900 dark:text-white hover:text-brand-primary-600 dark:hover:text-brand-primary-400 text-base font-semibold rounded-xl transition-all duration-300 hover:shadow-xl hover:shadow-brand-primary-600/30 hover:scale-105 overflow-hidden w-full sm:w-auto"
                      >
                        <Play className="w-5 h-5 group-hover:scale-110 transition-transform" />
                        <span>{t.hero.terminal.replayButton}</span>
                      </button>
                    </div>
                  </div>
                  <div className="space-y-4 sm:space-y-5 border-l border-brand-neutral-300 dark:border-brand-neutral-700 pl-5 sm:pl-8 md:pl-10 lg:pl-16">
                    <div className="text-sm sm:text-base">
                      <div className="mb-3 sm:mb-4">
                        <span className="text-green-500 dark:text-green-400">$ </span>
                        <span className="text-brand-neutral-900 dark:text-white break-all">{commandText}</span>
                        <span className="animate-pulse text-brand-neutral-900 dark:text-white"></span>
                      </div>
                      {isProcessing && (
                        <div className="space-y-2 mb-3 sm:mb-4 animate-fade-in">
                          <div className="flex items-center gap-2">
                            <div className="w-1.5 sm:w-2 h-1.5 sm:h-2 bg-yellow-500 dark:bg-yellow-400 rounded-full animate-pulse"></div>
                            <span className="text-yellow-600 dark:text-yellow-400 text-xs sm:text-sm">
                              {t.hero.terminal.scanning}
                            </span>
                          </div>
                          <div className="flex items-center gap-2">
                            <div className="w-1.5 sm:w-2 h-1.5 sm:h-2 bg-blue-500 dark:bg-blue-400 rounded-full animate-pulse"></div>
                            <span className="text-blue-600 dark:text-blue-400 text-xs sm:text-sm">
                              {t.hero.terminal.detecting}
                            </span>
                          </div>
                          <div className="flex items-center gap-2">
                            <div className="w-1.5 sm:w-2 h-1.5 sm:h-2 bg-green-500 dark:bg-green-400 rounded-full animate-pulse"></div>
                            <span className="text-green-600 dark:text-green-400 text-xs sm:text-sm">
                              {t.hero.terminal.anonymizing}
                            </span>
                          </div>
                        </div>
                      )}
                      {showResults && (
                        <div className="space-y-3 sm:space-y-4 animate-fade-in">
                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                            <div className="space-y-2 sm:space-y-3">
                              <div className="flex items-center gap-2 mb-3 sm:mb-4">
                                <Eye className="w-4 sm:w-5 h-4 sm:h-5 text-red-500 dark:text-red-400" />
                                <span className="text-red-600 dark:text-red-400 font-semibold text-xs sm:text-sm uppercase tracking-wider">
                                  {t.hero.terminal.exposedTitle}
                                </span>
                              </div>
                              {sensitiveData.map((item, index) => (
                                <div
                                  key={index}
                                  className="bg-red-500/10 dark:bg-red-500/10 border border-red-500/40 dark:border-red-500/30 rounded-lg p-2 sm:p-3 animate-fade-in"
                                  style={{ animationDelay: `${index * 150}ms` }}
                                >
                                  <div className="flex items-start gap-1.5 sm:gap-2">
                                    <AlertCircle className="w-3 sm:w-4 h-3 sm:h-4 text-red-600 dark:text-red-400 flex-shrink-0 mt-0.5" />
                                    <div className="flex-1 min-w-0">
                                      <div className="text-red-600 dark:text-red-300 text-[10px] sm:text-xs mb-0.5 sm:mb-1">
                                        {item.label}
                                      </div>
                                      <div className="text-red-700 dark:text-red-400 font-medium text-xs sm:text-sm truncate">
                                        {item.value}
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              ))}
                              <div className="flex items-center justify-between text-[10px] sm:text-xs pt-2 border-t border-red-500/30 dark:border-red-500/20">
                                <span className="text-red-600 dark:text-red-400 font-semibold">
                                  {t.hero.terminal.vulnerable}
                                </span>
                                <span className="text-red-600 dark:text-red-300">
                                  {t.hero.terminal.protectedPercent}
                                </span>
                              </div>
                            </div>
                            <div className="space-y-2 sm:space-y-3">
                              <div className="flex items-center gap-2 mb-3 sm:mb-4">
                                <Lock className="w-4 sm:w-5 h-4 sm:h-5 text-green-600 dark:text-green-400" />
                                <span className="text-green-600 dark:text-green-400 font-semibold text-xs sm:text-sm uppercase tracking-wider">
                                  {t.hero.terminal.anonymizedTitle}
                                </span>
                              </div>
                              {sensitiveData.map((item, index) => (
                                <div
                                  key={index}
                                  className="bg-green-500/10 dark:bg-green-500/10 border border-green-500/40 dark:border-green-500/30 rounded-lg p-2 sm:p-3 animate-fade-in"
                                  style={{
                                    animationDelay: `${index * 150 + 300}ms`,
                                  }}
                                >
                                  <div className="flex items-start gap-1.5 sm:gap-2">
                                    <CheckCircle className="w-3 sm:w-4 h-3 sm:h-4 text-green-600 dark:text-green-400 flex-shrink-0 mt-0.5" />
                                    <div className="flex-1 min-w-0">
                                      <div className="text-green-700 dark:text-green-300 text-[10px] sm:text-xs mb-0.5 sm:mb-1">
                                        {item.label}
                                      </div>
                                      <div className="text-green-700 dark:text-green-400 font-medium text-xs sm:text-sm">
                                        {item.type === "email" && "•••@•••.•••"}
                                        {item.type === "phone" &&
                                          "+•-•••-•••-••••"}
                                        {item.type === "ssn" && "•••-••-••••"}
                                        {item.type === "card" &&
                                          "•••• •••• •••• ••••"}
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              ))}
                              <div className="flex items-center justify-between text-[10px] sm:text-xs pt-2 border-t border-green-500/30 dark:border-green-500/20">
                                <span className="text-green-600 dark:text-green-400 font-semibold">
                                  {t.hero.terminal.secured}
                                </span>
                                <span className="text-green-600 dark:text-green-300">
                                  {t.hero.terminal.fullProtectedPercent}
                                </span>
                              </div>
                            </div>
                          </div>
                          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 sm:gap-4 pt-4 sm:pt-5 border-t border-brand-neutral-300 dark:border-brand-neutral-700">
                            <div className="text-center">
                              <div className="text-lg sm:text-2xl font-bold text-green-600 dark:text-green-400 mb-0.5 sm:mb-1">
                                4
                              </div>
                              <div className="text-[10px] sm:text-xs text-brand-neutral-600 dark:text-brand-neutral-400">
                                {t.hero.terminal.statsDetected}
                              </div>
                            </div>
                            <div className="text-center">
                              <div className="text-lg sm:text-2xl font-bold text-green-600 dark:text-green-400 mb-0.5 sm:mb-1">
                                100%
                              </div>
                              <div className="text-[10px] sm:text-xs text-brand-neutral-600 dark:text-brand-neutral-400">
                                {t.hero.terminal.statsProtected}
                              </div>
                            </div>
                            <div className="text-center">
                              <div className="text-lg sm:text-2xl font-bold text-green-600 dark:text-green-400 mb-0.5 sm:mb-1">
                                &lt;10ms
                              </div>
                              <div className="text-[10px] sm:text-xs text-brand-neutral-600 dark:text-brand-neutral-400">
                                {t.hero.terminal.statsLatency}
                              </div>
                            </div>
                            <div className="text-center">
                              <div className="text-lg sm:text-2xl font-bold text-green-600 dark:text-green-400 mb-0.5 sm:mb-1">
                                A+
                              </div>
                              <div className="text-[10px] sm:text-xs text-brand-neutral-600 dark:text-brand-neutral-400">
                                {t.hero.terminal.statsPrivacy}
                              </div>
                            </div>
                          </div>
                          <div className="flex items-center gap-2 text-green-600 dark:text-green-400 pt-4 sm:pt-5">
                            <CheckCircle className="w-4 sm:w-5 h-4 sm:h-5" />
                            <span className="text-xs sm:text-sm md:text-base">
                              {t.hero.terminal.complete}
                            </span>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <VideoModal
        isOpen={isVideoModalOpen}
        onClose={() => setIsVideoModalOpen(false)}
        videoSrc={demoVideo}
      />
    </section>
  );
}
