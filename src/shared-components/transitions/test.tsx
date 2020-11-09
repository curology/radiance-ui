import React from 'react';
import { renderer } from 'src/tests/reactTestRendererHelpers';

import { FadeInContainer } from './index';

describe('<FadeInContainer />', () => {
  describe('UI snapshot', () => {
    it('renders with default props', () => {
      const component = renderer.create(
        <FadeInContainer>Default Props example</FadeInContainer>,
      );

      const tree = component.toJSON();
      expect(tree).toMatchSnapshot();
    });

    it('renders with slide and speed props set', () => {
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
