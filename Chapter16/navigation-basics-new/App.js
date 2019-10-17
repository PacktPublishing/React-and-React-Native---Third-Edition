import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import Home from "./Home";
import Settings from "./Settings";

export default createAppContainer(
  createStackNavigator({ Home, Settings }, { initialRouteName: "Home" })
);
