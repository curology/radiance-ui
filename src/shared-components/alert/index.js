import React from 'react';
import PropTypes from 'prop-types';

import Icon from '../icon';
import {
  AlertsContainer,
  AlertContainer,
  AlertContentContainer,
  alertIconStyles,
} from './style';

const ANIMATION_DELAY = 500;

const alertIconMapping = {
  success: 'done',
  danger: 'error',
  info: 'info',
};

class Alert extends React.Component {
  static Container = ({ children }) => <AlertsContainer>{children}</AlertsContainer>;

  static propTypes = {
    text: PropTypes.string.isRequired,
    type: PropTypes.oneOf(['success', 'danger', 'info']).isRequired,
    duration: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    onClick: PropTypes.func.isRequired,
  };

  state = { exiting: false };

  componentDidMount() {
    const { duration } = this.props;

    if (duration !== 'sticky') {
      // eslint-disable-next-line no-undef
      this.timer = window.setTimeout(
        this.exit,
        Number(duration) - ANIMATION_DELAY
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
    const { onClick, ...rest} = this.props;
    this.setState({ exiting: true });

    // eslint-disable-next-line no-undef
    window.setTimeout(() => onClick({...rest}), ANIMATION_DELAY);
  };

  render() {
    const { text, type } = this.props;
    return (
      <AlertContainer
        alertType={type}
        exiting={this.state.exiting}
        onClick={this.exit}
      >
        <AlertContentContainer>
          <Icon
            className={alertIconStyles}
            iconName={alertIconMapping[type]}
          />
          {text}
        </AlertContentContainer>
      </AlertContainer>
    );
  }
}

export default Alert;
