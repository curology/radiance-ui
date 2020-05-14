import React from 'react';
import { mount } from 'enzyme';

import { ModalTitle } from './style';

import DialogModal from './index';

const modalTitle = 'Dialog Modal Title';
const modalBody = 'Dialog Modal Children Content';

describe('<DialogModal />', () => {
  it('render children content correctly', () => {
    const wrapper = mount(
      <DialogModal title={modalTitle}>
        <div>{modalBody}</div>
      </DialogModal>,
    );

    expect(wrapper.find(ModalTitle).text()).toBe(modalTitle);
    expect(wrapper.text().includes(modalBody)).toBeTruthy();
  });
});
