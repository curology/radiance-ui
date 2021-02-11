import { throwOnUndefinedProperty } from '../../utils';
import BREAKPOINTS from '../breakpoints';

type MediaQueriesType = Record<`${keyof typeof BREAKPOINTS}Up`, string>;

const mediaQueries = Object.entries(BREAKPOINTS).reduce(
  (accumulator, [label, px]) => ({
    ...accumulator,
    [`${label}Up`]: `@media (min-width: ${px}px)`,
  }),
  {} as MediaQueriesType,
);

const MEDIA_QUERIES = throwOnUndefinedProperty(mediaQueries);

export default MEDIA_QUERIES;
