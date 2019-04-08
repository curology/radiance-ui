import PropTypes from 'prop-types';
import React from 'react';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import { Global } from '@emotion/core';

import { CenteredList, List, transitionStyles } from './style';
import { ANIMATION } from '../../../constants';

const HelperText = ({ children, centered }) => (
  <React.Fragment>
    <Global styles={transitionStyles} />
    <TransitionGroup>
      <CSSTransition in appear classNames="expand" timeout={350}>
        <List>{children}</List>
      </CSSTransition>
    </TransitionGroup>
  </React.Fragment>
);

HelperText.propTypes = {
  centered: PropTypes.bool,
  children: PropTypes.node,
};

export default HelperText;

export { ErrorItem, HintItem } from './style';
