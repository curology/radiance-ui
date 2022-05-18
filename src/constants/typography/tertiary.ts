const fontSize = {
  /**
   * 32px
   */
  display: '2rem',
  /**
   * 24px
   */
  heading: '1.5rem',
  /**
   * 20px
   */
  title: '1.25rem',
  /**
   * 16px
   */
  body: '1rem',
  /**
   * 16px
   */
  bodyBold: '1rem',
  /**
   * 14px
   */
  caption: '0.875rem',
  /**
   * 14px
   */
  link: '0.875rem',
  /**
   * 12px
   */
  button: '0.75rem',
  /**
   * 10px
   */
  label: '0.625rem',
} as const;

const fontWeight = {
  bold: 'bold',
  normal: 400,
} as const;

export const TERTIARY_TYPOGRAPHY = {
  fontSize,
  fontWeight,
} as const;
