import i18n, { Resource } from "i18next";
import { initReactI18next } from "react-i18next";
import Backend from "i18next-http-backend";
import LanguageDetector from "i18next-browser-languagedetector";
import * as en from "./en/index.en";
import * as th from "./th/index.th";

export const defaultNS = "en";
export const resources = {
  en: { ...en },
  th: { ...th },
} as const;

i18n
  .use(Backend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    lng: "en",
    fallbackLng: {
      th: ["th"],
      default: ["en"],
    },
    ns: ["en", "th"],
    defaultNS,
    resources,
    debug: true,
  });

export default i18n;
