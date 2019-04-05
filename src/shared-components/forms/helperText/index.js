import PropTypes from 'prop-types';
import React from 'react';
import { CSSTransitionGroup } from 'react-transition-group';
import { Global } from '@emotion/core';

import { CenteredList, List, transitionStyles } from './style';
import { ANIMATION } from '../../../constants';

const HelperText = ({ children, centered }) => (
  <React.Fragment>
    <Global styles={transitionStyles} />
    <CSSTransitionGroup
      component={centered ? CenteredList : List}
      transitionName="expand"
      transitionEnterTimeout={ANIMATION.defaultTiming}
      transitionLeaveTimeout={ANIMATION.defaultTiming}
    >
      {children}
    </CSSTransitionGroup>
  </React.Fragment>
);

HelperText.propTypes = {
  centered: PropTypes.bool,
  children: PropTypes.node,
};

export default HelperText;

export { ErrorItem, HintItem } from './style';
