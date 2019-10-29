import React, { useState } from "react";
import { View } from "react-native";
import DatePicker from "./DatePicker";
import TimePicker from "./TimePicker";
import styles from "./styles";

export default function CollectingDateTimeInput() {
  const [date, setDate] = useState(new Date());
  const [time, setTime] = useState(new Date());

  return (
    <View style={styles.container}>
      <DatePicker
        label="Pick a date, any date:"
        date={date}
        onDateChange={setDate}
      />
      <TimePicker
        label="Pick a time, any time:"
        date={time}
        onTimeChange={setTime}
      />
    </View>
  );
}
