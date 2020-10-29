import React from 'react';
import renderer from 'react-test-renderer';
import { mount } from 'enzyme';
import { decorateWithThemeProvider } from 'tests/utils/decorateWithThemeProvider';

import { DesktopDropdown } from './desktopDropdown';
import { MobileDropdown } from './mobileDropdown';

import { Dropdown } from './index';

const options = [
  { value: 'test1', label: 'Test1' },
  { value: 'test2', label: 'Test2' },
  { value: 'test3', label: 'Test3' },
];

describe('<Dropdown />', () => {
  const DecoratedDropdown = decorateWithThemeProvider(Dropdown);

  describe('on touch screen', () => {
    it('renders <MobileDropdown />', () => {
      window.document.documentElement.ontouchstart = () => undefined;
      const wrapper = mount(
        <DecoratedDropdown
          value="test1"
          options={options}
          onChange={() => null}
        />,
      );
      delete window.document.documentElement.ontouchstart;

      expect(wrapper.children().children().children().first().name()).toEqual(
        'MobileDropdown',
      );
    });
  });

  describe('when on non-touch screen', () => {
    it('renders <DesktopDropdown />', () => {
      const wrapper = mount(
        <DecoratedDropdown
          value="test1"
          options={options}
          onChange={() => null}
        />,
      );

      expect(wrapper.children().children().children().first().name()).toEqual(
        'DesktopDropdown',
      );
    });
  });
});

describe('<MobileDropdown />', () => {
  const DecoratedMobileDropdown = decorateWithThemeProvider(MobileDropdown);

  describe('UI snapshots', () => {
    it('renders correctly', () => {
      const tree = renderer
        .create(
          <DecoratedMobileDropdown
            onMobileSelectChange={() => undefined}
            borderRadius="4px"
            options={options}
            textAlign="left"
          />,
        )
        .toJSON();

      expect(tree).toMatchSnapshot();
    });
  });

  describe('onSelectChange callback', () => {
    it('should be invoked onClick', () => {
      const spy = jest.fn();
      const wrapper = mount(
        <DecoratedMobileDropdown
          borderRadius="4px"
          options={options}
          onMobileSelectChange={spy}
          value=""
          textAlign="left"
        />,
      );

      wrapper.find('select').simulate('change', { target: { value: 'test1' } });
      expect(spy).toHaveBeenCalled();
    });
  });
});

describe('<DesktopDropdown />', () => {
  const DecoratedDesktopDropdown = decorateWithThemeProvider(DesktopDropdown);

  it('renders the current option text', () => {
    const wrapper = mount(
      <DecoratedDesktopDropdown
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

    expect(wrapper.find('div[role="button"]').text().includes('Test1')).toEqual(
      true,
    );
  });

  describe('onSelectClick callback', () => {
    it('should be invoked onClick', () => {
      const spy = jest.fn();
      const wrapper = mount(
        <DecoratedDesktopDropdown
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

      wrapper.find('div[role="button"]').simulate('click');
      expect(spy).toHaveBeenCalled();
    });
  });

  describe('onOptionClick callback', () => {
    it('should be invoked onClick', () => {
      const spy = jest.fn();
      const wrapper = mount(
        <DecoratedDesktopDropdown
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

      wrapper.find('li').first().simulate('click');

      expect(spy).toHaveBeenCalled();
    });
  });
});
