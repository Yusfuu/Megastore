import Link from 'next/link';

interface TextLink {
  hrefLink: string;
  icon: any;
  text: string;
}

export const SideLink = ({ hrefLink, icon, text }: TextLink) => {
  return (
    <Link href={hrefLink} passHref>
      <div className='relative flex flex-row items-center pr-6 text-gray-600 border-l-4 border-transparent cursor-pointer h-11 focus:outline-none hover:bg-gray-50 hover:text-gray-800 hover:border-primary-500'>
        <span className='inline-flex items-center justify-center ml-4'>
          <div className='flex-shrink-0 w-6 h-6' aria-hidden='true'>
            {icon}
          </div>
        </span>
        <span className='ml-2 text-sm tracking-wide truncate'>{text}</span>
      </div>
    </Link>
  );
};
