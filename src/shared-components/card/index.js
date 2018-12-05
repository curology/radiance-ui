import React from 'react';
import PropTypes from 'prop-types';

import { OpacityInContainer } from '../transitionComponents';
import {
  Container,
  Section,
  Row,
  Column,
  Image,
  ImageContainer,
} from './style';

class Card extends React.Component {
  static propTypes = {
    children: PropTypes.element.isRequired,
    columns: PropTypes.bool,
    onClick: PropTypes.func,
  };

  static Section = props => <Section {...props}>{props.children}</Section>;
  static Column = props => <Column {...props}>{props.children}</Column>;
  static Row = props => <Row {...props}>{props.children}</Row>;
  static Image = props => (
    <ImageContainer>
      <Image {...props} />
    </ImageContainer>
  );

  render() {
    const {
      children,
      columns,
      onClick,
    } = this.props;

    const clickable = typeof onClick === 'function';

    return (
      <OpacityInContainer speed="350ms">
        <Container clickable={clickable} columns={columns}>
          {children}
        </Container>
      </OpacityInContainer>
    );
  }
}

export default Card;
