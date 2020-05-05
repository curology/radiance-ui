import throwOnUndefinedProperty from '../../utils/throwOnUndefinedProperty';

export type KeyType = {
  stringValue: string;
  numericValue: number;
};

const keycodes = throwOnUndefinedProperty({
  escape: {
    stringValue: 'Escape',
    numericValue: 27,
  },
});

export default keycodes;
