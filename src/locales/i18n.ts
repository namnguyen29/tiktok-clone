import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import * as en from "./en.json";
import * as vi from "./vi.json";

i18n.use(initReactI18next).init({
  resources: {
    en: { translation: en },
    vi: { translation: vi },
  },
  lng: "vi",
  keySeparator: false,
  nsSeparator: false,
  fallbackLng: "en",
});
