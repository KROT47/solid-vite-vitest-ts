// @see: http://docs.translatehouse.org/projects/localization-guide/en/latest/l10n/pluralforms.html
export function plural({ key, value, configStr }): string {
  const num = Number(value);
  const plurals = configStr.split(',');

  if (plurals.length < this.nplurals) {
    throw Error(`Not enought plurals for '${key}'`);
  }

  const index = this.getPluralIndex?.(num);
  return plurals[index];
}
