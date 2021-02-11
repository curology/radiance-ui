import styled from '@emotion/styled';

import Typography from '../typography';
import { MEDIA_QUERIES, SPACER, Z_SCALE } from '../../constants';

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: ${Z_SCALE.modal};
  background-color: rgba(58, 55, 75, 0.7);
  transition: opacity 250ms cubic-bezier(0.075, 0.82, 0.165, 1);

  &.entering,
  &.exiting,
  &.exited {
    opacity: 0;
  }

  &.entered {
    opacity: 1;
  }

  ${MEDIA_QUERIES.mdUp} {
    display: flex;
    flex-flow: row nowrap;
    justify-content: center;
    align-items: center;
  }
`;

export const ModalContainer = styled.div<{
  backgroundColor: string;
}>`
  width: 100%;
  margin: 0 auto;
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  border-top-left-radius: ${({ theme }) => theme.BORDER_RADIUS.large};
  border-top-right-radius: ${({ theme }) => theme.BORDER_RADIUS.large};
  box-shadow: ${({ theme }) => theme.BOX_SHADOWS.modal};
  background: ${({ backgroundColor }) => backgroundColor};
  padding: ${SPACER.x4large} ${SPACER.large} ${SPACER.xlarge};
  overflow-y: auto;
  max-height: 700px;

  transition: transform 250ms cubic-bezier(0.075, 0.82, 0.165, 1);

  &.entered {
    transform: translateY(0%);
  }

  &.entering,
  &.exiting,
  &.exited {
    transform: translateY(100%);
  }

  p {
    margin-bottom: ${SPACER.large};

    &:last-of-type {
      margin-bottom: ${SPACER.xlarge};
    }
  }

  ${MEDIA_QUERIES.mdUp} {
    position: relative;
    width: 456px;
    border-radius: ${({ theme }) => theme.BORDER_RADIUS.medium};
    padding: ${SPACER.x4large};

    &.entering,
    &.exiting,
    &.exited {
      transform: translateY(40%);
    }
  }
`;

export const ModalTitle = styled(Typography.Title)`
  margin-bottom: ${SPACER.small};
`;

export const CrossIconContainer = styled.div`
  position: absolute;
  top: 8px;
  right: 12px;
  z-index: ${Z_SCALE.e2000};
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: ${({ theme }) => theme.COLORS.white};
  display: flex;
  flex-flow: row nowrap;
  justify-content: center;
  align-items: center;
  pointer-events: auto;
  cursor: pointer;

  ${MEDIA_QUERIES.mdUp} {
    top: 16px;
    right: 16px;
  }
  &:focus {
    outline: none;
    box-shadow: ${({ theme }) => theme.BOX_SHADOWS.focus};
  }
`;
