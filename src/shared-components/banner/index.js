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
    onExit: PropTypes.func.isRequired,
    fullWidth: PropTypes.string,
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
    const { text, type, fullWidth } = this.props;
    const { exiting, exited } = this.state;
    const Icon = bannerIconMapping[type];

    if (exited) { return null; }

    return (
      <BannerContainer
        bannerType={type}
        exiting={exiting}
        onClick={this.exit}
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
