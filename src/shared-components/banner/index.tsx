import React from 'react';
import PropTypes from 'prop-types';
import { useTheme } from 'emotion-theming';

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
  onClick?: () => void;
  type?: BannerType;
};

/**
 * The `<Banner />` component provides only the styling and onClick behavior of banners.
 *
 * Management of what banners are showing on the screen must be handled from outside of this component.
 *
 * Banners are not dismissable.
 */
export const Banner = ({ content, onClick, type = 'default' }: BannerProps) => {
  const theme = useTheme();
  const Icon = bannerIconMapping[type];

  return (
    <BannerContainer
      bannerType={type}
      onClick={onClick}
      tabIndex={onClick ? 0 : -1}
    >
      <MainContainer>
        <IconContainer>
          <Icon fill={theme.COLORS.white} />
        </IconContainer>
        <ContentContainer>{content}</ContentContainer>
      </MainContainer>
    </BannerContainer>
  );
};

Banner.propTypes = {
  content: PropTypes.node.isRequired,
  onClick: PropTypes.func,
  type: PropTypes.oneOf(['default', 'success', 'error', 'danger']),
};
