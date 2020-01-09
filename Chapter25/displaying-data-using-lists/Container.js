import React, { useState, useEffect } from "react";
import {
  Container as NativeBaseContainer,
  Header,
  Content,
  Body,
  Title
} from "native-base";
import { AppLoading } from "expo";
import * as Font from "expo-font";
import { Ionicons } from "@expo/vector-icons";
import { getStatusBarHeight } from "react-native-status-bar-height";

export default function Container({ title, children }) {
  const [ready, setReady] = useState(false);

  useEffect(() => {
    Font.loadAsync({
      Roboto: require("native-base/Fonts/Roboto.ttf"),
      Roboto_medium: require("native-base/Fonts/Roboto_medium.ttf"),
      ...Ionicons.font
    }).then(() => setReady(true));
  }, []);

  if (ready) {
    return (
      <NativeBaseContainer>
        <Header
          noLeft
          style={{
            paddingTop: getStatusBarHeight(),
            height: 54 + getStatusBarHeight()
          }}
        >
          <Body>
            <Title>{title}</Title>
          </Body>
        </Header>
        <Content>{children}</Content>
      </NativeBaseContainer>
    );
  } else {
    return <AppLoading />;
  }
}
