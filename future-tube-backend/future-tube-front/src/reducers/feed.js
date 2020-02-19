const initialState = {
    feed: [],
}

const feed = (state = initialState, action) => {
    switch (action.type) {
        case "SET_FEED":
            return {...state, feed: action.payload.feed}

        default:
            return state;
    }
}

export default feed