import React from 'react';
import { render,  } from 'src/tests/testingLibraryHelpers';

import { Banner } from './index';

describe('Banner UI snapshots', () => {
  it('renders success type and text', () => {
    const { container } = render(
      <Banner content="Success Banner" type="success" />,
    );

    expect(container.firstElementChild).toMatchSnapshot();
  });

  it('renders error type and text', () => {
    const { container } = render(
      <Banner content="Error banner" type="error" />,
    );

    expect(container.firstElementChild).toMatchSnapshot();
  });

  it('renders info type and text', () => {
    const { container } = render(<Banner content="Default banner" />);

    expect(container.firstElementChild).toMatchSnapshot();
  });

  it('banner with click handler', async () => {
    const spy = jest.fn();
    const { getByRole, user } = render(
      <Banner content="Banner with click handler" onClick={spy} />,
    );

    await user.click(getByRole('button'));
    expect(spy).toHaveBeenCalled();
  });
});
