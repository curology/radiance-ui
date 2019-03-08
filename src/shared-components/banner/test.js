import React from 'react';
import renderer from 'react-test-renderer';
import { shallow } from 'enzyme';

import Banner from './index';

const testBanner = {
  content: <div>Your email address was updated successfully!</div>,
  type: 'success',
};

describe('Banner UI snapshots', () => {
  test('renders success type and text', () => {
    const component = renderer.create(
      <Banner
        content={testBanner.content}
        type="success"
        onClick={() => { }}
      />
    );

    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  test('renders danger type and text', () => {
    const component = renderer.create(
      <Banner
        content={testBanner.content}
        type="danger"
        onClick={() => { }}
      />
    );

    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  test('renders info type and text', () => {
    const component = renderer.create(
      <Banner
        content={testBanner.content}
        type="info"
        onClick={() => { }}
      />
    );

    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});

test('Banner onClick is triggered on click', () => {
  jest.useFakeTimers();
  const spy = jest.fn();
  const banner = shallow(<Banner onClick={spy} {...testBanner} />);

  banner.simulate('click');
  jest.runAllTimers();
  expect(spy).toHaveBeenCalled();
});
