import React from 'react';
import { render, userEvent } from 'src/tests/testingLibraryHelpers';
import { assert } from 'src/utils/assert';

import { CameraIcon } from '../../../../icons';

import { Button } from './index';

describe('<Button />', () => {
  /**
   * TODO: Fix Emotion 11 CI snapshot serializer order issue
   */
  // eslint-disable-next-line jest/no-disabled-tests
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
    it('should be invoked onClick', () => {
      const spy = jest.fn();
      const { container } = render(<Button onClick={spy}>Button Text</Button>);

      assert(container.firstElementChild);
      userEvent.click(container.firstElementChild);

      expect(spy).toHaveBeenCalled();
    });

    it('should not be invoked if disabled', () => {
      const spy = jest.fn();
      const { container } = render(
        <Button disabled onClick={spy}>
          Button Text
        </Button>,
      );

      assert(container.firstElementChild);
      userEvent.click(container.firstElementChild);

      expect(spy).not.toHaveBeenCalled();
    });

    it('should not be invoked if loading', () => {
      const spy = jest.fn();
      const { container } = render(
        <Button isLoading onClick={spy}>
          Button Text
        </Button>,
      );

      assert(container.firstElementChild);
      userEvent.click(container.firstElementChild);

      expect(spy).not.toHaveBeenCalled();
    });
  });
});
