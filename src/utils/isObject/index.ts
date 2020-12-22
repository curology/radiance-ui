export default (
  val:
    | string
    | number
    | Record<string, unknown>
    | Array<unknown>
    | null
    | undefined,
) => val != null && typeof val === 'object' && Array.isArray(val) === false;
