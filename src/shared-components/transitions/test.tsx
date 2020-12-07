import React from 'react';
import { render } from 'src/tests/testingLibraryHelpers';

import { FadeInContainer } from './index';

describe('<FadeInContainer />', () => {
  describe('UI snapshot', () => {
    it('renders with default props', () => {
      const { container } = render(
        <FadeInContainer>Default Props example</FadeInContainer>,
      );

      expect(container.firstChild).toMatchSnapshot();
    });

    it('renders with slide and speed props set', () => {
      const { container } = render(
        <FadeInContainer slide speed="500ms">
          FadeInContainer Content Here
        </FadeInContainer>,
      );
      expect(container.firstChild).toMatchSnapshot();
    });
  });
});
