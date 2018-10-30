import React from 'react';
import isObject from 'isobject';

const renderConstantsMap = constantMap => {
  let sanitizedMap = constantMap;

  if (constantMap.__isProxy) {
    sanitizedMap = Object.assign({}, constantMap);
  }

  sanitizedMap = Object.entries(sanitizedMap).reduce((memo, [key, value]) => {
    const newMemo = Object.assign({}, memo);

    if (isObject(value)) {
      const sanitizedValue = value.__isProxy ? Object.assign({}, value) : value;

      Object.entries(sanitizedValue).forEach(([innerKey, innerValue]) => {
        newMemo[`${key}.${innerKey}`] = innerValue;
      });
    } else {
      newMemo[key] = value;
    }

    return newMemo;
  }, {});

  return (
    Object.keys(sanitizedMap).map(constant => (
      <p><strong>{constant}</strong>: {sanitizedMap[constant]}</p>
    ))
  );
};

export default renderConstantsMap;
