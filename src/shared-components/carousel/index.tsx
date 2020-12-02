import React, { useState, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import Slider from 'react-slick';

import Arrow from './arrow';
import { OuterContainer, InnerContainer, Card } from './style';

const FIRST_INDEX = 0;
const BASE_SLIDER_CONFIG = {
  focusOnSelect: true,
  pauseOnHover: true,
  slidesToScroll: 1,
  variableWidth: true,
};

export type CarouselType = 'primary' | 'secondary';

interface CarouselProps {
  /**
   * Auto-advance the carousel cards
   */
  autoplay?: boolean;
  /**
   * Autoplay speed in milliseconds (ignored if autoplay is false)
   */
  autoplaySpeed?: number;
  /**
   * Align the arrows on the bottom right (dots are automatically hidden)
   */
  bottomRightAlignedArrows?: boolean;
  carouselType?: CarouselType;
  /**
   * Center the current card
   */
  centerMode?: boolean;
  /**
   * Array of `Carousel.Card`
   */
  children: Array<React.ReactNode>;
  hideArrows?: boolean;
  hideDots?: boolean;
  /**
   * Creates a carousel loop, i.e. if true you can go backwards from the beginning
   */
  infinite?: boolean;
  numCardsVisible: 1 | 2 | 3;
}

/**
 * Carousels should be used to provide valuable information or additional context on a page. One of the best examples of a Carousel is for product recommendations.
 *
 * The property `numCardsVisible` will define the width of the Carousel Container.
 *
 * An array of `Carousel.Card` must be used for the carousel content. It includes the base styles for the Card which may be extended as shown above.
 */
export const Carousel = ({
  autoplay = false,
  autoplaySpeed = 5000,
  bottomRightAlignedArrows = false,
  carouselType = 'primary',
  centerMode = true,
  children,
  hideArrows = false,
  hideDots = false,
  infinite = false,
  numCardsVisible,
}: CarouselProps) => {
  const getLastIndex = () => {
    const numberSlides = children.length;
    return numberSlides - numCardsVisible;
  };

  const [currentIndex, setCurrentIndex] = useState(FIRST_INDEX);
  const [lastIndex, setLastIndex] = useState(getLastIndex);

  const hasUserInteractedRef = useRef(false);
  const timeoutIdRef = useRef<number | null>(null);
  const slider = useRef<Slider>(null);

  const shouldReplay = () => {
    const onLastCard = currentIndex === lastIndex;

    return autoplay && !infinite && onLastCard && !hasUserInteractedRef.current;
  };

  const replay = () => {
    timeoutIdRef.current = window.setTimeout(() => {
      if (slider.current) {
        slider.current.slickGoTo(FIRST_INDEX);
      }
    }, autoplaySpeed);
  };

  const updateLastIndex = () => {
    const updatedLastIndex = getLastIndex();

    if (lastIndex !== updatedLastIndex) {
      setLastIndex(updatedLastIndex);
    }

    if (slider.current && currentIndex > updatedLastIndex) {
      slider.current.slickGoTo(updatedLastIndex);
    }
  };

  useEffect(() => {
    if (shouldReplay()) {
      replay();
    }
    updateLastIndex();
  });

  const onCardChange = (_oldIndex: number, nextIndex: number) => {
    timeoutIdRef.current = null;
    setCurrentIndex(nextIndex);
  };

  const onUserInteraction = () => {
    if (timeoutIdRef.current) {
      clearTimeout(timeoutIdRef.current);
    }
    hasUserInteractedRef.current = true;

    if (slider.current) {
      slider.current.slickPause();
    }
  };

  const carouselSettings = {
    ...BASE_SLIDER_CONFIG,
    arrows: !hideArrows,
    autoplay,
    autoplaySpeed,
    beforeChange: onCardChange,
    centerMode: numCardsVisible > 1 || infinite ? false : centerMode,
    dots: !hideDots && !bottomRightAlignedArrows,
    infinite,
    nextArrow: (
      <Arrow
        bottomRightAlignedArrows={bottomRightAlignedArrows}
        disabled={currentIndex === lastIndex && !infinite}
        next
        onClick={onUserInteraction}
      />
    ),
    onSwipe: onUserInteraction,
    prevArrow: (
      <Arrow
        bottomRightAlignedArrows={bottomRightAlignedArrows}
        disabled={currentIndex === FIRST_INDEX && !infinite}
        onClick={onUserInteraction}
        prev
      />
    ),
    slidesToShow: numCardsVisible,
  };

  return (
    <OuterContainer numCardsVisible={numCardsVisible}>
      <InnerContainer carouselType={carouselType} onClick={onUserInteraction}>
        {/* eslint-disable-next-line react/jsx-props-no-spreading */}
        <Slider ref={slider} {...carouselSettings}>
          {children}
        </Slider>
      </InnerContainer>
    </OuterContainer>
  );
};

Carousel.Card = Card;

Carousel.propTypes = {
  autoplay: PropTypes.bool,
  autoplaySpeed: PropTypes.number,
  bottomRightAlignedArrows: PropTypes.bool,
  carouselType: PropTypes.oneOf(['primary', 'secondary']),
  centerMode: PropTypes.bool,
  children: PropTypes.arrayOf(PropTypes.node).isRequired,
  hideArrows: PropTypes.bool,
  hideDots: PropTypes.bool,
  infinite: PropTypes.bool,
  numCardsVisible: PropTypes.number.isRequired,
};
