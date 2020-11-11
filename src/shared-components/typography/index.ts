import styled from '@emotion/styled';
import round from 'lodash.round';

import { withDeprecationWarning } from '../../utils';
import { TYPOGRAPHY_CONSTANTS, ThemeType } from '../../constants';

const displayStyle = (theme: ThemeType) => `
  color: ${theme.COLORS.primary};
  font-size: ${TYPOGRAPHY_CONSTANTS.fontSize.display};
  font-weight: ${TYPOGRAPHY_CONSTANTS.fontWeight.bold};
  line-height: ${round(48 / 36, 2)};
`;

const headingStyle = (theme: ThemeType) => `
  color: ${theme.COLORS.primary};
  font-size: ${TYPOGRAPHY_CONSTANTS.fontSize.heading};
  font-weight: ${TYPOGRAPHY_CONSTANTS.fontWeight.bold};
  line-height: ${round(40 / 24, 2)};
`;

const titleStyle = (theme: ThemeType) => `
  color: ${theme.COLORS.primary};
  font-size: ${TYPOGRAPHY_CONSTANTS.fontSize.title};
  line-height: ${round(32 / 20, 2)};
  font-weight: ${TYPOGRAPHY_CONSTANTS.fontWeight.bold};
`;

export const baseBodyStyles = (theme: ThemeType) => `
  color: ${theme.COLORS.primaryTint1};
  font-size: ${TYPOGRAPHY_CONSTANTS.fontSize.body};
  line-height: ${round(28 / 16, 2)};
`;

const bodyStyle = (theme: ThemeType) => `
  ${baseBodyStyles(theme)}
`;

const captionStyle = (theme: ThemeType) => `
  color: ${theme.COLORS.primaryTint2};
  font-size: ${TYPOGRAPHY_CONSTANTS.fontSize.caption};
  line-height: ${round(24 / 14, 2)};
`;

const errorStyle = (theme: ThemeType) => `
  ${captionStyle(theme)}
  color: ${theme.COLORS.error};
`;

const successStyle = (theme: ThemeType) => `
  ${captionStyle(theme)}
  color: ${theme.COLORS.success};
`;

const labelStyle = (theme: ThemeType) => `
  color: ${theme.COLORS.primaryTint1};
  font-size: ${TYPOGRAPHY_CONSTANTS.fontSize.label};
  line-height: ${round(20 / 12, 2)};
`;

const buttonStyle = (theme: ThemeType) => `
  ${labelStyle(theme)}
  font-weight: ${TYPOGRAPHY_CONSTANTS.fontWeight.bold};
  letter-spacing: 1px;
  text-transform: uppercase;
`;

const linkStyle = () => `
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

const Button = styled.span`
  ${({ theme }) => buttonStyle(theme)}
`;
const Caption = styled.p`
  ${({ theme }) => captionStyle(theme)}
`;
const Display = styled.h1`
  ${({ theme }) => displayStyle(theme)}
`;
const ErrorComponent = styled.p`
  ${({ theme }) => errorStyle(theme)}
`;
const Heading = styled.h2`
  ${({ theme }) => headingStyle(theme)}
`;
const Label = styled.label`
  ${({ theme }) => labelStyle(theme)}
`;
const Link = styled.a`
  ${linkStyle()}
`;
const Success = styled.p`
  ${({ theme }) => successStyle(theme)}
`;
const Title = styled.h3`
  ${({ theme }) => titleStyle(theme)}
`;

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

const TYPOGRAPHY = withDeprecationWarning(Typography, deprecatedProperties);

export default TYPOGRAPHY;
