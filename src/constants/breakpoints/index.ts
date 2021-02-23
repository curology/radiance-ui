import { throwOnUndefinedProperty } from '../../utils';

const BREAKPOINTS = {
  xs: 330,
  sm: 576,
  md: 768,
  lg: 992,
  xl: 1200,
  xxl: 1440,
} as const;

export default throwOnUndefinedProperty(BREAKPOINTS);
