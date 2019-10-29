import React from "react";
import PropTypes from "prop-types";
import { Text, View, DatePickerAndroid } from "react-native";
import styles from "./styles";

function pickDate(options, onDateChange) {
  DatePickerAndroid.open(options).then(date =>
    onDateChange(new Date(date.year, date.month, date.day))
  );
}

export default function DatePicker({ label, date, onDateChange }) {
  return (
    <View style={styles.datePickerContainer}>
      <Text style={styles.datePickerLabel}>{label}</Text>
      <Text onPress={() => pickDate({ date }, onDateChange)}>
        {date.toLocaleDateString()}
      </Text>
    </View>
  );
}

DatePicker.propTypes = {
  label: PropTypes.string,
  date: PropTypes.instanceOf(Date),
  onDateChange: PropTypes.func.isRequired
};
