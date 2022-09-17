import { useState } from "react";
import {
  Button,
  Image,
  KeyboardAvoidingView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

const user = {
  id: "u1",
  image:
    "https://notjustdev-dummy.s3.us-east-2.amazonaws.com/avatars/vadim.jpg",
  name: "Vadim Savin",
};

const CreatePostScreen = () => {
  const insets = useSafeAreaInsets();
  const [description, setDescription] = useState("");

  const onSubmit = () => {
    console.warn("On Submit", description);
    setDescription("");
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={[styles.container, { marginBottom: insets.bottom }]}
      contentContainerStyle={{ flex: 1 }}
    >
      <View style={styles.container}>
        <View style={styles.header}>
          <Image
            source={{
              uri: user.image,
            }}
            style={styles.image}
          />
          <Text style={styles.name}>{user.name}</Text>
        </View>

        <TextInput
          value={description}
          onChangeText={setDescription}
          placeholder="What is on your mind?"
          multiline
        />

        <View style={styles.buttonContainer}>
          <Button title="Post" onPress={onSubmit} />
        </View>
      </View>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    padding: 10,
    paddingTop: 30,
    backgroundColor: "#fff",
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    width: "100%",
    padding: 10,
  },
  image: {
    height: 40,
    width: 40,
    borderRadius: 20,
    marginRight: 10,
  },
  name: {
    fontWeight: "500",
  },
  buttonContainer: {
    marginTop: "auto",
  },
});

export default CreatePostScreen;
