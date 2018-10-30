export default val => (
  val != null &&
    typeof val === 'object' &&
      Array.isArray(val) === false
);
