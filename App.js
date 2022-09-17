import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
import CreatePostScreen from "./src/screens/CreatePostScreen";
import FeedScreen from "./src/screens/FeedScreen";

export default function App() {
  return (
    <View style={styles.container}>
      <CreatePostScreen />
      <StatusBar style="auto" />
    </View>
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
