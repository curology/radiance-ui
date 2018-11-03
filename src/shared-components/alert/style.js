import styled, { keyframes, css } from 'react-emotion';

import {
  COLORS,
  MEDIA_QUERIES,
  BOX_SHADOWS,
  SPACING,
  ANIMATION,
  TYPOGRAPHY_CONSTANTS,
} from '../../constants';

const fadeInDesktop = keyframes`
  from { opacity: 0; transform: translate3d(24px, 0, 0); }
  to { opacity: 1; transform: translate3d(0, 0, 0); }
`;

const fadeInMobile = keyframes`
  from { opacity: 0; transform: translate3d(0, -24px, 0);  }
  to { opacity: 1; transform: translate3d(0, 0px, 0); }
`;

const successAlertStyles = css`
  background-color: ${COLORS.statusGreenBackground};
  color: ${COLORS.statusGreen};
  fill: ${COLORS.statusGreen};
  border-width: 1px;
  border-color: ${COLORS.statusGreenBorder};
  border-style: solid;
`;

const errorAlertStyles = css`
  background-color: ${COLORS.statusRedBackground};
  color: ${COLORS.statusRed};
  fill: ${COLORS.statusRed};
  border-width: 1px;
  border-color: ${COLORS.statusRedBorder};
  border-style: solid;
`;

const defaultAlertStyles = css`
  background-color: ${COLORS.statusGreyBackground};
  color: ${COLORS.statusGrey};
  fill: ${COLORS.statusGrey};
  border-width: 1px;
  border-color: ${COLORS.statusGreyBorder};
  border-style: solid;
`;

export const AlertContainer = styled.div`
  align-items: flex-start;
  animation: ${fadeInMobile} ${ANIMATION.defaultTiming} 1;
  cursor: pointer;
  display: flex;
  padding: ${SPACING.xsmall} 0px;
  font-size: ${TYPOGRAPHY_CONSTANTS.fontSize.caption};
  justify-content: space-around;
  opacity: ${props => (props.exiting ? '0' : '1')};
  position: relative;
  text-align: left;
  transform: ${props =>
    props.exiting ? 'translate3d(0, -24px, 0)' : 'translate3d(0, 0, 0)'};
  transition: ${ANIMATION.defaultTiming};
  width: 327px;
  box-shadow: ${BOX_SHADOWS.message};
  margin-left: auto;
  margin-right: auto;
  margin-bottom: ${SPACING.xsmall};

  ${(props => {
    switch (props.alertType) {
      case 'danger':
        return errorAlertStyles;
      case 'success':
        return successAlertStyles;
      default:
        return defaultAlertStyles;
    }
  })}

  ${MEDIA_QUERIES.lgUp} {
    animation: ${fadeInDesktop} ${ANIMATION.defaultTiming} 1;
    transform: ${props =>
    props.exiting ? 'translate3d(24px, 0, 0)' : 'translate3d(0, 0, 0)'};
    margin-bottom: ${SPACING.small};
    font-size: ${TYPOGRAPHY_CONSTANTS.fontSize.caption};
    padding: ${SPACING.xsmall} 0px;
  }
`;

export const AlertsContainer= styled.div`
  align-items: flex-end;
  display: flex;
  flex-direction: column;
  position: fixed;
  z-index: 99999;

  left: 0;
  right: 0;
  top: ${SPACING.small};

  ${MEDIA_QUERIES.mdUp} {
    left: auto;
    right: ${SPACING.small};
    top: ${SPACING.small};
  }
`;

export const AlertContentContainer = styled.div`
  display: flex;
  width: 100%;
  padding: ${SPACING.xxsmall} ${SPACING.base};
`;

export const alertIconStyles = css`
  min-width: ${SPACING.small};
  min-height: ${SPACING.small};
  margin: 2.5px ${SPACING.base} 0px 0px;
`;
