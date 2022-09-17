import { StatusBar } from "expo-status-bar";
import { Image, StyleSheet, Text, View } from "react-native";
import {
  Entypo,
  AntDesign,
  FontAwesome5,
  MaterialCommunityIcons,
} from "@expo/vector-icons";
import LikeImage from "../../assets/images/like.png";

const post = {
  id: "p1",
  createdAt: "19 m",
  User: {
    id: "u1",
    image:
      "https://notjustdev-dummy.s3.us-east-2.amazonaws.com/avatars/zuck.jpeg",
    name: "Yushan Fernando",
  },
  description:
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
  image: "https://notjustdev-dummy.s3.us-east-2.amazonaws.com/images/1.jpg",
  numberOfLikes: 11,
  numberOfShares: 2,
};

const FeedPost = () => {
  return (
    <View style={styles.post}>
      {/* Header */}
      <View style={styles.header}>
        <Image source={{ uri: post.User.image }} style={styles.profileImage} />
        <View>
          <Text style={styles.name}>{post.User.name}</Text>
          <Text style={styles.subtitle}>{post.createdAt}</Text>
        </View>
        <Entypo
          name="dots-three-horizontal"
          size={18}
          color="gray"
          style={styles.icon}
        />
      </View>

      {/* Body */}
      {post.description && (
        <Text style={styles.description}>{post.description}</Text>
      )}

      {post.image && (
        <Image
          source={{
            uri: post.image,
          }}
          style={styles.image}
        />
      )}

      {/* Footer */}
      <View style={styles.footer}>
        {/* Stats Row */}
        <View style={styles.statsRow}>
          <Image source={LikeImage} style={styles.likeIcon} />
          <Text style={styles.likedBy}>
            Elon Musk and {post.numberOfLikes} others
          </Text>
          <Text style={styles.shares}>{post.numberOfShares} shares</Text>
        </View>
        {/* Buttons Row */}
        <View style={styles.buttonsRow}>
          <View style={styles.iconButton}>
            <AntDesign name="like2" size={18} color="gray" />
            <Text style={styles.iconButtonText}>Like</Text>
          </View>
          <View style={styles.iconButton}>
            <FontAwesome5 name="comment-alt" size={18} color="gray" />
            <Text style={styles.iconButtonText}>Like</Text>
          </View>
          <View style={styles.iconButton}>
            <MaterialCommunityIcons name="share" size={18} color="gray" />
            <Text style={styles.iconButtonText}>Like</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  post: {
    width: "100%",
    marginVertical: 10,
    backgroundColor: "#fff",
  },

  // Header
  header: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    padding: 10,
  },
  profileImage: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 10,
  },
  name: {
    fontWeight: "500",
  },
  subtitle: {
    color: "gray",
  },
  icon: {
    marginLeft: "auto",
  },

  // Body
  description: {
    paddingHorizontal: 10,
    lineHeight: 20,
    letterSpacing: 0.3,
  },
  image: {
    width: "100%",
    aspectRatio: 1,
    marginTop: 10,
  },

  // Footer
  footer: {
    paddingHorizontal: 10,
  },
  statsRow: {
    paddingVertical: 10,
    flexDirection: "row",
    alignItems: "center",
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: "lightgray",
  },
  likeIcon: {
    width: 20,
    height: 20,
    marginRight: 5,
  },
  likedBy: {
    color: "gray",
  },
  shares: {
    marginLeft: "auto",
    color: "gray",
  },

  // Buttons Row
  buttonsRow: {
    marginVertical: 10,
    flexDirection: "row",
    justifyContent: "space-around",
  },
  iconButton: {
    flexDirection: "row",
    alignItems: "center",
  },
  iconButtonText: {
    marginLeft: 5,
    color: "gray",
    fontWeight: "500",
  },
});

export default FeedPost;
