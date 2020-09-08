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
import CarouselReadme from 'docs/carousel';
import { Carousel, Typography } from 'src/shared-components';
import { SPACER, COLORS } from 'src/constants';

const MainContainer = styled.div`
  text-align: left;
`;

const FlexContainer = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: flex-start;
  align-items: center;
`;

const CarouselContainer = styled.div`
  background-color: ${({ bgColor }) => bgColor || COLORS.background};
  margin: ${SPACER.medium} ${SPACER.large};
  padding: ${SPACER.medium} 0;
`;

const Header = styled.h3`
  margin-bottom: ${SPACER.medium};
  text-align: center;
`;

const Card = styled(Carousel.Card)`
  background-color: ${COLORS.border};
  text-align: center;
  padding: ${SPACER.large};
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
        <CarouselContainer>
          <Header>Default - 1 card</Header>
          <Carousel numCardsVisible={1}>{cards}</Carousel>
        </CarouselContainer>

        <CarouselContainer>
          <Header>2 cards - Infinite</Header>
          <Carousel numCardsVisible={2} infinite>
            {cards}
          </Carousel>
        </CarouselContainer>

        <CarouselContainer>
          <Header>Default - 3 cards</Header>
          <Carousel numCardsVisible={3}>{cards}</Carousel>
        </CarouselContainer>

        <CarouselContainer>
          <Header>Autoplay - 5 seconds is default speed</Header>
          <Carousel numCardsVisible={1} autoplay>
            {cards}
          </Carousel>
        </CarouselContainer>

        <CarouselContainer>
          <Header>Autoplay Infinite</Header>
          <Carousel numCardsVisible={1} autoplay infinite>
            {cards}
          </Carousel>
        </CarouselContainer>

        <CarouselContainer>
          <Header>Hide Dots</Header>
          <Carousel numCardsVisible={1} hideDots>
            {cards}
          </Carousel>
        </CarouselContainer>

        <CarouselContainer>
          <Header>Hide Arrows (swipe to navigate)</Header>
          <Carousel numCardsVisible={1} hideArrows>
            {cards}
          </Carousel>
        </CarouselContainer>

        <CarouselContainer>
          <Header>Bottom Right Aligned Arrows</Header>
          <Carousel numCardsVisible={1} bottomRightAlignedArrows>
            {cards}
          </Carousel>
        </CarouselContainer>

        <CarouselContainer bgColor={COLORS.lavender100}>
          <Header>Secondary Style - dots are white</Header>
          <Carousel numCardsVisible={1} carouselType="secondary">
            {cards}
          </Carousel>
        </CarouselContainer>
      </FlexContainer>

      <Typography.Heading
        css={css`
          margin-top: ${SPACER.large};
        `}
      >
        With Knobs:
      </Typography.Heading>

      <FlexContainer>
        <CarouselContainer
          bgColor={text('Background color', COLORS.background)}
        >
          <Carousel
            autoplay={boolean('autoplay', true)}
            autoplaySpeed={number('autoplaySpeed, in milliseconds', 5000)}
            carouselType={select(
              'carouselType',
              ['primary', 'secondary'],
              'primary',
            )}
            centerMode={boolean('centerMode', true)}
            hideArrows={boolean('hideArrows', false)}
            bottomRightAlignedArrows={boolean(
              'bottomRightAlignedArrows',
              false,
            )}
            hideDots={boolean('hideDots', false)}
            infinite={boolean('infinite', false)}
            numCardsVisible={number('numCardsVisible', 1)}
          >
            {cards}
          </Carousel>
        </CarouselContainer>
      </FlexContainer>
    </MainContainer>
  )),
);
