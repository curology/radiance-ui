import styled from '@emotion/styled';

import Typography from '../typography';
import {
  COLORS, MEDIA_QUERIES, SPACER, Z_SCALE, 
} from '../../constants';

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-color: rgba(58, 55, 75, 0.7);
  z-index: ${Z_SCALE.modal};
  overflow-y: auto;
`;

export const ModalContainer = styled.div`
  background-color: ${COLORS.white};
  height: calc(100vh - ${SPACER.xlarge});
  margin: ${SPACER.xlarge} auto 0;
  padding: ${SPACER.x4large} ${SPACER.large} 0 ${SPACER.large};
  overflow-y: auto;
  position: relative;
  width: 100%;
  box-shadow: 0px -8px 24px rgba(51, 46, 84, 0.05);
  border-top-left-radius: 32px;
  border-top-right-radius: 32px;

  ${MEDIA_QUERIES.mdUp} {
    height: auto;
    max-width: 616px;
    margin-bottom: ${SPACER.large};
    margin-top: ${SPACER.large};
  }
`;

export const CloseButtonContainer = styled.div`
  position: absolute;
  top: ${SPACER.small};
  right: 12px;
  width: 40px;
  height: 40px;
  border-radius: 40px;
  background: ${COLORS.white};
  display: flex;
  flex-flow: row nowrap;
  justify-content: center;
  align-items: center;
  z-index: ${Z_SCALE.e2000};
`;

export const HeaderImageContainer = styled.div``;

export const Title = styled(Typography.Heading)`
  margin-bottom: ${SPACER.small};
`;

export const Body = styled.div`
  p {
    margin-bottom: ${SPACER.large};

    & > a {
      text-transform: none;
    }
  }
`;

export const Footer = styled.div`
  margin-bottom: 32px;
`;

export const ContentWithFooterContainer = styled.div`
  display: flex;
  flex-flow: column nowrap;
  justify-content: space-between;
  height: 100%;
`;
