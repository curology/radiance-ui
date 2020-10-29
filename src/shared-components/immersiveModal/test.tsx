import React from 'react';
import { mount } from 'enzyme';
import { decorateWithThemeProvider } from 'tests/utils/decorateWithThemeProvider';

import { ModalTitle } from './style';

import { ImmersiveModal } from './index';

const modalTitle = 'Immersive Modal Title';
const modalBody = 'Immersive Modal Children Content';

describe('<ImmersiveModal />', () => {
  const DecoratedImmersiveModal = decorateWithThemeProvider(ImmersiveModal);

  it('render children content correctly', () => {
    const wrapper = mount(
      <DecoratedImmersiveModal
        onClose={(): void => undefined}
        title={modalTitle}
      >
        <div>{modalBody}</div>
      </DecoratedImmersiveModal>,
    );

    expect(wrapper.find(ModalTitle).text()).toBe(modalTitle);
    expect(wrapper.text().includes(modalBody)).toBeTruthy();
  });
});
