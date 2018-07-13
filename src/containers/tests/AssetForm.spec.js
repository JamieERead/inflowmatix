import React from 'react';
import { shallow } from 'enzyme';
import configureStore from 'redux-mock-store'
import AssetForm from '../AssetForm';

describe('AssetForm', () => {
  const initialState = {}; 
  const mockStore = configureStore();
  let wrapper;
  let store;

  beforeEach(() => {
    store = mockStore(initialState);
    store.dispatch = jest.fn();
    wrapper = shallow(<AssetForm store={store} />).dive();
 });

  it('should render', () => {
    expect(wrapper.exists()).toBe(true);
  });

  it('should handle submitting the form', () => {
    const state = {
      name: 'Fire Hydrant',
      description: 'In good condition',
      latitude: '123',
      longitude: '456',
    };
    wrapper.setState(state);
    wrapper.find('form').simulate('submit', {preventDefault: jest.fn()})
    expect(store.dispatch).toHaveBeenCalled();
  });

  it('should not submit the form if its invalid', () => {
    wrapper.find('form').simulate('submit', {preventDefault: jest.fn()})
    expect(store.dispatch).not.toHaveBeenCalled();
  });
});
