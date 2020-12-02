import throwOnUndefinedProperty from '../../utils/throwOnUndefinedProperty';

export interface KeyType {
  key: string;
  keyCode: number;
}

const keyboardKeys = throwOnUndefinedProperty({
  escape: {
    key: 'Escape',
    keyCode: 27,
  },
});

export default keyboardKeys;
