import React from "react";
import { View, Text, Button } from "react-native";
import styles from "./styles";

export default function({ navigation }) {
  return (
    <View style={styles.container}>
      <Text>{navigation.getParam("title")}</Text>
    </View>
  );
}
