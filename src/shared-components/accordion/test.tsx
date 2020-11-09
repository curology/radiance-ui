import React from 'react';
import { mount } from 'src/tests/enzymeHelpers';
import { renderer } from 'src/tests/reactTestRendererHelpers';

import { Accordion } from './index';

const testAccordionProps = {
  title: <div>title</div>,
  isOpen: false,
  onClick: (): void => undefined,
  children: <div>expansion</div>,
};

describe('<Accordion />', () => {
  test('renders regular accordion', () => {
    const component = renderer.create(<Accordion {...testAccordionProps} />);

    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  test('renders no border accordion', () => {
    const component = renderer.create(
      <Accordion {...testAccordionProps} noBorder />,
    );

    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  test('renders disabled accordion', () => {
    const component = renderer.create(
      <Accordion {...testAccordionProps} disabled />,
    );

    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  test('invokes onClick when title is clicked', () => {
    const spy = jest.fn();

    const component = mount(
      <Accordion {...testAccordionProps} onClick={spy} />,
    );

    const title = component.find('div[role="button"]');

    title.simulate('click');
    expect(spy).toHaveBeenCalled();
  });
});
