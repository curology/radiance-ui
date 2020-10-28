import React from 'react';
import renderer from 'react-test-renderer';
import { decorateWithThemeProvider } from 'tests/utils/decorateWithThemeProvider';

import { Tooltip } from './index';

describe('<Tooltip />', () => {
  const DecoratedTooltip = decorateWithThemeProvider(Tooltip);

  describe('UI snapshot', () => {
    it('renders content and children', () => {
      const component = renderer.create(
        <DecoratedTooltip position="bottom" content="Tooltip Content">
          Tooltip Trigger
        </DecoratedTooltip>,
      );

      const tree = component.toJSON();
      expect(tree).toMatchSnapshot();
    });
  });
});
