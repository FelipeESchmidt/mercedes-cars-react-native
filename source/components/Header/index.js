import { View, Image } from "react-native";

import OSText from "../OSText";
import { styles } from "./index.styles";

function Header({ logo, title, subtitle }) {
  return (
    <View style={styles.container}>
      <Image style={styles.logo} source={logo} />
      <OSText style={styles.title}>{title}</OSText>
      <OSText style={styles.subtitle}>{subtitle}</OSText>
    </View>
  );
}

export default Header;
