import { Text } from "react-native";

import { styles } from "./index.styles";

export default function OSText({ children, style }) {
  const fontWeight = style?.fontWeight;
  let textStyle = styles.boldText;

  switch (fontWeight) {
    case "bold":
      textStyle = styles.boldText;
      break;
    case "200":
      textStyle = styles.lightText;
      break;
    default:
      textStyle = styles.text;
  }

  return <Text style={[style, textStyle]}>{children}</Text>;
}
