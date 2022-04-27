import { View } from "react-native";

import OSText from "../OSText";

import { styles } from "./index.styles";

export default function CarInfo({ info }) {
  return (
    <View style={styles.infoWrapper}>
      {info.map((single, i) => (
        <View key={`${single.carId}-${i}`}>
          <OSText style={[styles.text, styles.up]}>{single.up}</OSText>
          <OSText style={[styles.text, styles.mid]}>{single.mid}</OSText>
          <OSText style={[styles.text, styles.bottom]}>{single.bottom}</OSText>
        </View>
      ))}
    </View>
  );
}
