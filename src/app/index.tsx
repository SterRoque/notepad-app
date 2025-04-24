import MasonryList from '@react-native-seoul/masonry-list';
import { Text, View } from 'react-native';
import { notes } from '../constants/notes';
import { Card } from '../components/card';
import { INote } from '../interfaces/note-interface';
import { Input } from '../components/input';
import { ButtonAdd } from '../components/button-add';

export default function HomeScreen() {
   return (
      <View className='flex-1 bg-[#f7f7f7] p-4 dark:bg-black'>
         <Text className='my-7 text-3xl font-bold dark:text-white'>
            Anotações
         </Text>
         <View className='mb-5'>
            <Input placeholder='Procurar atonações' />
         </View>
         <MasonryList
            keyExtractor={(item) => item.id}
            style={{ gap: 10 }}
            numColumns={2}
            data={notes}
            renderItem={({ item }) => <Card note={item as INote} />}
         />
         <ButtonAdd />
      </View>
   );
}
