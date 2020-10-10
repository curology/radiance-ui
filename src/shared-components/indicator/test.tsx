import React from 'react';
import renderer from 'react-test-renderer';

import { Indicator } from './index';

describe('<Indicator />', () => {
  describe('UI snapshots', () => {
    it('renders the correct css with a text', () => {
      const component = renderer.create(<Indicator text="1" />);
      const tree = component.toJSON();
      expect(tree).toMatchSnapshot();
    });

    it('renders the correct css with a number', () => {
      const component = renderer.create(<Indicator text={3} />);
      const tree = component.toJSON();
      expect(tree).toMatchSnapshot();
    });
  });
});
