import axios from "axios";
import {push} from "connected-react-router";
import {routes} from "../../containers/Router/index";


export const doSignup = (email, password, userName, birthday, photo) => async dispatch => {

    try {
        const response = await axios.post(
            "https://us-central1-future-tube-leo.cloudfunctions.net/futureTubeLeo/createUser",
            {
                name: userName,
                birthday,
                email,
                photo,
                password,
            }
        );
        window.localStorage.setItem("token", response.data.token);
        dispatch(login(photo));
        dispatch(push(routes.feed));
    } catch (e) {
        window.alert(e.message)
    }
}

export const doLogin = (email, password) => async dispatch => {
    try {
        const response = await axios.post(
            "https://us-central1-future-tube-leo.cloudfunctions.net/futureTubeLeo/login",
            {
                email,
                password
            }
        );
        window.localStorage.setItem("token", response.data.token);
        dispatch(login(response.data.photo));
        dispatch(push(routes.feed));
    } catch (e) {
        window.alert(e.message)
    }
}

export const doLogout = () => async dispatch => {
    window.localStorage.clear()
    dispatch(push(routes.root))
}

export const login = photo => {
    return {
        type: "SET_LOGIN",
        payload: {
            photo
        }
    }
};