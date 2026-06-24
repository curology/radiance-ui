import SECONDARY_REBRAND_COLORS from '../colors/secondaryRebrand';

const SECONDARY_REBRAND_BOX_SHADOWS = {
  clickable: 'none',
  clickableHover: 'none',
  modal: '0px -8px 24px rgba(45, 41, 38, 0.05)',
  focus: `0px 0px 0px 2px ${SECONDARY_REBRAND_COLORS.white}, 0px 0px 0px 4px ${SECONDARY_REBRAND_COLORS.primary}`,
  focusInner: `inset 0px 0px 0px 2px ${SECONDARY_REBRAND_COLORS.primary}`,
} as const;

export default SECONDARY_REBRAND_BOX_SHADOWS;
