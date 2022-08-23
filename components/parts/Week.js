import { StyleSheet, Text, View } from "react-native";
import { Neomorphism } from "../../Neomorphism";

let SCALE = 1;

export const Week = (props) => {
  SCALE = props.scale;
  return (
    <Neomorphism
      height={38 / SCALE}
      width={260 / SCALE}
      x={4 / SCALE}
      y={4 / SCALE}
      r={10 / SCALE}
      b={4 / SCALE}
      colorS1="rgba(0, 0, 0, 0.5)"
      colorS2="rgba(153, 153, 153, 0.5)"
      colorB={props.bg2}
      pady={10 / SCALE}
      inset={true}
    ></Neomorphism>
  );
};
