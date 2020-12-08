import SECONDARY_COLORS from '../colors/secondary';

const SECONDARY_BOX_SHADOWS = {
  clickable: 'none',
  clickableHover: 'none',
  modal: '0px -8px 24px rgba(45, 41, 38, 0.05)',
  focus: `0px 0px 0px 2px ${SECONDARY_COLORS.white}, 0px 0px 0px 4px ${SECONDARY_COLORS.primary}`,
  focusInner: `inset 0px 0px 0px 2px ${SECONDARY_COLORS.primary}`,
} as const;

export default SECONDARY_BOX_SHADOWS;
