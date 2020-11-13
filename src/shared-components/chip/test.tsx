import React from 'react';
import { renderer } from 'src/tests/reactTestRendererHelpers';

import { Chip } from './index';

describe('<Chip />', () => {
  describe('UI snapshots', () => {
    it('renders the correct css and text', () => {
      const component = renderer.create(
        <Chip status="success" text="Success" />,
      );

      const tree = component.toJSON();
      expect(tree).toMatchSnapshot();
    });
  });
});
