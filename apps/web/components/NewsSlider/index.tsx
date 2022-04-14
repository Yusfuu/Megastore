import { Swiper, SwiperSlide } from 'swiper/react';

import "swiper/css";
import "swiper/css/lazy";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Lazy, Pagination, Navigation } from 'swiper';
import Image from 'next/image';

export const NewsSlider = () => {
  return (
    <Swiper
    slidesPerView={1}
      loop={true}
      pagination={{
        clickable: true,
      }}
      navigation={true}
      lazy={true}
      modules={[Lazy, Pagination, Navigation]}
      className='mySwiper'
      style={{
        // @ts-ignore
        "--swiper-navigation-color": "#fbba00",
        "--swiper-pagination-color": "#fbba00",
      }}
    >
      <SwiperSlide>
        <Image
          src='/images/sliders/news1.webp'
          width='750px'
          height='300px'
          alt='news1'
          className='swiper-lazy'
        />
        <div className='swiper-lazy-preloader swiper-lazy-preloader-white'></div>
      </SwiperSlide>
      <SwiperSlide>
        <Image
          src='/images/sliders/news2.webp'
          width='750px'
          height='300px'
          alt='news2'
          className='swiper-lazy'
        />
        <div className='swiper-lazy-preloader swiper-lazy-preloader-white'></div>
      </SwiperSlide>
      <SwiperSlide>
        <Image
          src='/images/sliders/news3.webp'
          width='750px'
          height='300px'
          alt='news3'
          className='swiper-lazy'
        />
        <div className='swiper-lazy-preloader swiper-lazy-preloader-white'></div>
      </SwiperSlide>
      <SwiperSlide>
        <Image
          src='/images/sliders/news4.webp'
          width='750px'
          height='300px'
          alt='news4'
          className='swiper-lazy'
        />
        <div className='swiper-lazy-preloader swiper-lazy-preloader-white'></div>
      </SwiperSlide>
      <SwiperSlide>
        <Image
          src='/images/sliders/news5.webp'
          width='750px'
          height='300px'
          alt='news5'
          className='swiper-lazy'
        />
        <div className='swiper-lazy-preloader swiper-lazy-preloader-white'></div>
      </SwiperSlide>
      <SwiperSlide>
        <Image
          src='/images/sliders/news6.webp'
          width='750px'
          height='300px'
          alt='news6'
          className='swiper-lazy'
        />
        <div className='swiper-lazy-preloader swiper-lazy-preloader-white'></div>
      </SwiperSlide>
      <SwiperSlide>
        <Image
          src='/images/sliders/news7.webp'
          width='750px'
          height='300px'
          alt='news7'
          className='swiper-lazy'
        />
        <div className='swiper-lazy-preloader swiper-lazy-preloader-white'></div>
      </SwiperSlide>
      <SwiperSlide>
        <Image
          src='/images/sliders/news8.webp'
          width='750px'
          height='300px'
          alt='news8'
          className='swiper-lazy'
        />
        <div className='swiper-lazy-preloader swiper-lazy-preloader-white'></div>
      </SwiperSlide>
      <SwiperSlide>
        <Image
          src='/images/sliders/news9.webp'
          width='750px'
          height='300px'
          alt='news9'
          className='swiper-lazy'
        />
        <div className='swiper-lazy-preloader swiper-lazy-preloader-white'></div>
      </SwiperSlide>
      <SwiperSlide>
        <Image
          src='/images/sliders/news10.webp'
          width='750px'
          height='300px'
          alt='news10'
          className='swiper-lazy'
        />
        <div className='swiper-lazy-preloader swiper-lazy-preloader-white'></div>
      </SwiperSlide>
    </Swiper>
  );
};
export default NewsSlider;
