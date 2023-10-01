import { LinearGradient } from "expo-linear-gradient";
import {
  Dimensions,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { useImagePicker } from "src/hooks/useImagePicker";
import { colors } from "src/utils/colors";

const { width } = Dimensions.get("screen");

export const InitialStartButton = () => {
  const { pickImages } = useImagePicker();

  return (
    <View style={styles.buttonContainer}>
      <TouchableOpacity onPress={pickImages}>
        <LinearGradient
          colors={[colors.primary_80, colors.primary_100]}
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
    color: colors.white,
    backgroundColor: "transparent",
  },
});
