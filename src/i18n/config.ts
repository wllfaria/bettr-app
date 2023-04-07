import AsyncStorage from '@react-native-async-storage/async-storage';
import * as Localization from 'expo-localization';
import { initReactI18next } from 'react-i18next';

import i18n, { Module, NewableModule } from 'i18next';

import { en_US, pt_BR } from './translations';

const resources = {
  'pt-BR': pt_BR,
  'en-US': en_US,
};

const languageDetector = {
  type: 'languageDetector',
  init: () => null,
  async: true,
  detect: async (callback: (language: string) => void) => {
    const storedLanguage = await AsyncStorage.getItem('@AppIntl:language');
    if (storedLanguage) return callback(storedLanguage);
    const phoneLanguage = Localization.locale.replace('_', '-');
    return callback(phoneLanguage);
  },
  cacheUserLanguage: (language: string) => {
    // Essa função sera chamada assim que o callback
    // da função 'detect' for executado. Aqui podemos
    // salvar o idioma do usuário no AsyncStorage para
    // persistirmos sua escolha nas próximas execuções do app
    AsyncStorage.setItem('@AppIntl:language', language);
  },
};

i18n
  .use(languageDetector as unknown as NewableModule<Module>)
  .use(initReactI18next)
  .init({
    compatibilityJSON: 'v3',
    resources,
    fallbackLng: 'pt-BR',
    debug: true,
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
