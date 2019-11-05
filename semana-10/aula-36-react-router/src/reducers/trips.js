const initialState = {
    trips: [],
    trip: {}
}


const trips = (state = initialState, action) => {
    switch (action.type) {
        case "SET_TRIPS":
            return { ...state, trips: action.payload.trips }
        case "SET_TRIP":
            return { ...state, trip: action.payload.trip }
        default:
            return state;
    }


}

export default trips