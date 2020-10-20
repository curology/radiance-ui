import React from 'react';
import renderer from 'react-test-renderer';

import { LoadingSpinner } from './index';

describe('<LoadingSpinner />', () => {
  describe('UI snapshots', () => {
    it('renders the correct css with default props', () => {
      const component = renderer.create(<LoadingSpinner />);
      const tree = component.toJSON();
      expect(tree).toMatchSnapshot();
    });

    it('renders the correct css with custom props', () => {
      const component = renderer.create(
        <LoadingSpinner
          bgColor="#000000"
          color="#FFFFFF"
          duration={4}
          size="20px"
          translateX="150px"
        />,
      );
      const tree = component.toJSON();
      expect(tree).toMatchSnapshot();
    });
  });
});
