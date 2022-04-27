import { StyleSheet, Dimensions } from "react-native";

const { height } = Dimensions.get("screen");

export const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    height: height * 0.1,
    padding: 10,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#1a1a1a",
  },
  logo: {
    width: 50,
    height: 50,
  },
  title: {
    fontSize: 25,
    fontWeight: "200",
    color: "white",
  },
});
