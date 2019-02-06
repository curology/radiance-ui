import React from 'react';
import { withDocs } from 'storybook-readme';
import { storiesOf } from '@storybook/react';
import { css } from '@emotion/core';

import TypographyStyleReadme from 'docs/typography_style.md';
import { TYPOGRAPHY_STYLE } from 'src/shared-components';

const stories = storiesOf('TYPOGRAPHY_STYLE', module);

stories.add(
  'Usage',
  withDocs(TypographyStyleReadme, () => (
    <div css={css`text-align: left`}>
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
    </div>
  ))
);

