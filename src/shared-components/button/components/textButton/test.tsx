import React from 'react';
import { render } from 'src/tests/testingLibraryHelpers';

import { TextButton } from './index';

describe('<TextButton />', () => {
  describe('UI snapshots', () => {
    it('renders without any props', () => {
      const { container } = render(<TextButton>Button Text</TextButton>);

      expect(container.firstElementChild).toMatchSnapshot();
    });
    it('renders with disabled prop', () => {
      const { container } = render(
        <TextButton disabled>Disabled Button Text</TextButton>,
      );

      expect(container.firstElementChild).toMatchSnapshot();
    });
  });

  describe('onClick callback', () => {
    it('should invoke onClick', () => {
      const spy = jest.fn();
      const { getByRole } = render(
        <TextButton onClick={spy}>Button Text</TextButton>,
      );

      getByRole('button').click();

      expect(spy).toHaveBeenCalled();
    });

    it('should not be clickable if disabled', () => {
      const spy = jest.fn();
      const { getByRole } = render(
        <TextButton disabled onClick={spy}>
          Button Text
        </TextButton>,
      );

      getByRole('button').click();

      expect(spy).not.toHaveBeenCalled();
    });
  });
});
