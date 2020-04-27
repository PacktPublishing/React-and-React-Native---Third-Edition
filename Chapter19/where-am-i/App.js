import React, { useState, useEffect } from "react";
import { Text, View } from "react-native";
import styles from "./styles";

const API_KEY = "";
const URL = `https://maps.google.com/maps/api/geocode/json?key=${API_KEY}&latlng=`;

export default function WhereAmI() {
  const [address, setAddress] = useState("loading...");
  const [longitude, setLongitude] = useState();
  const [latitude, setLatitude] = useState();

  useEffect(() => {
    function setPosition({ coords: { latitude, longitude } }) {
      setLongitude(longitude);
      setLatitude(latitude);
      fetch(`${URL}${latitude},${longitude}`)
        .then(
          (resp) => resp.json(),
          (e) => console.error(e)
        )
        .then(({ results }) => {
          setAddress(results[0].formatted_address);
        });
    }

    navigator.geolocation.getCurrentPosition(setPosition);

    let watcher = navigator.geolocation.watchPosition(
      setPosition,
      (err) => console.error(err),
      { enableHighAccuracy: true }
    );

    return () => {
      navigator.geolocation.clearWatch(watcher);
    };
  });

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Address: {address}</Text>
      <Text style={styles.label}>Latitude: {latitude}</Text>
      <Text style={styles.label}>Longitude: {longitude}</Text>
    </View>
  );
}
