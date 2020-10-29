import React from 'react';
import renderer from 'react-test-renderer';
import { decorateWithThemeProvider } from 'tests/utils/decorateWithThemeProvider';

import { Chip } from './index';

describe('<Chip />', () => {
  const DecoratedChip = decorateWithThemeProvider(Chip);

  describe('UI snapshots', () => {
    it('renders the correct css and text', () => {
      const component = renderer.create(
        <DecoratedChip status="success" text="Success" />,
      );

      const tree = component.toJSON();
      expect(tree).toMatchSnapshot();
    });
  });
});
