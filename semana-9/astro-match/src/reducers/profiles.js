const initialState = {
  profileToSwipe: null,
  matches: []
}

const profiles = (state = initialState, action) => {
  console.log(action)
  switch (action.type) {
    case "SET_PROFILE":
      return { ...state, profileToSwipe: action.payload.profileToSwipe }
    case "SET_MATCHES":
      return { ...state, matches: action.payload.matches }
    case "CHOOSE_PROFILE":
      return { ...state, profileToSwipe: action.payload.profileToSwipe }
    default:
      return state;
  }


}

export default profiles
