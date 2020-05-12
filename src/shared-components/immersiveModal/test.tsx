import React from 'react';
import { mount } from 'enzyme';

import ImmersiveModal from './index';

describe('<ImmersiveModal />', () => {
  it('render children content correctly', () => {
    const wrapper = mount(
      <ImmersiveModal onClose={(): void => undefined}>
        <div>Immersive Modal Children Content</div>
      </ImmersiveModal>,
    );

    const modalWrapper = wrapper
      .find('[id="modal-desktop-scrolling-id"]')
      .first();

    expect(modalWrapper.text()).toBe('Immersive Modal Children Content');
  });
});
