import { Text, TouchableOpacity } from 'react-native';
import { INote } from '../interfaces/note-interface';
import { truncateText } from '../utils/truncate-text';
import { formatDate } from '../utils/formate-date';

type CardProps = {
   note: INote;
};

export function Card({ note }: CardProps) {
   return (
      <TouchableOpacity className='mb-[10px] gap-5 rounded-xl bg-white p-5 dark:bg-[#242424]'>
         <Text className='text-[18px] font-bold dark:text-white'>
            {truncateText(note.title)}
         </Text>
         <Text className='text-[14px] text-[#7e7e7e]'>{note.description}</Text>
         <Text className='text-[11px] text-[#7e7e7e]'>
            {formatDate(note.createdAt)}
         </Text>
      </TouchableOpacity>
   );
}
