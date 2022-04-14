/* eslint-disable react/no-unescaped-entities */
import React, { useEffect, useState } from 'react';
import ListIcon from '@mui/icons-material/List';
import categoriesData from '@/data/categoriesData.json';
import { Categories } from '@/interfaces/index';
import { CategoriesItem } from '@/components/CategoriesItem';
import { CategoriesLinks } from '@/components/CategoriesLinks';
import { CategoriesQueryVariables } from '@/graphql/generated/graphql';

export const CategoriesList = ({
  mainCategories,
}: CategoriesQueryVariables) => {
  const [categories, setCategories] = useState<Array<Categories>>();
  const [selectedCategory, setSelectedCategory] = useState('');
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    setCategories(mainCategories);
    console.log(mainCategories);      
  }, [setCategories, mainCategories]);

  const handleMouseOver = (e: any) => {
    console.log(e.target.id);
    setSelectedCategory(e.target.id);
    setIsOpen(true);
  };

  const handleMouseLeave = () => {
    setSelectedCategory('');
    setIsOpen(false);
  };

  return (
    <>
      <div className='w-[25%] z-10 hidden xl:block' onMouseLeave={handleMouseLeave}>
        <div className='flex flex-col h-full bg-white rounded-lg'>
          <div className='flex items-center p-3 rounded-t-md bg-primary-500'>
            <ListIcon className='!fill-white' />
            <h2 className='pl-3 text-xl font-bold text-white'>Catégories</h2>
          </div>
          <ul className='flex flex-col justify-between h-full px-3 py-2 overflow-auto custom-scrollbar rtl'>
            {categories
              ? categories.map((category: Categories) => (
                  <li
                    className='flex py-3 cursor-pointer group ltr'
                    key={category.id}
                    id={category.name}
                    onMouseEnter={handleMouseOver}
                  >
                    <CategoriesItem
                      iconName={category?.icon}
                      categoryName={category?.name}
                    />
                  </li>
                ))
              : null}
          </ul>
        </div>
        {isOpen ? (
          <div
            className='absolute top-0 w-[75%] h-full shadow-bm bg-white rounded-lg right-0 overflow-auto custom-scrollbar'
            onMouseLeave={handleMouseLeave}
          >
            <div className='relative flex flex-wrap px-6 py-3 overflow-hidden whitespace-nowrap'>
              {/* <CategoriesLinks category={selectedCategory} /> */}
              <CategoriesLinks />
            </div>
          </div>
        ) : (
          ''
        )}
      </div>
      {/* <div className='w-full mx-auto my-3'>
        <ul className='grid grid-flow-col grid-cols-4 grid-rows-1'>
          <li className='flex items-center'>
            <div className='flex items-center content-center justify-center w-20 h-20 text-white rounded-full shadow-md fill-current bg-gradient-to-br from-blue-300 to-blue-600 hover:shadow-lg'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                className='w-8 h-8'
                viewBox='0 0 20 20'
                fill='currentColor'
              >
                <path
                  fillRule='evenodd'
                  d='M18 13V5a2 2 0 00-2-2H4a2 2 0 00-2 2v8a2 2 0 002 2h3l3 3 3-3h3a2 2 0 002-2zM5 7a1 1 0 011-1h8a1 1 0 110 2H6a1 1 0 01-1-1zm1 3a1 1 0 100 2h3a1 1 0 100-2H6z'
                  clipRule='evenodd'
                />
              </svg>
            </div>
          </li>
          <li className='flex items-center'>
            <div className='flex items-center content-center justify-center w-20 h-20 text-white rounded-full shadow-md fill-current bg-gradient-to-br from-green-300 to-green-600 hover:shadow-lg'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                className='w-8 h-8'
                viewBox='0 0 20 20'
                fill='currentColor'
              >
                <path
                  fillRule='evenodd'
                  d='M7 2a1 1 0 00-.707 1.707L7 4.414v3.758a1 1 0 01-.293.707l-4 4C.817 14.769 2.156 18 4.828 18h10.343c2.673 0 4.012-3.231 2.122-5.121l-4-4A1 1 0 0113 8.172V4.414l.707-.707A1 1 0 0013 2H7zm2 6.172V4h2v4.172a3 3 0 00.879 2.12l1.027 1.028a4 4 0 00-2.171.102l-.47.156a4 4 0 01-2.53 0l-.563-.187a1.993 1.993 0 00-.114-.035l1.063-1.063A3 3 0 009 8.172z'
                  clipRule='evenodd'
                />
              </svg>
            </div>
          </li>
          <li className='flex items-center'>
            <div className='flex items-center content-center justify-center w-20 h-20 text-white rounded-full shadow-md fill-current bg-gradient-to-br from-purple-300 to-purple-600 hover:shadow-lg'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                className='w-8 h-8'
                viewBox='0 0 20 20'
                fill='currentColor'
              >
                <path
                  fillRule='evenodd'
                  d='M4 4a2 2 0 00-2 2v4a2 2 0 002 2V6h10a2 2 0 00-2-2H4zm2 6a2 2 0 012-2h8a2 2 0 012 2v4a2 2 0 01-2 2H8a2 2 0 01-2-2v-4zm6 4a2 2 0 100-4 2 2 0 000 4z'
                  clipRule='evenodd'
                />
              </svg>
            </div>
          </li>
          <li className='flex items-center'>
            <div className='flex items-center content-center justify-center w-20 h-20 text-white rounded-full shadow-md fill-current bg-gradient-to-br from-pink-300 to-pink-600 hover:shadow-lg'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                className='w-8 h-8'
                viewBox='0 0 20 20'
                fill='currentColor'
              >
                <path
                  fillRule='evenodd'
                  d='M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z'
                  clipRule='evenodd'
                />
              </svg>
            </div>
          </li>
        </ul>
      </div> */}
    </>
  );
};

export default CategoriesList;
