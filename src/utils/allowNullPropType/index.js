export default wrapper => (props, propName, ...rest) =>
  props[propName] === null ? null : wrapper(props, propName, ...rest);