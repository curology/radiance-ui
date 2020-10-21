import React from 'react';
import renderer from 'react-test-renderer';
import { shallow } from 'enzyme';
import { ThemeProvider } from 'emotion-theming';
import { primaryTheme } from 'src/constants/themes';

import { Accordion } from './index';

const testAccordionProps = {
  title: <div>title</div>,
  isOpen: false,
  onClick: (): void => undefined,
  children: <div>expansion</div>,
};

const AccordionWithTheme = (additionalProps?: Record<string, unknown>) => (
  <ThemeProvider theme={primaryTheme}>
    <Accordion {...testAccordionProps} {...additionalProps} />
  </ThemeProvider>
);

describe('<Accordion />', () => {
  test('renders regular accordion', () => {
    const component = renderer.create(<AccordionWithTheme />);

    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  test('renders no border accordion', () => {
    const component = renderer.create(<AccordionWithTheme noBorder />);

    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  test('renders disabled accordion', () => {
    const component = renderer.create(<AccordionWithTheme disabled />);

    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  test('invokes onClick when title is clicked', () => {
    const spy = jest.fn();
    const titleIndex = 0;

    const component = shallow(<AccordionWithTheme onClick={spy} />);
    const title = component.childAt(titleIndex);

    title.simulate('click');
    expect(spy).toHaveBeenCalled();
  });
});
