import React from 'react';
import { render } from 'src/tests/testingLibraryHelpers';

import { ImmersiveModal } from './index';

const modalTitle = 'Immersive Modal Title';
const modalBody = 'Immersive Modal Children Content';

describe('<ImmersiveModal />', () => {
  it('render children content correctly', () => {
    const { getAllByText } = render(
      <ImmersiveModal onClose={() => undefined} title={modalTitle}>
        <div>{modalBody}</div>
      </ImmersiveModal>,
      { withPortalContainer: true },
    );

    expect(getAllByText(modalTitle).length > 0).toBe(true);
    expect(getAllByText(modalBody).length > 0).toBe(true);
  });
});
