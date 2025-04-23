import { StatusBar } from 'expo-status-bar';
import { View } from 'react-native';
import MasonryList from '@react-native-seoul/masonry-list';
import { notes } from './src/constants/notes';
import { Card } from './src/components/card';
import { INote } from './src/interfaces/note-interface';
import './global.css';
import { useColorScheme } from 'nativewind';
import { useEffect } from 'react';

export default function App() {
   const { setColorScheme } = useColorScheme();

   useEffect(() => {
      setColorScheme('system');
   }, []);

   return (
      <View className='flex-1 bg-[#f7f7f7] dark:bg-black'>
         <StatusBar style='auto' />
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
