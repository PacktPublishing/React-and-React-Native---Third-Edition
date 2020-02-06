import { createStore, combineReducers } from "redux";

import initialState from "./initialState";
import Main from "./Main";
import Categories from "./Categories";
import Article from "./Article";
import Articles from "./Articles";

console.log(initialState);

export default createStore(
  combineReducers({
    Main,
    Categories,
    Article,
    Articles
  }),
  initialState
);
