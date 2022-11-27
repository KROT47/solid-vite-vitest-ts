import { ThemeVarsAndBreakpoints } from '@hope-ui/core';

export function getUiColor(color: string, shade = '500') {
  return (theme: ThemeVarsAndBreakpoints): string =>
    theme.vars.colors[color][shade];
}
