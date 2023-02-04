import { useState } from "react";

import ITranslation from "@/models/translation.model";

import translation from "@/assets/translations";

const getNestedTranslations = (language: string, keys: string[]) =>
  keys.reduce(
    (obj, key: string) => (obj as ITranslation)?.[key],
    (translation as ITranslation)[language]
  );

const useTranslation = () => {
  const [language, setLanguage] = useState("en");
  const [fallbackLanguage, setFallbackLanguage] = useState("en");

  const translate = (key: string): string => {
    const keys = key.split(".");
    return (getNestedTranslations(language, keys) ??
      getNestedTranslations(fallbackLanguage, keys) ??
      key) as string;
  };

  return {
    language,
    setLanguage,
    fallbackLanguage,
    setFallbackLanguage,
    t: translate,
  };
};

export default useTranslation;
