import React, { useState } from "react";
import { List, ListItem, Text, Left, Right, Icon } from "native-base";
import Container from "./Container";

export default function App() {
  const [items, setItems] = useState(
    new Array(100)
      .fill(null)
      .map((value, index) => ({ name: `Item ${index + 1}`, selected: false }))
  );

  function toggleSelected(index) {
    return () => {
      const newItems = [...items];
      const item = { ...items[index], selected: !items[index].selected };

      newItems[index] = item;

      setItems(newItems);
    };
  }

  return (
    <Container title="Displaying Data Using Lists">
      <List>
        {items.map((item, index) => (
          <ListItem selected={item.selected} onPress={toggleSelected(index)}>
            <Left>
              <Text>{item.name}</Text>
            </Left>
            <Right>{item.selected ? <Icon name="checkmark" /> : null}</Right>
          </ListItem>
        ))}
      </List>
    </Container>
  );
}
