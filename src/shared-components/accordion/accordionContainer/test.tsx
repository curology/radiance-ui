import React from 'react';
import renderer from 'react-test-renderer';

import AccordionContainer from './index';

describe('<AccordionContainer />', () => {
  test('Renders with styles by default', () => {
    const component = renderer.create(
      <AccordionContainer>I am the container child</AccordionContainer>,
    );

    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  test('Renders without styles if explicit falsy withContainer prop', () => {
    const component = renderer.create(
      <AccordionContainer withContainer={false}>
        I am the fragment child
      </AccordionContainer>,
    );

    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
