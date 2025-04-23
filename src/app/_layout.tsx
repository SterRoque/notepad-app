import { Stack } from 'expo-router';
import { useColorScheme } from 'nativewind';
import { useEffect } from 'react';

import '../../global.css';
import { SafeAreaView } from 'react-native-safe-area-context';
import { StatusBar } from 'expo-status-bar';

export default function RootLayout() {
   const { setColorScheme } = useColorScheme();

   useEffect(() => {
      setColorScheme('system');
   }, []);

   return (
      <SafeAreaView className='h-full w-full'>
         <StatusBar style='auto' />

         <Stack
            screenOptions={{
               headerShown: false,
            }}
         />
      </SafeAreaView>
   );
}
