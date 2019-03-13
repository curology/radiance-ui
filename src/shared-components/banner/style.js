import styled from '@emotion/styled';
import { css } from '@emotion/core';

import {
  COLORS,
  MEDIA_QUERIES,
  BOX_SHADOWS,
  SPACING,
  TYPOGRAPHY_CONSTANTS,
} from '../../constants';

const bannerStyles = styleObj => css`
  background-color: ${styleObj.backgroundColor};
  border-color: ${styleObj.borderColor};
  color: ${styleObj.color};
  fill: ${styleObj.color};
`;

const errorStyle = {
  backgroundColor: COLORS.statusRedBackground,
  borderColor: COLORS.statusRedBorder,
  color: COLORS.statusRed,
}
const successStyle = {
  backgroundColor: COLORS.statusGreenBackground,
  borderColor: COLORS.statusGreenBorder,
  color: COLORS.statusGreen,
}
const defaultStyle = {
  backgroundColor: COLORS.statusGreyBackground,
  borderColor: COLORS.statusGreyBorder,
  color: COLORS.statusGrey,
}

export const BannerContainer = styled.div`
  align-items: flex-start;
  border-width: 1px;
  border-style: solid;
  box-shadow: ${BOX_SHADOWS.message};
  cursor: pointer;
  display: flex;
  font-size: ${TYPOGRAPHY_CONSTANTS.fontSize.caption};
  justify-content: space-around;
  margin: 0 auto ${SPACING.xsmall};
  padding: ${SPACING.xsmall} 0px;
  position: relative;
  text-align: left;

  ${(props => {
    switch (props.bannerType) {
      case 'danger':
        return bannerStyles(errorStyle);
      case 'success':
        return bannerStyles(successStyle);
      default:
        return bannerStyles(defaultStyle);
    }
  })}

  ${MEDIA_QUERIES.lgUp} {
    font-size: ${TYPOGRAPHY_CONSTANTS.fontSize.caption};
    margin-bottom: ${SPACING.small};
    padding: ${SPACING.xsmall} 0px;
  }
`;

export const BannerContentContainer = styled.div`
  display: flex;
  padding: ${SPACING.xxsmall} ${SPACING.base};
  width: 100%;
`;

export const bannerIconStyles = css`
  margin: 2.5px ${SPACING.base} 0px 0px;
  min-height: ${SPACING.small};
  min-width: ${SPACING.small};
`;
