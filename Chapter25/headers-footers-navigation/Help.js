import React from "react";
import { Text } from "native-base";
import Container from "./Container";

export default function Help({ navigation }) {
  return (
    <Container navigation={navigation}>
      <Text>Help content goes here...</Text>
    </Container>
  );
}
