// import { useState } from 'react';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
import LanguageIcon from '@mui/icons-material/Language';
import { SideLink } from '@/components/Sidebar/SideLink';

export const Sidebar = () => {
  // const [lang, setLang] = useState('');

  // const handleLangChange = (event: any) => {
  //   setLang(event.target.value);
  // };

  return (
    <div className='fixed top-0 right-0 flex flex-col w-64 h-full bg-white border-l'>
      <div className='flex flex-col justify-center flex-grow overflow-x-hidden overflow-y-auto'>
        <ul className='flex flex-col py-4 space-y-1'>
          <li>
            <SideLink hrefLink='/account' icon={<AccountBoxIcon />} text='Compte' />
          </li>
          <li>
            <SideLink hrefLink='/cart' icon={<ShoppingBasketIcon />} text='Panier' />
          </li>
          <li>
            <SideLink hrefLink='/wishlist' icon={<FavoriteBorderIcon />} text='Wishlist' />
          </li>
          <li>
            <SideLink hrefLink='/support' icon={<SupportAgentIcon />} text='Support' />
          </li>
          <li>
            <SideLink hrefLink='#' icon={<LanguageIcon />} text='Langue' />
          </li>
        </ul>
      </div>
    </div>
  );
};
