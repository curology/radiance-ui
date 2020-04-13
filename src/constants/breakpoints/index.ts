import { throwOnUndefinedProperty } from '../../utils';

// When adding a new breakpoint, make sure to include it in the ../mediaQueries TS type
export default throwOnUndefinedProperty({
  xs: 330,
  sm: 576,
  md: 768,
  lg: 992,
  xl: 1200,
  xxl: 1440,
});
