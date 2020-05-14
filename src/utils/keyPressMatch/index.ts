import { KeyType } from '../../constants/keyboardKeys';

export default (event: KeyboardEvent, pressedKey: KeyType): boolean => {
  let code;

  if (event.key !== undefined) {
    code = event.key;
  } else if (event.keyCode !== undefined) {
    code = event.keyCode;
  }

  return code === pressedKey.key || code === pressedKey.keyCode;
};
