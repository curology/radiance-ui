import React from 'react';

import isObject from '../../src/utils/isObject';

interface ExpandedProxy extends ProxyConstructor {
  __isProxy: boolean;
}

// Object spread does not work with Proxies, raises Symbol-related error
/* eslint-disable prefer-object-spread */
const renderConstantsMap = (
  constantMap: Record<string, unknown> | ExpandedProxy,
) => {
  let sanitizedMap = constantMap;

  if ('__isProxy' in constantMap) {
    sanitizedMap = Object.assign({}, constantMap);
  }

  sanitizedMap = Object.entries(sanitizedMap).reduce((memo, [key, value]) => {
    const newMemo = Object.assign({}, memo);

    if (isObject(value)) {
      // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-member-access
      const sanitizedValue =
        '__isProxy' in value ? Object.assign({}, value) : value;

      Object.entries(sanitizedValue).forEach(([innerKey, innerValue]) => {
        newMemo[`${key}.${innerKey}`] = innerValue;
      });
    } else {
      // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
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
/* eslint-enable prefer-object-spread */

export default renderConstantsMap;
