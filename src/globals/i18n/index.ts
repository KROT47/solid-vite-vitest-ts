import {
  createI18nContext,
  useI18n as useI18nBase,
} from '@solid-primitives/i18n';

import en from './en.json';
import ru from './ru.json';

// keys array for values which can be written in english in any lang
const badValuesExceptions = ['Email'];

const dict = {
  en,
  ru,
};

export function useI18n(): {
  t: (
    key: keyof typeof en,
    params?: Record<string, string>,
    defaultValue?: string,
  ) => string;
  setLocale: (newLocale: keyof typeof dict) => string;
} {
  const [t, { locale }] = useI18nBase();

  return {
    t: (key, params, defaultValue) => t(key, params, defaultValue ?? en[key]),
    setLocale: locale,
  };
}

export const i18nContext = createI18nContext(dict, 'ru');

// run dict checks
if (process.env.NODE_ENV === 'development') {
  const enArr = Object.keys(en);
  Object.keys(dict).forEach((lang) => {
    const langArr = Object.keys(dict[lang]);

    const langDiff = enArr.filter((key) => !langArr.includes(key));
    const enDiff = langArr.filter((key) => !enArr.includes(key));

    if (langDiff.length) {
      console.error(
        `i18n: '${lang}' lang missing keys: [${langDiff.join(', ')}]`,
      );
    } else if (enDiff.length) {
      console.error(`i18n: 'en' lang missing keys: [${enDiff.join(', ')}]`);
    }

    const missingValues = langArr.filter((key) => !dict[lang][key]);
    if (missingValues.length) {
      console.error(
        `i18n: '${lang}' lang missing values for keys: [${missingValues.join(
          ', ',
        )}]`,
      );
    }

    const badValues = langArr.filter(
      (key) =>
        lang !== 'en' &&
        !badValuesExceptions.includes(key) &&
        dict[lang][key] === en[key],
    );
    if (badValues.length) {
      console.error(
        `i18n: '${lang}' lang has bad values for keys: [${badValues.join(
          ', ',
        )}]`,
      );
    }
  });
}
