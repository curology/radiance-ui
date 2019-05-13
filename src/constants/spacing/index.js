import { withDeprecationWarning } from '../../utils';

const SPACING = {
  xxsmall: '0.25rem', // 4px
  xsmall: '0.5rem', // 8px
  small: '1rem', // 16px
  base: '1.5rem', // 24px
  medium: '2rem', // 32px
  large: '2.5rem', // 40px
  xlarge: '3.5rem', // 56px
  xxlarge: '4rem', // 64px
};

const deprecatedProperties = {
  xxsmall:
    'SPACING.xxsmall is deprecated and will be removed in v3. Use SPACER.xsmall instead',
  xsmall:
    'SPACING.xsmall is deprecated and will be removed in v3. Use SPACER.small instead',
  small:
    'SPACING.small is deprecated and will be removed in v3. Use SPACER.medium instead',
  base:
    'SPACING.base is deprecated and will be removed in v3. Use SPACER.large instead',
  medium:
    'SPACING.medium is deprecated and will be removed in v3. Use SPACER.xlarge instead',
  large:
    'SPACING.large is deprecated and will be removed in v3. Use SPACER.x2large instead',
  xlarge:
    'SPACING.xlarge is deprecated and will be removed in v3. Use SPACER.x4large instead',
  xxlarge:
    'SPACING.xxlarge is deprecated and will be removed in v3. Use SPACER.x5large instead',
};

export default withDeprecationWarning(SPACING, deprecatedProperties);
