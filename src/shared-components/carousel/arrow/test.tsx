import React from 'react';
import renderer from 'react-test-renderer';
import { decorateWithThemeProvider } from 'src/tests/decorateWithThemeProvider';

import Arrow from './index';

describe('<Arrow />', () => {
  const DecoratedArrow = decorateWithThemeProvider(Arrow);

  describe('UI snapshots', () => {
    it('renders with props', () => {
      const tree = renderer
        .create(
          <DecoratedArrow prev disabled={false} onClick={() => undefined} />,
        )
        .toJSON();

      expect(tree).toMatchSnapshot();
    });

    it('renders with bottom right alignment', () => {
      const tree = renderer
        .create(
          <DecoratedArrow
            bottomRightAlignedArrows
            prev
            disabled
            onClick={() => undefined}
          />,
        )
        .toJSON();

      expect(tree).toMatchSnapshot();
    });
  });
});
