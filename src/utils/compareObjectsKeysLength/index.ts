const compareObjectsKeysLength = (
  object1: Record<string, unknown>,
  object2: Record<string, unknown>,
) => Object.keys(object1).length === Object.keys(object2).length;

export default compareObjectsKeysLength;
