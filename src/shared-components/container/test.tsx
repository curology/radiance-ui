import React from 'react';
import renderer from 'react-test-renderer';
import { decorateWithThemeProvider } from 'tests/utils/decorateWithThemeProvider';

import { Container } from './index';

describe('Container UI snapshots', () => {
  const DecoratedContainer = decorateWithThemeProvider(Container);
  const DecoratedSection = decorateWithThemeProvider(Container.Section);
  const DecoratedDivider = decorateWithThemeProvider(Container.Divider);
  const DecoratedImage = decorateWithThemeProvider(Container.Image);

  test('renders basic container', () => {
    const component = renderer.create(
      <DecoratedContainer>Container Content</DecoratedContainer>,
    );

    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  test('renders container helper components', () => {
    const component = renderer.create(
      <DecoratedContainer>
        <DecoratedSection>Section 1</DecoratedSection>
        <DecoratedDivider />

        <DecoratedImage src="https://images-na.ssl-images-amazon.com/images/I/61E0pFPOl7L._SL1500_.jpg" />
        <DecoratedSection>
          <div>Section 2</div>
        </DecoratedSection>
      </DecoratedContainer>,
    );

    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  test('renders clickable container', () => {
    const component = renderer.create(
      <DecoratedContainer type="clickable">
        Container Content
      </DecoratedContainer>,
    );

    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  test('renders message type container', () => {
    const component = renderer.create(
      <DecoratedContainer type="message">Container Content</DecoratedContainer>,
    );

    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
