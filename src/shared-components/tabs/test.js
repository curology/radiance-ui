import React from 'react';
import { shallow, mount } from 'enzyme';

import { TabItem } from './style';

import Tabs from './index';

describe('<Tabs />', () => {
  describe('default props', () => {
    test('renders the correct props', () => {
      const wrapper = shallow(
        <Tabs
          activeTabId={1}
          tabItems={[
            { id: 1, text: 'Rain Drop' },
            { id: 2, text: 'Drop Top' },
            { id: 3, text: 'Tab number 3' },
          ]}
        />
      );

      expect(wrapper.html().indexOf('Rain Drop') > -1).toBe(true);
      expect(wrapper.html().indexOf('Drop Top') > -1).toBe(true);
      expect(wrapper.html().indexOf('Tab number 3') > -1).toBe(true);
    });
  });

  describe('on click function', () => {
    test('returns correct params', () => {
      const spy = jest.fn();
      const wrapper = mount(
        <Tabs
          activeTabId={1}
          tabItems={[
            { id: 1, text: 'Rain Drop' },
            { id: 2, text: 'Drop Top' },
            { id: 3, text: 'If Seiji notices I will stop stop' },
          ]}
          onClick={spy}
        />
      );

      wrapper
        .find(TabItem)
        .first()
        .simulate('click');

      expect(spy).toHaveBeenCalledWith({ id: 1, text: 'Rain Drop' });
    });
  });
});
