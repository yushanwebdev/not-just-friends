import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
import FeedPost from "./src/components/FeedPost";

export default function App() {
  return (
    <View style={styles.container}>
      <FeedPost />

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
