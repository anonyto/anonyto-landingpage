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

export function HeroSection() {
  const { language } = useLanguage();
  const t = translations[language as keyof typeof translations];

  const [terminalStep, setTerminalStep] = useState(0);
  const [commandText, setCommandText] = useState("");
  const [isProcessing, setIsProcessing] = useState(false);
  const [showResults, setShowResults] = useState(false);

  const [headlineText, setHeadlineText] = useState("");
  const [subheadlineText, setSubheadlineText] = useState("");
  const [descText, setDescText] = useState("");
  const [showCursor, setShowCursor] = useState(true);

  const sensitiveData = [
    { label: "Email", value: "john.doe@company.com", type: "email" },
    { label: "Phone", value: "+1-514-555-0123", type: "phone" },
    { label: "SSN", value: "123-45-6789", type: "ssn" },
    { label: "Credit Card", value: "4532 1234 5678 9012", type: "card" },
  ];

  const fullHeadline = "Your Data Protection,";
  const fullSubheadline = "Visualized in Real-Time";
  const fullDesc = t.hero.desc;

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
  }, [headlineText, subheadlineText, descText, fullDesc]);

  useEffect(() => {
    if (!showCursor) return;
    const interval = setInterval(() => {
      setShowCursor((prev) => !prev);
    }, 500);
    return () => clearInterval(interval);
  }, [showCursor]);

  useEffect(() => {
    const commands = ["anonyto scan --data sensitive_data.txt"];
    const fullCommand = commands[0];

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
  }, [commandText, terminalStep]);

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center overflow-hidden py-20"
    >
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-brand-primary-500/5 dark:bg-brand-primary-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-green-500/5 dark:bg-green-500/10 rounded-full blur-3xl animate-pulse animation-delay-1000"></div>
      </div>
      <div className="container-max relative z-10 px-4 md:px-8 w-full">
        <div className="max-w-[1800px] mx-auto">
          <div className="space-y-6 animate-fade-in">
            <div className="relative shadow-2xl">
              <div className="bg-gradient-to-r from-brand-neutral-800 to-brand-neutral-900 dark:from-brand-neutral-900 dark:to-black rounded-t-xl px-5 py-4 flex items-center justify-between border-b border-brand-neutral-700">
                <div className="flex items-center gap-3">
                  <div className="flex gap-2">
                    <div className="w-3.5 h-3.5 rounded-full bg-red-500"></div>
                    <div className="w-3.5 h-3.5 rounded-full bg-yellow-500"></div>
                    <div className="w-3.5 h-3.5 rounded-full bg-green-500"></div>
                  </div>
                  <span className="text-sm font-mono text-brand-neutral-400">
                    anonyto-cli v2.0.0
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <Shield className="w-4 h-4 text-green-400" />
                  <span className="text-sm font-mono text-green-400">
                    Protected
                  </span>
                </div>
              </div>
              <div className="relative bg-gradient-to-br from-brand-neutral-900 via-brand-neutral-900 to-black rounded-b-xl p-10 md:p-12 lg:p-16 font-mono border-x border-b border-brand-neutral-700">
                <div className="grid lg:grid-cols-2 gap-10 md:gap-12 lg:gap-16 min-h-[600px]">
                  <div className="space-y-8">
                    <div className="flex items-start gap-4">
                      <span className="text-green-400 text-lg mt-1">$</span>
                      <div className="flex-1">
                        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight">
                          {headlineText}
                          {headlineText === fullHeadline && (
                            <>
                              <br />
                              <span className="bg-gradient-to-r from-brand-primary-400 via-green-400 to-yellow-400 bg-clip-text text-transparent animate-gradient">
                                {subheadlineText}
                              </span>
                            </>
                          )}
                          {(headlineText.length < fullHeadline.length ||
                            subheadlineText.length < fullSubheadline.length) &&
                            showCursor && (
                              <span className="inline-block w-1 h-10 md:h-12 lg:h-14 bg-green-400 ml-1 animate-pulse"></span>
                            )}
                        </h1>
                      </div>
                    </div>
                    {descText.length > 0 && (
                      <div className="flex items-start gap-4 pt-6 border-t border-brand-neutral-700">
                        <span className="text-brand-neutral-500 text-lg">
                          #
                        </span>
                        <p className="text-lg md:text-xl text-brand-neutral-300 dark:text-brand-neutral-400 leading-relaxed">
                          {descText}
                          {descText.length < fullDesc.length && showCursor && (
                            <span className="inline-block w-0.5 h-6 bg-brand-neutral-400 ml-1 animate-pulse"></span>
                          )}
                        </p>
                      </div>
                    )}
                    <div className="flex items-center gap-2 text-base text-brand-neutral-500 dark:text-brand-neutral-400 pt-6">
                      <div className="w-2.5 h-2.5 bg-green-400 rounded-full animate-pulse"></div>
                      <span>System Online • Real-time Protection Active</span>
                    </div>
                    <div className="flex flex-col sm:flex-row items-start gap-4 pt-6">
                      <a
                        href="https://join-anonyto.systeme.io/36805238"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group relative inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-brand-primary-600 to-brand-primary-700 hover:from-brand-primary-700 hover:to-brand-primary-800 text-white text-base font-semibold rounded-xl transition-all duration-300 hover:shadow-2xl hover:shadow-brand-primary-600/50 hover:scale-105 overflow-hidden whitespace-nowrap"
                      >
                        <span className="relative z-10">
                          {t.hero.newsletter.button}
                        </span>
                        <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-1000"></div>
                      </a>
                      <button
                        onClick={() => {
                          setHeadlineText("");
                          setSubheadlineText("");
                          setDescText("");
                          setShowCursor(true);
                          setCommandText("");
                          setTerminalStep(0);
                          setIsProcessing(false);
                          setShowResults(false);
                        }}
                        className="group inline-flex items-center gap-2 px-8 py-4 bg-transparent border-2 border-brand-neutral-700 hover:border-brand-primary-500 text-white text-base font-semibold rounded-xl transition-all duration-300 hover:shadow-lg whitespace-nowrap"
                      >
                        <Play className="w-5 h-5 group-hover:scale-110 transition-transform" />
                        Replay Demo
                      </button>
                    </div>
                  </div>
                  <div className="space-y-5 border-l border-brand-neutral-700 pl-10 md:pl-12 lg:pl-16">
                    <div className="text-base">
                      <div className="mb-4">
                        <span className="text-green-400">$ </span>
                        <span className="text-white">{commandText}</span>
                        <span className="animate-pulse text-white"></span>
                      </div>
                      {isProcessing && (
                        <div className="space-y-2 mb-4 animate-fade-in">
                          <div className="flex items-center gap-2">
                            <div className="w-2 h-2 bg-yellow-400 rounded-full animate-pulse"></div>
                            <span className="text-yellow-400 text-sm">
                              Scanning data...
                            </span>
                          </div>
                          <div className="flex items-center gap-2">
                            <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse"></div>
                            <span className="text-blue-400 text-sm">
                              Detecting sensitive information...
                            </span>
                          </div>
                          <div className="flex items-center gap-2">
                            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                            <span className="text-green-400 text-sm">
                              Applying anonymization...
                            </span>
                          </div>
                        </div>
                      )}
                      {showResults && (
                        <div className="space-y-4 animate-fade-in">
                          <div className="grid grid-cols-2 gap-4">
                            <div className="space-y-3">
                              <div className="flex items-center gap-2 mb-4">
                                <Eye className="w-5 h-5 text-red-400" />
                                <span className="text-red-400 font-semibold text-sm uppercase tracking-wider">
                                  Exposed Data
                                </span>
                              </div>
                              {sensitiveData.map((item, index) => (
                                <div
                                  key={index}
                                  className="bg-red-500/10 border border-red-500/30 rounded-lg p-3 animate-fade-in"
                                  style={{ animationDelay: `${index * 150}ms` }}
                                >
                                  <div className="flex items-start gap-2">
                                    <AlertCircle className="w-4 h-4 text-red-400 flex-shrink-0 mt-0.5" />
                                    <div className="flex-1 min-w-0">
                                      <div className="text-red-300 text-xs mb-1">
                                        {item.label}
                                      </div>
                                      <div className="text-red-400 font-medium text-sm truncate">
                                        {item.value}
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              ))}
                              <div className="flex items-center justify-between text-xs pt-2 border-t border-red-500/20">
                                <span className="text-red-400 font-semibold">
                                  ⚠ Vulnerable
                                </span>
                                <span className="text-red-300">
                                  0% Protected
                                </span>
                              </div>
                            </div>
                            <div className="space-y-3">
                              <div className="flex items-center gap-2 mb-4">
                                <Lock className="w-5 h-5 text-green-400" />
                                <span className="text-green-400 font-semibold text-sm uppercase tracking-wider">
                                  Anonymized
                                </span>
                              </div>
                              {sensitiveData.map((item, index) => (
                                <div
                                  key={index}
                                  className="bg-green-500/10 border border-green-500/30 rounded-lg p-3 animate-fade-in"
                                  style={{
                                    animationDelay: `${index * 150 + 300}ms`,
                                  }}
                                >
                                  <div className="flex items-start gap-2">
                                    <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0 mt-0.5" />
                                    <div className="flex-1 min-w-0">
                                      <div className="text-green-300 text-xs mb-1">
                                        {item.label}
                                      </div>
                                      <div className="text-green-400 font-medium text-sm">
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
                              <div className="flex items-center justify-between text-xs pt-2 border-t border-green-500/20">
                                <span className="text-green-400 font-semibold">
                                  ✓ Secured
                                </span>
                                <span className="text-green-300">
                                  100% Protected
                                </span>
                              </div>
                            </div>
                          </div>
                          <div className="grid grid-cols-4 gap-4 pt-5 border-t border-brand-neutral-700">
                            <div className="text-center">
                              <div className="text-2xl font-bold text-green-400 mb-1">
                                4
                              </div>
                              <div className="text-xs text-brand-neutral-400">
                                Detected
                              </div>
                            </div>
                            <div className="text-center">
                              <div className="text-2xl font-bold text-green-400 mb-1">
                                100%
                              </div>
                              <div className="text-xs text-brand-neutral-400">
                                Protected
                              </div>
                            </div>
                            <div className="text-center">
                              <div className="text-2xl font-bold text-green-400 mb-1">
                                &lt;10ms
                              </div>
                              <div className="text-xs text-brand-neutral-400">
                                Latency
                              </div>
                            </div>
                            <div className="text-center">
                              <div className="text-2xl font-bold text-green-400 mb-1">
                                $5M
                              </div>
                              <div className="text-xs text-brand-neutral-400">
                                Saved
                              </div>
                            </div>
                          </div>
                          <div className="flex items-center gap-2 text-green-400 pt-5">
                            <CheckCircle className="w-5 h-5" />
                            <span className="text-base">
                              Anonymization complete. Your data is now secure.
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
    </section>
  );
}
