import React from "react";
import { Text } from "react-native";
import MaskedView from "@react-native-masked-view/masked-view";
import { LinearGradient } from "expo-linear-gradient";

// thanks to Harshal for writing this part on stackoverflow
// I had to change the LinearGradient component since the original package it was from didn't work on Expo
// https://stackoverflow.com/questions/51248255/how-to-create-a-gradient-text-in-react-native

export default GradientText = (props) => {
  return (
    <MaskedView
      maskElement={
        <Text style={[props.style, { backgroundColor: "transparent" }]}>
          {props.text}
        </Text>
      }
    >
      <LinearGradient
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
        colors={["#42FFFF", "#FFC042"]}
      >
        <Text style={[props.style, { opacity: 0 }]}>{props.text}</Text>
      </LinearGradient>
    </MaskedView>
  );
};
