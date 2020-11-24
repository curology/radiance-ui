// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default (val: any) =>
  val != null && typeof val === 'object' && Array.isArray(val) === false;
