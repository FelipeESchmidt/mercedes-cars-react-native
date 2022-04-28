import { View } from "react-native";

import CarInfo from "../CarInfo";
import OSText from "../OSText";
import ImagesScroll from "../ImagesScroll";

import { styles } from "./index.styles";

export default function Car({ item: { name, images, info } }) {
  return (
    <View style={styles.car}>
      <OSText style={styles.name}>{name}</OSText>

      <ImagesScroll images={images} name={name} />

      <CarInfo info={info} />
    </View>
  );
}
