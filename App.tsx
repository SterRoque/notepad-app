import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import MasonryList from "@react-native-seoul/masonry-list";
import { notes } from "./src/constants/notes";
import { Card } from "./src/components/card/card";
import { INote } from "./src/interfaces/note-interface";
import "./global.css";

export default function App() {
  return (
    <View className="flex-1">
      <StatusBar style="auto" />
      <MasonryList
        keyExtractor={(item) => item.id}
        style={{ gap: 10, padding: 15 }}
        numColumns={2}
        data={notes}
        renderItem={({ item }) => <Card note={item as INote} />}
      />
    </View>
  );
}
