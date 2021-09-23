import i18n from "i18next";
import { initReactI18next } from "react-i18next";

// (tip move them in a JSON file and import them,
// or even better, manage them separated from your code: https://react.i18next.com/guides/multiple-translation-files)
const resources = {
  pt: {
    translation: {
      "greeting": "Oi!",
      "date": "pt-br",
    }
  },
  en: {
    translation: {
      "greeting": "Hi!",
      "date": "en",
    }
  }
};

i18n.use(initReactI18next)
  .init({
    resources,
    lng: "pt",
    interpolation: {
      escapeValue: false
    }
  });

  export default i18n;