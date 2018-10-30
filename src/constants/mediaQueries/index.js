import { throwOnUndefinedProperty } from '../../utils';
import BREAKPOINTS from '../breakpoints';

const mediaQueries = Object.entries(BREAKPOINTS).reduce(
  (accumulator, [label, px]) => ({
    ...accumulator,
    [`${label}Up`]: `@media (min-width: ${px}px)`,
  }),
  {}
);

export default throwOnUndefinedProperty(mediaQueries);
