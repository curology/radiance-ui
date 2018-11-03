import React from 'react';
import renderer from 'react-test-renderer';
import { shallow } from 'enzyme';

import Alert from './index';

const testAlert = {
  text: 'Your email address was updated successfully!',
  type: 'success',
  duration: 'sticky',
};

describe('Alert UI snapshots', () => {
  test('renders success type and text', () => {
    const component = renderer.create(
      <Alert
        text={testAlert.text}
        type="success"
        duration={testAlert.duration}
        onClick={() => {}}
      />
    );

    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  test('renders danger type and text', () => {
    const component = renderer.create(
      <Alert
        text={testAlert.text}
        type="danger"
        duration={testAlert.duration}
        onClick={() => {}}
      />
    );

    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  test('renders info type and text', () => {
    const component = renderer.create(
      <Alert
        text={testAlert.text}
        type="info"
        duration={testAlert.duration}
        onClick={() => {}}
      />
    );

    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});

test('Alert onClick is triggered on click', () => {
  jest.useFakeTimers();
  const spy = jest.fn();
  const alert = shallow(<Alert onClick={spy} {...testAlert} />);

  alert.simulate('click');
  jest.runAllTimers();
  expect(spy).toHaveBeenCalled();
});

