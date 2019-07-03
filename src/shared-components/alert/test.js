import React from 'react';
import renderer from 'react-test-renderer';
import { shallow } from 'enzyme';

import Alert from './index';

const testAlert = {
  text: 'Your email address was updated successfully!',
  type: 'success',
  duration: 'sticky',
};
const SampleContentComponent = () => (<div>Your info is updated!  <a href='http://google.com'> Click here to see changes</a></div>);

describe('Alert UI snapshots', () => {
  test('renders success type and text', () => {
    const component = renderer.create(
      <Alert
        content={testAlert.text}
        type="success"
        duration={testAlert.duration}
        onExit={() => { }}
      />
    );

    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  test('renders danger type and text', () => {
    const component = renderer.create(
      <Alert
        content={testAlert.text}
        type="danger"
        duration={testAlert.duration}
        onExit={() => { }}
      />
    );

    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  test('renders info type and text', () => {
    const component = renderer.create(
      <Alert
        content={testAlert.text}
        type="info"
        duration={testAlert.duration}
        onExit={() => { }}
      />
    );

    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  test('renders custom component passed in content prop', () => {
    const component = renderer.create(
      <Alert
        content= {<SampleContentComponent />}
        type="success"
        duration={testAlert.duration}
        onExit={() => { }}
      />
    );

    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});

test('Alert onExit is triggered on click', () => {
  jest.useFakeTimers();
  const spy = jest.fn();
  const alert = shallow(<Alert onExit={spy} {...testAlert} />);

  alert.simulate('click');
  jest.runAllTimers();
  expect(spy).toHaveBeenCalled();
});
