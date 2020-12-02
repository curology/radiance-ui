import React from 'react';
import { renderer } from 'src/tests/reactTestRendererHelpers';
import { primaryTheme } from 'src/constants/themes';

import { ProgressBar } from './index';

describe('<ProgressBar />', () => {
  describe('UI snapshot', () => {
    it('renders with default props', () => {
      const component = renderer.create(<ProgressBar status="loading" />);

      const tree = component.toJSON();
      expect(tree).toMatchSnapshot();
    });

    it('renders with custom props', () => {
      const component = renderer.create(
        <ProgressBar
          status="loading"
          backgroundColor={primaryTheme.COLORS.error}
          barColor={primaryTheme.COLORS.info}
          height={5}
          loadingTime="30s"
          customProp="allows ..rest props"
        />,
      );

      const tree = component.toJSON();
      expect(tree).toMatchSnapshot();
    });
  });
});
