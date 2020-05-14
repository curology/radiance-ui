import React from 'react';
import { mount } from 'enzyme';

import { ModalTitle } from './style';

import ImmersiveModal from './index';

const modalTitle = 'Immersive Modal Title';
const modalBody = 'Immersive Modal Children Content';

describe('<ImmersiveModal />', () => {
  it('render children content correctly', () => {
    const wrapper = mount(
      <ImmersiveModal onClose={(): void => undefined} title={modalTitle}>
        <div>{modalBody}</div>
      </ImmersiveModal>,
    );

    expect(wrapper.find(ModalTitle).text()).toBe(modalTitle);
    expect(wrapper.text().includes(modalBody)).toBeTruthy();
  });
});
