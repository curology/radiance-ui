import React from 'react';
import renderer from 'react-test-renderer';

import { PROGRESS_BAR_STATUS } from '../../constants';

import ProgressBar from './index';

describe('<ProgressBar />', () => {
  describe('UI snapshot', () => {
    it('renders content and children', () => {
      const component = renderer.create(
        <ProgressBar status={PROGRESS_BAR_STATUS.loading} />,
      );

      const tree = component.toJSON();
      expect(tree).toMatchSnapshot();
    });
  });
});
