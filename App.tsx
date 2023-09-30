import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
import ImagePicker from "src/components/ImagePicker";
import { ImageProvider } from "src/context/ImageContext";

export default function App() {
  return (
    <ImageProvider>
      <View style={styles.container}>
        <StatusBar style="auto" />
        <ImagePicker />
      </View>
    </ImageProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
    alignItems: "center",
    justifyContent: "center",
  },
});
