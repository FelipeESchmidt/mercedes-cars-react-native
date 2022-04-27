import { StyleSheet, Dimensions } from "react-native";

const { width } = Dimensions.get("window");
const height = 150;

export const styles = StyleSheet.create({
  car: {
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: "#424242",
  },
  scrollWrapper: {
    width,
    height,
  },
  scroll: {
    width,
    height,
  },
  name: {
    paddingHorizontal: 15,
    color: "white",
    fontSize: 25,
    fontWeight: "bold",
    marginVertical: 30,
  },
  image: {
    width,
    height,
    resizeMode: "contain",
  },
  dots: {
    flexDirection: "row",
    position: "absolute",
    bottom: -10,
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
