import { TextInput, TextInputProps, View } from 'react-native';
import AntDesign from '@expo/vector-icons/AntDesign';

export function Input({ ...rest }: TextInputProps) {
   return (
      <View>
         <AntDesign
            name='search1'
            size={20}
            color='#a8a8a8'
            className='absolute left-4 top-4 z-10'
         />
         <TextInput
            className='relative rounded-full bg-[#ededed] px-12 py-4 text-lg placeholder:text-[#a8a8a8] dark:bg-[#1f1f1f] dark:text-white dark:placeholder:text-[#5c5c5c]'
            {...rest}
         />
      </View>
   );
}
