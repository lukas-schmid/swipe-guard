import React, { useCallback } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  GestureResponderEvent,
} from "react-native";
import { useImages } from "src/hooks/useImages";

export const TopNavigationBar = () => {
  const { pickImages } = useImages();

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
    backgroundColor: "#00a925",
    height: 70,
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    top: 0,
    width: "100%",
  },
  navbar: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "center",
  },
});
