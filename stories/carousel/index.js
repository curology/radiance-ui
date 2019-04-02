import React from 'react';
import { storiesOf } from '@storybook/react';
import { withDocs } from 'storybook-readme';
import {
  withKnobs,
  text,
  select,
  number,
  boolean,
} from '@storybook/addon-knobs';
import styled from '@emotion/styled';
import { css } from '@emotion/core';

import CarouselReadme from 'docs/carousel.md';
import { Carousel, Typography } from 'src/shared-components';
import { SPACING, COLORS, CAROUSEL_CONTAINER_SIZES } from 'src/constants';

const MainContainer = styled.div`
  text-align: left;
`;

const FlexContainer = styled.section`
  display: flex;
  flex-flow: row wrap;
  justify-content: flex-start;
  align-items: center;
`;

const CarouselContainer = styled.div`
  max-width: ${({ width }) => CAROUSEL_CONTAINER_SIZES[width]};
  background-color: ${({ bgColor }) => bgColor || COLORS.background};
  margin: ${SPACING.small} ${SPACING.base};
  padding: ${SPACING.small} 0;
`;

const Header = styled.h3`
  margin-bottom: ${SPACING.small};
  text-align: center;
`;

const Card = styled(Carousel.Card)`
  background-color: ${COLORS.border};
  display: flex !important;
  justify-content: center;
  align-items: center;
  padding: ${SPACING.base};
`;

const cards = [
  <Card key={1}>Card 1</Card>,
  <Card key={2}>Card 2</Card>,
  <Card key={3}>Card 3</Card>,
  <Card key={4}>Card 4</Card>,
];

const stories = storiesOf('Carousel', module);
stories.addDecorator(withKnobs);

stories.add(
  'Usage',
  withDocs(CarouselReadme, () => (
    <MainContainer>
      <Typography.Heading>Examples:</Typography.Heading>

      <FlexContainer>
        <CarouselContainer width="oneCard">
          <Header>Default - 1 card</Header>
          <Carousel numCardsVisible={1}>{cards}</Carousel>
        </CarouselContainer>

        <CarouselContainer width="twoCards">
          <Header>2 cards - Infinite</Header>
          <Carousel numCardsVisible={2} infinite>
            {cards}
          </Carousel>
        </CarouselContainer>

        <CarouselContainer width="threeCards">
          <Header>Default - 3 cards</Header>
          <Carousel numCardsVisible={3}>{cards}</Carousel>
        </CarouselContainer>

        <CarouselContainer width="oneCard">
          <Header>Autoplay - 5 seconds is default speed</Header>
          <Carousel numCardsVisible={1} autoplay>
            {cards}
          </Carousel>
        </CarouselContainer>

        <CarouselContainer width="oneCard">
          <Header>Autoplay Infinite</Header>
          <Carousel numCardsVisible={1} autoplay infinite>
            {cards}
          </Carousel>
        </CarouselContainer>

        <CarouselContainer width="oneCard">
          <Header>Hide Dots</Header>
          <Carousel numCardsVisible={1} hideDots>
            {cards}
          </Carousel>
        </CarouselContainer>

        <CarouselContainer width="oneCard">
          <Header>Hide Arrows (swipe to navigate)</Header>
          <Carousel numCardsVisible={1} hideArrows>
            {cards}
          </Carousel>
        </CarouselContainer>

        <CarouselContainer width="oneCard" bgColor={COLORS.lavender100}>
          <Header>Secondary Style - dots are white</Header>
          <Carousel numCardsVisible={1} carouselType="secondary">
            {cards}
          </Carousel>
        </CarouselContainer>
      </FlexContainer>

      <Typography.Heading
        css={css`
          margin-top: ${SPACING.base};
        `}
      >
        With Knobs:
      </Typography.Heading>

      <CarouselContainer
        width={select(
          'Container width',
          ['oneCard', 'twoCards', 'threeCards'],
          'oneCard'
        )}
        bgColor={text('Background color', COLORS.background)}
      >
        <Carousel
          autoplay={boolean('autoplay', true)}
          autoplaySpeed={number('autoplaySpeed, in milliseconds', 5000)}
          carouselType={select(
            'carouselType',
            ['primary', 'secondary'],
            'primary'
          )}
          centerMode={boolean('centerMode', true)}
          hideArrows={boolean('hideArrows', false)}
          hideDots={boolean('hideDots', false)}
          infinite={boolean('infinite', false)}
          numCardsVisible={number('numCardsVisible', 1)}
        >
          {cards}
        </Carousel>
      </CarouselContainer>
    </MainContainer>
  ))
);
