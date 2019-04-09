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
            { id: 1, text: 'Tab 1' },
            { id: 2, text: 'Tab 2' },
            { id: 3, text: 'Tab 3' },
          ]}
        />
      );

      expect(wrapper.html().indexOf('Tab 1') > -1).toBe(true);
      expect(wrapper.html().indexOf('Tab 2') > -1).toBe(true);
      expect(wrapper.html().indexOf('Tab 3') > -1).toBe(true);
    });
  });

  describe('on click function', () => {
    test('returns correct params', () => {
      const spy = jest.fn();
      const wrapper = mount(
        <Tabs
          activeTabId={1}
          tabItems={[
            { id: 1, text: 'Tab 1' },
            { id: 2, text: 'Tab 2' },
            { id: 3, text: 'Tab 3' },
          ]}
          onClick={spy}
        />
      );

      wrapper
        .find(TabItem)
        .first()
        .simulate('click');

      expect(spy).toHaveBeenCalledWith({ id: 1, text: 'Tab 1' });
    });
  });
});
