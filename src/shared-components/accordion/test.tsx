import React from 'react';
import renderer from 'react-test-renderer';
import { shallow } from 'enzyme';

import Accordion from './index';

const testAccordion = {
  title: <div>title</div>,
  isOpen: false,
  onClick: (): void => undefined,
  children: <div>expansion</div>,
};

/* eslint-disable react/jsx-props-no-spreading */
describe('<Accordion />', () => {
  test('renders regular accordion', () => {
    const component = renderer.create(<Accordion {...testAccordion} />);

    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  test('renders no border accordion', () => {
    const component = renderer.create(
      <Accordion noBorder {...testAccordion} />,
    );

    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  test('renders disabled accordion', () => {
    const component = renderer.create(
      <Accordion disabled {...testAccordion} />,
    );

    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  test('invokes onClick when title is clicked', () => {
    const spy = jest.fn();
    const component = shallow(<Accordion {...testAccordion} onClick={spy} />);

    component.find('[role="button"]').simulate('click');
    expect(spy).toHaveBeenCalled();
  });
});
/* eslint-enable react/jsx-props-no-spreading */
