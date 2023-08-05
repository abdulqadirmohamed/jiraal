import React from 'react'
import img from '../assets/img/foreground-image-dark.png'
import Image from 'next/image'
// import { Swiper, SwiperSlide } from "swiper/react";
// import { Autoplay, Pagination, Navigation } from "swiper";

const Hero = () => {
  return (
    <div className='bg-primary'>
      <div className='w-[70%] mx-auto h-[600px] grid grid-cols-2 items-center'>
        {/* text */}
        <div className='text-[#eaecef]'>
          <h1 className='text-6xl font-semibold'>Buy, trade, and hold 350+ cryptocurrencies on Binance</h1>
        </div>
        {/* image */}
        <div className='text-right'>
          <Image className='w-[600px] flex justify-end' src={img} alt='Sample image' />
        </div>
      </div>
    </div>
  )
}

export default Hero