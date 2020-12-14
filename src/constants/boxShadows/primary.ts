import PRIMARY_COLORS from '../colors/primary';

const PRIMARY_BOX_SHADOWS = {
  clickable: '0px 8px 24px rgba(52, 51, 82, 0.05)',
  clickableHover: '0px 8px 24px rgba(52, 51, 82, 0.10)',
  modal: '0px -8px 24px rgba(52, 51, 82, 0.05)',
  focus: `0px 0px 0px 2px ${PRIMARY_COLORS.white}, 0px 0px 0px 4px ${PRIMARY_COLORS.primary}`,
  focusInner: `inset 0px 0px 0px 2px ${PRIMARY_COLORS.primary}`,
} as const;

export default PRIMARY_BOX_SHADOWS;
