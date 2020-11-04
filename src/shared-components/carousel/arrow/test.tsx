import React from 'react';
import { renderer } from 'src/tests/reactTestRendererHelpers';

import Arrow from './index';

describe('<Arrow />', () => {
  describe('UI snapshots', () => {
    it('renders with props', () => {
      const tree = renderer
        .create(<Arrow prev disabled={false} onClick={() => undefined} />)
        .toJSON();

      expect(tree).toMatchSnapshot();
    });

    it('renders with bottom right alignment', () => {
      const tree = renderer
        .create(
          <Arrow
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
