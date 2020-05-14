import React from 'react';
import { mount } from 'enzyme';

import DialogModal from './index';

describe('<DialogModal />', () => {
  it('render children content correctly', () => {
    const wrapper = mount(
      <DialogModal title="Dialog Modal Title">
        <div>Dialog Modal Children Content</div>
      </DialogModal>,
    );

    const modalWrapper = wrapper
      .find('[id="modal-desktop-scrolling-id"]')
      .first();

    expect(modalWrapper.text()).toBe('Dialog Modal Children Content');
  });
});
