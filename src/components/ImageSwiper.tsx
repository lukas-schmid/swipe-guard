import React, { useState, useRef, useCallback } from "react";
import {
  Image,
  StyleSheet,
  Dimensions,
  View,
  ScrollView,
  GestureResponderEvent,
  NativeSyntheticEvent,
  NativeScrollEvent,
  Text,
} from "react-native";

import { TopNavigationBar } from "./TopNavigationBar";

const { width, height } = Dimensions.get("window");

interface ImageSwiperProps {
  images: string[] | null;
}

export const ImageSwiper = ({ images }: ImageSwiperProps) => {
  const [swiperIndex, setSwiperIndex] = useState(0);
  const [isNavigationBarVisible, setIsNavigationBarVisible] = useState(false);
  const touchStartX = useRef(0);
  const touchStartTime = useRef(0);
  const scrollViewRef = useRef<ScrollView | null>(null);

  const toggleNavigationBar = useCallback(() => {
    setIsNavigationBarVisible((prevIsVisible) => !prevIsVisible);
  }, []);

  const handleTouchStart = useCallback((event: GestureResponderEvent) => {
    touchStartX.current = event.nativeEvent.locationX;
    touchStartTime.current = Date.now();
  }, []);

  const handleTouchEnd = useCallback(
    (event: GestureResponderEvent) => {
      const touchEndX = event.nativeEvent.locationX;
      const touchEndTime = Date.now();
      const swipeDistance = touchEndX - touchStartX.current;
      const touchDuration = touchEndTime - touchStartTime.current;

      if (Math.abs(swipeDistance) < 10 && touchDuration < 300) {
        toggleNavigationBar();
      }
    },
    [toggleNavigationBar],
  );

  const handleScroll = useCallback(
    (event: NativeSyntheticEvent<NativeScrollEvent>) => {
      const offsetX = event.nativeEvent.contentOffset.x;
      const newIndex = Math.floor(offsetX / width);
      setSwiperIndex(newIndex);
    },
    [],
  );

  if (!images || images.length === 0) return null;

  return (
    <View style={styles.container}>
      {isNavigationBarVisible && images && <TopNavigationBar />}
      <ScrollView
        ref={scrollViewRef}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        onMomentumScrollEnd={handleScroll}
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >
        {images.map((image, index) => (
          <View key={index} style={styles.slide}>
            <Image source={{ uri: image }} style={styles.image} />
          </View>
        ))}
      </ScrollView>
      <View style={styles.indexContainer}>
        <Text style={styles.indexText}>
          {swiperIndex + 1}/{images.length}
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
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
  indexContainer: {
    alignItems: "center",
    marginTop: 10,
  },
  indexText: {
    fontSize: 16,
    fontWeight: "bold",
    color: "white",
  },
});
