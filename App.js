import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import Navigation from "./src/navigation";
import awsconfig from "./src/aws-exports";
import { Amplify } from "aws-amplify";

Amplify.configure(awsconfig);

export default function App() {
  return (
    <SafeAreaProvider>
      <View style={styles.container}>
        <Navigation />
        <StatusBar style="auto" />
      </View>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
