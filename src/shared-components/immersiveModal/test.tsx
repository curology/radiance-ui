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
    );

    getAllByText(modalTitle);
    getAllByText(modalBody);
  });
});
