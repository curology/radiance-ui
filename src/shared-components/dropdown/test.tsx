import React from 'react';
import renderer from 'react-test-renderer';
import { mount } from 'enzyme';

import DesktopDropdown from './desktopDropdown';
import MobileDropdown from './mobileDropdown';

import Dropdown from './index';

const options = [
  { value: 'test1', label: 'Test1' },
  { value: 'test2', label: 'Test2' },
  { value: 'test3', label: 'Test3' },
];

describe('<Dropdown />', () => {
  describe('on touch screen', () => {
    it('renders <MobileDropdown />', () => {
      window.document.documentElement.ontouchstart = () => undefined;
      const wrapper = mount(
        <Dropdown value="test1" options={options} onChange={() => null} />,
      );
      delete window.document.documentElement.ontouchstart;
      expect(wrapper.children().first().name()).toEqual('MobileDropdown');
    });
  });

  describe('when on non-touch screen', () => {
    it('renders <DesktopDropdown />', () => {
      const wrapper = mount(
        <Dropdown value="test1" options={options} onChange={() => null} />,
      );
      expect(wrapper.children().first().name()).toEqual('DesktopDropdown');
    });
  });
});

describe('<MobileDropdown />', () => {
  describe('UI snapshots', () => {
    it('renders correctly', () => {
      const tree = renderer
        .create(
          <MobileDropdown
            onSelectChange={() => undefined}
            borderRadius="4px"
            options={options}
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
        <MobileDropdown
          borderRadius="4px"
          options={options}
          onSelectChange={spy}
          value=""
        />,
      );

      wrapper.find('select').simulate('change', { target: { value: 'test1' } });
      expect(spy).toHaveBeenCalled();
    });
  });
});

describe('<DesktopDropdown />', () => {
  it('renders the current option text', () => {
    const wrapper = mount(
      <DesktopDropdown
        borderRadius="4px"
        options={options}
        currentOption={{ value: 'test1', label: 'Test1' }}
        optionsContainerMaxHeight="250px"
        onSelectClick={() => null}
        closeDropdown={() => null}
        onOptionClick={() => null}
      />,
    );

    expect(wrapper.find('[role="button"]').text().includes('Test1')).toEqual(
      true,
    );
  });

  describe('onSelectClick callback', () => {
    it('should be invoked onClick', () => {
      const spy = jest.fn();
      const wrapper = mount(
        <DesktopDropdown
          borderRadius="4px"
          options={options}
          currentOption={{ value: 'test1', label: 'Test1' }}
          onSelectClick={spy}
          optionsContainerMaxHeight="250px"
          closeDropdown={() => null}
          onOptionClick={() => null}
        />,
      );

      wrapper.find('[role="button"]').simulate('click');
      expect(spy).toHaveBeenCalled();
    });
  });

  describe('onOptionClick callback', () => {
    it('should be invoked onClick', () => {
      const spy = jest.fn();
      const wrapper = mount(
        <DesktopDropdown
          borderRadius="4px"
          options={options}
          currentOption={{ value: 'test1', label: 'Test1' }}
          onOptionClick={spy}
          isOpen
          optionsContainerMaxHeight="250px"
          onSelectClick={() => null}
          closeDropdown={() => null}
        />,
      );

      wrapper.find('li').first().simulate('click');

      expect(spy).toHaveBeenCalled();
    });
  });
});
