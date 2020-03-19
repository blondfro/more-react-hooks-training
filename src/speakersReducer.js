export default function speakersReducer(state, action) {
  const updateFavorite = val => {
    return state.map((item, index) => {
      if (item.id === action.sessionId) {
        item.favorite = val;
        return item;
      }
      return item;
    });
  };

  switch (action.type) {
    case "setSpeakerList": {
      return action.data;
    }
    case "favorite": {
      return updateFavorite(true);
    }
    case "unfavorite": {
      return updateFavorite(false);
    }
    default:
      return state;
  }
}
