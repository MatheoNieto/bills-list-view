import i18next from 'i18next';

import English from './translations/en.json';
import Spanish from './translations/es.json';

i18next.init({
  interpolation: { escapeValue: false },
  lng: 'es',
  resources: {
    es: {
      common: Spanish,
    },
    en: {
      common: English,
    },
  },
});

export default i18next; 