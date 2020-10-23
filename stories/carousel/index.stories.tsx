import React from 'react';
import styled from '@emotion/styled';
import {
  ArgsTable,
  Description,
  Heading,
  Source,
  Stories,
  Title,
} from '@storybook/addon-docs/blocks';
import { Carousel } from 'src/shared-components';
import {
  text, select, number, boolean, 
} from '@storybook/addon-knobs';
import { ANIMATION, COLORS, SPACER } from 'src/constants';
import type { Meta } from '@storybook/react';

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
  <Card key={5}>Card 5</Card>,
];

export const OneCard = () => <Carousel numCardsVisible={1}>{cards}</Carousel>;

export const TwoCardsInfinite = () => (
  <Carousel numCardsVisible={2} infinite>
    {cards}
  </Carousel>
);

export const ThreeCards = () => (
  <Carousel numCardsVisible={3}>{cards}</Carousel>
);

export const Autoplay5Seconds = () => (
  <Carousel numCardsVisible={1} autoplay>
    {cards}
  </Carousel>
);

export const AutoplayInfinite = () => (
  <Carousel numCardsVisible={1} autoplay infinite>
    {cards}
  </Carousel>
);

export const HideDots = () => (
  <Carousel numCardsVisible={1} hideDots>
    {cards}
  </Carousel>
);

export const HideArrows = () => (
  <Carousel numCardsVisible={1} hideArrows>
    {cards}
  </Carousel>
);

HideArrows.storyName = 'Hide Arrows (swipe to navigate)';

export const BottomRightAlignedArrows = () => (
  <Carousel numCardsVisible={2} bottomRightAlignedArrows>
    {cards}
  </Carousel>
);

const CarouselContainer = styled.div<{ bgColor?: string }>`
  display: flex;
  height: 150px;
  width: 375px;
  align-items: center;
  background-color: ${({ bgColor }) => bgColor || COLORS.background};
`;

export const SecondaryStyle = () => (
  <CarouselContainer bgColor={COLORS.secondary}>
    <Carousel numCardsVisible={1} carouselType="secondary">
      {cards}
    </Carousel>
  </CarouselContainer>
);

SecondaryStyle.storyName = 'Secondary Style (all dots are white)';

export const WithControls = () => (
  <CarouselContainer bgColor={text('Background color', COLORS.background)}>
    <Carousel
      autoplay={boolean('autoplay', true)}
      autoplaySpeed={number('autoplaySpeed, in milliseconds', 5000)}
      carouselType={select('carouselType', ['primary', 'secondary'], 'primary')}
      centerMode={boolean('centerMode', true)}
      hideArrows={boolean('hideArrows', false)}
      bottomRightAlignedArrows={boolean('bottomRightAlignedArrows', false)}
      hideDots={boolean('hideDots', false)}
      infinite={boolean('infinite', false)}
      numCardsVisible={number('numCardsVisible', 1) as 1 | 2 | 3}
    >
      {cards}
    </Carousel>
  </CarouselContainer>
);

WithControls.parameters = {
  chromatic: { disable: true },
};

export default {
  title: 'Components/Carousel',
  component: Carousel,
  parameters: {
    /**
     * There is visual jank when this component loads--this reduces brittleness in Chromatic
     */
    chromatic: { delay: parseInt(ANIMATION.defaultTiming, 10) },
    docs: {
      page: () => (
        <React.Fragment>
          <Title />
          <Description />
          <Heading>Usage:</Heading>
          <Source
            language="tsx"
            code={"import { Carousel } from 'radiance-ui';"}
          />
          <Heading>Props:</Heading>
          <ArgsTable />
          <Stories includePrimary />
        </React.Fragment>
      ),
    },
  },
} as Meta;
