import { transparentize } from 'src/utils';

const boxShadowColor = '#2d2d30';
const boxShadowOverlayColor = '#505050';

const BASE_CONFIG = {
  clickable: `0 1px 3px 0 ${transparentize(boxShadowColor, 0.06)}`,
  clickableHover: `0 1px 3px 0 ${transparentize(boxShadowColor, 0.15)}`,
  message: `0 12px 20px 0 ${transparentize(boxShadowColor, 0.05)}`,
};

const OLD_BASE_CONFIG = {
  boxShadow1: `0 12px 20px 0 ${transparentize(boxShadowColor, 0.05)}`,
  boxShadow2: `0 5px 11px 0 ${transparentize(boxShadowColor, 0.1)}`,
  boxShadow3: `0 4px 6px 0 ${transparentize(boxShadowColor, 0.15)}`,
  boxShadow4: `0 1px 3px 0 ${transparentize(boxShadowColor, 0.15)}`,
  boxShadow5: `0 1px 2px 0 ${transparentize(boxShadowColor, 0.06)}`,
  boxShadowOnOverlay: `0 12px 20px 0 ${boxShadowOverlayColor}`,
};

const DESIGN_SYSTEM_NAMING = {
  elevation2: OLD_BASE_CONFIG.boxShadow5,
  elevation3: OLD_BASE_CONFIG.boxShadow4,
  elevation6: OLD_BASE_CONFIG.boxShadow3,
  elevation11: OLD_BASE_CONFIG.boxShadow2,
  elevation20: OLD_BASE_CONFIG.boxShadow1,
};

const ALIASED_CONFIG = {
  card: OLD_BASE_CONFIG.boxShadow4,
};

export default {
  ...BASE_CONFIG,
  ...OLD_BASE_CONFIG,
  ...DESIGN_SYSTEM_NAMING,
  ...ALIASED_CONFIG,
};

