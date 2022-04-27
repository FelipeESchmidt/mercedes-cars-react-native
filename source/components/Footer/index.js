import { View, Image } from "react-native";

import OSText from "../OSText";
import { styles } from "./index.styles";

function Footer({ logo, title }) {
  return (
    <View style={styles.container}>
      <Image style={styles.logo} source={logo} />
      <OSText style={styles.title}>{title}</OSText>
    </View>
  );
}

export default Footer;
