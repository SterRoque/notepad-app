import { TouchableOpacity, TouchableOpacityProps } from 'react-native';
import AntDesign from '@expo/vector-icons/AntDesign';

export function ButtonAdd({ ...rest }: TouchableOpacityProps) {
   return (
      <TouchableOpacity
         className='absolute bottom-10 right-10 rounded-full bg-[#f5b446] p-5 shadow-lg'
         {...rest}>
         <AntDesign
            name='plus'
            size={24}
            color='white'
         />
      </TouchableOpacity>
   );
}
