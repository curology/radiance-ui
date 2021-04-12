import React from 'react';
import { Transition } from 'react-transition-group';

import { ANIMATION } from '../../constants';

const START_STATE = {
  opacity: '0',
  maxHeight: '0',
};

const getStyleForTransitionState = (transitionState: string) => {
  switch (transitionState) {
    case 'entering':
      return START_STATE;
    case 'entered':
      return {
        opacity: '1',
        maxHeight: '48px',
        transitionDuration: ANIMATION.defaultTiming,
        transitionProperty: 'max-height, opacity',
        transitionTimingFunction: 'ease-in-out',
      };
    case 'exiting':
      return {
        opacity: '0',
        maxHeight: '0',
        transitionDuration: ANIMATION.defaultTiming,
        transitionProperty: 'max-height, opacity',
        transitionTimingFunction: 'ease-in-out',
      };
    case 'exited':
      return START_STATE;
    default:
      return {};
  }
};

interface HelperTransitionParamsType {
  children: JSX.Element;
  [key: string]: unknown;
}

const HelperTransition = ({
  children: child,
  ...props
}: HelperTransitionParamsType) => (
  // eslint-disable-next-line react/jsx-props-no-spreading
  <Transition timeout={350} {...props}>
    {(transitionState) =>
      React.cloneElement(child, {
        style: getStyleForTransitionState(transitionState),
      })
    }
  </Transition>
);

export default HelperTransition;
