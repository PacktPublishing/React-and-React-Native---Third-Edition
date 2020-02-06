import React from "react";
import { Provider } from "react-redux";
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";

import store from "./store";
import Article from "./components/Article";
import Articles from "./components/Articles";

const Navigator = createAppContainer(
  createStackNavigator({ Article, Articles }, { initialRouteName: "Articles" })
);

export default () => (
  <Provider store={store}>
    <Navigator />
  </Provider>
);
