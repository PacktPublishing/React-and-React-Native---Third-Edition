import React from "react";
import { Card, CardItem, Body, Text } from "native-base";
import { Col, Row, Grid } from "react-native-easy-grid";
import Container from "./Container";

export default function App() {
  return (
    <Container title="Using Layout Components">
      <Grid>
        <Row>
          <Col>
            <Card>
              <CardItem>
                <Body>
                  <Text>Card 1</Text>
                </Body>
              </CardItem>
            </Card>
          </Col>
          <Col>
            <Card>
              <CardItem>
                <Body>
                  <Text>Card 2</Text>
                </Body>
              </CardItem>
            </Card>
          </Col>
        </Row>
        <Row>
          <Col>
            <Card>
              <CardItem>
                <Body>
                  <Text>Card 3</Text>
                </Body>
              </CardItem>
            </Card>
          </Col>
          <Col>
            <Card>
              <CardItem>
                <Body>
                  <Text>Card 4</Text>
                </Body>
              </CardItem>
            </Card>
          </Col>
        </Row>
      </Grid>
    </Container>
  );
}
