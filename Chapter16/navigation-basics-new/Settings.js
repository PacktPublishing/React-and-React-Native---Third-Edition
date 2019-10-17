import React from "react";
import { View, Text, Button } from "react-native";
import styles from "./styles";

export default function Settings({ navigation }) {
  return (
    <View style={styles.container}>
      <Text>Settings Screen</Text>
      <Button title="Home" onPress={() => navigation.navigate("Home")} />
    </View>
  );
}
