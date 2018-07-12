import assets from '../assets';

describe('Assets reducer', () => {
  it('should return the initial state', () => {
    expect(assets(undefined, [])).toEqual([]);
  });

  it('should handle SAVE_ASSET', () => {
    const state = [{
      id: 0,
      name: 'Fire Hydrant',
      description: 'In good condition',
      location: {
        latitude: '123',
        longitude: '456'
      }
    }];
    const action = {
      type: 'SAVE_ASSET',
      id: 1,
      asset: {
        name: 'Fire Hydrant 2',
        description: 'In good condition again',
        latitude: '789',
        longitude: '098'
      }
    };
    expect(assets(state, action)).toEqual([...state, action.asset])
  });
});