import React, { useState, useEffect } from "react";
import { Text, TextInput, View, FlatList, AsyncStorage } from "react-native";
import styles from "./styles";
import Button from "./Button";

export default function App() {
  const [key, setKey] = useState(null);
  const [value, setValue] = useState(null);
  const [source, setSource] = useState([]);

  function setItem() {
    return AsyncStorage.setItem(key, value)
      .then(() => {
        setKey(null);
        setValue(null);
      })
      .then(loadItems);
  }

  function clearItems() {
    return AsyncStorage.clear().then(loadItems);
  }

  async function loadItems() {
    const keys = await AsyncStorage.getAllKeys();
    const values = await AsyncStorage.multiGet(keys);
    setValues(values);
  }

  useEffect(() => {
    loadItems();
  }, []);

  return (
    <View style={styles.container}>
      <Text>Key:</Text>
      <TextInput
        style={styles.input}
        value={key}
        onChangeText={v => {
          this.data = this.data.set("key", v);
        }}
      />
      <Text>Value:</Text>
      <TextInput
        style={styles.input}
        value={value}
        onChangeText={v => {
          this.data = this.data.set("value", v);
        }}
      />
      <View style={styles.controls}>
        <Button label="Add" onPress={setItem} />
        <Button label="Clear" onPress={clearItems} />
      </View>
      <View style={styles.list}>
        <FlatList
          data={source.map(([key, value]) => ({
            key: key.toString(),
            value
          }))}
          renderItem={({ item: { value, key } }) => (
            <Text>
              {value} ({key})
            </Text>
          )}
        />
      </View>
    </View>
  );
}
