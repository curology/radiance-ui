import tinycolor from 'tinycolor2';

function percentToInt(str: string) {
  // '20%' -> 20
  return parseInt(str.replace(/%/g, ''), 10);
}

type ColorManipulationFunctionType = (
  color: string,
  modifier: string
) => string;

export const lighten: ColorManipulationFunctionType = (color, modifier) =>
  tinycolor(color)
    .lighten(percentToInt(modifier))
    .toString();

export const darken: ColorManipulationFunctionType = (color, modifier) =>
  tinycolor(color)
    .darken(percentToInt(modifier))
    .toString();

export const transparentize = (color: string, modifier: number) =>
  tinycolor(color)
    .setAlpha(modifier)
    .toString();
