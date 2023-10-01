import { View, StyleSheet, ActivityIndicator } from "react-native";
import { useImagePicker } from "src/hooks/useImagePicker";

import { ImageSwiper } from "./ImageSwiper";
import { InitialStartButton } from "./InitialStartButton";

export const ImagePicker = () => {
  const { images, isLoading } = useImagePicker();

  if (isLoading) {
    return (
      <View>
        <ActivityIndicator size={"large"} />
      </View>
    );
  }

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
};

const styles = StyleSheet.create({
  buttonContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
