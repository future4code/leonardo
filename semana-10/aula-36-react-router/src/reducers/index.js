import { combineReducers } from "redux";
import { connectRouter } from "connected-react-router";
import trips from "./trips";
import {auth} from './auth'

export const generateReducers = history =>
  combineReducers({
    router: connectRouter(history),
    trips,
    auth
    // Outros reducers aqui
  });
