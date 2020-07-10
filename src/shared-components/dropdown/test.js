import React from 'react';
import renderer from 'react-test-renderer';
import { shallow, mount } from 'enzyme';

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
      global.document.documentElement.ontouchstart = () => undefined;
      const wrapper = shallow(<Dropdown value="test1" options={options} />);

      delete global.document.documentElement.ontouchstart;
      expect(wrapper.text()).toEqual('<MobileDropdown />');
    });
  });

  describe('when on non-touch screen', () => {
    it('renders <DesktopDropdown />', () => {
      const wrapper = shallow(<Dropdown value="test1" options={options} />);
      expect(wrapper.text()).toEqual('<DesktopDropdown />');
    });
  });
});

describe('<MobileDropdown />', () => {
  describe('UI snapshots', () => {
    it('renders correctly', () => {
      const tree = renderer
        .create(<MobileDropdown options={options} />)
        .toJSON();

      expect(tree).toMatchSnapshot();
    });
  });

  describe('onSelectChange callback', () => {
    it('should be invoked onClick', () => {
      const spy = jest.fn();
      const wrapper = mount(
        <MobileDropdown options={options} onSelectChange={spy} value="" />,
      );

      wrapper.find('select').simulate('change', { target: { value: 'test1' } });
      expect(spy).toHaveBeenCalled();
    });
  });
});

describe('<DesktopDropdown />', () => {
  it('renders the current option text', () => {
    const wrapper = shallow(
      <DesktopDropdown
        options={options}
        currentOption={{ value: 'test1', label: 'Test1' }}
      />,
    );

    expect(
      wrapper
        .find('#select-input-box')
        .text()
        .includes('Test1'),
    ).toEqual(true);
  });

  describe('onSelectClick callback', () => {
    it('should be invoked onClick', () => {
      const spy = jest.fn();
      const wrapper = shallow(
        <DesktopDropdown
          options={options}
          currentOption={{ value: 'test1', label: 'Test1' }}
          onSelectClick={spy}
        />,
      );

      wrapper.find('#select-input-box').simulate('click');
      expect(spy).toHaveBeenCalled();
    });
  });

  describe('onOptionClick callback', () => {
    it('should be invoked onClick', () => {
      const spy = jest.fn();
      const wrapper = mount(
        <DesktopDropdown
          options={options}
          currentOption={{ value: 'test1', label: 'Test1' }}
          onOptionClick={spy}
          isOpen
        />,
      );

      wrapper
        .find('li')
        .first()
        .simulate('click');

      expect(spy).toHaveBeenCalled();
    });
  });
});
