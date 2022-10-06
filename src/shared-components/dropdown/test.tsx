import React from 'react';
import { fireEvent, render } from 'src/tests/testingLibraryHelpers';

import { Dropdown } from './index';

const options = [
  { value: 'test1', label: 'Test1' },
  { value: 'test2', label: 'Test2' },
  { value: 'test3', label: 'Test3' },
];
const optionsWithDisabledFirstOption = [
  { value: 'test1', label: 'Test1', disabled: true },
  {
    value: 'test2',
    label: 'Test2',
    disabled: false,
    'data-test-id': 'additionalIDtest',
  },
  { value: 'test3', label: 'Test3' },
];

const optionsWithDisabledNonFirstOption = [
  { value: 'test1', label: 'Test1' },
  { value: 'test2', label: 'Test2', disabled: true },
  { value: 'test3', label: 'Test3' },
];

const ON_CLICK_TEST = 'should be invoked onClick';

describe('<Dropdown />', () => {
  describe('UI snapshots', () => {
    it('renders correctly', () => {
      const { container } = render(
        <Dropdown value="test1" options={options} onChange={() => undefined} />,
      );
      expect(container.firstElementChild).toMatchSnapshot();
    });
  });

  describe('Optional Aria Label prop', () => {
    it('renders correctly with optional label provided', () => {
      const { getByRole } = render(
        <Dropdown
          value="test1"
          options={options}
          onChange={() => undefined}
          aria-label="example of additional ...rest attribute"
          data-test-id="additionalTestingID"
        />,
      );
      expect(getByRole('combobox')).toHaveAttribute('aria-label');
    });

    it('renders correctly with optional label excluded', () => {
      const { getByRole } = render(
        <Dropdown value="test1" options={options} onChange={() => undefined} />,
      );
      expect(getByRole('combobox')).not.toHaveAttribute('aria-label');
    });
  });

  describe('onSelectChange callback', () => {
    it(`${ON_CLICK_TEST}`, () => {
      const spy = jest.fn();
      const { getByRole } = render(
        <Dropdown value="test1" options={options} onChange={spy} />,
      );

      const select = getByRole('combobox');
      fireEvent.change(select, { value: 'test1' });

      expect(spy).toHaveBeenCalled();
    });
  });

  describe('onDropdownContainerFocus callback', () => {
    it('should be invoked on focus', async () => {
      const spy = jest.fn();
      const { getByRole, user } = render(
        <Dropdown
          value="test1"
          options={options}
          onChange={() => null}
          onDropdownContainerFocus={spy}
        />,
      );

      await user.click(getByRole('combobox'));
      expect(spy).toHaveBeenCalled();
    });
  });

  describe('on touch screen', () => {
    it('renders <Dropdown /> correctly', () => {
      window.document.documentElement.ontouchstart = () => undefined;
      const { getByRole, getAllByRole, queryAllByRole } = render(
        <Dropdown value="test1" options={options} onChange={() => undefined} />,
      );
      delete window.document.documentElement.ontouchstart;

      getByRole('combobox');
      expect(getAllByRole('option')).toHaveLength(3);
      expect(queryAllByRole('button')).toHaveLength(0);
    });

    describe('when passed an option array with disabled elements', () => {
      it('removes disabled attribute from first/default option', () => {
        window.document.documentElement.ontouchstart = () => undefined;
        const { getByRole, getAllByRole } = render(
          <Dropdown
            value="test1"
            options={optionsWithDisabledFirstOption}
            onChange={() => undefined}
          />,
        );
        delete window.document.documentElement.ontouchstart;

        getByRole('combobox');
        const resultOptions = getAllByRole('option');
        expect(resultOptions).toHaveLength(3);
        expect(resultOptions[0]).not.toBeDisabled();
      });

      it('leaves disabled attribute from non-first/default option', () => {
        window.document.documentElement.ontouchstart = () => undefined;
        const { getByRole, getAllByRole } = render(
          <Dropdown
            value="test1"
            options={optionsWithDisabledNonFirstOption}
            onChange={() => undefined}
          />,
        );
        delete window.document.documentElement.ontouchstart;

        getByRole('combobox');
        const resultOptions = getAllByRole('option');
        expect(resultOptions).toHaveLength(3);
        expect(resultOptions[1]).toBeDisabled();
      });
    });
  });
});
