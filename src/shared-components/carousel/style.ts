import styled from '@emotion/styled';
import { css } from '@emotion/react';

import { SPACER, ThemeType } from '../../constants';

import type { CarouselType } from '.';

const Card = styled.div`
  width: 311px !important;
  min-height: 48px;
  margin: 0 ${SPACER.small};
`;

// styles mostly from the react-slick library
const reactSlickStyles = css`
  .slick-slider {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0 ${SPACER.large};

    user-select: none;

    -webkit-touch-callout: none;
    -khtml-user-select: none;
    -ms-touch-action: pan-y;
    touch-action: pan-y;
    -webkit-tap-highlight-color: transparent;

    flex-wrap: wrap;
  }

  .slick-list {
    display: flex;
    align-items: center;
    justify-content: flex-start;

    overflow: hidden;
  }

  .slick-list:focus {
    outline: none;
  }

  .slick-list.dragging {
    cursor: pointer;
    cursor: hand;
  }

  .slick-slider .slick-track,
  .slick-slider .slick-list {
    transform: translate3d(0, 0, 0);
  }

  .slick-track {
    position: relative;
    display: flex;
    align-items: center;
  }

  .slick-loading .slick-track {
    visibility: hidden;
  }

  .slick-slide {
    display: none;
    float: left;

    height: 100%;
    min-height: 1px;
  }

  .slick-slide.slick-loading img {
    display: none;
  }

  .slick-slide.dragging img {
    pointer-events: none;
  }

  .slick-initialized .slick-slide {
    display: block;
  }

  .slick-loading .slick-slide {
    visibility: hidden;
  }

  .slick-vertical .slick-slide {
    display: flex;
    height: auto;
    border: 1px solid transparent;
  }

  .slick-arrow.slick-hidden {
    display: none;
  }
`;

const parseOuterStyle = (numCardsVisible: number) => {
  let maxWidth;
  switch (numCardsVisible) {
    case 1:
      maxWidth = '375px';
      break;
    case 2:
      maxWidth = '702px';
      break;
    case 3:
      maxWidth = '1029px';
      break;
    default:
      maxWidth = '375px';
  }

  return `
    max-width: ${maxWidth};
  `;
};

const OuterContainer = styled.div<{ numCardsVisible: number }>`
  ${({ numCardsVisible }) => parseOuterStyle(numCardsVisible)};
`;

const getBackgroundColor = ({
  carouselType,
  theme,
}: {
  carouselType: CarouselType;
  theme: ThemeType;
}) => {
  switch (carouselType) {
    case 'primary':
      return theme.COLORS.primary;
    case 'secondary':
      return theme.COLORS.white;
    default:
      return theme.COLORS.primary;
  }
};

const InnerContainer = styled.div<{
  carouselType: CarouselType;
}>`
  overflow: hidden !important;
  padding-bottom: ${SPACER.large};

  ${reactSlickStyles}

  .slick-dots {
    display: flex !important;
    position: absolute;
    left: 50%;
    transform: translate(-50%);
    bottom: -32px;

    li {
      border-radius: 50%;
      height: ${SPACER.xsmall};
      width: ${SPACER.xsmall};
      margin-right: ${SPACER.xsmall};
      opacity: 0.25;
      background-color: ${getBackgroundColor};

      &:first-of-type {
        margin-left: ${SPACER.xsmall};
      }

      button {
        display: none;
      }
    }

    li.slick-active {
      opacity: 1;
    }
  }
`;

export default { Card, InnerContainer, OuterContainer };
