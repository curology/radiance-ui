import React from 'react';
import renderer from 'react-test-renderer';

import Tags from './index';

describe('<Tags />', () => {
  describe('UI snapshots', () => {
    it('renders the correct css and text', () => {
      const component = renderer.create(
        <Tags status="success" text="Success" />
      );

      const tree = component.toJSON();
      expect(tree).toMatchSnapshot();
    });
  });
});
