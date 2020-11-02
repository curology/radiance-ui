import React from 'react';
import { mount } from 'enzyme';
import { decorateWithThemeProvider } from 'src/tests/decorateWithThemeProvider';

import { ModalTitle } from './style';

import { DialogModal } from './index';

const modalTitle = 'Dialog Modal Title';
const modalBody = 'Dialog Modal Children Content';

describe('<DialogModal />', () => {
  const DecoratedDialogModal = decorateWithThemeProvider(DialogModal);

  it('render children content correctly', () => {
    const wrapper = mount(
      <DecoratedDialogModal title={modalTitle}>
        <div>{modalBody}</div>
      </DecoratedDialogModal>,
    );

    expect(wrapper.find(ModalTitle).text()).toBe(modalTitle);
    expect(wrapper.text().includes(modalBody)).toBeTruthy();
  });
});
