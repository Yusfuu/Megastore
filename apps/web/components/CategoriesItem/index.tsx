import { CategoriesItems } from '@/interfaces/index';
import Icon from '@mui/material/Icon';

export const CategoriesItem = ({ iconName, categoryName }: CategoriesItems) => {

  return (
    <>
      <Icon className='group-hover:text-primary-500'>{iconName}</Icon>
      <p className='pl-3 group-hover:text-primary-500 group-hover:font-bold'>
        {categoryName}
      </p>
    </>
  );
};

export default CategoriesItem;
