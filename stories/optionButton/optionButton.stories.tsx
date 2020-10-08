import React from 'react';
import { text, select, boolean } from '@storybook/addon-knobs';
import MinusIcon from 'src/svgs/icons/minus-icon.svg';
import AcneGlyph from 'src/svgs/glyphs/acne-glyph.svg';
import PlusIcon from 'src/svgs/icons/plus-icon.svg';
import { OptionButton } from 'src/shared-components';

import Style from './style';

const noop = () => undefined;

export const Interactive = () => {
  const [active, setActive] = React.useState('');

  const onClick = (value: string) => () => setActive(value);

  return (
    <Style.ExampleContainer>
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
    </Style.ExampleContainer>
  );
};

export const Checkboxes = () => (
  <Style.FlexContainer>
    <Style.OptionsContainer>
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
    </Style.OptionsContainer>
  </Style.FlexContainer>
);

export const RadioButtons = () => (
  <Style.FlexContainer>
    <Style.OptionsContainer>
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
    </Style.OptionsContainer>
  </Style.FlexContainer>
);

export const WithControls = () => (
  <Style.FlexContainer>
    <Style.OptionsContainer>
      <Style.ExampleContainer>
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
      </Style.ExampleContainer>
    </Style.OptionsContainer>
  </Style.FlexContainer>
);

export default {
  title: 'OptionButton',
  component: OptionButton,
};
