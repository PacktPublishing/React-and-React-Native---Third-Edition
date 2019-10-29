import React from "react";
import PropTypes from "prop-types";
import { Text, View, DatePickerIOS } from "react-native";
import styles from "./styles";

export default function DatePicker(props) {
  return (
    <View style={styles.datePickerContainer}>
      <Text style={styles.datePickerLabel}>{props.label}</Text>
      <DatePickerIOS
        mode="time"
        date={props.date}
        onDateChange={props.onTimeChange}
      />
    </View>
  );
}

DatePicker.propTypes = {
  label: PropTypes.string
};
