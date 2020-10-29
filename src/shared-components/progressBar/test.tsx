import React from 'react';
import renderer from 'react-test-renderer';
import { primaryTheme } from 'src/constants/themes';
import { decorateWithThemeProvider } from 'tests/utils/decorateWithThemeProvider';

import { ProgressBar } from './index';

describe('<ProgressBar />', () => {
  const DecoratedProgressBar = decorateWithThemeProvider(ProgressBar);

  describe('UI snapshot', () => {
    it('renders with default props', () => {
      const component = renderer.create(
        <DecoratedProgressBar status="loading" />,
      );

      const tree = component.toJSON();
      expect(tree).toMatchSnapshot();
    });

    it('renders with custom props', () => {
      const component = renderer.create(
        <DecoratedProgressBar
          status="loading"
          backgroundColor={primaryTheme.COLORS.error}
          barColor={primaryTheme.COLORS.warning}
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
