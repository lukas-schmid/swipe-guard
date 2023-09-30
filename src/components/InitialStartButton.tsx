import { LinearGradient } from "expo-linear-gradient";
import {
  Dimensions,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { useImages } from "src/hooks/useImages";

const { width } = Dimensions.get("screen");

export const InitialStartButton = () => {
  const { pickImages } = useImages();

  return (
    <View style={styles.buttonContainer}>
      <TouchableOpacity onPress={pickImages}>
        <LinearGradient
          colors={["#00D72F", "#4D9C5F"]}
          style={styles.linearGradient}
        >
          <Text style={styles.buttonText}>{"Pick images"}</Text>
        </LinearGradient>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  buttonContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  linearGradient: {
    width: width / 1.3,
    paddingLeft: 15,
    paddingRight: 15,
    borderRadius: 5,
    paddingVertical: 2,
    alignItems: "center",
    justifyContent: "center",
    alignSelf: "center",
    marginVertical: 20,
  },
  buttonText: {
    fontSize: 21,
    fontWeight: "bold",
    textAlign: "center",
    margin: 10,
    color: "#ffffff",
    backgroundColor: "transparent",
  },
});
