import React from 'react';
import { render } from 'src/tests/testingLibraryHelpers';

import { Banner } from './index';

describe('Banner UI snapshots', () => {
  test('renders success type and text', () => {
    const { container } = render(
      <Banner content="Success Banner" type="success" />,
    );

    expect(container.firstChild).toMatchSnapshot();
  });

  test('renders error type and text', () => {
    const { container } = render(
      <Banner content="Error banner" type="error" />,
    );

    expect(container.firstChild).toMatchSnapshot();
  });

  test('renders info type and text', () => {
    const { container } = render(<Banner content="Default banner" />);

    expect(container.firstChild).toMatchSnapshot();
  });

  test('Banner with click handler', () => {
    jest.useFakeTimers();
    const spy = jest.fn();
    const { getByRole } = render(
      <Banner content="Banner with click handler" onClick={spy} />,
    );

    getByRole('button').click();

    jest.runAllTimers();
    expect(spy).toHaveBeenCalled();
  });
});
