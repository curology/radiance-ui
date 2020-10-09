import React from 'react';
import renderer from 'react-test-renderer';

import { FadeInContainer } from './index';

describe('<FadeInContainer />', () => {
  describe('UI snapshot', () => {
    it('renders component and children', () => {
      const component = renderer.create(
        <FadeInContainer slide speed="500ms">
          FadeInContainer Content Here
        </FadeInContainer>,
      );

      const tree = component.toJSON();
      expect(tree).toMatchSnapshot();
    });
  });
});
