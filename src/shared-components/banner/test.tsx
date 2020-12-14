import React from 'react';
import { render, userEvent } from 'src/tests/testingLibraryHelpers';

import { Banner } from './index';

describe('Banner UI snapshots', () => {
  test('renders success type and text', () => {
    const { container } = render(
      <Banner content="Success Banner" type="success" />,
    );

    expect(container.firstElementChild).toMatchSnapshot();
  });

  test('renders error type and text', () => {
    const { container } = render(
      <Banner content="Error banner" type="error" />,
    );

    expect(container.firstElementChild).toMatchSnapshot();
  });

  test('renders info type and text', () => {
    const { container } = render(<Banner content="Default banner" />);

    expect(container.firstElementChild).toMatchSnapshot();
  });

  test('Banner with click handler', () => {
    jest.useFakeTimers();
    const spy = jest.fn();
    const { getByRole } = render(
      <Banner content="Banner with click handler" onClick={spy} />,
    );

    userEvent.click(getByRole('button'));

    jest.runAllTimers();
    expect(spy).toHaveBeenCalled();
  });
});
