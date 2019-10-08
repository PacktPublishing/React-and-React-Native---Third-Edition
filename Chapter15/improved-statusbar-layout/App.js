import React from "react";
import { View, StatusBar } from "react-native";
import styles from "./styles";
import Box from "./Box";

export default function App() {
  return (
    <View style={styles.container}>
      <Box>#1</Box>
      <Box>#2</Box>
    </View>
  );
}
