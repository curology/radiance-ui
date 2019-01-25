import React from 'react';
import { shallow } from 'enzyme';

import Modal from './index';

const childComponent = <div />;

describe('<Modal />', () => {
  describe('modal is closing', () => {
    it('invokes the onClose prop', () => {
      const spy = jest.fn();
      const wrapper = shallow(
        <Modal isOpen onClose={spy}>
          {childComponent}
        </Modal>
      );

      wrapper.instance().closeModal();

      expect(spy).toHaveBeenCalled();
    });
  });
});
