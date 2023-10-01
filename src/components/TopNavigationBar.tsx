import React, { useCallback } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  GestureResponderEvent,
} from "react-native";
import { useImagePicker } from "src/hooks/useImagePicker";
import { colors } from "src/utils/colors";

export const TopNavigationBar = () => {
  const { pickImages } = useImagePicker();

  const handlePress = useCallback(
    (event: GestureResponderEvent) => {
      event.stopPropagation(); // Prevent event propagation
      pickImages();
    },
    [pickImages],
  );

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={handlePress}>
        <Text style={styles.navbar}>Pick new images</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.primary_100,
    height: 70,
    justifyContent: "center",
    alignItems: "center",
    position: "relative",
    top: 0,
    width: "100%",
  },
  navbar: {
    color: colors.white,
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "center",
  },
});
