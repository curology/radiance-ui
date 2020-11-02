import React from 'react';
import renderer from 'react-test-renderer';
import { mount } from 'enzyme';
import { decorateWithThemeProvider } from 'src/tests/decorateWithThemeProvider';

import { Accordion } from './index';

const testAccordionProps = {
  title: <div>title</div>,
  isOpen: false,
  onClick: (): void => undefined,
  children: <div>expansion</div>,
};

describe('<Accordion />', () => {
  const DecoratedAccordion = decorateWithThemeProvider(Accordion);

  test('renders regular accordion', () => {
    const component = renderer.create(
      <DecoratedAccordion {...testAccordionProps} />,
    );

    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  test('renders no border accordion', () => {
    const component = renderer.create(
      <DecoratedAccordion {...testAccordionProps} noBorder />,
    );

    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  test('renders disabled accordion', () => {
    const component = renderer.create(
      <DecoratedAccordion {...testAccordionProps} disabled />,
    );

    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  test('invokes onClick when title is clicked', () => {
    const spy = jest.fn();

    const component = mount(
      <DecoratedAccordion {...testAccordionProps} onClick={spy} />,
    );

    const title = component.find('div[role="button"]');

    title.simulate('click');
    expect(spy).toHaveBeenCalled();
  });
});
