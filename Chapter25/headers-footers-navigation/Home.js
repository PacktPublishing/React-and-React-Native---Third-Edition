import React from "react";
import { Text } from "native-base";
import Container from "./Container";

export default function Home({ navigation }) {
  return (
    <Container navigation={navigation}>
      <Text>Home content goes here...</Text>
    </Container>
  );
}
