import React from 'react';
import { storiesOf } from '@storybook/react';
import isObject from 'isobject';

import * as CONSTANTS from 'src/constants';
import { Typography } from 'src/shared-components';

const stories = storiesOf('CONSTANTS', module);

const renderConstants = constantMap => {
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

stories.add(
  'available constants',
  () => (
    <div>
      {
        Object.keys(CONSTANTS).map(category => {
          if (['COLORS'].includes(category)) {
            // COLORS is handled on its own story
            return null;
          }

          const categoryConstant = CONSTANTS[category];

          return (
            <div css={`padding-bottom: ${CONSTANTS.SPACING.small};`}>
              <Typography.Heading>{category}</Typography.Heading>
              {renderConstants(categoryConstant)}
            </div>
          );
        })
      }
    </div>
  )
);
