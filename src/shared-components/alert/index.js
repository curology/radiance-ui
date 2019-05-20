import React from 'react';
import PropTypes from 'prop-types';
import { css } from '@emotion/core';

import CheckmarkIcon from '../../svgs/icons/checkmark-icon.svg';
import ErrorIcon from '../../svgs/icons/error-icon.svg';
import InfoIcon from '../../svgs/icons/info-icon.svg';
import {
  AlertContainer,
  AlertsContainer,
  AlertContentContainer,
  alertIconStyles,
} from './style';
import withDeprecationWarning from '../../utils/withDeprecationWarning'

const ANIMATION_DELAY = 500;

const alertIconMapping = {
  success: CheckmarkIcon,
  danger: ErrorIcon,
  info: InfoIcon,
};

const deprecatedProperties = {
  text: 'text Prop is deprecated. Use content instead',
}

const contentOrTextHaveToBeFilled = (props, propName, componentName) =>{
  if ((!props[propName] || typeof(props[propName])) !== 'string' && ( !props.content || props.content == undefined)) {
    return new Error(
      `You need to pass either 'content' or 'text' prop to '${componentName}' component. Prop 'text' will be deprecated with next major version`
    );
  }
}

class Alert extends React.Component {
  static Container = ({ children }) => (
    <AlertsContainer>{children}</AlertsContainer>
  );

  static propTypes = {
    text: contentOrTextHaveToBeFilled,
    content: PropTypes.node,
    type: PropTypes.oneOf(['success', 'danger', 'info']).isRequired,
    duration: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
      .isRequired,
    onExit: PropTypes.func.isRequired,
  };

  state = {
    exiting: false,
    exited: false,
  };

  componentDidMount() {
    const { duration } = this.props;

    if (duration !== 'sticky') {
      // eslint-disable-next-line no-undef
      this.timer = window.setTimeout(
        this.exit,
        Number(duration) * 1000 - ANIMATION_DELAY
      );
    }
  }

  componentWillUnmount() {
    if (this.timer) {
      // eslint-disable-next-line no-undef
      window.clearTimeout(this.timer);
    }
  }

  exit = () => {
    const { onExit, ...rest } = this.props;
    this.setState({ exiting: true });

    // eslint-disable-next-line no-undef
    window.clearTimeout(this.timer);

    // eslint-disable-next-line no-undef
    window.setTimeout(() => {
      onExit({ ...rest });
      this.setState({ exited: true });
    }, ANIMATION_DELAY);
  };

  render() {
    const { text, content, type, onExit, ...rest } = this.props;
    const { exiting, exited } = this.state;
    const Icon = alertIconMapping[type];

    if (exited) {
      return null;
    }

    return (
      <AlertContainer
        alertType={type}
        exiting={exiting}
        onClick={this.exit}
        {...rest}
      >
        <AlertContentContainer>
          <Icon
            css={css`
              ${alertIconStyles};
            `}
            fill="currentColor"
          />
          {content || text}
        </AlertContentContainer>
      </AlertContainer>
    );
  }
}

export default withDeprecationWarning(Alert, deprecatedProperties);
