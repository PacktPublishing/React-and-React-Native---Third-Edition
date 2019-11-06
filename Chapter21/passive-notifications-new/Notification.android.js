import React from "react";
import PropTypes from "prop-types";
import { ToastAndroid } from "react-native";

export default function Notification({ message, duration }) {
  if (message) {
    ToastAndroid.show(message, duration);
  }

  return null;
}

Notification.propTypes = {
  message: PropTypes.string,
  duration: PropTypes.number.isRequired
};

Notification.defaultProps = {
  duration: ToastAndroid.LONG
};
