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
        maxHeight: '50px',
        transitionDuration: ANIMATION.defaultTiming,
        transitionProperty: 'max-height, opacity',
        transitionTimingFunction: 'ease-out',
      };
    case 'exiting':
      return {
        opacity: '0',
        maxHeight: '0',
        transitionDuration: ANIMATION.defaultTiming,
        transitionProperty: 'max-height, opacity',
        transitionTimingFunction: 'ease-in',
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

type HelperTransitionProps = { children: React.ReactElement; props: any[] };
const HelperTransition = ({
  children: child,
  ...props
}: HelperTransitionProps) => (
  <Transition timeout={350} {...props}>
    {(transitionState: string) =>
      React.cloneElement(child, {
        style: getStyleForTransitionState(transitionState),
      })
    }
  </Transition>
);

export default HelperTransition;
