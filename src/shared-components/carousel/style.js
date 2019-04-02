import styled from '@emotion/styled';
import { css } from '@emotion/core';

import { SPACING, COLORS } from '../../constants';

export const Card = styled.div`
  width: 311px !important;
  min-height: 48px;
  margin: 0 ${SPACING.xsmall};
`;

const primaryStyles = css`
  .slick-dots {
    li {
      background-color: ${COLORS.purple};
    }
  }
`;

const secondaryStyles = css`
  .slick-dots {
    li {
      background-color: ${COLORS.white};
    }
  }
`;

const parseStyle = carouselType => {
  switch (carouselType) {
    case 'primary':
      return primaryStyles;
    case 'secondary':
      return secondaryStyles;
    default:
      return primaryStyles;
  }
};

const dotStyles = css`
  display: flex !important;
  position: absolute;
  left: 50%;
  transform: translate(-50%);
  bottom: -32px;

  li {
    border-radius: 50%;
    height: ${SPACING.xxsmall};
    width: ${SPACING.xxsmall};
    margin-right: ${SPACING.xxsmall};
    opacity: 0.25;

    &:first-of-type {
      margin-left: ${SPACING.xxsmall};
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
const reactSlickStyles = css`
  .slick-slider {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0 ${SPACING.base};

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

export const CarouselContainer = styled.div`
  overflow: hidden !important;
  padding-bottom: ${SPACING.base};

  ${reactSlickStyles};

  .slick-dots {
    ${dotStyles};
  }

  ${({ carouselType }) => parseStyle(carouselType)};
`;
