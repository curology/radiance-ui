/*
 * Note: Each Category is exported separately to be rendered in storybook:
 */

import { transparentize } from '../../utils';
import COLORS from '../colors';

const boxShadowColor = `${COLORS.primary}`;
const boxShadowOverlayColor = '#505050';

export const BASE_CONFIG = {
  clickable: `0px 8px 24px rgba(52, 51, 82, 0.05)`,
  clickableHover: `0px 8px 24px rgba(52, 51, 82, 0.10)`,
  message: `0 12px 20px 0 ${transparentize(boxShadowColor, 0.05)}`,
  focus: `0px 0px 0px 2px ${COLORS.white}, 0px 0px 0px 4px ${COLORS.primary}`,
  focusInner: `inset 0px 0px 0px 2px ${COLORS.primary}`,
};

export const OLD_BASE_CONFIG = {
  boxShadow1: `0 12px 20px 0 ${transparentize(boxShadowColor, 0.05)}`,
  boxShadow2: `0 5px 11px 0 ${transparentize(boxShadowColor, 0.1)}`,
  boxShadow3: `0 4px 6px 0 ${transparentize(boxShadowColor, 0.15)}`,
  boxShadow4: `0 1px 3px 0 ${transparentize(boxShadowColor, 0.15)}`,
  boxShadow5: `0 1px 2px 0 ${transparentize(boxShadowColor, 0.06)}`,
  boxShadowOnOverlay: `0 12px 20px 0 ${boxShadowOverlayColor}`,
};

export const DESIGN_SYSTEM_NAMING = {
  elevation2: OLD_BASE_CONFIG.boxShadow5,
  elevation3: OLD_BASE_CONFIG.boxShadow4,
  elevation6: OLD_BASE_CONFIG.boxShadow3,
  elevation11: OLD_BASE_CONFIG.boxShadow2,
  elevation20: OLD_BASE_CONFIG.boxShadow1,
};

export const ALIASED_CONFIG = {
  card: OLD_BASE_CONFIG.boxShadow4,
};

export default {
  ...BASE_CONFIG,
  ...OLD_BASE_CONFIG,
  ...DESIGN_SYSTEM_NAMING,
  ...ALIASED_CONFIG,
};
