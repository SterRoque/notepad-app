import { Text, TouchableOpacity, View } from "react-native";
import { INote } from "../../interfaces/note-interface";
import { styles } from "./styles";
import { truncateText } from "../../utils/truncate-text";
import { formatDate } from "../../utils/formate-date";

type CardProps = {
  note: INote;
};

export function Card({ note }: CardProps) {
  return (
    <TouchableOpacity style={styles.container}>
      <Text style={styles.title}>{truncateText(note.title)}</Text>
      <Text style={styles.description}>{note.description}</Text>
      <Text style={styles.createdAt}>{formatDate(note.createdAt)}</Text>
    </TouchableOpacity>
  );
}
