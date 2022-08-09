import * as React from "react";
import { SafeAreaView, StyleSheet, StatusBar } from "react-native";
import { useFonts } from "expo-font";
import GradientText from "./GradientText.";

export default function App() {
  // load the WorkSans fonts
  const [fontsLoaded] = useFonts({
    "WorkSans-Regular": require("./assets/fonts/WorkSans-Regular.ttf"),
    "WorkSans-SemiBold": require("./assets/fonts/WorkSans-SemiBold.ttf"),
  });
  if (!fontsLoaded) {
    return null;
  }

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor="#3C3C3C" />
      <GradientText style={styles.progress} text="PROGRESS" />
      {/* Added copy for second shadow */}
      <GradientText style={styles.progressShadow} text="PROGRESS" />
      <GradientText style={styles.fit} text="FIT" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#3C3C3C",
    alignItems: "center",
    justifyContent: "center",
  },
  progress: {
    color: "white",
    fontFamily: "WorkSans-Regular",
    fontStyle: "normal",
    fontWeight: "400",
    fontSize: 34,
    lineHeight: 40,
    textShadowColor: "rgba(66, 255, 255, 0.4)",
    textShadowOffset: { width: -1, height: -1 },
    textShadowRadius: 4,
  },
  progressShadow: {
    color: "white",
    fontFamily: "WorkSans-Regular",
    fontStyle: "normal",
    fontWeight: "400",
    fontSize: 34,
    lineHeight: 40,
    textShadowColor: "rgba(255, 192, 66, 0.5)",
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 4,
  },
  fit: {
    color: "white",
    fontFamily: "WorkSans-SemiBold",
    fontStyle: "normal",
    fontWeight: "600",
    fontSize: 34,
    lineHeight: 40,
  },
});
