import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import CreatePostScreen from "./src/screens/CreatePostScreen";
import FeedScreen from "./src/screens/FeedScreen";

export default function App() {
  return (
    <SafeAreaProvider>
      <View style={styles.container}>
        <CreatePostScreen />
        <StatusBar style="auto" />
      </View>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
