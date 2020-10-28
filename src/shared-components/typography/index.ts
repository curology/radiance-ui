import { css } from '@emotion/core';
import styled from '@emotion/styled';
import round from 'lodash.round';

import { withDeprecationWarning } from '../../utils';
import { COLORS, TYPOGRAPHY_CONSTANTS } from '../../constants';

const displayStyle = css`
  color: ${COLORS.primary};
  font-size: ${TYPOGRAPHY_CONSTANTS.fontSize.display};
  font-weight: ${TYPOGRAPHY_CONSTANTS.fontWeight.bold};
  line-height: ${round(48 / 36, 2)};
`;

const headingStyle = css`
  color: ${COLORS.primary};
  font-size: ${TYPOGRAPHY_CONSTANTS.fontSize.heading};
  font-weight: ${TYPOGRAPHY_CONSTANTS.fontWeight.bold};
  line-height: ${round(40 / 24, 2)};
`;

const titleStyle = css`
  color: ${COLORS.primary};
  font-size: ${TYPOGRAPHY_CONSTANTS.fontSize.title};
  line-height: ${round(32 / 20, 2)};
  font-weight: ${TYPOGRAPHY_CONSTANTS.fontWeight.bold};
`;

export const baseBodyStyles = `
  color: ${COLORS.primaryTint1};
  font-size: ${TYPOGRAPHY_CONSTANTS.fontSize.body};
  line-height: ${round(28 / 16, 2)};
`;

const bodyStyle = css`
  ${baseBodyStyles};
`;

const captionStyle = css`
  color: ${COLORS.primaryTint2};
  font-size: ${TYPOGRAPHY_CONSTANTS.fontSize.caption};
  line-height: ${round(24 / 14, 2)};
`;

const errorStyle = css`
  ${captionStyle};
  color: ${COLORS.error};
`;

const successStyle = css`
  ${captionStyle};
  color: ${COLORS.success};
`;

const labelStyle = css`
  color: ${COLORS.primaryTint1};
  font-size: ${TYPOGRAPHY_CONSTANTS.fontSize.label};
  line-height: ${round(20 / 12, 2)};
`;

const buttonStyle = css`
  ${labelStyle};
  font-weight: ${TYPOGRAPHY_CONSTANTS.fontWeight.bold};
  letter-spacing: 1px;
  text-transform: uppercase;
`;

const linkStyle = css`
  border-bottom: 1px solid currentColor;
  cursor: pointer;
  text-decoration: none;
  color: inherit;

  opacity: 1;
  transition: opacity 350ms;

  &:hover {
    opacity: 0.6;
    transition: opacity 350ms;
  }
`;

export const style = {
  display: displayStyle,
  heading: headingStyle,
  title: titleStyle,
  body: bodyStyle,
  caption: captionStyle,
  error: errorStyle,
  success: successStyle,
  label: labelStyle,
  button: buttonStyle,
  link: linkStyle,
} as const;

const Button = styled.span(buttonStyle);
const Caption = styled.p(captionStyle);
const Display = styled.h1(displayStyle);
const ErrorComponent = styled.p(errorStyle);
const Heading = styled.h2(headingStyle);
const Label = styled.label(labelStyle);
const Link = styled.a(linkStyle);
const Success = styled.p(successStyle);
const Title = styled.h3(titleStyle);

export const Typography = {
  Button,
  Caption,
  Display,
  Error: ErrorComponent,
  Heading,
  Label,
  Link,
  Success,
  Title,

  // Deprecated legacy names
  LinkTag: Link,
  ButtonText: Button,
  SuccessText: Success,
  ErrorText: ErrorComponent,
} as const;

const deprecatedProperties = {
  LinkTag: 'LinkTag is deprecated. Use Link instead',
  ButtonText: 'ButtonText is deprecated. Use Button instead',
  SuccessText: 'SuccessText is deprecated. Use Success instead',
  ErrorText: 'ErrorText is deprecated. Use Error instead',
};

export default withDeprecationWarning(Typography, deprecatedProperties);
