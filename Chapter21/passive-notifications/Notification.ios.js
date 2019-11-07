import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { View, Modal, Text } from "react-native";
import styles from "./styles";

export default function Notification(props) {
  const [message, setMessage] = useState(props.message);

  useEffect(() => {
    if (!message) {
      setMessage(props.message);

      const timer = setTimeout(() => {
        setMessage(null);
      }, props.duration);

      return () => {
        clearTimeout(timer);
      };
    }
  }, [props.message]);

  const modalProps = {
    animationType: "fade",
    transparent: true,
    visible: Boolean(message)
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
