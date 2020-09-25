import styled from '@emotion/styled';
import { css } from '@emotion/core';
import { buttonReset } from 'src/utils/styles/buttonReset';

import {
  BOX_SHADOWS,
  COLORS,
  MEDIA_QUERIES,
  SPACER,
  TYPOGRAPHY_CONSTANTS,
} from '../../constants';

import { BannerType } from '.';

const defaultAlertStyles = css`
  background-color: ${COLORS.primary};
  box-shadow: 0px 8px 24px rgba(51, 46, 84, 0.05);
`;

const successAlertStyles = css`
  background-color: ${COLORS.success};
  box-shadow: 0px 8px 24px rgba(43, 110, 51, 0.05);
`;

const errorAlertStyles = css`
  background-color: ${COLORS.error};
  box-shadow: 0px 8px 24px rgba(189, 32, 15, 0.05);
`;

/**
 * width: 100% to match previous <div> behavior
 */
export const BannerContainer = styled.button<{ bannerType: BannerType }>`
  ${buttonReset}
  width: 100%;
  &:focus {
    outline: none;
    box-shadow: ${BOX_SHADOWS.focus};
  }

  cursor: pointer;
  position: relative;
  margin: 0 auto ${SPACER.small};
  padding: ${SPACER.medium};
  border-radius: ${SPACER.small};

  ${({ bannerType }) => {
    switch (bannerType) {
      case 'danger':
        return errorAlertStyles;
      case 'error':
        return errorAlertStyles;
      case 'success':
        return successAlertStyles;
      default:
        return defaultAlertStyles;
    }
  }};

  ${MEDIA_QUERIES.mdUp} {
    margin: 0 auto ${SPACER.medium};
  }
`;

export const MainContainer = styled.div`
  width: 100%;
  display: flex;
  flex-flow: row nowrap;
  justify-content: flex-start;
  align-items: flex-start;
  color: ${COLORS.white};
  font-size: ${TYPOGRAPHY_CONSTANTS.fontSize.caption};
`;

export const ContentContainer = styled.div`
  margin: -3px 0 0 ${SPACER.medium};
`;

export const IconContainer = styled.div`
  svg {
    height: ${SPACER.medium};
    width: ${SPACER.medium};
    fill: ${COLORS.white};
  }
`;
