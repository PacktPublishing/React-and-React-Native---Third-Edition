import React from "react";
import { View, Text } from "react-native";
import styles from "./styles";

export default function Home({ navigation }) {
  return (
    <View style={styles.container}>
      <Text>Home Content</Text>
    </View>
  );
}

Home.navigationOptions = {
  title: "Home"
};
