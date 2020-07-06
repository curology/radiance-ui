import React from 'react';
import { css } from '@emotion/core';
import { Button, Typography } from 'src/shared-components';

const Container = ({
  title,
  children,
}: {
  title?: string;
  children: React.ReactNode;
}) => (
  <Button.Container
    css={css`
      display: block;
      padding-bottom: 50px;
    `}
  >
    <Typography.Heading
      css={css`
        text-align: left;
      `}
    >
      {title}
    </Typography.Heading>
    {children}
  </Button.Container>
);

export default Container;
