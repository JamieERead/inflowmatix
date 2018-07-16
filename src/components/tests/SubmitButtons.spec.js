import React from 'react';
import { shallow } from 'enzyme';
import SubmitButtons from '../SubmitButtons';

describe('SubmitButtons', () => {
  it('should render', () => {
    const handleCancel = jest.fn();
    const wrapper = shallow(<SubmitButtons handleFormCancel={handleCancel} />)
    expect(wrapper.exists()).toBe(true);
  });

  it('should handle cancelling the form', () => {
    const handleCancel = jest.fn();
    const wrapper = shallow(<SubmitButtons handleFormCancel={handleCancel} />)
    wrapper.find('button[type="button"]').simulate('click');
    expect(handleCancel).toHaveBeenCalled();
  });
});
