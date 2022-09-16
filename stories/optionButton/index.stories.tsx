import React from 'react';
import { boolean, select, text } from '@storybook/addon-knobs';
import { OptionButton } from 'src/shared-components';
import styled from '@emotion/styled';
import {
  ArgsTable,
  Description,
  Heading,
  Source,
  Stories,
  Title,
} from '@storybook/addon-docs/blocks';
import type { Meta } from '@storybook/react';
import personImg from 'shared/lifestyleImg.jpg';

import { AcneGlyph, MinusIcon, PlusIcon } from '../../src/icons';
import { BREAKPOINTS } from '../../src/constants';

const noop = () => undefined;

const ExampleContainer = styled.div<{ containsImage: boolean }>`
  margin: 0 auto;
  max-width: ${({ containsImage }) => (containsImage ? 'unset' : '350px')};
  display: ${({ containsImage }) => (containsImage ? 'flex' : 'unset')};
  justify-content: ${({ containsImage }) =>
    containsImage ? 'space-between' : 'unset'};
  flex-wrap: ${({ containsImage }) => (containsImage ? 'wrap' : 'unset')};
`;

const FlexContainer = styled.div`
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-around;
  align-items: flex-start;
`;

const OptionsContainer = styled.div`
  display: flex;
  flex-direction: column;

  > button {
    width: 350px;
  }

  > div {
    width: 350px;
  }
`;

export const Interactive = () => {
  const [active, setActive] = React.useState('');

  const onClick = (value: string) => () => {
    setActive(value);
  };

  return (
    <ExampleContainer containsImage={false}>
      <OptionButton
        selected={active === 'improving'}
        text="Improving"
        subtext="fewer issues"
        onClick={onClick('improving')}
        optionType="radio"
        buttonType="primary"
        icon={<PlusIcon />}
      />
      <OptionButton
        selected={active === 'worsening'}
        text="Worsening"
        subtext="more issues than usual"
        onClick={onClick('worsening')}
        optionType="radio"
        buttonType="primary"
        icon={<MinusIcon />}
      />
    </ExampleContainer>
  );
};

Interactive.parameters = {
  chromatic: { viewports: [BREAKPOINTS.xs] },
};

export const Checkboxes = () => (
  <FlexContainer>
    <OptionsContainer>
      <OptionButton
        text="Checkbox helper text"
        onClick={noop}
        optionType="checkbox"
        buttonType="primary"
      />
      <OptionButton
        text="Checkbox helper text"
        onClick={noop}
        optionType="checkbox"
        buttonType="primary"
        icon={<AcneGlyph width={32} height={32} />}
      />
      <OptionButton
        text="Main text"
        subtext="subtext"
        onClick={noop}
        optionType="checkbox"
        buttonType="primary"
        icon={<PlusIcon />}
      />
      <OptionButton
        selected
        text="Checkbox helper text"
        onClick={noop}
        optionType="checkbox"
        buttonType="primary"
      />
      <OptionButton
        selected
        text="Checkbox helper text"
        onClick={noop}
        optionType="checkbox"
        buttonType="primary"
        icon={<AcneGlyph width={32} height={32} />}
      />
      <OptionButton
        selected
        text="Checkbox helper text"
        onClick={noop}
        optionType="checkbox"
        buttonType="secondary"
      />
      <OptionButton
        selected
        text="Checkbox helper text"
        onClick={noop}
        optionType="checkbox"
        buttonType="secondary"
        icon={<AcneGlyph width={32} height={32} />}
      />
    </OptionsContainer>
  </FlexContainer>
);

export const RadioButtons = () => (
  <FlexContainer>
    <OptionsContainer>
      <OptionButton
        text="Radio helper text"
        onClick={noop}
        optionType="radio"
        buttonType="primary"
      />
      <OptionButton
        text="Radio helper text"
        onClick={noop}
        optionType="radio"
        buttonType="primary"
        icon={<AcneGlyph width={32} height={32} />}
      />
      <OptionButton
        text="Main Text"
        subtext="subtext"
        onClick={noop}
        optionType="radio"
        buttonType="primary"
        icon={<PlusIcon />}
      />
      <OptionButton
        selected
        text="Radio helper text"
        onClick={noop}
        optionType="radio"
        buttonType="primary"
      />
      <OptionButton
        selected
        text="Radio helper text"
        onClick={noop}
        optionType="radio"
        buttonType="primary"
        icon={<AcneGlyph width={32} height={32} />}
      />
      <OptionButton
        selected
        text="Radio helper text"
        onClick={noop}
        optionType="radio"
        buttonType="secondary"
      />
      <OptionButton
        selected
        text="Radio helper text"
        onClick={noop}
        optionType="radio"
        buttonType="secondary"
        icon={<AcneGlyph width={32} height={32} />}
      />
    </OptionsContainer>
  </FlexContainer>
);

export const OptionButtonNotClickable = () => (
  <FlexContainer>
    <OptionsContainer>
      <OptionButton.NotClickable
        text="Radio helper text"
        optionType="radio"
        icon={<AcneGlyph width={32} height={32} />}
      />
      <OptionButton.NotClickable
        text="Checkbox helper text"
        subtext="subtext"
        optionType="checkbox"
        icon={<AcneGlyph width={32} height={32} />}
      />
    </OptionsContainer>
  </FlexContainer>
);

OptionButtonNotClickable.parameters = {
  chromatic: { viewports: [BREAKPOINTS.xs] },
};

export const WithControls = () => (
  <FlexContainer>
    <OptionsContainer>
      <ExampleContainer containsImage={false}>
        <OptionButton
          text={text('text', 'Helper text')}
          subtext={text('subtext', 'subtext')}
          onClick={noop}
          optionType={select('optionType', ['radio', 'checkbox'], 'checkbox')}
          buttonType={select('buttonType', ['primary', 'secondary'], 'primary')}
          selected={boolean('selected', false)}
        />
        <OptionButton
          text={text('text', 'Helper text')}
          subtext={text('subtext', 'subtext')}
          onClick={noop}
          optionType={select('optionType', ['radio', 'checkbox'], 'checkbox')}
          buttonType={select('buttonType', ['primary', 'secondary'], 'primary')}
          selected={boolean('selected', false)}
          icon={<AcneGlyph width={32} height={32} />}
        />
      </ExampleContainer>
    </OptionsContainer>
  </FlexContainer>
);

WithControls.parameters = {
  chromatic: { disable: true },
};

export const WithImage = () => (
  <FlexContainer>
    <OptionsContainer>
      <ExampleContainer containsImage>
        <OptionButton
          text="Helper text"
          subtext="Lorem ipsum dolor sit amet, consectetur adipiscing elit, et dolore magna aliqua."
          onClick={noop}
          optionType="radio"
          image={personImg}
          borderRadius="small"
          textContainerHeight={150}
        />
        <OptionButton
          text="Helper text"
          onClick={noop}
          optionType="radio"
          image={personImg}
          borderRadius="small"
          textContainerHeight={150}
        />
      </ExampleContainer>
    </OptionsContainer>
  </FlexContainer>
);

WithImage.parameters = {
  chromatic: { disable: true },
};

interface OptionButtonStories extends Meta {
  title: string;
}

const OPTION_BUTTON_STORIES: OptionButtonStories = {
  title: 'Components/OptionButton',
  component: OptionButton,
  parameters: {
    docs: {
      page: () => (
        <React.Fragment>
          <Title />
          <Description />
          <Heading>Usage:</Heading>
          <Source
            language="tsx"
            code={"import { OptionButton } from 'radiance-ui';"}
          />
          <Heading>Props:</Heading>
          <ArgsTable />
          <Stories includePrimary />
        </React.Fragment>
      ),
    },
  },
};

export default OPTION_BUTTON_STORIES;
