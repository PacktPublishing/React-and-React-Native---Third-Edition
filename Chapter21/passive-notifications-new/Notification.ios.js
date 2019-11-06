import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { View, Modal, Text } from "react-native";
import styles from "./styles";

export default function Notification({ message, duration }) {
  const [visible, setVisible] = useState(false);
  const [timer, setTimer] = useState(null);

  useEffect(() => {
    setVisible(!!message);
    setTimer(
      setTimeout(() => {
        setVisible(false);
      }, duration)
    );

    return () => {
      clearTimeout(timer);
    };
  });

  const modalProps = {
    animationType: "fade",
    transparent: true,
    visible
  };

  return (
    <Modal {...modalProps}>
      <View style={styles.notificationContainer}>
        <View style={styles.notificationInner}>
          <Text>{message}</Text>
        </View>
      </View>
    </Modal>
  );
}

Notification.propTypes = {
  message: PropTypes.string,
  duration: PropTypes.number.isRequired
};

Notification.defaultProps = {
  duration: 1500
};
