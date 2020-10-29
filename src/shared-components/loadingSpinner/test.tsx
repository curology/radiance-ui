import React from 'react';
import renderer from 'react-test-renderer';
import { primaryTheme } from 'src/constants/themes';
import { decorateWithThemeProvider } from 'tests/utils/decorateWithThemeProvider';

import { LoadingSpinner } from './index';

describe('<LoadingSpinner />', () => {
  const DecoratedLoadingSpinner = decorateWithThemeProvider(LoadingSpinner);

  describe('UI snapshots', () => {
    it('renders the correct css with default props', () => {
      const component = renderer.create(<DecoratedLoadingSpinner />);
      const tree = component.toJSON();
      expect(tree).toMatchSnapshot();
    });

    it('renders the correct css with custom props', () => {
      const component = renderer.create(
        <DecoratedLoadingSpinner
          bgColor={primaryTheme.COLORS.black}
          color={primaryTheme.COLORS.white}
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
