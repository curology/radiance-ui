import React from 'react';
import { css } from '@emotion/core';

import { Button, Typography } from 'src/shared-components';

// eslint-disable-next-line react/prop-types
export default ({ title, children }) => (
  <Button.Container css={css`display: block; padding-bottom: 50px;`}>
    <Typography.Heading css={css`text-align: left;`}>{title}</Typography.Heading>
    {children}
  </Button.Container>
);