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

describe('<Dropdown />', () => {
  describe('on touch screen', () => {
    it('renders <MobileDropdown />', () => {
      window.document.documentElement.ontouchstart = () => undefined;
      const { getByRole, getAllByRole, queryAllByRole } = render(
        <Dropdown value="test1" options={options} onChange={() => undefined} />,
      );
      delete window.document.documentElement.ontouchstart;

      getByRole('combobox');
      expect(getAllByRole('option').length).toBe(3);
      expect(queryAllByRole('button').length).toBe(0);
    });
  });

  describe('when on non-touch screen', () => {
    it('renders <DesktopDropdown />', () => {
      const { getByRole } = render(
        <Dropdown value="test1" options={options} onChange={() => null} />,
      );

      // button only used in Desktop implementation
      getByRole('button');
    });
  });
});

describe('<MobileDropdown />', () => {
  describe('UI snapshots', () => {
    it('renders correctly', () => {
      const { container } = render(
        <MobileDropdown
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
    it('should be invoked onClick', () => {
      const spy = jest.fn();
      const { getByRole } = render(
        <MobileDropdown
          borderRadius="4px"
          options={options}
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
        options={options}
        optionsContainerMaxHeight="250px"
        textAlign="left"
        toggleDropdown={() => undefined}
      />,
    );

    getByRole('button', { name: 'Test1' });
  });

  describe('onSelectClick callback', () => {
    it('should be invoked onClick', () => {
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
          textAlign="left"
          isOpen={false}
        />,
      );

      userEvent.click(getByRole('button'));
      expect(spy).toHaveBeenCalled();
    });
  });

  describe('onOptionClick callback', () => {
    it('should be invoked onClick', () => {
      const spy = jest.fn();
      const { getAllByRole } = render(
        <DesktopDropdown
          borderRadius="4px"
          options={options}
          currentOption={{ value: 'test1', label: 'Test1' }}
          onDesktopSelectChange={spy}
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
});
