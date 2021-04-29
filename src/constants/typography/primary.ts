const fontSize = {
  display: '2.25rem', // 36px
  heading: '1.5rem', // 24px
  title: '1.25rem', // 20px
  body: '1rem', // 16px
  bodyBold: '1rem', // 16px
  caption: '0.875rem', // 14px
  link: '0.875rem', // 14px;
  button: '0.75rem', // 12px
  label: '0.75rem', // 12px
} as const;

const fontWeight = {
  bold: 'bold',
  normal: 400,
} as const;

export const PRIMARY_TYPOGRAPHY = {
  fontSize,
  fontWeight,
} as const;
