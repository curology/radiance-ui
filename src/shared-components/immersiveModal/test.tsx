/**
 * @jest-environment jsdom
 */

import React from 'react';
import { render } from 'src/tests/testingLibraryHelpers';

import { ImmersiveModal } from './index';

const modalTitle = 'Immersive Modal Title';
const bodyString = 'Immersive Modal Children Content';
const modalBody = (
  <ImmersiveModal.Paragraph>{bodyString}</ImmersiveModal.Paragraph>
);

describe('<ImmersiveModal />', () => {
  it('render children content correctly', () => {
    const { getAllByText, getByText } = render(
      <ImmersiveModal onClose={() => undefined} title={modalTitle}>
        <div>{modalBody}</div>
      </ImmersiveModal>,
    );

    expect(getAllByText(modalTitle).length > 0).toBe(true);
    expect(getByText(bodyString)).toBeInTheDocument();
  });

  it('renders immersive modal correctly', () => {
    const { container } = render(
      <ImmersiveModal onClose={() => undefined} title={modalTitle}>
        <div>{modalBody}</div>
      </ImmersiveModal>,
      { withPortalContainer: true },
    );

    expect(container.firstElementChild).toMatchSnapshot();
  });
});
