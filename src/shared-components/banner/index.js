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

const bannerIconMapping = {
  success: CheckmarkIcon,
  danger: ErrorIcon,
  info: InfoIcon,
};

class Banner extends React.Component {
  static Container = ({ children }) => <BannersContainer>{children}</BannersContainer>;

  static propTypes = {
    content: PropTypes.node.isRequired,
    type: PropTypes.oneOf(['success', 'danger', 'info']).isRequired,
    onClick: PropTypes.func.isRequired,
  };

  state = {
    exiting: false,
    exited: false,
  };

  render() {
    const { content, type, onClick } = this.props;
    const { exiting, exited } = this.state;
    const Icon = bannerIconMapping[type];

    if (exited) { return null; }

    return (
      <BannerContainer
        bannerType={type}
        exiting={exiting}
        onClick={onClick}
      >
        <BannerContentContainer>
          <Icon
            css={[bannerIconStyles]}
            fill="currentColor"
          />
          {content}
        </BannerContentContainer>
      </BannerContainer>
    );
  }
}

export default Banner;
