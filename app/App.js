import { StatusBar } from "expo-status-bar";
import { StyleSheet, SafeAreaView, View } from "react-native";
import React from "react";
import GradientText from "./GradientText.";
import { Neomorphism } from "./Neomorphism";
import { useFonts } from "expo-font";

const BG1 = "#3C3C3C";
const BG2 = "#464646";

export default function App() {
  // load the WorkSans fonts
  const [fontsLoaded] = useFonts({
    "WorkSans-Regular": require("./assets/fonts/WorkSans-Regular.ttf"),
    "WorkSans-SemiBold": require("./assets/fonts/WorkSans-SemiBold.ttf"),
    "WorkSans-Bold": require("./assets/fonts/WorkSans-Bold.ttf"),
  });
  if (!fontsLoaded) {
    return null;
  }

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor={BG1} />

      {/* Title */}
      <View style={styles.title}>
        <View style={styles.progresspos}>
          <GradientText style={styles.progress} text="PROGRESS" />
        </View>
        <View style={styles.progresspos}>
          {/* Added copy for second shadow */}
          <GradientText style={styles.progressShadow} text="PROGRESS" />
        </View>
        <View style={styles.fitpos}>
          <GradientText style={styles.fit} text="FIT" />
        </View>
      </View>

      {/* Calendar */}
      <View style={styles.calendar}></View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: BG1,
  },
  title: { top: 20, height: 40, width: 340 },
  progresspos: {
    position: "absolute",
    width: 182,
    height: 40,
  },
  fitpos: {
    position: "absolute",
    left: 180,
    width: 60,
    height: 40,
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
  calendar: {
    width: 300,
    height: 330,
    backgroundColor: BG2,
    borderRadius: 15,
    top: 40,
  },
});
