import tinycolor from 'tinycolor2';

function percentToInt(str) {
  // '20%' -> 20
  return parseInt(str.replace(/%/g, ''), 10);
}

export function lighten(color, modifier) {
  return tinycolor(color)
    .lighten(percentToInt(modifier))
    .toString();
}

export function darken(color, modifier) {
  return tinycolor(color)
    .darken(percentToInt(modifier))
    .toString();
}

export function transparentize(color, modifier) {
  return tinycolor(color)
    .setAlpha(modifier)
    .toString();
}
