import styled, { css } from 'react-emotion';
import round from 'lodash.round';

import { COLORS, TYPOGRAPHY } from 'src/constants';

const displayStyle = css`
  color: ${COLORS.primary};
  font-size: ${TYPOGRAPHY.fontSize.display};
  font-weight: ${TYPOGRAPHY.fontWeight.bold};
  line-height: ${round(48 / 36, 2)};
`;

const headingStyle = css`
  color: ${COLORS.primary};
  font-size: ${TYPOGRAPHY.fontSize.heading};
  font-weight: ${TYPOGRAPHY.fontWeight.bold};
  line-height: ${round(40 / 24, 2)};
`;

const titleStyle = css`
  color: ${COLORS.primary};
  font-size: ${TYPOGRAPHY.fontSize.title};
  line-height: ${round(32 / 20, 2)};
  font-weight: ${TYPOGRAPHY.fontWeight.bold};
`;

export const baseBodyStyles = `
  color: ${COLORS.purpleTint1};
  font-size: ${TYPOGRAPHY.fontSize.body};
  line-height: ${round(28 / 16, 2)};
`;

const bodyStyle = css(baseBodyStyles);

const captionStyle = css`
  color: ${COLORS.purpleTint2};
  font-size: ${TYPOGRAPHY.fontSize.caption};
  line-height: ${round(24 / 14, 2)};
`;

const errorStyle = css`
  ${captionStyle};
  color: ${COLORS.accent};
`;

const successStyle = css`
  ${captionStyle};
  color: ${COLORS.success};
`;

const labelStyle = css`
  color: ${COLORS.purpleTint1};
  font-size: ${TYPOGRAPHY.fontSize.label};
  line-height: ${round(20 / 12, 2)};
`;

const buttonStyle = css`
  ${labelStyle};
  font-weight: ${TYPOGRAPHY.fontWeight.bold};
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

export const style =  {
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
};

const ButtonText = styled.span(buttonStyle);
const Caption = styled.p(captionStyle);
const Display = styled.h1(displayStyle);
const ErrorText = styled.p(errorStyle);
const Heading = styled.h2(headingStyle);
const Label = styled.label(labelStyle);
const LinkTag = styled.a(linkStyle);
const SuccessText = styled.p(successStyle);
const Title = styled.h3(titleStyle);

export default {
  ButtonText,
  Caption,
  Display,
  ErrorText,
  Heading,
  Label,
  LinkTag,
  SuccessText,
  Title,
};
