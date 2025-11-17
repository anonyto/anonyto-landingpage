import { useTheme } from "../context/ThemeContext";

export function BackgroundLayer() {
  const { theme } = useTheme();

  return (
    <div className="fixed inset-0 z-0"><div
        className={`absolute inset-0 transition-colors duration-300 ${
          theme === "dark" ? "bg-brand-neutral-900" : "bg-gray-50"
        }`}
      ></div><div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.02)_1px,transparent_1px)] bg-[size:50px_50px] dark:bg-[linear-gradient(rgba(255,255,255,0.015)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.015)_1px,transparent_1px)]"></div><div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/10 dark:bg-blue-500/15 rounded-full blur-3xl animate-pulse-slow"></div>
      <div className="absolute top-1/4 right-1/3 w-80 h-80 bg-pink-500/10 dark:bg-pink-500/15 rounded-full blur-3xl animate-pulse-slow animation-delay-400"></div>
      <div className="absolute top-1/2 left-1/2 w-72 h-72 bg-purple-500/8 dark:bg-purple-500/12 rounded-full blur-3xl animate-pulse-slow animation-delay-200"></div>
      <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-cyan-500/8 dark:bg-cyan-500/12 rounded-full blur-3xl animate-pulse-slow animation-delay-600"></div>
      <div className="absolute bottom-0 left-1/3 w-56 h-56 bg-indigo-500/6 dark:bg-indigo-500/10 rounded-full blur-3xl animate-pulse-slow animation-delay-800"></div>
    </div>
  );
}
