import { createStore, combineReducers } from "redux";
import initialState from "./initialState";
import App from "./App";
import Home from "./Home";
import Article from "./Article";

export default createStore(
  combineReducers({
    App,
    Home,
    Article
  }),
  initialState
);
