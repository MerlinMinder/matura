import { StyleSheet, Text, View } from "react-native";
import { Neomorphism } from "../Neomorphism";
import Svg, { Path } from "react-native-svg";
import { Week } from "./parts/Week";
import { Weektitle } from "./parts/Weektitle";

let SCALE = 1;

export const Calendar = (props) => {
  const BG2 = props.bg2;
  SCALE = props.scale;

  const initarr = [1, 2, 3, 4, 5];

  return (
    <Neomorphism
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        paddingTop: 13 / SCALE,
        paddingRight: 20 / SCALE,
        paddingBottom: 20 / SCALE,
        paddingLeft: 20 / SCALE,
      }}
      height={330 / SCALE}
      width={300 / SCALE}
      x={10 / SCALE}
      y={10 / SCALE}
      r={15 / SCALE}
      b={10 / SCALE}
      colorS1="rgba(0, 0, 0, 0.7)"
      colorS2="rgba(128, 128, 128, 0.7)"
      colorB={BG2}
    >
      {/* title / month selector */}
      <View style={styles.title}>
        <View style={styles.arrow}>
          <Svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <Path
              d="M16.88 18.12L10.7733 12L16.88 5.88L15 4L7 12L15 20L16.88 18.12Z"
              fill="white"
            />
          </Svg>
        </View>
        <Text style={styles.month}>July 2022</Text>
        <View style={styles.arrow}>
          <Svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <Path
              d="M7 18.12L13.1067 12L7 5.88L8.88 4L16.88 12L8.88 20L7 18.12Z"
              fill="white"
            />
          </Svg>
        </View>
      </View>

      {/* weektitles */}
      <Weektitle scale={SCALE} bg2={BG2} />

      {/* Weeks mapped out containing days */}
      {initarr.map((ia) => {
        return (
          <View key={ia} style={{ marginTop: 5 / SCALE }}>
            <Week scale={SCALE} bg2={BG2}></Week>
          </View>
        );
      })}
    </Neomorphism>
  );
};

const styles = StyleSheet.create({
  title: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    paddingTop: 2 / SCALE,
    paddingRight: 10 / SCALE,
    paddingBottom: 2 / SCALE,
    paddingLeft: 10 / SCALE,
    width: 260 / SCALE,
    height: 39 / SCALE,
    backgroundColor: "#464646",
    borderRadius: 10 / SCALE,
  },
  month: {
    width: 116 / SCALE,
    height: 28 / SCALE,
    fontFamily: "WorkSans-SemiBold",
    fontStyle: "normal",
    fontWeight: "600",
    fontSize: 24 / SCALE,
    lineHeight: 28 / SCALE,
    display: "flex",
    alignItems: "center",
    textAlign: "center",
    color: "#FFFFFF",
    marginHorizontal: 10 / SCALE,
  },
  arrow: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: 45 / SCALE,
    height: 35 / SCALE,
    backgroundColor: "#464646",
  },
});
