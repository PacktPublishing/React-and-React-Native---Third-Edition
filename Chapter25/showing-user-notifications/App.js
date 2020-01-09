import React from "react";
import { Button, Text, Toast } from "native-base";
import Container from "./Container";

export default function App() {
  return (
    <Container title="Showing User Notifications">
      <Button
        onPress={() =>
          Toast.show({
            text: "Something happened!",
            buttonText: "dismiss",
            duration: 3000
          })
        }
      >
        <Text>Show Notification</Text>
      </Button>
    </Container>
  );
}
