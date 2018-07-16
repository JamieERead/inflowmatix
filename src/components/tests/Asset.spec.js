import React from 'react';
import { shallow } from 'enzyme';
import Asset from '../Asset';

describe('Asset', () => {
  it('should render', () => {
    const asset = {
      name: 'Fire Hydrant',
      description: 'In good condition',
      location: {
        latitude: '123',
        longitude: '456'
      }
    }
    const wrapper = shallow(<Asset {...asset} />)
    expect(wrapper.exists()).toBe(true);
  });
});
