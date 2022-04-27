import { StyleSheet, Dimensions } from "react-native";

const { height } = Dimensions.get("screen");

export const styles = StyleSheet.create({
  container: {
    height: height * 0.3,
    backgroundColor: "#1a1a1a",
    alignItems: "center",
    justifyContent: "center",
  },
  logo: {
    width: 100,
    height: 100,
  },
  title: {
    marginVertical: 20,
    fontSize: 28,
    fontWeight: "200",
    color: "white",
  },
  subtitle: {
    fontSize: 18,
    fontWeight: "200",
    color: "white",
  },
});
