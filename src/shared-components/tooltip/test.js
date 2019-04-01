import React from 'react';
import renderer from 'react-test-renderer';

import Tooltip from './index';

describe('<Tooltip />', () => {
  describe('UI snapshot', () => {
    it('renders content and children', () => {
      const component = renderer.create(
        <Tooltip position="bottom" content="Tooltip Content">
          Tooltip Trigger
        </Tooltip>
      );

      const tree = component.toJSON();
      expect(tree).toMatchSnapshot();
    });
  });
});
