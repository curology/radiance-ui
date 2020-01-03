import { throwOnUndefinedProperty } from '../../utils';
import BREAKPOINTS from '../breakpoints';

const mediaQueries = Object.entries(BREAKPOINTS).reduce(
  (accumulator, [label, px]) => ({
    ...accumulator,
    [`${label}Up`]: `@media (min-width: ${px}px)`,
  }),
  {}
);

type MediaQueriesType = {
  [label: string]: string;
};

export default throwOnUndefinedProperty(mediaQueries) as MediaQueriesType;
