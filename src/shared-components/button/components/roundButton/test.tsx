/**
 * @jest-environment jsdom
 */

import React from 'react';
import { userEvent, render } from 'src/tests/testingLibraryHelpers';

import { CameraIcon } from '../../../../icons';

import { RoundButton } from './index';

describe('<RoundButton />', () => {
  describe('UI snapshots', () => {
    it('renders with props', () => {
      const { container } = render(
        <RoundButton disabled onClick={() => undefined} icon={<CameraIcon />}>
          Button Text
        </RoundButton>,
      );

      expect(container.firstElementChild).toMatchSnapshot();
    });
  });

  describe('onClick callback', () => {
    it('should be invoked onClick', () => {
      const spy = jest.fn();
      const { getByRole } = render(
        <RoundButton onClick={spy} icon={<CameraIcon />}>
          Button Text
        </RoundButton>,
      );

      userEvent.click(getByRole('button'));
      expect(spy).toHaveBeenCalled();
    });

    it('should not be invoked if disabled', () => {
      const spy = jest.fn();
      const { getByRole } = render(
        <RoundButton disabled onClick={spy} icon={<CameraIcon />}>
          Button Text
        </RoundButton>,
      );

      userEvent.click(getByRole('button'));
      expect(spy).not.toHaveBeenCalled();
    });

    it('should not be invoked if loading', () => {
      const spy = jest.fn();
      const { getByRole } = render(
        <RoundButton isLoading onClick={spy} icon={<CameraIcon />}>
          Button Text
        </RoundButton>,
      );

      userEvent.click(getByRole('button'));
      expect(spy).not.toHaveBeenCalled();
    });
  });
});
