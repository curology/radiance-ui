import React from 'react';
import { act, render } from 'src/tests/testingLibraryHelpers';
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
  it('renders a default alert', () => {
    const { container } = render(<Alert content={alertText} />);

    expect(container.firstElementChild).toMatchSnapshot();
  });

  it('renders success alert', () => {
    const { container } = render(<Alert content={alertText} type="success" />);

    expect(container.firstElementChild).toMatchSnapshot();
  });

  it('renders error alert', () => {
    const { container } = render(<Alert content={alertText} type="error" />);

    expect(container.firstElementChild).toMatchSnapshot();
  });

  it('renders a sticky alert', () => {
    const { container } = render(
      <Alert content={alertText} duration="sticky" />,
    );

    expect(container.firstElementChild).toMatchSnapshot();
  });

  it('renders custom component passed in content prop', () => {
    const { container } = render(
      <Alert content={<CustomContentComponent />} />,
    );

    expect(container.firstElementChild).toMatchSnapshot();
  });

  it('alert onExit is triggered on click', async () => {
    jest.useFakeTimers();
    const spy = jest.fn();
    const { container, user } = render(
      <Alert
        content={<CustomContentComponent />}
        onExit={spy}
        duration="sticky"
      />,
      { userEventOptions: { delay: null } },
    );

    assert(container.firstElementChild);
    await user.click(container.firstElementChild);

    act(() => {
      jest.runAllTimers();
    });

    expect(spy).toHaveBeenCalled();
  });

  it('alert with custom CTA', async () => {
    jest.useFakeTimers();
    const spy = jest.fn();
    const { container, user } = render(
      <Alert
        content={<CustomContentComponent />}
        type="error"
        ctaContent="Update Payment Method"
        onExit={spy}
      />,
      { userEventOptions: { delay: null } },
    );

    assert(container.firstElementChild);
    await user.click(container.firstElementChild);

    act(() => {
      jest.runAllTimers();
    });

    expect(spy).toHaveBeenCalled();
  });
});
