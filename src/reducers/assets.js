const assets = (state = [], action) => {
  switch (action.type) {
    case 'SAVE_ASSET':
      return [
        ...state,
        {
          id: action.id,
          name: action.asset.name,
          description: action.asset.description,
          location: {
            latitude: action.asset.latitude,
            longitude: action.asset.longitude
          }
        }
      ];
    default:
      return state;
  }
}

export default assets