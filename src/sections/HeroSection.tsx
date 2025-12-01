import {
  CheckCircle,
  AlertCircle,
  Shield,
  Eye,
  Lock,
  DollarSign,
} from "lucide-react";
import { useState } from "react";
import { useLanguage } from "../context/LanguageContext";
import { translations } from "../i18n/translations";
import { AnimatedNumber } from "../components/AnimatedNumber";
import AnonytoLogo from "../assets/AnonymizerLogo.png";

export function HeroSection() {
  const { language } = useLanguage();
  const t = translations[language as keyof typeof translations];
  const [isAnonytoActive, setIsAnonytoActive] = useState(true);

  return (
    <section className="relative pt-16 sm:pt-20 pb-8 sm:pb-12 min-h-screen flex items-center overflow-hidden">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 -left-24 sm:-left-48 w-64 sm:w-96 h-64 sm:h-96 bg-brand-primary-500/20 dark:bg-brand-primary-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 -right-24 sm:-right-48 w-64 sm:w-96 h-64 sm:h-96 bg-brand-secondary-500/20 dark:bg-brand-secondary-500/10 rounded-full blur-3xl animate-pulse animation-delay-1000"></div>
      </div>

      <div className="container-max relative z-10 px-4 sm:px-6">
        <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 xl:gap-24 items-center">
          <div className="space-y-6 sm:space-y-8 animate-fade-in order-2 lg:order-1">
            <div className="space-y-4 sm:space-y-6">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-medium text-brand-neutral-900 dark:text-white leading-tight">
                {t.hero.title}
              </h1>
              <p className="text-base sm:text-lg lg:text-xl text-brand-neutral-600 dark:text-brand-neutral-400 leading-relaxed max-w-xl">
                {t.hero.desc}
              </p>
            </div>
            <div className="space-y-2 sm:space-y-3 py-2">
              <div className="flex items-center gap-3 text-brand-neutral-700 dark:text-brand-neutral-300">
                <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                <span className="text-sm sm:text-base">
                  {t.problem.points.want}
                </span>
              </div>
              <div className="flex items-center gap-3 text-brand-neutral-700 dark:text-brand-neutral-300">
                <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                <span className="text-sm sm:text-base">
                  {t.problem.points.help}
                </span>
              </div>
              <div className="flex items-center gap-3 text-brand-neutral-900 dark:text-white font-medium">
                <AlertCircle className="w-5 h-5 text-red-500 flex-shrink-0" />
                <span className="text-sm sm:text-base">
                  {t.problem.points.but}
                </span>
              </div>
            </div>
            <div className="space-y-3">
              <div className="flex flex-col sm:flex-row gap-3 max-w-lg">
                <a
                  href="https://join-anonyto.systeme.io/36805238"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="h-16 sm:h-12 px-6 sm:px-8 bg-brand-primary-600 hover:bg-brand-primary-700 text-white text-base sm:text-sm font-medium rounded-xl transition-all duration-200 hover:shadow-lg hover:shadow-brand-primary-600/30 whitespace-nowrap flex items-center justify-center"
                >
                  {t.hero.newsletter.button}
                </a>
              </div>
            </div>
          </div>

          <div className="relative animate-fade-in animation-delay-400 perspective-1000 order-1 lg:order-2">
            <div
              className="bg-white dark:bg-brand-neutral-800 rounded-2xl sm:rounded-3xl p-4 sm:p-6 md:p-8 shadow-2xl border border-brand-neutral-200 dark:border-brand-neutral-700 transform hover:rotate-y-2 transition-all duration-500 hover:shadow-3xl"
              style={{
                transform: "perspective(1000px) rotateY(0deg) rotateX(0deg)",
              }}
            >
              <div className="flex items-center justify-between mb-6 sm:mb-8 pb-4 sm:pb-6 border-b border-brand-neutral-200 dark:border-brand-neutral-700">
                <div className="flex items-center gap-2 sm:gap-3">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 flex items-center justify-center">
                    <img
                      src={AnonytoLogo}
                      alt="Anonyto"
                      className="w-full h-full object-contain"
                    />
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="flex items-center gap-1.5 sm:gap-2">
                    <div
                      className={`w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full ${
                        isAnonytoActive
                          ? "bg-green-500 animate-pulse"
                          : "bg-red-500"
                      }`}
                    ></div>
                    <span className="text-xs sm:text-sm text-brand-neutral-500 dark:text-brand-neutral-400">
                      {isAnonytoActive ? t.hero.dashboard.online : "Désactivé"}
                    </span>
                  </div>
                  {/* Toggle Switch */}
                  <button
                    onClick={() => setIsAnonytoActive(!isAnonytoActive)}
                    className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                      isAnonytoActive ? "bg-green-500" : "bg-red-500"
                    }`}
                  >
                    <span
                      className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                        isAnonytoActive ? "translate-x-6" : "translate-x-1"
                      }`}
                    />
                  </button>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3 sm:gap-4 mb-4 sm:mb-6">
                <div
                  className={`bg-brand-neutral-50 dark:bg-brand-neutral-900/50 rounded-xl sm:rounded-2xl p-3 sm:p-4 border transition-all duration-300 ${
                    isAnonytoActive
                      ? "border-brand-neutral-200 dark:border-brand-neutral-700 hover:border-brand-primary-500 dark:hover:border-brand-primary-500"
                      : "border-red-200 dark:border-red-900/50"
                  }`}
                >
                  <div className="flex items-center gap-1.5 sm:gap-2 mb-1.5 sm:mb-2">
                    <Shield
                      className={`w-3.5 h-3.5 sm:w-4 sm:h-4 ${
                        isAnonytoActive ? "text-green-500" : "text-red-500"
                      }`}
                    />
                    <span
                      className={`text-xs sm:text-sm font-medium ${
                        isAnonytoActive
                          ? "text-green-600 dark:text-green-400"
                          : "text-red-600 dark:text-red-400"
                      }`}
                    >
                      {isAnonytoActive ? "-57%" : "+87%"}
                    </span>
                  </div>
                  <AnimatedNumber
                    end={isAnonytoActive ? 57 : 87}
                    suffix="%"
                    className={`text-2xl sm:text-3xl font-semibold mb-1 ${
                      isAnonytoActive
                        ? "text-brand-neutral-900 dark:text-white"
                        : "text-red-600 dark:text-red-400"
                    }`}
                  />
                  <p className="text-xs sm:text-sm text-brand-neutral-500 dark:text-brand-neutral-400">
                    {isAnonytoActive
                      ? t.hero.dashboard.riskReduced
                      : "Risque élevé"}
                  </p>
                </div>
                <div
                  className={`bg-brand-neutral-50 dark:bg-brand-neutral-900/50 rounded-xl sm:rounded-2xl p-3 sm:p-4 border transition-all duration-300 ${
                    isAnonytoActive
                      ? "border-brand-neutral-200 dark:border-brand-neutral-700 hover:border-brand-primary-500 dark:hover:border-brand-primary-500"
                      : "border-red-200 dark:border-red-900/50"
                  }`}
                >
                  <div className="flex items-center gap-1.5 sm:gap-2 mb-1.5 sm:mb-2">
                    <DollarSign
                      className={`w-4 h-4 ${
                        isAnonytoActive ? "text-blue-500" : "text-red-500"
                      }`}
                    />
                    <span
                      className={`text-xs font-medium ${
                        isAnonytoActive
                          ? "text-blue-600 dark:text-blue-400"
                          : "text-red-600 dark:text-red-400"
                      }`}
                    >
                      {isAnonytoActive ? "Économie" : "Perte potentielle"}
                    </span>
                  </div>
                  <AnimatedNumber
                    end={isAnonytoActive ? 5 : 8}
                    suffix="M"
                    prefix="$"
                    className={`text-3xl font-semibold mb-1 ${
                      isAnonytoActive
                        ? "text-brand-neutral-900 dark:text-white"
                        : "text-red-600 dark:text-red-400"
                    }`}
                  />
                  <p className="text-xs text-brand-neutral-500 dark:text-brand-neutral-400">
                    {t.hero.dashboard.perIncident}
                  </p>
                </div>
              </div>
              <div
                className={`bg-brand-neutral-50 dark:bg-brand-neutral-900/50 rounded-2xl p-4 mb-6 border transition-all duration-300 ${
                  isAnonytoActive
                    ? "border-brand-neutral-200 dark:border-brand-neutral-700 hover:border-brand-primary-500 dark:hover:border-brand-primary-500"
                    : "border-red-200 dark:border-red-900/50"
                }`}
              >
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <h4 className="text-sm font-medium text-brand-neutral-900 dark:text-white mb-1">
                      {isAnonytoActive
                        ? t.hero.dashboard.realtimeProtection
                        : "Protection désactivée"}
                    </h4>
                    <p className="text-xs text-brand-neutral-500 dark:text-brand-neutral-400">
                      {isAnonytoActive
                        ? t.hero.dashboard.detectionRate
                        : "Aucune détection active"}
                    </p>
                  </div>
                  <span
                    className={`text-sm font-medium flex items-center gap-1 ${
                      isAnonytoActive
                        ? "text-green-600 dark:text-green-400"
                        : "text-red-600 dark:text-red-400"
                    }`}
                  >
                    {isAnonytoActive ? (
                      <CheckCircle className="w-4 h-4" />
                    ) : (
                      <AlertCircle className="w-4 h-4" />
                    )}
                    {isAnonytoActive ? "99%" : "0%"}
                  </span>
                </div>
                <div className="h-24 flex items-end justify-between gap-1 mb-4">
                  <svg
                    className="w-full h-full"
                    viewBox="0 0 300 80"
                    preserveAspectRatio="none"
                  >
                    <defs>
                      <linearGradient
                        id="lineGradient"
                        x1="0%"
                        y1="0%"
                        x2="100%"
                        y2="0%"
                      >
                        <stop
                          offset="0%"
                          className="text-blue-500"
                          stopColor="currentColor"
                          stopOpacity="0.8"
                        />
                        <stop
                          offset="100%"
                          className="text-green-500"
                          stopColor="currentColor"
                          stopOpacity="0.8"
                        />
                      </linearGradient>
                    </defs>
                    <path
                      d="M 0,60 L 30,55 L 60,50 L 90,48 L 120,45 L 150,42 L 180,40 L 210,38 L 240,35 L 270,30 L 300,25"
                      fill="none"
                      stroke="url(#lineGradient)"
                      strokeWidth="3"
                      className="animate-draw-line"
                    />
                    {[0, 30, 60, 90, 120, 150, 180, 210, 240, 270, 300].map(
                      (x, i) => {
                        const y = 60 - i * 3.5;
                        return (
                          <circle
                            key={i}
                            cx={x}
                            cy={y}
                            r="3"
                            className="fill-brand-primary-600 dark:fill-brand-primary-400 opacity-0 animate-fade-in"
                            style={{ animationDelay: `${i * 100}ms` }}
                          />
                        );
                      }
                    )}
                  </svg>
                </div>
                <div className="grid grid-cols-3 gap-4">
                  <div className="text-center group cursor-default">
                    <div
                      className={`text-2xl font-medium mb-1 transition-colors ${
                        isAnonytoActive
                          ? "text-brand-neutral-900 dark:text-white group-hover:text-brand-primary-600 dark:group-hover:text-brand-primary-400"
                          : "text-red-600 dark:text-red-400"
                      }`}
                    >
                      {isAnonytoActive ? "99.2%" : "0%"}
                    </div>
                    <p className="text-xs text-brand-neutral-500 dark:text-brand-neutral-400">
                      {t.hero.dashboard.accuracy}
                    </p>
                  </div>
                  <div className="text-center group cursor-default">
                    <div
                      className={`text-2xl font-medium mb-1 group-hover:scale-110 transition-transform ${
                        isAnonytoActive
                          ? "text-green-600 dark:text-green-400"
                          : "text-red-600 dark:text-red-400"
                      }`}
                    >
                      <AnimatedNumber
                        end={isAnonytoActive ? 0 : 999}
                        suffix="ms"
                        className={`text-2xl font-medium ${
                          isAnonytoActive
                            ? "text-green-600 dark:text-green-400"
                            : "text-red-600 dark:text-red-400"
                        }`}
                      />
                    </div>
                    <p className="text-xs text-brand-neutral-500 dark:text-brand-neutral-400">
                      {t.hero.dashboard.latency}
                    </p>
                  </div>
                  <div className="text-center group cursor-default">
                    <div
                      className={`text-2xl font-medium mb-1 group-hover:scale-110 transition-transform ${
                        isAnonytoActive
                          ? "text-blue-600 dark:text-blue-400"
                          : "text-red-600 dark:text-red-400"
                      }`}
                    >
                      {isAnonytoActive ? "24/7" : "OFF"}
                    </div>
                    <p className="text-xs text-brand-neutral-500 dark:text-brand-neutral-400">
                      {t.hero.dashboard.active}
                    </p>
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-3 gap-3">
                <button className="bg-brand-neutral-50 dark:bg-brand-neutral-900/50 rounded-xl p-4 border border-brand-neutral-200 dark:border-brand-neutral-700 hover:border-brand-primary-500 dark:hover:border-brand-primary-500 transition-all group hover:shadow-lg hover:-translate-y-1 duration-300">
                  <Shield className="w-5 h-5 text-brand-neutral-600 dark:text-brand-neutral-400 mx-auto mb-2 group-hover:text-brand-primary-600 dark:group-hover:text-brand-primary-400 transition-colors group-hover:scale-110" />
                  <p className="text-xs font-medium text-brand-neutral-600 dark:text-brand-neutral-400 group-hover:text-brand-primary-600 dark:group-hover:text-brand-primary-400 transition-colors">
                    {t.hero.dashboard.aiGuard}
                  </p>
                </button>
                <button className="bg-brand-neutral-50 dark:bg-brand-neutral-900/50 rounded-xl p-4 border border-brand-neutral-200 dark:border-brand-neutral-700 hover:border-brand-primary-500 dark:hover:border-brand-primary-500 transition-all group hover:shadow-lg hover:-translate-y-1 duration-300">
                  <Eye className="w-5 h-5 text-brand-neutral-600 dark:text-brand-neutral-400 mx-auto mb-2 group-hover:text-brand-primary-600 dark:group-hover:text-brand-primary-400 transition-colors group-hover:scale-110" />
                  <p className="text-xs font-medium text-brand-neutral-600 dark:text-brand-neutral-400 group-hover:text-brand-primary-600 dark:group-hover:text-brand-primary-400 transition-colors">
                    {t.hero.dashboard.audit}
                  </p>
                </button>
                <button className="bg-brand-neutral-50 dark:bg-brand-neutral-900/50 rounded-xl p-4 border border-brand-neutral-200 dark:border-brand-neutral-700 hover:border-brand-primary-500 dark:hover:border-brand-primary-500 transition-all group hover:shadow-lg hover:-translate-y-1 duration-300">
                  <Lock className="w-5 h-5 text-brand-neutral-600 dark:text-brand-neutral-400 mx-auto mb-2 group-hover:text-brand-primary-600 dark:group-hover:text-brand-primary-400 transition-colors group-hover:scale-110" />
                  <p className="text-xs font-medium text-brand-neutral-600 dark:text-brand-neutral-400 group-hover:text-brand-primary-600 dark:group-hover:text-brand-primary-400 transition-colors">
                    {t.hero.dashboard.crypto}
                  </p>
                </button>
              </div>
            </div>
            <div className="absolute -bottom-4 -left-4 w-12 h-12 bg-green-500 rounded-2xl flex items-center justify-center shadow-lg hover:scale-110 transition-transform cursor-pointer">
              <CheckCircle className="w-6 h-6 text-white" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
