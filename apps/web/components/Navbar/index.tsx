import { useRouter } from 'next/router';
import Link from 'next/link';
import ShoppingBasketOutlinedIcon from '@mui/icons-material/ShoppingBasketOutlined';
import FormatListBulletedOutlinedIcon from '@mui/icons-material/FormatListBulletedOutlined';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';

export const Navbar = () => {
  const router = useRouter();

  return (
    <nav className='fixed bottom-0 flex h-[80px] w-full items-center pt-3 pb-6 justify-evenly bg-white shadow-bm xl:hidden'>
      <Link href='/' passHref>
        <a
          className={`flex flex-col items-center text-sm ${
            router.pathname === '/' ? 'text-primary-500' : ''
          }`}
        >
          <HomeOutlinedIcon />
          <span>Home</span>
        </a>
      </Link>
      <Link href='/categories' passHref>
        <a
          className={`flex flex-col items-center text-sm ${
            router.pathname === '/categories' ? 'text-primary-500' : ''
          }`}
        >
          <FormatListBulletedOutlinedIcon />
          <span>Categories</span>
        </a>
      </Link>
      <Link href='/cart' passHref>
        <a
          className={`flex flex-col items-center text-sm ${
            router.pathname === '/cart' ? 'text-primary-500' : ''
          }`}
        >
          <ShoppingBasketOutlinedIcon />
          <span>Cart</span>
        </a>
      </Link>
      <Link href='/account' passHref>
        <a
          className={`flex flex-col items-center text-sm ${
            router.pathname === '/account' ? 'text-primary-500' : ''
          }`}
        >
          <AccountCircleOutlinedIcon />
          <span>Account</span>
        </a>
      </Link>
    </nav>
  );
};
