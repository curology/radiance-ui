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

      expect(container.firstElementChild).toMatchSnapshot();
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

      expect(container.firstElementChild).toMatchSnapshot();
    });
  });

  describe('on click function', () => {
    it('returns correct params', async () => {
      const spy = jest.fn();
      const { getByRole, user } = render(
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

      await user.click(getByRole('button', { name: 'Tab 1' }));

      expect(spy).toHaveBeenCalledWith({ id: 1, text: 'Tab 1' });
    });
  });
});
