import { View, Image } from "react-native";

import CarInfo from "../CarInfo";
import OSText from "../OSText";

import { styles } from "./index.styles";

export default function Car({ item: { name, image, info } }) {
  return (
    <View style={styles.car}>
      <OSText style={styles.name}>{name}</OSText>
      <Image style={styles.image} source={image} />
      <CarInfo info={info} />
    </View>
  );
}
