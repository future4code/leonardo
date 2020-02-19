import {combineReducers} from "redux";
import {connectRouter} from "connected-react-router";
import feed from './feed'
import login from './login'
import video from './video'

export const generateReducers = history =>
    combineReducers({
        router: connectRouter(history),
        feed,
        login,
        video
    });


