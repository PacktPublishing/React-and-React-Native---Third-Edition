import React from "react";
import { Text } from "native-base";
import Container from "./Container";

export default function App({ navigation }) {
  return (
    <Container title="Application Container">
      <Text>Application content goes here...</Text>
    </Container>
  );
}
