import React from 'react';
import PropTypes from 'prop-types';

import Style from './style';

/**
 * TODO-TS: Determine behavior when prop is not provided
 */
type ContainerProps = {
  children: React.ReactNode;
  type?: 'clickable' | 'message';
};

export const Container = ({ children, type }: ContainerProps) => (
  <Style.Container type={type}>{children}</Style.Container>
);

Container.Section = Style.Section;
Container.Divider = Style.Divider;
Container.Image = Style.Image;

Container.propTypes = {
  children: PropTypes.node.isRequired,
  type: PropTypes.oneOf(['message', 'clickable']),
};
