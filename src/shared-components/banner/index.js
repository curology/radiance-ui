import React from 'react';
import PropTypes from 'prop-types';

import CheckmarkIcon from '../../svgs/icons/checkmark-icon.svg';
import ErrorIcon from '../../svgs/icons/error-icon.svg';
import InfoIcon from '../../svgs/icons/info-icon.svg';
import {
  BannersContainer,
  BannerContainer,
  BannerContentContainer,
  bannerIconStyles,
} from './style';

const ANIMATION_DELAY = 500;

const bannerIconMapping = {
  success: CheckmarkIcon,
  danger: ErrorIcon,
  info: InfoIcon,
};

class Banner extends React.Component {
  static Container = ({ children }) => <BannersContainer>{children}</BannersContainer>;

  static propTypes = {
    text: PropTypes.string.isRequired,
    type: PropTypes.oneOf(['success', 'danger', 'info']).isRequired,
    duration: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    onClick: PropTypes.func.isRequired,
    allowDismiss: PropTypes.bool,
    fullWidth: PropTypes.bool,
  };

  static defaultProps = {
    allowDismiss: false,
    fullWidth: false,
  }

  state = {
    exiting: false,
    exited: false,
  };

  componentDidMount() {
    const { duration, allowDismiss } = this.props;

    if (duration !== 'sticky' && allowDismiss) {
      // eslint-disable-next-line no-undef
      this.timer = window.setTimeout(
        this.onClick,
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

  onClick = () => {
    const { onClick, allowDismiss, ...rest } = this.props;

    if (allowDismiss) {
      this.setState({ exiting: true });

      // eslint-disable-next-line no-undef
      window.clearTimeout(this.timer);

      // eslint-disable-next-line no-undef
      window.setTimeout(() => {
        onClick({ ...rest });
        this.setState({ exited: true });
      }, ANIMATION_DELAY);
    } else {
      onClick();
    }

  };

  render() {
    const { text, type, fullWidth } = this.props;
    const { exiting, exited } = this.state;
    const Icon = bannerIconMapping[type];

    if (exited) { return null; }

    return (
      <BannerContainer
        bannerType={type}
        exiting={exiting}
        onClick={this.onClick}
        fullWidth={fullWidth}
      >
        <BannerContentContainer>
          <Icon
            css={[bannerIconStyles]}
            fill="currentColor"
          />
          {text}
        </BannerContentContainer>
      </BannerContainer>
    );
  }
}

export default Banner;
