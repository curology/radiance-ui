function isObject(
  val:
    | string
    | number
    | Record<string, unknown>
    | Array<unknown>
    | null
    | undefined
    | unknown,
): val is Record<string, unknown> {
  return val != null && typeof val === 'object' && !Array.isArray(val);
}

export default isObject;
