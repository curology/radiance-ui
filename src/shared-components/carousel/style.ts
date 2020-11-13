import styled from '@emotion/styled';

import { SPACER, ThemeType } from '../../constants';

import { CarouselType } from '.';

export const Card = styled.div`
  width: 311px !important;
  min-height: 48px;
  margin: 0 ${SPACER.small};
`;

const primaryStyles = (theme: ThemeType) => `
  .slick-dots {
    li {
      background-color: ${theme.COLORS.primary};
    }
  }
`;

const secondaryStyles = (theme: ThemeType) => `
  .slick-dots {
    li {
      background-color: ${theme.COLORS.white};
    }
  }
`;

const parseStyle = (carouselType: CarouselType, theme: ThemeType) => {
  switch (carouselType) {
    case 'primary':
      return primaryStyles(theme);
    case 'secondary':
      return secondaryStyles(theme);
    default:
      return primaryStyles(theme);
  }
};

const dotStyles = `
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
`;

// styles from the react-slick library
const reactSlickStyles = `
  .slick-slider {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0 ${SPACER.large};

    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;

    -webkit-touch-callout: none;
    -khtml-user-select: none;
    -ms-touch-action: pan-y;
    touch-action: pan-y;
    -webkit-tap-highlight-color: transparent;
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
    -webkit-transform: translate3d(0, 0, 0);
    -moz-transform: translate3d(0, 0, 0);
    -ms-transform: translate3d(0, 0, 0);
    -o-transform: translate3d(0, 0, 0);
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

export const OuterContainer = styled.div<{ numCardsVisible: number }>`
  ${({ numCardsVisible }) => parseOuterStyle(numCardsVisible)};
`;

export const InnerContainer = styled.div<{
  carouselType: CarouselType;
}>`
  overflow: hidden !important;
  padding-bottom: ${SPACER.large};

  ${reactSlickStyles}

  .slick-slider {
    flex-wrap: wrap;
  }

  .slick-dots {
    ${dotStyles}
  }

  ${({ carouselType, theme }) => parseStyle(carouselType, theme)}
`;
