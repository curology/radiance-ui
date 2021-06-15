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
import { text, select, number, boolean } from '@storybook/addon-knobs';
import { SPACER } from 'src/constants';
import { useTheme } from '@emotion/react';
import type { Meta } from '@storybook/react';

const Card = styled(Carousel.Card)`
  background-color: ${({ theme }) => theme.COLORS.border};
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

// This test is brittle in Chromatic snapshot environment due to autoplay functionality
Autoplay5Seconds.parameters = {
  chromatic: { disable: true },
};

export const AutoplayInfinite = () => (
  <Carousel numCardsVisible={1} autoplay infinite>
    {cards}
  </Carousel>
);

// This test is brittle in Chromatic snapshot environment due to autoplay functionality
AutoplayInfinite.parameters = {
  chromatic: { disable: true },
};

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
  background-color: ${({ bgColor, theme }) =>
    bgColor ?? theme.COLORS.background};
`;

export const SecondaryStyle = () => {
  const theme = useTheme();

  return (
    <CarouselContainer bgColor={theme.COLORS.secondary}>
      <Carousel numCardsVisible={1} carouselType="secondary">
        {cards}
      </Carousel>
    </CarouselContainer>
  );
};

SecondaryStyle.storyName = 'Secondary Style (all dots are white)';

export const WithControls = () => {
  const theme = useTheme();

  return (
    <CarouselContainer
      bgColor={text('Background color', theme.COLORS.background)}
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
        bottomRightAlignedArrows={boolean('bottomRightAlignedArrows', false)}
        hideDots={boolean('hideDots', false)}
        infinite={boolean('infinite', false)}
        numCardsVisible={number('numCardsVisible', 1) as 1 | 2 | 3}
      >
        {cards}
      </Carousel>
    </CarouselContainer>
  );
};

WithControls.parameters = {
  chromatic: { disable: true },
};

/*
 * There is visual jank when this component loads--this reduces brittleness in Chromatic
 */
const CHROMATIC_OPTIONS = { chromatic: { delay: 2000 } } as const;

interface CarouselStories extends Meta {
  parameters: Meta['parameters'] & typeof CHROMATIC_OPTIONS;
}

const CAROUSEL_STORIES: CarouselStories = {
  title: 'Components/Carousel',
  component: Carousel,
  parameters: {
    ...CHROMATIC_OPTIONS,
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
};

export default CAROUSEL_STORIES;
