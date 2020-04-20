export default (val: any) =>
  val != null && typeof val === 'object' && Array.isArray(val) === false;
