import { throwOnUndefinedProperty } from '../../utils';

export const BREAKPOINTS = {
  xs: 330,
  sm: 576,
  md: 768,
  lg: 992,
  xl: 1200,
  xxl: 1440,
};

const mediaQueries = Object.entries(BREAKPOINTS).reduce(
  (accumulator, [label, px]) => ({
    ...accumulator,
    [`${label}Up`]: `@media (min-width: ${px}px)`,
  }),
  {}
);

export default throwOnUndefinedProperty(mediaQueries);
