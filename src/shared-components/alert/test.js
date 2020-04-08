import React from 'react';
import TestRenderer from 'react-test-renderer';
import { shallow } from 'enzyme';

import Alert from './index';

const testAlert = {
  text: 'Your email address was updated successfully!',
  type: 'success',
  duration: 'sticky',
};

const CustomContentComponent = () => (
  <div>
    <strong>Your info is updated!</strong>{' '}
    <a href="http://google.com"> Click here to see changes</a>
  </div>
);

const createNodeMock = element => {
  if (element.type === 'div') {
    return {
      innerHTML: '',
    };
  }
  return null;
};

describe('Alert UI snapshots', () => {
  test('renders success type and text', () => {
    const component = TestRenderer.create(
      <Alert
        content={testAlert.text}
        type="success"
        duration={testAlert.duration}
        onExit={() => {}}
      />,
      { createNodeMock },
    );

    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  test('renders error type and text', () => {
    const component = TestRenderer.create(
      <Alert
        content={testAlert.text}
        type="error"
        duration={testAlert.duration}
        onExit={() => {}}
      />,
      { createNodeMock },
    );

    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  test('renders default type and text', () => {
    const component = TestRenderer.create(
      <Alert content={testAlert.text} onExit={() => {}} />,
      { createNodeMock },
    );

    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  test('renders custom component passed in content prop', () => {
    const component = TestRenderer.create(
      <Alert
        content={<CustomContentComponent />}
        type="success"
        duration={testAlert.duration}
        onExit={() => {}}
      />,
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
        type="success"
        duration={testAlert.duration}
        onExit={spy}
      />,
      { createNodeMock },
    );

    component.root.findByType('div').props.onClick();
    jest.runAllTimers();
    expect(spy).toHaveBeenCalled();
  });

  test('Alert with CTA', () => {
    jest.useFakeTimers();
    const spy = jest.fn();
    const component = TestRenderer.create(
      <Alert
        content={
          <div>
            <strong>Whoops!</strong> There was an error updating your address,
            pleas try again later
          </div>
        }
        type="error"
        ctaContent="Update Payment Method"
        onExit={spy}
      />,
      { createNodeMock },
    );

    component.root.findByType('div').props.onClick();
    jest.runAllTimers();
    expect(spy).toHaveBeenCalled();
  });
});
