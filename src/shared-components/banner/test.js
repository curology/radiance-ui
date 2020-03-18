import React from 'react';
import TestRenderer from 'react-test-renderer';

import Banner from './index';

describe('Banner UI snapshots', () => {
  test('renders success type and text', () => {
    const component = TestRenderer.create(
      <Banner content="Success Banner" type="success" />,
    );

    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  test('renders error type and text', () => {
    const component = TestRenderer.create(
      <Banner content="Error banner" type="error" />,
    );

    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  test('renders info type and text', () => {
    const component = TestRenderer.create(<Banner content="Default banner" />);

    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  test('Banner with click handler', () => {
    jest.useFakeTimers();
    const spy = jest.fn();
    const component = TestRenderer.create(
      <Banner content="Banner with click handler" onClick={spy} />,
    );

    component.root.findByType('div').props.onClick();
    jest.runAllTimers();
    expect(spy).toHaveBeenCalled();
  });
});
