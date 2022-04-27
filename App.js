import { StyleSheet, SafeAreaView, View, StatusBar } from "react-native";
import HomeScreen from "./source/screens/Home";

import {
  useFonts,
  OpenSans_300Light,
  OpenSans_500Medium,
  OpenSans_700Bold,
} from "@expo-google-fonts/open-sans";

export default function App() {
  const [fontsLoaded] = useFonts({
    OpenSans_300Light,
    OpenSans_500Medium,
    OpenSans_700Bold,
  });

  if (!fontsLoaded) {
    return <View />;
  }

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="auto" />
      <HomeScreen />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1e1e1e",
  },
});
