import React from 'react';
import { primaryTheme } from 'src/constants/themes';
import { render } from 'src/tests/testingLibraryHelpers';

import { DialogModal } from './index';

const modalTitle = 'Dialog Modal Title';
const bodyString = 'Dialog Modal Children Content';
const modalBody = <DialogModal.Paragraph>{bodyString}</DialogModal.Paragraph>;

describe('<DialogModal />', () => {
  describe('UI snapshots', () => {
    it('renders dialog modal with custom color', () => {
      const { container, getByText } = render(
        <DialogModal backgroundColor={primaryTheme.COLORS.background}>
          <div>{modalBody}</div>
        </DialogModal>,
        { withPortalContainer: true },
      );

      getByText(bodyString);

      expect(container).toMatchSnapshot();
    });
  });

  it('render children content correctly', () => {
    const { getAllByText, getByText } = render(
      <DialogModal title={modalTitle}>{modalBody}</DialogModal>,
      { withPortalContainer: true },
    );

    const body = getByText(bodyString);

    expect(getAllByText(modalTitle).length).toBeGreaterThan(0);
    expect(body).toBeInTheDocument();
  });
});
