import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import Home from "./Home";
import Details from "./Details";

export default createAppContainer(
  createStackNavigator({ Home, Details }, { initialRouteName: "Home" })
);
