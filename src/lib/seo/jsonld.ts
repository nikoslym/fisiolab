import type { FaqItem } from "@/content/types";
import type { Locale } from "@/lib/i18n/config";
import { absoluteUrl, getSiteUrl } from "@/lib/seo/site";

const clinicDescriptions: Record<Locale, string> = {
  el: "Εξειδικευμένο κέντρο φυσικοθεραπείας και κλινικής αποκατάστασης στο Ρέθυμνο.",
  en: "Specialized physiotherapy and clinical rehabilitation center in Rethymno, Crete.",
};

/** Stable clinic entity for every page. Address stays the real Greek street address. */
export function clinicJsonLd(locale: Locale) {
  const url = getSiteUrl();
  return {
    "@context": "https://schema.org",
    "@type": "MedicalClinic",
    "@id": `${url}/#clinic`,
    name: "FisioLab",
    url,
    image: absoluteUrl("/images/home/physio-session-hero.webp"),
    telephone: "+302831025854",
    email: "spanoudakis@fisiolab.eu",
    description: clinicDescriptions[locale],
    medicalSpecialty: "Physiotherapy",
    availableLanguage: ["Greek", "English"],
    address: {
      "@type": "PostalAddress",
      streetAddress: "Χ. Δασκαλάκη 5",
      addressLocality: "Ρέθυμνο",
      postalCode: "74132",
      addressCountry: "GR",
    },
    areaServed: {
      "@type": "City",
      name: "Rethymno",
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday"],
        opens: "09:00",
        closes: "21:00",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: "Friday",
        opens: "09:00",
        closes: "13:00",
      },
    ],
    founder: {
      "@type": "Person",
      name: "Spanoudakis N. Nikos",
      jobTitle: "Physiotherapist",
    },
  };
}

export function faqJsonLd(items: FaqItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };
}
