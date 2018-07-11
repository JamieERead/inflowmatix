const initalState = {
  show: false
}

const form = (state = initalState, action) => {
  switch (action.type) {
    case 'NEW_ASSET':
      return {
        show: true
      };
    case 'CANCEL_ASSET':  
    case 'SAVE_ASSET':
      return {
        show: false
      };
    default:
      return state;
  }
}

export default form