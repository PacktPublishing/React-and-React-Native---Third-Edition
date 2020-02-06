import React, { useState, useEffect } from "react";
import {
  Container as NativeBaseContainer,
  Header,
  Footer,
  FooterTab,
  Content,
  Body,
  Button,
  Icon,
  Title,
  Text
} from "native-base";
import { AppLoading } from "expo";
import * as Font from "expo-font";
import { Ionicons } from "@expo/vector-icons";
import { getStatusBarHeight } from "react-native-status-bar-height";

export default function Container({ children, navigation }) {
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
            <Title>{navigation.state.routeName}</Title>
          </Body>
        </Header>
        <Content>{children}</Content>
        <Footer>
          <FooterTab>
            <Button
              vertical
              active={navigation.state.routeName === "Home"}
              onPress={() => {
                navigation.navigate("Home", {});
              }}
            >
              <Icon name="home" />
              <Text>Home</Text>
            </Button>
            <Button
              vertical
              active={navigation.state.routeName === "Settings"}
              onPress={() => {
                navigation.navigate("Settings", {});
              }}
            >
              <Icon name="settings" />
              <Text>Settings</Text>
            </Button>
            <Button
              vertical
              active={navigation.state.routeName === "Help"}
              onPress={() => {
                navigation.navigate("Help", {});
              }}
            >
              <Icon active name="help" />
              <Text>Help</Text>
            </Button>
            <Button
              vertical
              active={navigation.state.routeName === "Contact"}
              onPress={() => {
                navigation.navigate("Contact", {});
              }}
            >
              <Icon name="person" />
              <Text>Contact</Text>
            </Button>
          </FooterTab>
        </Footer>
      </NativeBaseContainer>
    );
  } else {
    return <AppLoading />;
  }
}
