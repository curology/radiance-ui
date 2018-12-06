import React from 'react';
import renderer from 'react-test-renderer';

import Container from './index';

describe('Container UI snapshots', () => {
  test('renders basic container', () => {
    const component = renderer.create(<Container>Container Content</Container>);

    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  test('renders container helper components', () => {
    const component = renderer.create(
      <Container>
        <Container.Section>
          Section 1
        </Container.Section>
        <Container.Divider />

        <Container.Image src="https://images-na.ssl-images-amazon.com/images/I/61E0pFPOl7L._SL1500_.jpg" />
        <Container.Section>
          <div>Section 2</div>
        </Container.Section>
      </Container>
    );

    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  test('renders clickable container', () => {
    const component = renderer.create(
      <Container type="clickable">Container Content</Container>
    );

    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  test('renders message type container', () => {
    const component = renderer.create(
      <Container type="message">Container Content</Container>
    );

    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
