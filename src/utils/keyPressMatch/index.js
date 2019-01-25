export default (event, keycode) => {
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
