import { FlatList } from "react-native";
import posts from "../../assets/data/posts.json";
import FeedPost from "../components/FeedPost";

const FeedScreen = () => {
  return (
    <FlatList
      data={posts}
      renderItem={({ item }) => <FeedPost post={item} />}
    />
  );
};

export default FeedScreen;
