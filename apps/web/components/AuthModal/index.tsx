import { MouseEvent, useContext, useState } from 'react';
import Login from '@/components/Login';
import Register from '@/components/Register';
import ModalContext from '@/context/ModalContext';
import CloseIcon from '@mui/icons-material/Close';
import Image from 'next/image';
import Logo from '@/public/megastore.svg';

export function AuthModal() {
  const { isModalOpen, toggleModal, form, setForm } = useContext(ModalContext);

  const handleToggle = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    if (toggleModal) toggleModal();
  };

  const toggleForms = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setForm((e.target as HTMLButtonElement).value);
  };

  return (
    <>
      {isModalOpen ? (
        <div className='absolute top-0 left-0 z-20 grid w-full h-full overflow-hidden bg-gray-600 bg-opacity-50 place-content-center'>
          <div className='bg-white grid items-center justify-items-center grid-rows-[auto,1fr] p-3 h-[100vh] w-[100vw] xl:w-[500px] xl:h-[600px] 2xl:w-[600px] 2xl:h-[700px] relative rounded-lg'>
            <Image
              className='object-contain cursor-pointer w-44'
              src={Logo}
              alt='MegaStore Logo'
              width='210px'
              height='60px'
              quality={10}
              priority
            />
            <div className='w-[80%] mx-auto'>
              <div className='flex justify-between w-[60%] p-3 text-base mx-auto'>
                <button
                  type='button'
                  className={`relative leading-6 ${
                    form === 'register' ? 'tab-active' : null
                  }`}
                  onClick={toggleForms}
                  value='register'
                >
                  Register
                </button>
                <button
                  type='button'
                  className={`relative leading-6 ${
                    form === 'login' ? 'tab-active' : null
                  }`}
                  onClick={toggleForms}
                  value='login'
                >
                  Login
                </button>
              </div>
              {form === 'login' ? <Login /> : null}
              {form === 'register' ? <Register /> : null}
            </div>
              <button
                className='w-[40px] h-[40px] p-[5px] font-bold text-white rounded-full bg-primary-500 bottom-[10px] left-[50%] xl:hover:bg-primary-600 xl:bottom-auto xl:top-[20px] xl:right-[20px] xl:left-auto z-30 xl:absolute xl:translate-x-0 xl:translate-y-0'
                onClick={handleToggle}
              >
                <CloseIcon />
              </button>
          </div>
        </div>
      ) : (
        ''
      )}
    </>
  );
}
