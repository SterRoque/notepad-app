import MasonryList from '@react-native-seoul/masonry-list';
import { View } from 'react-native';
import { notes } from '../constants/notes';
import { Card } from '../components/card';
import { INote } from '../interfaces/note-interface';

export default function HomeScreen() {
   return (
      <View className='flex-1 bg-[#f7f7f7] dark:bg-black'>
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
