import React from 'react';
import { renderer } from 'src/tests/reactTestRendererHelpers';

import { Banner } from './index';

describe('Banner UI snapshots', () => {
  test('renders success type and text', () => {
    const component = renderer.create(
      <Banner content="Success Banner" type="success" />,
    );

    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  test('renders error type and text', () => {
    const component = renderer.create(
      <Banner content="Error banner" type="error" />,
    );

    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  test('renders info type and text', () => {
    const component = renderer.create(<Banner content="Default banner" />);

    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  test('Banner with click handler', () => {
    jest.useFakeTimers();
    const spy = jest.fn();
    const component = renderer.create(
      <Banner content="Banner with click handler" onClick={spy} />,
    );

    component.root.findByType('button').props.onClick();
    jest.runAllTimers();
    expect(spy).toHaveBeenCalled();
  });
});
