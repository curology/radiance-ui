const compareObjectsKeysLength = (object1: {}, object2: {}) => {
  if (typeof object1 !== 'object' || typeof object2 !== 'object') {
    return false;
  }

  return Object.keys(object1).length === Object.keys(object2).length;
};

export default compareObjectsKeysLength;
