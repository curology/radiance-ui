import React from 'react';
import { storiesOf } from '@storybook/react';
import { withDocs } from 'storybook-readme';
import { withKnobs, text, select, boolean } from '@storybook/addon-knobs';
import styled from '@emotion/styled';

import AcneGlyph from 'src/svgs/glyphs/acne-glyph.svg';
import PlusIcon from 'src/svgs/icons/plus-icon.svg';
import OptionButtonReadme from 'docs/optionButton.md';
import { OptionButton, Typography } from 'src/shared-components';
import { SPACER } from 'src/constants';

import OptionButtonExample from './optionButtonExample';

const MainContainer = styled.div`
  text-align: left;
  > h2 {
    margin-bottom: ${SPACER.large};
  }
`;

const FlexContainer = styled.div`
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-around;
  align-items: flex-start;
`;

const OptionsContainer = styled.div`
  > div {
    width: 350px;
  }
`;

const stories = storiesOf('Option Button', module);
stories.addDecorator(withKnobs);

stories.add(
  'Usage',
  withDocs(OptionButtonReadme, () => (
    <MainContainer>
      <Typography.Heading>Interactive Example:</Typography.Heading>
      <OptionButtonExample />
      <Typography.Heading>Examples:</Typography.Heading>
      <FlexContainer>
        <OptionsContainer>
          <OptionButton
            text="Checkbox helper text"
            onClick={() => {}}
            optionType="checkbox"
            type="primary"
          />
          <OptionButton
            text="Checkbox helper text"
            onClick={() => {}}
            optionType="checkbox"
            type="primary"
            icon={<AcneGlyph width={32} height={32} />}
          />
          <OptionButton
            text="Main text"
            subtext="subtext"
            onClick={() => {}}
            optionType="checkbox"
            type="primary"
            icon={<PlusIcon />}
          />
          <OptionButton
            selected
            text="Checkbox helper text"
            onClick={() => {}}
            optionType="checkbox"
            type="primary"
          />
          <OptionButton
            selected
            text="Checkbox helper text"
            onClick={() => {}}
            optionType="checkbox"
            type="primary"
            icon={<AcneGlyph width={32} height={32} />}
          />
        </OptionsContainer>
        <OptionsContainer>
          <OptionButton
            text="Radio helper text"
            onClick={() => {}}
            optionType="radio"
            type="primary"
          />
          <OptionButton
            text="Radio helper text"
            onClick={() => {}}
            optionType="radio"
            type="primary"
            icon={<AcneGlyph width={32} height={32} />}
          />
          <OptionButton
            text="Main Text"
            subtext="subtext"
            onClick={() => {}}
            optionType="radio"
            type="primary"
            icon={<PlusIcon />}
          />
          <OptionButton
            selected
            text="Radio helper text"
            onClick={() => {}}
            optionType="radio"
            type="primary"
          />
          <OptionButton
            selected
            text="Radio helper text"
            onClick={() => {}}
            optionType="radio"
            type="primary"
            icon={<AcneGlyph width={32} height={32} />}
          />
        </OptionsContainer>
      </FlexContainer>
      <Typography.Heading>With Knobs:</Typography.Heading>
      <FlexContainer>
        <OptionsContainer>
          <OptionButton
            text={text('text', 'Helper text')}
            subtext={text('subtext', 'subtext')}
            onClick={() => {}}
            optionType={select('optionType', ['radio', 'checkbox'], 'checkbox')}
            type={select('type', ['primary', 'secondary'], 'primary')}
            selected={boolean('selected', false)}
          />
          <OptionButton
            text={text('text', 'Helper text')}
            subtext={text('subtext', 'subtext')}
            onClick={() => {}}
            optionType={select('optionType', ['radio', 'checkbox'], 'checkbox')}
            type={select('type', ['primary', 'secondary'], 'primary')}
            selected={boolean('selected', false)}
            icon={<AcneGlyph width={32} height={32} />}
          />
        </OptionsContainer>
      </FlexContainer>
    </MainContainer>
  ))
);
