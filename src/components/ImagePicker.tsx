import { View, StyleSheet } from "react-native";
import { useImages } from "src/hooks/useImages";

import { ImageSwiper } from "./ImageSwiper";
import { InitialStartButton } from "./InitialStartButton";

export default function ImagePicker() {
  const { images } = useImages();

  return (
    <View style={{ flex: 1 }}>
      {!images && (
        <View style={styles.buttonContainer}>
          <InitialStartButton />
        </View>
      )}
      <ImageSwiper />
    </View>
  );
}

const styles = StyleSheet.create({
  buttonContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
