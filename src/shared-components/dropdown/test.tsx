import React from 'react';
import { fireEvent, render, userEvent } from 'src/tests/testingLibraryHelpers';

import { DesktopDropdown } from './desktopDropdown';
import { MobileDropdown } from './mobileDropdown';

import { Dropdown } from './index';

const options = [
  { value: 'test1', label: 'Test1' },
  { value: 'test2', label: 'Test2' },
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
  });

  describe('when on non-touch screen', () => {
    it('renders <DesktopDropdown />', () => {
      const { getByRole } = render(
        <Dropdown value="test1" options={options} onChange={() => null} />,
      );

      // button only used in Desktop implementation
      expect(getByRole('button')).toBeTruthy();
    });
  });
});

describe('<MobileDropdown />', () => {
  describe('UI snapshots', () => {
    it('renders correctly', () => {
      const { container } = render(
        <MobileDropdown
          onFocus={() => undefined}
          onMobileSelectChange={() => undefined}
          borderRadius="4px"
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
        <MobileDropdown
          borderRadius="4px"
          options={options}
          onFocus={() => undefined}
          onMobileSelectChange={spy}
          value=""
          textAlign="left"
        />,
      );

      const select = getByRole('combobox');
      fireEvent.change(select, { value: 'test1' });

      expect(spy).toHaveBeenCalled();
    });
  });

  describe('onFocus callback', () => {
    it('should be invoked on focus', () => {
      const spy = jest.fn();
      const { getByRole } = render(
        <MobileDropdown
          borderRadius="4px"
          options={options}
          onFocus={spy}
          onMobileSelectChange={() => undefined}
          value=""
          textAlign="left"
        />,
      );

      userEvent.click(getByRole('combobox'));
      expect(spy).toHaveBeenCalled();
    });
  });
});

describe('<DesktopDropdown />', () => {
  it('renders the current option text', () => {
    const { getByRole } = render(
      <DesktopDropdown
        borderRadius="4px"
        closeDropdown={() => undefined}
        currentOption={{ value: 'test1', label: 'Test1' }}
        isOpen={false}
        onDesktopSelectChange={() => undefined}
        onFocus={() => undefined}
        options={options}
        optionsContainerMaxHeight="250px"
        textAlign="left"
        toggleDropdown={() => undefined}
      />,
    );

    expect(getByRole('button', { name: 'Test1' })).toBeTruthy();
  });

  describe('onSelectClick callback', () => {
    it(`${ON_CLICK_TEST}`, () => {
      const spy = jest.fn();
      const { getByRole } = render(
        <DesktopDropdown
          borderRadius="4px"
          options={options}
          currentOption={{ value: 'test1', label: 'Test1' }}
          toggleDropdown={spy}
          optionsContainerMaxHeight="250px"
          closeDropdown={() => undefined}
          onDesktopSelectChange={() => undefined}
          onFocus={() => undefined}
          textAlign="left"
          isOpen={false}
        />,
      );

      userEvent.click(getByRole('button'));
      expect(spy).toHaveBeenCalled();
    });
  });

  describe('onOptionClick callback', () => {
    it(`${ON_CLICK_TEST}`, () => {
      const spy = jest.fn();
      const { getAllByRole } = render(
        <DesktopDropdown
          borderRadius="4px"
          options={options}
          currentOption={{ value: 'test1', label: 'Test1' }}
          onDesktopSelectChange={spy}
          onFocus={() => undefined}
          isOpen
          optionsContainerMaxHeight="250px"
          toggleDropdown={() => null}
          closeDropdown={() => null}
          textAlign="left"
        />,
      );

      const listItems = getAllByRole('menuitemradio');
      // Arbitrarily select last item
      userEvent.click(listItems[listItems.length - 1]);
      expect(spy).toHaveBeenCalled();
    });
  });

  describe('onFocus callback', () => {
    it('should be invoked on focus', () => {
      const spy = jest.fn();
      render(
        <DesktopDropdown
          borderRadius="4px"
          options={options}
          currentOption={{ value: 'test1', label: 'Test1' }}
          onDesktopSelectChange={() => undefined}
          onFocus={spy}
          isOpen
          optionsContainerMaxHeight="250px"
          toggleDropdown={() => null}
          closeDropdown={() => null}
          textAlign="left"
        />,
      );

      userEvent.tab();
      expect(spy).toHaveBeenCalled();
    });
  });
});
