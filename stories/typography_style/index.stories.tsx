import React from 'react';
import { TYPOGRAPHY_STYLE } from 'src/shared-components';
import {
  Title,
  Primary,
  Description,
  Source,
  Heading,
} from '@storybook/addon-docs/blocks';

export const Usage = () => (
  <React.Fragment>
    <div css={TYPOGRAPHY_STYLE.display}>display</div>
    <div css={TYPOGRAPHY_STYLE.heading}>heading</div>
    <div css={TYPOGRAPHY_STYLE.title}>title</div>
    <div css={TYPOGRAPHY_STYLE.body}>body</div>
    <div css={TYPOGRAPHY_STYLE.caption}>caption</div>
    <div css={TYPOGRAPHY_STYLE.label}>label</div>
    <div css={TYPOGRAPHY_STYLE.error}>error</div>
    <div css={TYPOGRAPHY_STYLE.success}>success</div>
    <div>
      <span css={TYPOGRAPHY_STYLE.link}>link</span>
    </div>
    <div css={TYPOGRAPHY_STYLE.button}>button</div>
  </React.Fragment>
);

export default {
  title: 'Components/TYPOGRAPHY_STYLE',
  parameters: {
    docs: {
      page: () => (
        <React.Fragment>
          <Title />
          <Description>
            This import is meant to be used to pull in css of the base
            typography styles and used in composing Emotion components.
          </Description>
          <Description>
            These are not React components. They are Emotion css styles that can
            be used to compose the exact style the design calls for.
          </Description>
          <Heading>Usage:</Heading>
          <Source
            language="tsx"
            code={"import { TYPOGRAPHY_STYLE } from 'radiance-ui';"}
          />
          <Primary />
        </React.Fragment>
      ),
    },
  },
};
