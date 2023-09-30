import React, { FC } from "react";
import { Dimensions, StyleSheet, Text } from "react-native";
import { TouchableOpacity } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

const { height, width } = Dimensions.get("screen");

interface Props {
  title: string;
  onPress: () => void;
}

const Button: FC<Props> = (props) => {
  return (
    <TouchableOpacity onPress={props.onPress}>
      <LinearGradient
        colors={["#00D72F", "#4D9C5F"]}
        style={styles.linearGradient}
      >
        <Text style={styles.buttonText}>{props.title}</Text>
      </LinearGradient>
    </TouchableOpacity>
  );
};

export default Button;

const styles = StyleSheet.create({
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
