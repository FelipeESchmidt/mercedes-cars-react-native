import { StyleSheet, Dimensions } from "react-native";

const { width } = Dimensions.get("window");
const height = 150;

export const styles = StyleSheet.create({
  scrollWrapper: {
    width,
    height,
  },
  scroll: {
    width,
    height,
  },
  image: {
    width,
    height,
    resizeMode: "contain",
  },
  dots: {
    flexDirection: "row",
    position: "absolute",
    bottom: -25,
    alignSelf: "center",
  },
  dot: {
    fontSize: 25,
    color: "#555",
    marginHorizontal: 10,
  },
  selected: {
    color: "#e53935",
  },
});
