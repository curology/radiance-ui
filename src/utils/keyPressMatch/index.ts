import keycodes from '../../constants/keycodes';

type EventParamType = {
  keyCode?: any;
  keyIdentifier?: any;
  key?: any;
};

export default (event: EventParamType, keycode: typeof keycodes) => {
  let code;

  if (event.keyCode !== undefined) {
    code = event.keyCode;
  } else if (event.keyIdentifier !== undefined) {
    code = event.keyIdentifier;
  } else if (event.key !== undefined) {
    code = event.key;
  }

  return code === keycode;
};
