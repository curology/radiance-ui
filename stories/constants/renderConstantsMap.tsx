import React from 'react';
import isObject from 'isobject';

const renderConstantsMap = (
  constantMap:
    | Record<string, unknown>
    | (typeof Proxy & { __isProxy: boolean }),
) => {
  let sanitizedMap = constantMap;

  if (constantMap.__isProxy) {
    sanitizedMap = { ...constantMap };
  }

  sanitizedMap = Object.entries(sanitizedMap).reduce((memo, [key, value]) => {
    const newMemo = { ...memo };

    if (isObject(value)) {
      const sanitizedValue = value.__isProxy ? { ...value } : value;

      Object.entries(sanitizedValue).forEach(([innerKey, innerValue]) => {
        newMemo[`${key}.${innerKey}`] = innerValue;
      });
    } else {
      newMemo[key] = value;
    }

    return newMemo;
  }, {});

  return Object.keys(sanitizedMap).map((constant) => (
    <p key={constant}>
      <strong>{constant}</strong>: {sanitizedMap[constant]}
    </p>
  ));
};

export default renderConstantsMap;
