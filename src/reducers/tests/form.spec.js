import form from '../form';

describe('Form reducer', () => {
  it('should return the initial state', () => {
    expect(form(undefined, {})).toEqual({show: false});
  });

  it('should handle NEW_ASSET', () => {
    const state = {show: false};
    const action = {type: 'NEW_ASSET'};
    expect(form(state, action)).toEqual({show: true});
  });

  it('should handle CANCEL_ASSET', () => {
    const state = {show: true};
    const action = {type: 'CANCEL_ASSET'};
    expect(form(state, action)).toEqual({show: false});
  });

  it('should handle SAVE_ASSET', () => {
    const state = {show: true};
    const action = {type: 'SAVE_ASSET'};
    expect(form(state, action)).toEqual({show: false});
  });
});