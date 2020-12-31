import { DetailedHTMLProps, HTMLAttributes } from 'react';
import styled, { StyledComponent } from '@emotion/styled';
import PropTypes from 'prop-types';

import { SPACER, MEDIA_QUERIES, ThemeType } from '../../constants';

const clickableStyle = (theme: ThemeType) => `
  box-shadow: ${theme.BOX_SHADOWS.clickable};
  cursor: pointer;
  transition: box-shadow 200ms;

  &:hover {
    box-shadow: ${theme.BOX_SHADOWS.clickableHover};
  }
`;

const messageStyle = (theme: ThemeType) => `
  border-radius: ${theme.BORDER_RADIUS.medium};
  box-shadow: ${theme.BOX_SHADOWS.clickable};
`;

export type ContainerType = 'clickable' | 'message';

const getContainerTypeStyles = (theme: ThemeType, type?: ContainerType) => {
  switch (type) {
    case 'message':
      return messageStyle(theme);
    case 'clickable':
      return clickableStyle(theme);
    default:
      return ``;
  }
};

export const containerStyles = (theme: ThemeType, type?: ContainerType) => `
  background-color: ${theme.COLORS.white};
  border: 1px solid ${theme.COLORS.border};

  ${getContainerTypeStyles(theme, type)}
`;

export const Section = styled.div`
  padding: ${SPACER.large};

  ${MEDIA_QUERIES.lgUp} {
    padding-left: ${SPACER.x2large};
    padding-right: ${SPACER.x2large};
  }
`;

export const Divider = styled.div`
  margin: 0 ${SPACER.large};
  border-bottom: ${({ theme }) => `1px solid ${theme.COLORS.border}`};

  ${MEDIA_QUERIES.lgUp} {
    margin: 0 ${SPACER.x2large};
  }
`;

export const Image = styled.img`
  width: 100%;
  overflow: hidden;
  object-fit: cover;
`;

/**
 * This is the type returned by `styled.div`
 *
 * @see `node_modules/@emotion/styled-base/types/index.d.ts`
 */
type StyledContainer = StyledComponent<
  DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>,
  {
    type?: ContainerType;
  },
  { theme?: ThemeType }
>;

type CompositeContainer = StyledContainer & {
  Section: typeof Section;
  Divider: typeof Divider;
  Image: typeof Image;
};

// Our reliance on setting dot.notation subcomponents directly on the
// styled component is not well supported. CompositeContainer defines those
// subcomponents ahead of time to account for styled.div limitations.
const Container = styled.div<{ type?: ContainerType }>`
  ${({ theme, type }) => containerStyles(theme, type)};
` as CompositeContainer;

Container.Section = Section;
Container.Divider = Divider;
Container.Image = Image;

Container.propTypes = {
  type: PropTypes.oneOf(['message', 'clickable']),
};

export { Container };
