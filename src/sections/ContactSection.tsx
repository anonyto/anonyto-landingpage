import { useState } from "react";
import {
  Send,
  Building2,
  MessageSquare,
  CheckCircle,
  XCircle,
} from "lucide-react";
import { useLanguage } from "../context/LanguageContext";
import { translations } from "../i18n/translations";
import emailjs from "@emailjs/browser";

type FormType = "enterprise" | "general";

interface FormData {
  email: string;
  name?: string;
  title: string;
  description: string;
  company?: string;
}

interface FormErrors {
  email?: string;
  name?: string;
  title?: string;
  description?: string;
  company?: string;
}

export function ContactSection() {
  const { language } = useLanguage();
  const t = translations[language as keyof typeof translations];
  const [formType, setFormType] = useState<FormType>("general");
  const [formData, setFormData] = useState<FormData>({
    email: "",
    name: "",
    title: "",
    description: "",
    company: "",
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [notification, setNotification] = useState<{
    show: boolean;
    type: "success" | "error";
    message: string;
  }>({ show: false, type: "success", message: "" });

  const validateEmail = (email: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.email.trim()) {
      newErrors.email =
        language === "fr" ? "L'email est requis" : "Email is required";
    } else if (!validateEmail(formData.email)) {
      newErrors.email = language === "fr" ? "Email invalide" : "Invalid email";
    }

    if (!formData.title.trim()) {
      newErrors.title =
        language === "fr" ? "Le titre est requis" : "Title is required";
    } else if (formData.title.trim().length < 3) {
      newErrors.title =
        language === "fr"
          ? "Le titre doit contenir au moins 3 caractères"
          : "Title must be at least 3 characters";
    }

    if (!formData.description.trim()) {
      newErrors.description =
        language === "fr"
          ? "La description est requise"
          : "Description is required";
    } else if (formData.description.trim().length < 10) {
      newErrors.description =
        language === "fr"
          ? "La description doit contenir au moins 10 caractères"
          : "Description must be at least 10 characters";
    }

    if (formType === "general" && !formData.name?.trim()) {
      newErrors.name =
        language === "fr" ? "Le nom est requis" : "Name is required";
    }

    if (formType === "enterprise" && !formData.company?.trim()) {
      newErrors.company =
        language === "fr"
          ? "Le nom de l'entreprise est requis"
          : "Company name is required";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);

    try {
      const serviceId =
        formType === "enterprise"
          ? import.meta.env.VITE_EMAILJS_SERVICE_ID_ENTERPRISE
          : import.meta.env.VITE_EMAILJS_SERVICE_ID_GENERAL;

      const templateId =
        formType === "enterprise"
          ? import.meta.env.VITE_EMAILJS_TEMPLATE_ID_ENTERPRISE
          : import.meta.env.VITE_EMAILJS_TEMPLATE_ID_GENERAL;

      const templateParams = {
        email: formData.email,
        from_email: formData.email,
        title: formData.title,
        message: formData.description,
        description: formData.description,
        form_type: formType,
        ...(formType === "general" && { name: formData.name }),
        ...(formType === "enterprise" && { 
          name: formData.company,
          company: formData.company 
        }),
      };

      await emailjs.send(
        serviceId,
        templateId,
        templateParams,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );

      setNotification({
        show: true,
        type: "success",
        message:
          language === "fr"
            ? "Message envoyé avec succès !"
            : "Message sent successfully!",
      });

      // Reset form
      setFormData({
        email: "",
        name: "",
        title: "",
        description: "",
        company: "",
      });
      setErrors({});
    } catch (error) {
      console.error("EmailJS error:", error);
      setNotification({
        show: true,
        type: "error",
        message:
          language === "fr"
            ? "Échec de l'envoi. Veuillez réessayer."
            : "Failed to send. Please try again.",
      });
    } finally {
      setIsSubmitting(false);
      setTimeout(() => {
        setNotification({ show: false, type: "success", message: "" });
      }, 5000);
    }
  };

  const handleInputChange = (field: keyof FormData, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    // Clear error when user starts typing
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: undefined }));
    }
  };

  return (
    <section id="contact" className="section-padding ">
      <div className="container-max px-4">
        <div className="text-center mb-12 sm:mb-16 scroll-animate">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-light mb-4 sm:mb-6 px-4 tracking-wide">
            {t.contact.title}
          </h2>
          <p className="text-base sm:text-lg text-brand-neutral-600 dark:text-brand-neutral-400 max-w-2xl mx-auto px-4 font-light">
            {t.contact.subtitle}
          </p>
        </div>

        <div className="max-w-2xl mx-auto">
          {/* Form Type Toggle */}
          <div className="flex justify-center mb-12 scroll-animate">
            <div className="relative inline-flex items-center gap-2 p-1 bg-brand-neutral-100 dark:bg-brand-neutral-800/50 rounded-full">
              <button
                onClick={() => setFormType("general")}
                className={`relative z-10 flex items-center gap-2 px-6 sm:px-8 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${
                  formType === "general"
                    ? "text-white"
                    : "text-brand-neutral-600 dark:text-brand-neutral-400 hover:text-brand-neutral-900 dark:hover:text-brand-neutral-200"
                }`}
              >
                <MessageSquare className="w-4 h-4" />
                <span className="hidden sm:inline">{t.contact.generalTab}</span>
                <span className="sm:hidden">{t.contact.generalTabShort}</span>
              </button>
              <button
                onClick={() => setFormType("enterprise")}
                data-form-type="enterprise"
                className={`relative z-10 flex items-center gap-2 px-6 sm:px-8 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${
                  formType === "enterprise"
                    ? "text-white"
                    : "text-brand-neutral-600 dark:text-brand-neutral-400 hover:text-brand-neutral-900 dark:hover:text-brand-neutral-200"
                }`}
              >
                <Building2 className="w-4 h-4" />
                <span className="hidden sm:inline">
                  {t.contact.enterpriseTab}
                </span>
                <span className="sm:hidden">
                  {t.contact.enterpriseTabShort}
                </span>
              </button>
              {/* Sliding background */}
              <div
                className={`absolute top-1 bottom-1 bg-brand-primary-600 rounded-full transition-all duration-300 ease-out shadow-sm ${
                  formType === "general"
                    ? "left-1 w-[calc(50%-0.25rem)]"
                    : "right-1 w-[calc(50%-0.25rem)]"
                }`}
              />
            </div>
          </div>

          {/* Form */}
          <div className="scroll-animate">
            <form onSubmit={handleSubmit} className="space-y-8">
              {/* Email Field */}
              <div className="transition-all duration-300">
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-brand-neutral-700 dark:text-brand-neutral-300 mb-2"
                >
                  {t.contact.emailLabel}
                </label>
                <input
                  type="email"
                  id="email"
                  value={formData.email}
                  onChange={(e) => handleInputChange("email", e.target.value)}
                  className={`w-full px-4 py-3 rounded-lg border bg-white dark:bg-brand-neutral-800 text-brand-neutral-900 dark:text-white transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-brand-primary-500 placeholder:text-brand-neutral-400 dark:placeholder:text-brand-neutral-500 ${
                    errors.email
                      ? "border-red-500 focus:border-red-500"
                      : "border-brand-neutral-300 dark:border-brand-neutral-700 focus:border-brand-primary-500"
                  }`}
                  placeholder={t.contact.emailPlaceholder}
                />
                {errors.email && (
                  <p className="mt-2 text-sm text-red-500 flex items-center gap-1 animate-shake">
                    <XCircle className="w-4 h-4" />
                    {errors.email}
                  </p>
                )}
              </div>

              {/* Name Field (General only) */}
              {formType === "general" && (
                <div className="transition-all duration-300 animate-fade-in">
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-brand-neutral-700 dark:text-brand-neutral-300 mb-2"
                  >
                    {t.contact.nameLabel}
                  </label>
                  <input
                    type="text"
                    id="name"
                    value={formData.name}
                    onChange={(e) => handleInputChange("name", e.target.value)}
                    className={`w-full px-4 py-3 rounded-lg border bg-white dark:bg-brand-neutral-800 text-brand-neutral-900 dark:text-white transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-brand-primary-500 placeholder:text-brand-neutral-400 dark:placeholder:text-brand-neutral-500 ${
                      errors.name
                        ? "border-red-500 focus:border-red-500"
                        : "border-brand-neutral-300 dark:border-brand-neutral-700 focus:border-brand-primary-500"
                    }`}
                    placeholder={t.contact.namePlaceholder}
                  />
                  {errors.name && (
                    <p className="mt-2 text-sm text-red-500 flex items-center gap-1 animate-shake">
                      <XCircle className="w-4 h-4" />
                      {errors.name}
                    </p>
                  )}
                </div>
              )}

              {/* Company Field (Enterprise only) */}
              {formType === "enterprise" && (
                <div className="transition-all duration-300 animate-fade-in">
                  <label
                    htmlFor="company"
                    className="block text-sm font-medium text-brand-neutral-700 dark:text-brand-neutral-300 mb-2"
                  >
                    {t.contact.companyLabel}
                  </label>
                  <input
                    type="text"
                    id="company"
                    value={formData.company}
                    onChange={(e) =>
                      handleInputChange("company", e.target.value)
                    }
                    className={`w-full px-4 py-3 rounded-lg border bg-white dark:bg-brand-neutral-800 text-brand-neutral-900 dark:text-white transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-brand-primary-500 placeholder:text-brand-neutral-400 dark:placeholder:text-brand-neutral-500 ${
                      errors.company
                        ? "border-red-500 focus:border-red-500"
                        : "border-brand-neutral-300 dark:border-brand-neutral-700 focus:border-brand-primary-500"
                    }`}
                    placeholder={t.contact.companyPlaceholder}
                  />
                  {errors.company && (
                    <p className="mt-2 text-sm text-red-500 flex items-center gap-1 animate-shake">
                      <XCircle className="w-4 h-4" />
                      {errors.company}
                    </p>
                  )}
                </div>
              )}

              {/* Title Field */}
              <div className="transition-all duration-300">
                <label
                  htmlFor="title"
                  className="block text-sm font-medium text-brand-neutral-700 dark:text-brand-neutral-300 mb-2"
                >
                  {t.contact.titleLabel}
                </label>
                <input
                  type="text"
                  id="title"
                  value={formData.title}
                  onChange={(e) => handleInputChange("title", e.target.value)}
                  className={`w-full px-4 py-3 rounded-lg border bg-white dark:bg-brand-neutral-800 text-brand-neutral-900 dark:text-white transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-brand-primary-500 placeholder:text-brand-neutral-400 dark:placeholder:text-brand-neutral-500 ${
                    errors.title
                      ? "border-red-500 focus:border-red-500"
                      : "border-brand-neutral-300 dark:border-brand-neutral-700 focus:border-brand-primary-500"
                  }`}
                  placeholder={t.contact.titlePlaceholder}
                />
                {errors.title && (
                  <p className="mt-2 text-sm text-red-500 flex items-center gap-1 animate-shake">
                    <XCircle className="w-4 h-4" />
                    {errors.title}
                  </p>
                )}
              </div>

              {/* Description Field */}
              <div className="transition-all duration-300">
                <label
                  htmlFor="description"
                  className="block text-sm font-medium text-brand-neutral-700 dark:text-brand-neutral-300 mb-2"
                >
                  {t.contact.descriptionLabel}
                </label>
                <textarea
                  id="description"
                  value={formData.description}
                  onChange={(e) =>
                    handleInputChange("description", e.target.value)
                  }
                  rows={6}
                  className={`w-full px-4 py-3 rounded-lg border bg-white dark:bg-brand-neutral-800 text-brand-neutral-900 dark:text-white transition-all duration-300 focus:outline-none resize-none placeholder:text-brand-neutral-400 dark:placeholder:text-brand-neutral-500 ${
                    errors.description
                      ? "border-red-500 focus:border-red-500"
                      : "border-brand-neutral-300 dark:border-brand-neutral-700 focus:border-brand-primary-500"
                  }`}
                  placeholder={t.contact.descriptionPlaceholder}
                />
                {errors.description && (
                  <p className="mt-2 text-sm text-red-500 flex items-center gap-1 animate-shake">
                    <XCircle className="w-4 h-4" />
                    {errors.description}
                  </p>
                )}
              </div>

              {/* Submit Button */}
              <div className="pt-4 flex justify-center">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="px-12 py-4 rounded-xl bg-brand-primary-600 text-white font-medium text-base inline-flex items-center justify-center gap-3 hover:bg-brand-primary-700 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed shadow-lg hover:shadow-xl"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                      {t.contact.sending}
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5" />
                      {t.contact.submit}
                    </>
                  )}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>

      {/* Notification Toast */}
      {notification.show && (
        <div
          className={`fixed bottom-8 right-8 z-50 animate-slide-up ${
            notification.type === "success" ? "bg-green-500" : "bg-red-500"
          } text-white px-6 py-4 rounded-xl shadow-2xl flex items-center gap-3`}
        >
          {notification.type === "success" ? (
            <CheckCircle className="w-6 h-6" />
          ) : (
            <XCircle className="w-6 h-6" />
          )}
          <span className="font-semibold">{notification.message}</span>
        </div>
      )}
    </section>
  );
}
