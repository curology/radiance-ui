import React from 'react';
import renderer from 'react-test-renderer';

import LoadingSpinner from './index';

describe('<LoadingSpinner />', () => {
  describe('UI snapshots', () => {
    it('renders the correct css', () => {
      const component = renderer.create(
        <LoadingSpinner />
      );

      const tree = component.toJSON();
      expect(tree).toMatchSnapshot();
    });
  });
});
