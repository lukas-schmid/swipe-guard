import React, { useState } from "react";
import { Image, View, StyleSheet, Dimensions } from "react-native";
import * as ExpoImagePicker from "expo-image-picker";
import Button from "./Button";
import Swiper from "react-native-swiper";

const { width, height } = Dimensions.get("window");

export default function ImagePicker() {
  const [images, setImages] = useState<string[] | null>(null);
  const [swiperIndex, setSwiperIndex] = useState(0);

  const pickImage = async () => {
    // No permissions request is necessary for launching the image library
    const result = await ExpoImagePicker.launchImageLibraryAsync({
      mediaTypes: ExpoImagePicker.MediaTypeOptions.All,
      allowsEditing: false,
      quality: 1,
      allowsMultipleSelection: true,
    });

    if (!result.canceled) {
      const imageUris = result.assets.map((asset) => asset.uri);
      setImages(imageUris);
    }
  };

  return (
    <View style={{ flex: 1 }}>
      {!images && (
        <View style={styles.buttonContainer}>
          <Button title="Pick images" onPress={pickImage} />
        </View>
      )}
      {images && images.length > 0 && (
        <Swiper
          index={swiperIndex}
          loop={false}
          showsPagination={false}
          onIndexChanged={(index) => setSwiperIndex(index)}
        >
          {images.map((image, index) => (
            <View key={index} style={styles.slide}>
              <Image source={{ uri: image }} style={styles.image} />
            </View>
          ))}
        </Swiper>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  buttonContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  slide: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    width,
  },
  image: {
    width: width,
    height: height,
    resizeMode: "contain",
  },
});
