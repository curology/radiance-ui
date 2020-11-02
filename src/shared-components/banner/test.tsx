import React from 'react';
import TestRenderer from 'react-test-renderer';
import { decorateWithThemeProvider } from 'src/tests/decorateWithThemeProvider';

import { Banner } from './index';

describe('Banner UI snapshots', () => {
  const DecoratedBanner = decorateWithThemeProvider(Banner);

  test('renders success type and text', () => {
    const component = TestRenderer.create(
      <DecoratedBanner content="Success Banner" type="success" />,
    );

    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  test('renders error type and text', () => {
    const component = TestRenderer.create(
      <DecoratedBanner content="Error banner" type="error" />,
    );

    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  test('renders info type and text', () => {
    const component = TestRenderer.create(
      <DecoratedBanner content="Default banner" />,
    );

    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  test('Banner with click handler', () => {
    jest.useFakeTimers();
    const spy = jest.fn();
    const component = TestRenderer.create(
      <DecoratedBanner content="Banner with click handler" onClick={spy} />,
    );

    component.root.findByType('button').props.onClick();
    jest.runAllTimers();
    expect(spy).toHaveBeenCalled();
  });
});
