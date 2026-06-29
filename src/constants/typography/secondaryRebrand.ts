const fontSize = {
  /**
   * 32px
   */
  display: '2rem',
  /**
   * 32px
   */
  heading: '2rem',
  /**
   * 24px
   */
  title: '1.5rem',
  /**
   * 14px
   */
  body: '0.875rem',
  /**
   * 14px
   */
  bodyBold: '0.875rem',
  /**
   * 14px
   */
  caption: '0.875rem',
  /**
   * 14px
   */
  link: '0.875rem',
  /**
   * 16px
   */
  button: '1rem',
  /**
   * 12px
   */
  label: '0.75rem',
} as const;

const fontWeight = {
  bold: 'bold',
  normal: 400,
} as const;

export const SECONDARY_REBRAND_TYPOGRAPHY = {
  fontSize,
  fontWeight,
} as const;
