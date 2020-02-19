const initialState = {
    photo: ''
}

const login = (state = initialState, action) => {
    switch (action.type) {
        case "SET_LOGIN":
            return {...state, photo: action.payload.photo}
        default:
            return state;
    }
}

export default login