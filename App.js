import { StatusBar } from "expo-status-bar";
import { StyleSheet, SafeAreaView, View, Dimensions } from "react-native";
import React from "react";
import { Calendar } from "./components/Calendar";
import { useFonts } from "expo-font";
import Constants from "expo-constants";
import { Title } from "./components/Title";

const BG1 = "#3C3C3C";
const BG2 = "#464646";

let SCALE = 1;

export default function App() {
  // setting scale from design to phone size
  SCALE = 375 / Dimensions.get("screen").width;

  // load the WorkSans fonts
  const [fontsLoaded] = useFonts({
    "WorkSans-Regular": require("./assets/fonts/WorkSans-Regular.ttf"),
    "WorkSans-SemiBold": require("./assets/fonts/WorkSans-SemiBold.ttf"),
    // "WorkSans-Bold": require("./assets/fonts/WorkSans-Bold.ttf"),
    "WorkSans-Light": require("./assets/fonts/WorkSans-Light.ttf"),
  });
  if (!fontsLoaded) {
    return null;
  }

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor={"transparent"} />
      {/* Title */}
      <Title scale={SCALE} />

      {/* Calendar */}
      <Calendar scale={SCALE} bg2={BG2} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: BG1,
    paddingTop: Platform.OS === "android" ? Constants.statusBarHeight : 0,
  },
});
