import PropTypes from 'prop-types';
import React from 'react';
import { CSSTransitionGroup } from 'react-transition-group';
import { Global } from '@emotion/core';

import { CenteredList, List, transitionStyles } from './style';

const HelperText = ({ children, centered }) => (
  <React.Fragment>
    <Global styles={transitionStyles} />
    <CSSTransitionGroup
      component={centered ? CenteredList : List}
      transitionName="expand"
      transitionEnterTimeout={350}
      transitionLeaveTimeout={350}
    >
      {children}
    </CSSTransitionGroup>
  </React.Fragment>
);

HelperText.propTypes = {
  centered: PropTypes.bool,
  children: PropTypes.node,
};

export { ErrorItem, HintItem } from './style';

export default HelperText;
