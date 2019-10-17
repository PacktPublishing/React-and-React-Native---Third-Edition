import React, { useState } from "react";
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import Home from "./Home";
import Details from "./Details";

const Nav = createAppContainer(
  createStackNavigator({ Home, Details }, { initialRouteName: "Home" })
);

export default function App() {
  const [stock, setStock] = useState({
    first: 1,
    second: 0,
    third: 200
  });

  function updateStock(id) {
    setStock({ ...stock, [id]: stock[id] === 0 ? 0 : stock[id] - 1 });
  }

  return <Nav screenProps={{ stock, updateStock }} />;
}
