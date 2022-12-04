import {
  createI18nContext,
  useI18n as useI18nBase,
} from '~/shared/modules/i18n';
import * as helpers from './helpers';
import { defaultLangKey, defaultLang, dictConfig } from './config';

// keys array for values which can be written in english in any lang
const badValuesExceptions = ['email'];

export function useI18n(): {
  t: (
    key: keyof typeof defaultLang,
    params?: Record<string, string>,
    defaultValue?: string,
  ) => string;
  setLocale: (newLocale: keyof typeof dictConfig) => string;
} {
  const [t, { locale }] = useI18nBase();

  return {
    t: (key, params, defaultValue) =>
      t(key, params, defaultValue ?? defaultLang[key] ?? key),
    setLocale: locale,
  };
}

export const i18nContext = createI18nContext(dictConfig, 'ru', helpers);

// run dictConfig checks
if (process.env.NODE_ENV === 'development') {
  const enArr = Object.keys(defaultLang);
  Object.keys(dictConfig).forEach((lang) => {
    const langArr = Object.keys(dictConfig[lang].dict);

    const langDiff = enArr.filter((key) => !langArr.includes(key));
    const enDiff = langArr.filter((key) => !enArr.includes(key));

    if (langDiff.length) {
      console.error(
        `i18n: '${lang}' lang missing keys: [${langDiff.join(', ')}]`,
      );
    } else if (enDiff.length) {
      console.error(
        `i18n: '${defaultLangKey}' lang missing keys: [${enDiff.join(', ')}]`,
      );
    }

    const missingValues = langArr.filter((key) => !dictConfig[lang].dict[key]);
    if (missingValues.length) {
      console.error(
        `i18n: '${lang}' lang missing values for keys: [${missingValues.join(
          ', ',
        )}]`,
      );
    }

    const badValues = langArr.filter(
      (key) =>
        lang !== defaultLangKey &&
        !badValuesExceptions.includes(key) &&
        dictConfig[lang].dict[key] === defaultLang[key],
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
