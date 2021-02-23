import React from 'react';
import { act, userEvent, render } from 'src/tests/testingLibraryHelpers';
import { assert } from 'src/utils/assert';

import { Alert } from './index';

// Note on truncateText prop test: this cannot be tested because element scrollHeight and offsetHeight are not simulated correctly

const alertText = 'Your email address was updated successfully!';

const CustomContentComponent = () => (
  <div>
    <strong>Your info is updated!</strong>{' '}
    <a href="curology.com"> Click here to see changes</a>
  </div>
);

describe('Alert UI snapshots', () => {
  test('renders a default alert', () => {
    const { container } = render(<Alert content={alertText} />);

    expect(container.firstElementChild).toMatchSnapshot();
  });

  test('renders success alert', () => {
    const { container } = render(<Alert content={alertText} type="success" />);

    expect(container.firstElementChild).toMatchSnapshot();
  });

  test('renders error alert', () => {
    const { container } = render(<Alert content={alertText} type="error" />);

    expect(container.firstElementChild).toMatchSnapshot();
  });

  test('renders a sticky alert', () => {
    const { container } = render(
      <Alert content={alertText} duration="sticky" />,
    );

    expect(container.firstElementChild).toMatchSnapshot();
  });

  test('renders custom component passed in content prop', () => {
    const { container } = render(
      <Alert content={<CustomContentComponent />} />,
    );

    expect(container.firstElementChild).toMatchSnapshot();
  });

  test('Alert onExit is triggered on click', () => {
    jest.useFakeTimers();
    const spy = jest.fn();
    const { container } = render(
      <Alert
        content={<CustomContentComponent />}
        onExit={spy}
        duration="sticky"
      />,
    );

    assert(container.firstElementChild);
    userEvent.click(container.firstElementChild);

    act(() => {
      jest.runAllTimers();
    });

    expect(spy).toHaveBeenCalled();
  });

  test('Alert with custom CTA', () => {
    jest.useFakeTimers();
    const spy = jest.fn();
    const { container } = render(
      <Alert
        content={<CustomContentComponent />}
        type="error"
        ctaContent="Update Payment Method"
        onExit={spy}
      />,
    );

    assert(container.firstElementChild);
    userEvent.click(container.firstElementChild);

    act(() => {
      jest.runAllTimers();
    });

    expect(spy).toHaveBeenCalled();
  });
});
