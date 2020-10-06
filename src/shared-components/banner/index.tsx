import React from 'react';
import PropTypes from 'prop-types';

import { COLORS } from '../../constants';
import CheckmarkIcon from '../../svgs/icons/checkmark-icon.svg';
import ErrorIcon from '../../svgs/icons/error-icon.svg';
import InfoIcon from '../../svgs/icons/info-icon.svg';
import {
  BannerContainer,
  MainContainer,
  ContentContainer,
  IconContainer,
} from './style';

const bannerIconMapping = {
  success: CheckmarkIcon,
  error: ErrorIcon,
  danger: ErrorIcon,
  default: InfoIcon,
};

export type BannerType = 'default' | 'success' | 'error' | 'danger';

type BannerProps = {
  content: React.ReactNode;
  type?: BannerType;
  onClick?: () => void;
};

export const Banner = ({ content, type = 'default', onClick }: BannerProps) => {
  const Icon = bannerIconMapping[type];

  return (
    <BannerContainer
      bannerType={type}
      onClick={onClick}
      tabIndex={onClick ? 0 : -1}
    >
      <MainContainer>
        <IconContainer>
          <Icon fill={COLORS.white} />
        </IconContainer>
        <ContentContainer>{content}</ContentContainer>
      </MainContainer>
    </BannerContainer>
  );
};

Banner.propTypes = {
  content: PropTypes.node.isRequired,
  type: PropTypes.oneOf(['default', 'success', 'error']),
  onClick: PropTypes.func,
};
