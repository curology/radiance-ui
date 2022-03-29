import React from 'react';
import { render,  } from 'src/tests/testingLibraryHelpers';
import { assert } from 'src/utils/assert';

import { AcneGlyph } from '../../icons';

import { OptionButton } from './index';

describe('<OptionButton />', () => {
  describe('UI snapshots', () => {
    it('checkbox selected, without custom icon', () => {
      const { container } = render(
        <OptionButton
          selected
          onClick={() => undefined}
          text="checkbox text"
          optionType="checkbox"
          buttonType="primary"
        />,
      );

      expect(container.firstElementChild).toMatchSnapshot();
    });

    it('radio unselected, with icon node prop', () => {
      const { container } = render(
        <OptionButton
          onClick={() => undefined}
          text="radio text"
          optionType="radio"
          icon={<AcneGlyph />}
          buttonType="secondary"
        />,
      );

      expect(container.firstElementChild).toMatchSnapshot();
    });
  });

  describe('onClick callback', () => {
    it('is invoked when clicked', async () => {
      const spy = jest.fn();
      const { container, user} = render(
        <OptionButton
          onClick={spy}
          text="checkbox text"
          optionType="checkbox"
        />,
      );

      assert(container.firstElementChild);

      await user.click(container.firstElementChild);
      expect(spy).toHaveBeenCalled();
    });
  });
});
