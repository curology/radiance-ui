import React from 'react';
import { mount } from 'enzyme';

import BulkErrors from './index';

describe('<FormSection />', () => {
  describe('with a single error', () => {
    it('renders the error', () => {
      const errors = { foo: 'bar' };
      const wrapper = mount(<BulkErrors errors={errors} />);
      const li = wrapper.find('li');

      expect(li).toHaveLength(1);
      expect(li.text()).toBe('bar');
    });
  });

  describe('with multiple errors', () => {
    it('renders all errors', () => {
      const errors = { foo: 'bar', biz: 'baz' };
      const wrapper = mount(<BulkErrors errors={errors} />);
      const li = wrapper.find('li');

      expect(li).toHaveLength(2);
      expect(li.first().text()).toBe('bar');
      expect(li.last().text()).toBe('baz');
    });
  });

  describe('with array of  errors', () => {
    it('renders all error text', () => {
      const errors = { foo: ['bar', 'baz'] };
      const wrapper = mount(<BulkErrors errors={errors} />);
      const li = wrapper.find('li');

      expect(li).toHaveLength(1);
      expect(li.text()).toBe('bar, baz');
    });
  });

  describe('with no errors', () => {
    it('renders nothing', () => {
      const wrapper = mount(<BulkErrors errors={{}} />);

      const li = wrapper.find('li');
      expect(li).toHaveLength(0);
    });

    it('doesnt break when passed null', () => {
      const wrapper = mount(<BulkErrors />);

      const li = wrapper.find('li');
      expect(li).toHaveLength(0);
    });
  });
});
