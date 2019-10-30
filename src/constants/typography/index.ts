// @ts-ignore
import { throwOnUndefinedProperty } from '../../utils';

const fontSize = throwOnUndefinedProperty({
  display: '2.25rem', // 36px
  heading: '1.5rem', // 24px
  title: '1.25rem', // 20px
  body: '1rem', // 16px
  caption: '0.875rem', // 14px
  label: '0.75rem', // 12px
});

const fontWeight = throwOnUndefinedProperty({
  bold: 'bold',
  normal: 400,
});

export default throwOnUndefinedProperty({
  fontSize,
  fontWeight,
});
