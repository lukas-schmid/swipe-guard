import React, { useState } from "react";
import { Image, StyleSheet, Dimensions, View } from "react-native";
import Swiper from "react-native-swiper";

const { width, height } = Dimensions.get("window");

interface ImageSwiperProps {
  images: string[] | null;
}

export const ImageSwiper = ({ images }: ImageSwiperProps) => {
  const [swiperIndex, setSwiperIndex] = useState(0);

  if (!images || images.length === 0) return;

  return (
    <Swiper
      index={swiperIndex}
      loop={false}
      showsPagination={false}
      onIndexChanged={(index) => setSwiperIndex(index)}>
      {images.map((image, index) => (
        <View key={index} style={styles.slide}>
          <Image source={{ uri: image }} style={styles.image} />
        </View>
      ))}
    </Swiper>
  );
};

const styles = StyleSheet.create({
  slide: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    width,
  },
  image: {
    width,
    height,
    resizeMode: "contain",
  },
});
