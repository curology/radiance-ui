import React from 'react';
import { primaryTheme } from 'src/constants/themes';
import { render } from 'src/tests/testingLibraryHelpers';

import { DialogModal } from './index';

const modalTitle = 'Dialog Modal Title';
const bodyString = 'Dialog Modal Children Content';
const modalBody = <DialogModal.Paragraph>{bodyString}</DialogModal.Paragraph>;

describe('<DialogModal />', () => {
  /**
   * TODO: Fix Emotion 11 CI snapshot serializer order issue
   */
  // eslint-disable-next-line jest/no-disabled-tests
  describe('UI snapshots', () => {
    it('renders dialog modal with custom color', async () => {
      const { container, findByText } = render(
        <DialogModal backgroundColor={primaryTheme.COLORS.background}>
          <div>{modalBody}</div>
        </DialogModal>,
        { withPortalContainer: true },
      );

      await findByText(bodyString);

      expect(container).toMatchSnapshot();
    });
  });

  it('render children content correctly', async () => {
    const { getAllByText, findByText } = render(
      <DialogModal title={modalTitle}>{modalBody}</DialogModal>,
      { withPortalContainer: true },
    );

    const body = await findByText(bodyString);

    expect(getAllByText(modalTitle).length).toBeGreaterThan(0);
    expect(body).toBeInTheDocument();
  });
});
