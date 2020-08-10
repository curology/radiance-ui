import React from 'react';
import PropTypes from 'prop-types';
import Slider from 'react-slick';

import Arrow from './arrow';
import { OuterContainer, InnerContainer, Card } from './style';

const BASE_SLIDER_CONFIG = {
  focusOnSelect: true,
  pauseOnHover: true,
  slidesToScroll: 1,
  variableWidth: true,
};

export type CarouselType = 'primary' | 'secondary';

type CarouselProps = {
  autoplay?: boolean;
  autoplaySpeed?: number;
  carouselType?: CarouselType;
  centerMode?: boolean;
  children: Array<React.ReactNode>;
  hideArrows?: boolean;
  hideDots?: boolean;
  infinite?: boolean;
  numCardsVisible: number;
};

type CarouselState = {
  currentIndex: number;
  lastIndex: number;
};

class Carousel extends React.Component<CarouselProps, CarouselState> {
  static Card = Card;

  static propTypes = {
    autoplay: PropTypes.bool,
    autoplaySpeed: PropTypes.number,
    carouselType: PropTypes.oneOf(['primary', 'secondary']),
    centerMode: PropTypes.bool,
    children: PropTypes.arrayOf(PropTypes.node).isRequired,
    hideArrows: PropTypes.bool,
    hideDots: PropTypes.bool,
    infinite: PropTypes.bool,
    numCardsVisible: PropTypes.number.isRequired,
  };

  static defaultProps = {
    autoplay: false,
    autoplaySpeed: 5000,
    carouselType: 'primary',
    centerMode: true,
    hideArrows: false,
    hideDots: false,
    infinite: false,
  };

  slider: React.RefObject<Slider> = React.createRef();

  timeoutId: number | null = null;

  userHasInteracted = false;

  constructor(props: CarouselProps) {
    super(props);

    this.state = {
      currentIndex: 0,
      lastIndex: this.getLastIndex(),
    };
  }

  componentDidUpdate() {
    if (this.shouldReplay) {
      this.replay();
    }

    this.updateLastIndex();
  }

  get shouldReplay() {
    const { autoplay, infinite } = this.props;
    const { currentIndex, lastIndex } = this.state;

    const onLastCard = currentIndex === lastIndex;

    return autoplay && !infinite && onLastCard && !this.userHasInteracted;
  }

  getLastIndex() {
    const { children, numCardsVisible } = this.props;
    const numberSlides = children.length;

    return numberSlides - numCardsVisible;
  }

  getCarouselSettings() {
    const { currentIndex, lastIndex } = this.state;
    const firstIndex = 0;

    const {
      autoplay,
      autoplaySpeed,
      centerMode,
      hideArrows,
      hideDots,
      infinite,
      numCardsVisible,
    } = this.props;

    const allowCenterMode = numCardsVisible > 1 || infinite;

    const settings = {
      ...BASE_SLIDER_CONFIG,
      arrows: !hideArrows,
      autoplay,
      autoplaySpeed,
      centerMode: allowCenterMode ? false : centerMode,
      dots: !hideDots,
      infinite,
      slidesToShow: numCardsVisible,
      beforeChange: this.onCardChange,
      onSwipe: this.onUserInteraction,
      prevArrow: (
        <Arrow
          prev
          disabled={currentIndex === firstIndex && !infinite}
          onClick={this.onUserInteraction}
        />
      ),
      nextArrow: (
        <Arrow
          next
          disabled={currentIndex === lastIndex && !infinite}
          onClick={this.onUserInteraction}
        />
      ),
    };

    return settings;
  }

  updateLastIndex = () => {
    const { lastIndex, currentIndex } = this.state;
    const updatedLastIndex = this.getLastIndex();

    if (lastIndex !== updatedLastIndex) {
      this.setState({ lastIndex: updatedLastIndex });
    }

    if (this.slider.current && currentIndex > updatedLastIndex) {
      this.slider.current.slickGoTo(updatedLastIndex);
    }
  };

  onCardChange = (_oldIndex: number, nextIndex: number) => {
    this.timeoutId = null;

    this.setState({
      currentIndex: nextIndex,
    });
  };

  onUserInteraction = () => {
    clearTimeout(this.timeoutId as number);
    this.userHasInteracted = true;

    if (this.slider.current) {
      this.slider.current.slickPause();
    }
  };

  replay() {
    const { autoplaySpeed } = this.props;
    const firstIndex = 0;

    const timeoutId = setTimeout(() => {
      if (this.slider.current) {
        this.slider.current.slickGoTo(firstIndex);
      }
    }, autoplaySpeed);

    this.timeoutId = timeoutId;
  }

  render() {
    const { children, carouselType = 'primary', numCardsVisible } = this.props;
    const settings = this.getCarouselSettings();

    return (
      <OuterContainer numCardsVisible={numCardsVisible}>
        <InnerContainer
          carouselType={carouselType}
          onClick={this.onUserInteraction}
        >
          {/* eslint-disable-next-line react/jsx-props-no-spreading */}
          <Slider ref={this.slider} {...settings}>
            {children}
          </Slider>
        </InnerContainer>
      </OuterContainer>
    );
  }
}

export default Carousel;
