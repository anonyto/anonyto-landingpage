import { Shield, Lock, Database, Clock, CheckCircle } from "lucide-react";

export function SecuritySection() {
  const features = [
    {
      icon: Shield,
      title: "Protection automatique",
      description:
        "Vos données sont protégées automatiquement, sans effort de votre part.",
    },
    {
      icon: Lock,
      title: "Confidentialité garantie",
      description: "Nous ne partageons jamais vos informations avec des tiers.",
    },
    {
      icon: Database,
      title: "Sauvegarde continue",
      description:
        "Ne perdez jamais vos données. Tout est sauvegardé en permanence.",
    },
    {
      icon: Clock,
      title: "Toujours accessible",
      description: "Accédez à vos données où que vous soyez, à tout moment.",
    },
  ];

  return (
    <section id="security" className="section-padding">
      <div className="container-max px-4">
        <div className="max-w-2xl mx-auto text-center mb-12 sm:mb-16 scroll-animate">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-medium text-brand-neutral-900 dark:text-white mb-3 sm:mb-4">
            Vos données en toute sécurité
          </h2>
          <p className="text-base sm:text-lg text-brand-neutral-600 dark:text-brand-neutral-400 px-4">
            Simple, sécurisé, fiable. Nous protégeons ce qui compte le plus.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8 mb-12 sm:mb-16 max-w-4xl mx-auto">
          <div className="text-center scroll-animate stagger-1">
            <div className="w-14 h-14 sm:w-16 sm:h-16 mx-auto mb-3 sm:mb-4 rounded-xl sm:rounded-2xl bg-green-100 dark:bg-green-900/20 flex items-center justify-center">
              <Shield className="w-7 h-7 sm:w-8 sm:h-8 text-green-600 dark:text-green-400" />
            </div>
            <div className="text-3xl sm:text-4xl font-medium text-brand-neutral-900 dark:text-white mb-2">
              100%
            </div>
            <div className="text-sm text-brand-neutral-600 dark:text-brand-neutral-400">
              Sécurisé
            </div>
          </div>

          <div className="text-center scroll-animate stagger-2">
            <div className="w-14 h-14 sm:w-16 sm:h-16 mx-auto mb-3 sm:mb-4 rounded-xl sm:rounded-2xl bg-blue-100 dark:bg-blue-900/20 flex items-center justify-center">
              <Lock className="w-7 h-7 sm:w-8 sm:h-8 text-blue-600 dark:text-blue-400" />
            </div>
            <div className="text-3xl sm:text-4xl font-medium text-brand-neutral-900 dark:text-white mb-2">
              Privé
            </div>
            <div className="text-sm text-brand-neutral-600 dark:text-brand-neutral-400">
              Vos données vous appartiennent
            </div>
          </div>

          <div className="text-center scroll-animate stagger-3">
            <div className="w-14 h-14 sm:w-16 sm:h-16 mx-auto mb-3 sm:mb-4 rounded-xl sm:rounded-2xl bg-purple-100 dark:bg-purple-900/20 flex items-center justify-center">
              <CheckCircle className="w-7 h-7 sm:w-8 sm:h-8 text-purple-600 dark:text-purple-400" />
            </div>
            <div className="text-3xl sm:text-4xl font-medium text-brand-neutral-900 dark:text-white mb-2">
              24/7
            </div>
            <div className="text-sm text-brand-neutral-600 dark:text-brand-neutral-400">
              Toujours disponible
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 max-w-4xl mx-auto">
          {features.map((feature, index) => (
            <div key={index} className={`scroll-animate stagger-${index + 1}`}>
              <div className="group p-5 sm:p-6 rounded-xl sm:rounded-2xl bg-white/50 dark:bg-brand-neutral-800/50 backdrop-blur-sm border border-brand-neutral-200 dark:border-brand-neutral-700 hover:bg-white dark:hover:bg-brand-neutral-800 transition-all duration-300">
                <div className="flex items-start gap-3 sm:gap-4">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg sm:rounded-xl bg-brand-neutral-100 dark:bg-brand-neutral-700 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                    <feature.icon className="w-5 h-5 sm:w-6 sm:h-6 text-brand-neutral-700 dark:text-brand-neutral-300" />
                  </div>
                  <div>
                    <h3 className="font-medium text-brand-neutral-900 dark:text-white mb-1 sm:mb-2 text-sm sm:text-base">
                      {feature.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-brand-neutral-600 dark:text-brand-neutral-400 leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-12 sm:mt-16 text-center scroll-animate">
          <div className="inline-flex items-center gap-2 sm:gap-3 px-4 sm:px-6 py-2 sm:py-3 rounded-full bg-white/80 dark:bg-brand-neutral-800/80 backdrop-blur-sm border border-brand-neutral-200 dark:border-brand-neutral-700">
            <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-green-500 flex-shrink-0" />
            <span className="text-xs sm:text-sm font-medium text-brand-neutral-700 dark:text-brand-neutral-300">
              Certifié et conforme aux normes européennes
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
