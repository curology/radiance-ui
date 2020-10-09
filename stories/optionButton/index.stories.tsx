import React from 'react';
import { text, select, boolean } from '@storybook/addon-knobs';
import MinusIcon from 'src/svgs/icons/minus-icon.svg';
import AcneGlyph from 'src/svgs/glyphs/acne-glyph.svg';
import PlusIcon from 'src/svgs/icons/plus-icon.svg';
import { OptionButton } from 'src/shared-components';
import styled from '@emotion/styled';
import {
  Title,
  Primary,
  ArgsTable,
  Stories,
  Description,
  Heading,
  Source,
} from '@storybook/addon-docs/blocks';

const noop = () => undefined;

const ExampleContainer = styled.div`
  margin: 0 auto;
  max-width: 350px;
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
`;

export const Interactive = () => {
  const [active, setActive] = React.useState('');

  const onClick = (value: string) => () => setActive(value);

  return (
    <ExampleContainer>
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
    </OptionsContainer>
  </FlexContainer>
);

export const WithControls = () => (
  <FlexContainer>
    <OptionsContainer>
      <ExampleContainer>
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

export default {
  title: 'OptionButton',
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
          <Primary />
          <ArgsTable />
          <Stories />
        </React.Fragment>
      ),
    },
  },
};
