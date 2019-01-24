import throwOnUndefinedProperty from '../../utils/throwOnUndefinedProperty';

const keycodes = throwOnUndefinedProperty({
  backspace: 8,
  enter: 13,
  escape: 27,
  space: 32,
  h: 104, // used for hugpacks
  c: 99, // used for scan-ship cleanser/moisturizer
});

export default keycodes;
