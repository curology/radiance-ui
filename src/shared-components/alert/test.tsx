import React, { ReactElement } from 'react';
import TestRenderer from 'react-test-renderer';

import Alert from './index';

// Note on truncateText prop test: this cannot be tested because element scrollHeight and offsetHeight are not simulated correctly

const alertText = 'Your email address was updated successfully!';

const CustomContentComponent = () => (
  <div>
    <strong>Your info is updated!</strong>{' '}
    <a href="curology.com"> Click here to see changes</a>
  </div>
);

const createNodeMock = (element: ReactElement) => {
  if (element.type === 'div') {
    return {
      innerHTML: alertText,
    };
  }
  return null;
};

describe('Alert UI snapshots', () => {
  test('renders a default alert', () => {
    const component = TestRenderer.create(<Alert content={alertText} />, {
      createNodeMock,
    });

    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  test('renders success alert', () => {
    const component = TestRenderer.create(
      <Alert content={alertText} type="success" />,
      { createNodeMock },
    );

    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  test('renders error alert', () => {
    const component = TestRenderer.create(
      <Alert content={alertText} type="error" />,
      { createNodeMock },
    );

    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  test('renders a sticky alert', () => {
    const component = TestRenderer.create(
      <Alert content={alertText} duration="sticky" />,
      { createNodeMock },
    );

    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  test('renders custom component passed in content prop', () => {
    const component = TestRenderer.create(
      <Alert content={<CustomContentComponent />} />,
      { createNodeMock },
    );

    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  test('Alert onExit is triggered on click', () => {
    jest.useFakeTimers();
    const spy = jest.fn();
    const component = TestRenderer.create(
      <Alert
        content={<CustomContentComponent />}
        onExit={spy}
        duration="sticky"
      />,
      { createNodeMock },
    );

    component.root.findByType('button').props.onClick();
    jest.runAllTimers();
    expect(spy).toHaveBeenCalled();
  });

  test('Alert with custom CTA', () => {
    jest.useFakeTimers();
    const spy = jest.fn();
    const component = TestRenderer.create(
      <Alert
        content={<CustomContentComponent />}
        type="error"
        ctaContent="Update Payment Method"
        onExit={spy}
      />,
      { createNodeMock },
    );

    component.root.findByType('button').props.onClick();
    jest.runAllTimers();
    expect(spy).toHaveBeenCalled();
  });
});
