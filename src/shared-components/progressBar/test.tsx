import React from 'react';
import renderer from 'react-test-renderer';

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
          backgroundColor="red"
          barColor="yellow"
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
