import i18n from 'i18next';
import {initReactI18next} from 'react-i18next';
import {objectMap} from '../../utils/functions';
import {languages} from './languages';

i18n.use(initReactI18next).init({
  compatibilityJSON: 'v3',
  lng: 'en',
  fallbackLng: 'en',
  resources: objectMap(languages, item => ({translation: item.translation})),
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
