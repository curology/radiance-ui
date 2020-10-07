import { throwOnUndefinedProperty } from '../../utils';
import BREAKPOINTS from '../breakpoints';

type MediaQueriesType = {
  xsUp: string;
  smUp: string;
  mdUp: string;
  lgUp: string;
  xlUp: string;
  xxlUp: string;
};

const mediaQueries = Object.entries(BREAKPOINTS).reduce(
  (accumulator, [label, px]) => ({
    ...accumulator,
    [`${label}Up`]: `@media (min-width: ${px}px)`,
  }),
  {} as MediaQueriesType,
);

export default throwOnUndefinedProperty(mediaQueries);
