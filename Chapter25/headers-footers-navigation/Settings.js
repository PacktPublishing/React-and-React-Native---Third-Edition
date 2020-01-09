import React from "react";
import { Text } from "native-base";
import Container from "./Container";

export default function Settings({ navigation }) {
  return (
    <Container navigation={navigation}>
      <Text>Settings content goes here...</Text>
    </Container>
  );
}
