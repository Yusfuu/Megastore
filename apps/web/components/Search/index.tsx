import { useRef, FC } from 'react';
import SearchIcon from '@mui/icons-material/Search';

type Placeholder = {
  placeHolder: string;
};

export const SearchBox: FC<Placeholder> = ({ placeHolder }) => {
  const SearchInputRef = useRef<HTMLInputElement>(null);

  const HandleSearch = (e: any) => {
    e.preventDefault();
  };

  return (
    <form
      className='flex items-center justify-between w-full px-3 py-1 ml-3 bg-white rounded-full shadow-bm md:px-4 md:py-2 xl:w-[70%] xl:mx-auto'
      onSubmit={HandleSearch}
    >
      <input
        placeholder={placeHolder}
        type='text'
        className='flex items-center w-full text-sm leading-none bg-transparent outline-none md:text-base'
        autoComplete='off'
        ref={SearchInputRef}
      />
      <button>
        <SearchIcon className='!fill-primary-500' />
      </button>
    </form>
  );
};
