import styled from '@emotion/styled';
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

export type ContainerType = 'clickable' | 'message' | 'none';

const getContainerTypeStyles = (theme: ThemeType, type?: ContainerType) => {
  switch (type) {
    case 'message':
      return messageStyle(theme);
    case 'clickable':
      return clickableStyle(theme);
    case 'none':
      return ``;
    default:
      return ``;
  }
};

const containerStyles = (theme: ThemeType, type?: ContainerType) => `
  background-color: ${theme.COLORS.white};
  border: 1px solid ${theme.COLORS.border};

  ${getContainerTypeStyles(theme, type)}
`;

const Section = styled.div`
  padding: ${SPACER.large};

  ${MEDIA_QUERIES.lgUp} {
    padding-left: ${SPACER.x2large};
    padding-right: ${SPACER.x2large};
  }
`;

const Divider = styled.div`
  margin: 0 ${SPACER.large};
  border-bottom: ${({ theme }) => `1px solid ${theme.COLORS.border}`};

  ${MEDIA_QUERIES.lgUp} {
    margin: 0 ${SPACER.x2large};
  }
`;

const Image = styled.img`
  width: 100%;
  overflow: hidden;
  object-fit: cover;
`;

const ContainerComponentForTypesOnly = styled.div<{
  type?: ContainerType;
}>``;

type CompositeContainer = typeof ContainerComponentForTypesOnly & {
  Divider: typeof Divider;
  Image: typeof Image;
  Section: typeof Section;
};

// Our reliance on setting dot.notation subcomponents directly on the
// styled component is not well supported. CompositeContainer defines those
// subcomponents ahead of time to account for styled.div limitations.
const Container = styled.div<{ type?: ContainerType }>`
  ${({ theme, type }) => containerStyles(theme, type)};
` as CompositeContainer;

Container.Divider = Divider;
Container.Image = Image;
Container.Section = Section;

Container.propTypes = {
  type: PropTypes.oneOf(['message', 'clickable', 'none']),
};

export default { containerStyles, Container };
