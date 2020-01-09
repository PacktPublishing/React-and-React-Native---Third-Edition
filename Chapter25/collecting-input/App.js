import React, { useState } from "react";
import {
  Text,
  Form,
  Input,
  Item,
  Picker,
  Icon,
  CheckBox,
  ListItem,
  Body,
  Grid,
  Row,
  Col,
  Left,
  Right,
  Radio
} from "native-base";
import Container from "./Container";

export default function App({ navigation }) {
  const [text, setText] = useState("");
  const [picker, setPicker] = useState();
  const [checkbox, setCheckbox] = useState(false);
  const [radio, setRadio] = useState();

  const options = ["First", "Second", "Third"];

  return (
    <Container title="Collecting Input">
      <Form>
        <Grid>
          <Row>
            <Col>
              <Item regular>
                <Input
                  placeholder="Textbox"
                  value={text}
                  onChangeText={setText}
                />
              </Item>
            </Col>
          </Row>
          <Row>
            <Col>
              <Item picker>
                <Picker
                  mode="dropdown"
                  iosIcon={<Icon name="arrow-down" />}
                  style={{ width: undefined }}
                  placeholder="Picker"
                  placeholderStyle={{ color: "#bfc6ea" }}
                  placeholderIconColor="#007aff"
                  selectedValue={picker}
                  onValueChange={value => setPicker(value)}
                >
                  {options.map((name, index) => (
                    <Picker.Item label={name} key={index} value={index} />
                  ))}
                </Picker>
              </Item>
            </Col>
          </Row>
          <Row>
            <Col>
              <ListItem>
                <CheckBox
                  checked={checkbox}
                  onPress={() => setCheckbox(!checkbox)}
                />
                <Body>
                  <Text>Checkbox</Text>
                </Body>
              </ListItem>
            </Col>
          </Row>
          <Row>
            <Col>
              {options.map((name, index) => (
                <ListItem>
                  <Left>
                    <Text>{name}</Text>
                  </Left>
                  <Right>
                    <Radio
                      selected={index === radio}
                      onPress={() => setRadio(index)}
                    />
                  </Right>
                </ListItem>
              ))}
            </Col>
          </Row>
        </Grid>
      </Form>
    </Container>
  );
}
