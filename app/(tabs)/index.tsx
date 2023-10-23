import { FlatList, SafeAreaView, StyleSheet } from "react-native";

import EditScreenInfo from "../../components/EditScreenInfo";
import { Text, View } from "../../components/Themed";

function BubbleMessage({
  author,
  message,
}: {
  author: string;
  message: string;
}) {
  return (
    <View
      style={{
        maxWidth: "80%",
        padding: 10,
        borderRadius: 15,
        backgroundColor: author === "user" ? "#121212" : "#007aff",
        alignSelf: author === "user" ? "flex-start" : "flex-end",
      }}
    >
      <Text>{message}</Text>
    </View>
  );
}

export default function TabOneScreen() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.container}>
        <Text style={styles.title}>Tab One</Text>
        <FlatList
          data={conversation}
          renderItem={({ item }) => <BubbleMessage {...item} />}
          keyExtractor={(_, index) => index.toString()}
          contentContainerStyle={{
            // paddingHorizontal: ,
            gap: 10,
          }}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
  },
});

const conversation = [
  { author: "bot", message: "Sure what is your location?" },
  { author: "user", message: "I am in ndowntown san francisco" },
  {
    author: "bot",
    message:
      "Well Valleys make mountains so htatts about all I have to say about that",
  },
  { author: "user", message: "I am in ndowntown san francisco" },
  {
    author: "bot",
    message: "I heard you the first time geez  Broken record over here",
  },
  {
    author: "user",
    message: "Who are you talking to? youre being disrespectful",
  },
];
