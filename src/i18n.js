import i18next from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import en from './locales/en.json';
import bn from './locales/bn.json';

i18next
  .use(LanguageDetector)
  .init({
    resources: {
      en: { translation: en },
      bn: { translation: bn },
    },
    fallbackLng: 'en', // Default language if detection fails
    debug: true, // Set to false in production
  });

export default i18next;