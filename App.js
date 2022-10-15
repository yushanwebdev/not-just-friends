import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import Navigation from "./src/navigation";
import awsconfig from "./src/aws-exports";
import { Amplify } from "aws-amplify";
import { withAuthenticator } from "aws-amplify-react-native";
import { UserContextProvider } from "./src/contexts/UserContext";

Amplify.configure({
  ...awsconfig,
  Analytics: { disabled: true },
});

function App() {
  return (
    <SafeAreaProvider>
      <View style={styles.container}>
        <UserContextProvider>
          <Navigation />
        </UserContextProvider>
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

export default withAuthenticator(App);
