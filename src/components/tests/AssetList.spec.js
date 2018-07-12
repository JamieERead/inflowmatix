import React from 'react';
import { shallow } from 'enzyme';
import AssetList from '../AssetList';

describe('AssetList', () => {
  it('should render', () => {
    const assets = [{
      id: 1,
      name: 'Fire Hydrant',
      description: 'In good condition',
      location: {
        latitude: '123',
        longitude: '456'
      }
    }];
    const wrapper = shallow(<AssetList assets={assets} />);
    expect(wrapper.exists()).toBe(true);
  });
  
  it('should render a no assets message', () => {
    const wrapper = shallow(<AssetList assets={[]} />);
    expect(wrapper.find('h3').text()).toEqual('No assets available...');
  });
});
