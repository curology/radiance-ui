import React from 'react';
import { Transition } from 'react-transition-group';

import { ANIMATION } from '../../constants';

const getStyleForTransitionState = (transitionState: string) => {
  switch (transitionState) {
    case 'entering':
      return {
        opacity: '0',
        maxHeight: '0',
      };
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
      return {
        opacity: '0',
        maxHeight: '0',
      };
    default:
      return {};
  }
};

type HelperTransitionParamsType = {
  children: JSX.Element;
  props: Array<unknown>;
};

const HelperTransition = ({
  children: child,
  ...props
}: HelperTransitionParamsType): React.ReactNode => (
  // eslint-disable-next-line react/jsx-props-no-spreading
  <Transition timeout={350} {...props}>
    {(transitionState): React.ReactNode =>
      React.cloneElement(child, {
        style: getStyleForTransitionState(transitionState),
      })
    }
  </Transition>
);

export default HelperTransition;
