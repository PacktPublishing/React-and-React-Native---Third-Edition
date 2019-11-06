import React from "react";
import PropTypes from "prop-types";
import { View, Modal, ActivityIndicator } from "react-native";
import styles from "./styles";

export default function Activity(props) {
  console.log("visible", props.visible);
  return (
    <Modal visible={props.visible} transparent>
      <View style={styles.modalContainer}>
        <ActivityIndicator size={props.size} />
      </View>
    </Modal>
  );
}

Activity.propTypes = {
  visible: PropTypes.bool.isRequired,
  size: PropTypes.string.isRequired
};

Activity.defaultProps = {
  visible: false,
  size: "large"
};
