const initialState = {
    video: "",
    userVideos: ""
}

const video = (state = initialState, action) => {
    switch (action.type) {
        case "SET_INFORMATION":
            console.log(action.payload)
            return {...state, video: action.payload.video}
        case "SET_USER_VIDEOS":
            console.log(action.payload)
            return {...state, userVideos: action.payload.video}
        default:
            return state;
    }
}


export default video