import { KeyType } from '../../constants/keycodes';

export default (event: KeyboardEvent, pressedKey: KeyType): boolean => {
  let code;

  if (event.key !== undefined) {
    code = event.key;
  } else if (event.keyCode !== undefined) {
    code = event.keyCode;
  }

  return code === pressedKey.stringValue || code === pressedKey.numericValue;
};
