import React from 'react';
import { renderer } from 'src/tests/reactTestRendererHelpers';
import { mount } from 'src/tests/enzymeHelpers';

import { TabItem } from './style';

import { Tabs } from './index';

describe('<Tabs />', () => {
  describe('UI snapshot', () => {
    it('renders with default props', () => {
      const component = renderer.create(
        <Tabs
          tabItems={[
            { id: 1, text: 'Tab 1' },
            { id: 2, text: 'Tab 2' },
            { id: 3, text: 'Tab 3' },
          ]}
        />,
      );

      const tree = component.toJSON();
      expect(tree).toMatchSnapshot();
    });

    it('renders with initialActiveTabId and onClick props', () => {
      const component = renderer.create(
        <Tabs
          initialActiveTabId={2}
          onClick={() => undefined}
          tabItems={[
            { id: 1, text: 'Tab 1' },
            { id: 2, text: 'Tab 2' },
            { id: 3, text: 'Tab 3' },
          ]}
        />,
      );

      const tree = component.toJSON();
      expect(tree).toMatchSnapshot();
    });
  });

  describe('on click function', () => {
    test('returns correct params', () => {
      const spy = jest.fn();
      const wrapper = mount(
        <Tabs
          initialActiveTabId={1}
          tabItems={[
            { id: 1, text: 'Tab 1' },
            { id: 2, text: 'Tab 2' },
            { id: 3, text: 'Tab 3' },
          ]}
          onClick={spy}
        />,
      );

      wrapper.find(TabItem).first().simulate('click');

      expect(spy).toHaveBeenCalledWith({ id: 1, text: 'Tab 1' });
    });
  });
});
