import React from 'react';
import { render } from 'src/tests/testingLibraryHelpers';

import Arrow from './index';

describe('<Arrow />', () => {
  describe('UI snapshots', () => {
    it('renders with props', () => {
      const { container } = render(
        <Arrow prev disabled={false} onClick={() => undefined} />,
        { withPortalContainer: true },
      );

      expect(container).toMatchSnapshot();
    });

    it('renders with bottom right alignment', () => {
      const { container } = render(
        <Arrow
          bottomRightAlignedArrows
          prev
          disabled
          onClick={() => undefined}
        />,
        { withPortalContainer: true },
      );

      expect(container).toMatchSnapshot();
    });
  });
});
