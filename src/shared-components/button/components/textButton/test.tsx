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
    it('should invoke onClick', async () => {
      const spy = jest.fn();
      const { getByRole, user } = render(
        <TextButton onClick={spy}>Button Text</TextButton>,
      );

      await user.click(getByRole('button'));

      expect(spy).toHaveBeenCalled();
    });

    it('should not be clickable if disabled', async () => {
      const spy = jest.fn();
      const { getByRole, user } = render(
        <TextButton disabled onClick={spy}>
          Button Text
        </TextButton>,
      );

      await user.click(getByRole('button'));

      expect(spy).not.toHaveBeenCalled();
    });
  });
});
