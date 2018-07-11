const assets = (state = [], action) => {
  switch (action.type) {
    case 'ADD_ASSET':
      return [
        ...state,
        {
          id: action.id,
          asset: action.asset
        }
      ];
    default:
      return state;
  }
}

export default assets