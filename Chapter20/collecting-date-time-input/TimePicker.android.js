import React from "react";
import PropTypes from "prop-types";
import { Text, View, TimePickerAndroid } from "react-native";
import styles from "./styles";

function pickDate(options, onTimeChange) {
  TimePickerAndroid.open(options).then(time =>
    onTimeChange(new Date(0, 0, 1, time.hour, time.minute))
  );
}

export default function TimePicker({ label, date, onTimeChange }) {
  return (
    <View style={styles.datePickerContainer}>
      <Text style={styles.datePickerLabel}>{label}</Text>
      <Text onPress={() => pickDate({ date }, onTimeChange)}>
        {date.toLocaleTimeString()}
      </Text>
    </View>
  );
}

TimePicker.propTypes = {
  label: PropTypes.string,
  date: PropTypes.instanceOf(Date),
  onTimeChange: PropTypes.func.isRequired
};
