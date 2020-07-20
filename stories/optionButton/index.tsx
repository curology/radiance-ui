import React from 'react';
import { storiesOf } from '@storybook/react';
import { withDocs } from 'storybook-readme';
import { withKnobs, text, select, boolean } from '@storybook/addon-knobs';
import styled from '@emotion/styled';

import AcneGlyph from 'src/svgs/glyphs/acne-glyph.svg';
import PlusIcon from 'src/svgs/icons/plus-icon.svg';
import OptionButtonReadme from 'docs/optionButton';
import { OptionButton, Typography } from 'src/shared-components';
import { SPACER } from 'src/constants';

import OptionButtonExample from './optionButtonExample';
import { ExampleContainer } from './style';

const MainContainer = styled.div`
  text-align: left;

  > h2 {
    margin-top: ${SPACER.large};
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
  display: flex;
  flex-direction: column;

  > button {
    width: 350px;
  }
`;

const stories = storiesOf('OptionButton', module);
stories.addDecorator(withKnobs);

const noop = () => undefined;

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
      <Typography.Heading>With Knobs:</Typography.Heading>
      <FlexContainer>
        <OptionsContainer>
          <ExampleContainer>
            <OptionButton
              text={text('text', 'Helper text')}
              subtext={text('subtext', 'subtext')}
              onClick={noop}
              optionType={select(
                'optionType',
                ['radio', 'checkbox'],
                'checkbox',
              )}
              buttonType={select('type', ['primary', 'secondary'], 'primary')}
              selected={boolean('selected', false)}
            />
            <OptionButton
              text={text('text', 'Helper text')}
              subtext={text('subtext', 'subtext')}
              onClick={noop}
              optionType={select(
                'optionType',
                ['radio', 'checkbox'],
                'checkbox',
              )}
              buttonType={select('type', ['primary', 'secondary'], 'primary')}
              selected={boolean('selected', false)}
              icon={<AcneGlyph width={32} height={32} />}
            />
          </ExampleContainer>
        </OptionsContainer>
      </FlexContainer>
    </MainContainer>
  )),
);
