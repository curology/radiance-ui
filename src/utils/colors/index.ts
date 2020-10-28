import tinycolor from 'tinycolor2';

function percentToInt(str: string): number {
  // '20%' -> 20
  return parseInt(str.replace(/%/g, ''), 10);
}

export function lighten(color: string, modifier: string): string {
  return tinycolor(color).lighten(percentToInt(modifier)).toString();
}

export function darken(color: string, modifier: string): string {
  return tinycolor(color).darken(percentToInt(modifier)).toString();
}

export function transparentize(color: string, modifier: number): string {
  return tinycolor(color).setAlpha(modifier).toString();
}
