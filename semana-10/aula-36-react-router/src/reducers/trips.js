const initialState = {
    trips: [],
    trip: {},
    open: false,
    variant: '',
    msg: ''
}


const trips = (state = initialState, action) => {
    switch (action.type) {
        case "SET_TRIPS":
            return { ...state, trips: action.payload.trips }
        case "SET_TRIP":
            return { ...state, trip: action.payload.trip }
        case "SET_SNACKBAR_OPEN":
        console.log(action.type)   
        return {...state, open: true }
        case "SET_SNACKBAR_OPEN2":
        console.log(action.type)   
        return {...state, open: true, msg: action.payload.msg, variant:action.payload.variant }
        case "SET_SNACKBAR_CLOSE":
            return {...state, open: false }
        default:
            return state;
    }


}

export default trips