import Image from 'next/image';
import Link from 'next/link';
import { SearchBox } from '@/components/Search';
import CartIcon from '@/components/CartIcon';
import Logo from '@/public/megastore.svg';

export const Header = () => {
  return (
    <header className='flex items-center justify-center py-1 mx-auto overflow-hidden max-w-7xl layout-p lg:py-3'>
      <div className='flex items-center justify-between w-full xl:justify-start'>
        <Link href='/' passHref>
          <a className='flex md:mr-4'>
            <Image
              className='object-contain cursor-pointer w-44'
              src={Logo}
              alt='MegaStore Logo'
              width='210px'
              height='60px'
              quality={10}
              priority
            />
          </a>
        </Link>
        <SearchBox placeHolder='Chercher' />
      </div>
      <CartIcon />
    </header>
  );
};
