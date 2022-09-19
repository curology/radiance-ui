import React from 'react';
import { fireEvent, render } from 'src/tests/testingLibraryHelpers';

import { Dropdown } from './index';
import { GenericConfigurableDropdown } from './genericConfigurableDropdown';

const options = [
  { value: 'test1', label: 'Test1' },
  { value: 'test2', label: 'Test2' },
  { value: 'test3', label: 'Test3' },
];
const options_with_disabled_first_option= [
  { value: 'test1', label: 'Test1', disabled: true},
  { value: 'test2', label: 'Test2' },
  { value: 'test3', label: 'Test3' },
];

const options_with_disabled_non_first_option= [
  { value: 'test1', label: 'Test1' },
  { value: 'test2', label: 'Test2', disabled: true },
  { value: 'test3', label: 'Test3' },
];

const ON_CLICK_TEST = 'should be invoked onClick';

describe('<Dropdown />', () => {
  describe('on touch screen', () => {
    it('renders <MobileDropdown />', () => {
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
          <Dropdown value="test1" options={options_with_disabled_first_option} onChange={() => undefined} />,
        );
        delete window.document.documentElement.ontouchstart;

        getByRole('combobox');
        let options = getAllByRole('option');
        expect(options).toHaveLength(3);
        expect(options[0]).not.toBeDisabled();
      });

      it('leaves disabled attribute from non-first/default option', () => {
        window.document.documentElement.ontouchstart = () => undefined;
        const { getByRole, getAllByRole } = render(
          <Dropdown value="test1" options={options_with_disabled_non_first_option} onChange={() => undefined} />,
        );
        delete window.document.documentElement.ontouchstart;

        getByRole('combobox');
        let options = getAllByRole('option');
        expect(options).toHaveLength(3);
        expect(options[1]).toBeDisabled()
      });
    });
  });
});

describe('<GenericConfigurableDropdown />', () => {
  describe('UI snapshots', () => {
    it('renders correctly', () => {
      const { container } = render(
        <GenericConfigurableDropdown
          onDropdownContainerFocus={() => undefined}
          onSelectChange={() => undefined}
          borderRadius="4px"
          preventDisabledDefaultOption={true}
          options={options}
          textAlign="left"
        />,
      );
      expect(container.firstElementChild).toMatchSnapshot();
    });
  });

  describe('onSelectChange callback', () => {
    it(`${ON_CLICK_TEST}`, () => {
      const spy = jest.fn();
      const { getByRole } = render(
        <GenericConfigurableDropdown
          borderRadius="4px"
          preventDisabledDefaultOption={true}
          options={options}
          onDropdownContainerFocus={() => undefined}
          onSelectChange={spy}
          value=""
          textAlign="left"
        />,
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
        <GenericConfigurableDropdown
          borderRadius="4px"
          preventDisabledDefaultOption={true}
          options={options}
          onDropdownContainerFocus={spy}
          onSelectChange={() => undefined}
          value=""
          textAlign="left"
        />,
      );

      await user.click(getByRole('combobox'));
      expect(spy).toHaveBeenCalled();
    });
  });
});

