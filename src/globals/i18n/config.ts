import en from './langs/en.json';
import ru from './langs/ru.json';

export const defaultLangKey = 'en';
export const defaultLang = en;

// @see: http://docs.translatehouse.org/projects/localization-guide/en/latest/l10n/pluralforms.html
export const dictConfig = {
  en: {
    dict: en,
    helperConfigs: {
      plural: {
        nplurals: 2,
        getPluralIndex: (n): number => (n !== 1 ? 1 : 0),
      },
    },
  },
  ru: {
    dict: ru,
    helperConfigs: {
      plural: {
        nplurals: 3,
        getPluralIndex: (n): number =>
          n % 10 === 1 && n % 100 !== 11
            ? 0
            : n % 10 >= 2 && n % 10 <= 4 && (n % 100 < 10 || n % 100 >= 20)
            ? 1
            : 2,
      },
    },
  },
};
