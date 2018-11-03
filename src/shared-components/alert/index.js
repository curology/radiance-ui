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
    const { onExit, ...rest} = this.props;
    this.setState({ exiting: true });

    // eslint-disable-next-line no-undef
    window.setTimeout(() => {
      onExit({...rest});
      this.setState({exited: true });
    }, ANIMATION_DELAY);
  };

  render() {
    const { text, type } = this.props;
    const { exiting, exited } = this.state;

    if (exited) { return null; }

    return (
      <AlertContainer
        alertType={type}
        exiting={exiting}
        onClick={this.exit}
      >
        <AlertContentContainer>
          <Icon
            className={alertIconStyles}
            iconName={alertIconMapping[type]}
            fill="currentColor"
          />
          {text}
        </AlertContentContainer>
      </AlertContainer>
    );
  }
}

export default Alert;
