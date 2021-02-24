import React from 'react';
import { primaryTheme } from 'src/constants/themes';
import { render } from 'src/tests/testingLibraryHelpers';

import { DialogModal } from './index';

const modalTitle = 'Dialog Modal Title';
const modalBody = 'Dialog Modal Children Content';

describe('<DialogModal />', () => {
  it('render children content correctly', () => {
    const { getAllByText } = render(
      <DialogModal title={modalTitle}>
        <div>{modalBody}</div>
      </DialogModal>,
      { withPortalContainer: true },
    );

    expect(getAllByText(modalTitle).length > 0).toBe(true);
    expect(getAllByText(modalBody).length > 0).toBe(true);
  });

  it('renders dialog modal with custom color', () => {
    const { container } = render(
      <DialogModal backgroundColor={primaryTheme.COLORS.background}>
        <div>{modalBody}</div>
      </DialogModal>,
      { withPortalContainer: true },
    );

    expect(container.firstElementChild).toMatchSnapshot();
  });
});
