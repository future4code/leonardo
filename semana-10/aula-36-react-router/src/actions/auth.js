import axios from "axios";
import { push } from "connected-react-router";
import { routes } from "../containers/Router";

const setErrorMessageAction = message => {
  return {
    type: "SET_ERROR_MESSAGE",
    payload: {
      message
    }
  };
};

const clearErrorMessageAction = () => {
  return {
    type: "CLEAR_ERROR_MESSAGE"
  };
};

export const login = (email, password) => async dispatch => {
    try {
    dispatch(clearErrorMessageAction());
    const response = await axios.post(
      "https://us-central1-missao-newton.cloudfunctions.net/futureX/leonardo/login",
      {
        email,
        password
      }
    );
    window.localStorage.setItem("token", response.data.token);
    dispatch(push(routes.list));
  } catch (e) {
    dispatch(setErrorMessageAction(e.message));
  }
};