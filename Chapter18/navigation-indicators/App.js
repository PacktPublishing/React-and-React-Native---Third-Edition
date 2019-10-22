import React from "react";
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import First from "./First";
import Second from "./Second";
import Third from "./Third";

export default createAppContainer(
  createStackNavigator(
    {
      First: {
        screen: props => (
          <First
            promise={new Promise(resolve => setTimeout(resolve, 1000))}
            {...props}
          />
        )
      },
      Second: {
        screen: props => (
          <Second
            promise={new Promise(resolve => setTimeout(resolve, 1000))}
            {...props}
          />
        )
      },
      Third: {
        screen: props => (
          <Third
            promise={new Promise(resolve => setTimeout(resolve, 1000))}
            {...props}
          />
        )
      }
    },
    { initialRouteName: "First" }
  )
);
