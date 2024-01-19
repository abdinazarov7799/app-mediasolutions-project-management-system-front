import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import config from "../../config";
import storage from "../storage";
import Eng from '../../assets/lang/Eng.json';
import Ru from '../../assets/lang/Ru.json';
import Uz from '../../assets/lang/Uz.json';

const resources = {
    en: {
        translation: Eng
    },
    ru: {
        translation: Ru
    },
    uz: {
        translation: Uz
    }
}

const i18config = i18n
  .use(initReactI18next)
  .init({
      resources,
      lng: storage.get("lang") || config.DEFAULT_APP_LANG,
      fallbackLng: storage.get("lang") || config.DEFAULT_APP_LANG,
      interpolation: {
          escapeValue: false
      }
  });

export default i18config;
