import React from 'react';
import { shallow } from 'enzyme';
import FormInput from '../FormInput';

describe('FormInput', () => {
  it('should handle the input change', () => {
    const form = {
      name: 'Name',
      value: '',
      placeholder: 'Enter name',
      submitted: false,
      handleInputChange: jest.fn()
    }
    const wrapper = shallow(<FormInput {...form} />)
    expect(wrapper.exists()).toBe(true);
  });

  it('should handle the input change', () => {
    const event = {
      preventDefault() {},
      target: { value: 'new name' }
    };
    const handleInputChange = jest.fn()
    const form = {
      name: 'Name',
      value: '',
      placeholder: 'Enter name',
      submitted: false,
      handleInputChange: handleInputChange
    }
    const wrapper = shallow(<FormInput {...form} />)
    wrapper.find('input').simulate('change', event);
    expect(handleInputChange).toHaveBeenCalledWith(event);
  });

  it('should show a mesasge when the input is invalid', () => {
    const handleInputChange = jest.fn()
    const form = {
      name: 'Name',
      value: '',
      placeholder: 'Enter name',
      submitted: true,
      handleInputChange: handleInputChange
    }
    const wrapper = shallow(<FormInput {...form} />)
    expect(wrapper.find('.help').text()).toEqual('This field is required');
  });
});
