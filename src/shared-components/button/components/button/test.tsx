import React from 'react';
import { render } from 'src/tests/testingLibraryHelpers';
import { assert } from 'src/utils/assert';

import { CameraIcon } from '../../../../icons';

import { Button } from './index';

describe('<Button />', () => {
  describe('UI snapshots', () => {
    it('renders with props', () => {
      const { container } = render(
        <Button disabled onClick={() => undefined} icon={<CameraIcon />}>
          Button Text
        </Button>,
      );

      expect(container.firstElementChild).toMatchSnapshot();
    });
  });

  describe('onClick callback', () => {
    it('should be invoked onClick', async () => {
      const spy = jest.fn();
      const { container, user } = render(
        <Button onClick={spy}>Button Text</Button>,
      );

      assert(container.firstElementChild);
      await user.click(container.firstElementChild);

      expect(spy).toHaveBeenCalled();
    });

    it('should not be invoked if disabled', async () => {
      const spy = jest.fn();
      const { container, user } = render(
        <Button disabled onClick={spy}>
          Button Text
        </Button>,
      );

      assert(container.firstElementChild);
      await user.click(container.firstElementChild);

      expect(spy).not.toHaveBeenCalled();
    });

    it('should not be invoked if loading', async () => {
      const spy = jest.fn();
      const { container, user } = render(
        <Button isLoading onClick={spy}>
          Button Text
        </Button>,
      );

      assert(container.firstElementChild);
      await user.click(container.firstElementChild);

      expect(spy).not.toHaveBeenCalled();
    });
  });
});
