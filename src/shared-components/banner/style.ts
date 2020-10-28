import styled from '@emotion/styled';
import { buttonReset } from 'src/utils/styles/buttonReset';
import { ThemeType } from 'src/constants/themes/types';

import {
  BOX_SHADOWS,
  MEDIA_QUERIES,
  SPACER,
  TYPOGRAPHY_CONSTANTS,
} from '../../constants';

import { BannerType } from '.';

const defaultAlertStyles = (theme: ThemeType) => `
  background-color: ${theme.COLORS.primary};
  box-shadow: 0px 8px 24px rgba(51, 46, 84, 0.05);
`;

const successAlertStyles = (theme: ThemeType) => `
  background-color: ${theme.COLORS.success};
  box-shadow: 0px 8px 24px rgba(43, 110, 51, 0.05);
`;

const errorAlertStyles = (theme: ThemeType) => `
  background-color: ${theme.COLORS.error};
  box-shadow: 0px 8px 24px rgba(189, 32, 15, 0.05);
`;

export const BannerContainer = styled.button<{
  bannerType: BannerType;
  onClick?: () => void;
}>`
  ${buttonReset}
  width: 100%;
  &:focus {
    outline: none;
    box-shadow: ${BOX_SHADOWS.focus};
  }

  cursor: ${({ onClick }) => (onClick ? `pointer` : `inherit`)};
  position: relative;
  margin: 0 auto ${SPACER.small};
  padding: ${SPACER.medium};
  border-radius: ${SPACER.small};

  ${({ bannerType, theme }) => {
    switch (bannerType) {
      case 'danger':
        return errorAlertStyles(theme);
      case 'error':
        return errorAlertStyles(theme);
      case 'success':
        return successAlertStyles(theme);
      default:
        return defaultAlertStyles(theme);
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
  color: ${({ theme }) => theme.COLORS.white};
  font-size: ${TYPOGRAPHY_CONSTANTS.fontSize.caption};
`;

export const ContentContainer = styled.div`
  margin: -3px 0 0 ${SPACER.medium};
`;

export const IconContainer = styled.div`
  svg {
    height: ${SPACER.medium};
    width: ${SPACER.medium};
    fill: ${({ theme }) => theme.COLORS.white};
  }
`;
