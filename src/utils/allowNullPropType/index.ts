export default (wrapper: any) => (
  props: any,
  propName: string,
  ...rest: any[]
) => (props[propName] === null ? null : wrapper(props, propName, ...rest));
