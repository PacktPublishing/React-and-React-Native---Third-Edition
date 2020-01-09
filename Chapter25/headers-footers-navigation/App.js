import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import Home from "./Home";
import Settings from "./Settings";
import Help from "./Help";
import Contact from "./Contact";

const AppNavigator = createStackNavigator(
  {
    Home,
    Settings,
    Help,
    Contact
  },
  {
    defaultNavigationOptions: {
      headerShown: false
    }
  }
);

export default createAppContainer(AppNavigator);
