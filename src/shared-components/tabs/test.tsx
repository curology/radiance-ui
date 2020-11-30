import React from 'react';
import { render } from 'src/tests/testingLibraryHelpers';

import { Tabs } from './index';

describe('<Tabs />', () => {
  describe('UI snapshot', () => {
    it('renders with default props', () => {
      const { container } = render(
        <Tabs
          tabItems={[
            { id: 1, text: 'Tab 1' },
            { id: 2, text: 'Tab 2' },
            { id: 3, text: 'Tab 3' },
          ]}
        />,
      );

      expect(container.firstChild).toMatchSnapshot();
    });

    it('renders with initialActiveTabId and onClick props', () => {
      const { container } = render(
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

      expect(container.firstChild).toMatchSnapshot();
    });
  });

  describe('on click function', () => {
    test('returns correct params', () => {
      const spy = jest.fn();
      const { container } = render(
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

      container.querySelector('button')?.click();

      expect(spy).toHaveBeenCalledWith({ id: 1, text: 'Tab 1' });
    });
  });
});
