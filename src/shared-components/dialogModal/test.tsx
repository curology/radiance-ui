import React from 'react';
import { primaryTheme } from 'src/constants/themes';
import { render } from 'src/tests/testingLibraryHelpers';

import { DialogModal } from './index';

const modalTitle = 'Dialog Modal Title';
const bodyString = 'Dialog Modal Children Content';
const modalBody = <DialogModal.Paragraph>{bodyString}</DialogModal.Paragraph>;

describe('<DialogModal />', () => {
  it('render children content correctly', () => {
    const { getAllByText, getByText } = render(
      <DialogModal title={modalTitle}>{modalBody}</DialogModal>,
      { withPortalContainer: true },
    );

    expect(getAllByText(modalTitle).length > 0).toBe(true);
    expect(getByText(bodyString)).toBeInTheDocument();
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
