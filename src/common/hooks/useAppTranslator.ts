import { LanguageType } from "common/services/types";
import { TFunction } from "i18next";
import { useTranslation } from "react-i18next";

export const useAppTranslator = (): {
  t: TFunction;
  language: string;
  changeLanguage: (language: LanguageType) => void;
} => {
  const [t, i18n] = useTranslation();
  const language = i18n.language;
  const changeLanguage = (language: LanguageType) => {
    localStorage.setItem("app-language", language);
    i18n.changeLanguage(language);
  };

  return { t, language, changeLanguage };
};
