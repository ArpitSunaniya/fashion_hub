import React, { lazy } from 'react'
import fashion_girl from '../assets/images/Fashion_girl.png';
import fashion_layer from '../assets/images/fashion_layer.png';
import men from '../assets/images/boy.jpg'
import Slider from './slider';
import Ourproducts from './subpages/ourproducts';
import Home_slider from './subpages/home_slider';
import What_people from './subpages/what_people';

const Home = () => {
  return (
    <>
      <div className=' bg-[#EEDDCC] h-screen relative'>
        <div className="relative  top-8 md:top-10">
          <h1 className=' flex '><span className='FashionText'>F</span><span className='FashionText_pink z-30'>ASH</span><span className='FashionText_blue ms-4'>ION</span></h1>
          <p className='lg:text-4xl  text-white font-bold absolute -rotate-90 lg:top-40 lg:left-14  md:top-24 md:left-9 md:text-2xl md:ms-1 md transform -translate-x-2 -translate-y-5  '>
            Style
          </p>
          <img className='fashiongirlanimate lg:w-72 lg:h-96 md:h-56 object-cover z-10 absolute -top-5 lg:right-96  md:w-60 md:right-52' src={fashion_girl} alt='Fashion' title='Fashion' loading={lazy} />
          <div className='mt-20'>
            {[...Array(6)].map((_, index) => (
              <img
                key={index}
                className="hidden md:block w-full h-full object-cover opacity-50"
                src={fashion_layer}
                alt="Fashion Layer"
                title="Fashion Layer"
                loading={lazy}
              />
            ))}
          </div>

        </div>
      </div>
      <div className='container mt-5'>
        <h1 className='text-center font-bold text-5xl font-frank'>New Collection</h1>
        <p className=' text-xl text-center text-bold p-4'>It is a long established fact that a reader will be distracted by the  readable content</p>
      </div>
      <div className='container flex justify-center items-center gap-6 font-lato'>
        <div className='relative bg-gray-500'>
          <img className='w-96 h-80 font-bold  object-contain drop-shadow-lg ' src={fashion_girl} />
          <p className='bg-white w-48 text-center  absolute bottom-5 left-1/2  transform -translate-x-1/2'>SWEATER</p>
        </div>
        <div className='relative bg-gray-500'>
          <img className='w-96 h-80 font-bold  object-contain drop-shadow-lg' src={fashion_girl} />
          <p className='bg-white w-48 text-center absolute bottom-5 left-1/2 transform -translate-x-1/2 '>
            LONG-SLEEVE
          </p>
        </div>
        <div className='relative bg-gray-500'>
          <img className='w-96 h-80 font-bold object-contain drop-shadow-lg' src={fashion_girl} />
          <div>
            <p className='bg-white w-48 text-center absolute bottom-5 left-1/2 transform -translate-x-1/2'>T-SHIRT</p>
          </div>
        </div>
      </div>
      <div className='container relative flex   my-24'>
        <div className='w-1/2 h-96 flex justify-end '>
          <img
            className='w-3/4 h-[430px] object-fill rounded-tl-3xl'
            style={{ borderTopLeftRadius: '130px' }}
            src={men} alt='' title='' loading="lazy" />
        </div>

        <div className='p-5 ms-3 gap-5'>
          <div>
            <p className='font-black text-4xl'>BEST FASHION </p>
          </div>
          <div>
            <p className='font-black text-3xl'> SINCE 2025</p>
          </div>
          <p className='w-96 font-frank p-3  text-slate-800 text-2xl'>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters,</p>
        </div>
        <div className='flex absolute  shadow-gray-600 shadow-2xl items-center bg-white font-frank w-1/2 h-28 justify-around p-4 right-24 -bottom-20'>
          <div className='gap-3' >
            <p className='font-bold text-3xl '>2024 </p>
            <p>fifash Founded</p>
          </div>
          <div className='gap-4' >
            <p className='font-bold text-3xl '>8550+ </p>
            <p className=' '>fifash Founded</p>
          </div>
          <div className='gap-4' >
            <p className='font-bold text-3xl '>2100 </p>
            <p className=' '>Fifash Founded</p>
          </div>
        </div>
      </div>
      {/* Best Sellers */}
      <div className='bg-yellow-950'>
        <div className='container flex items-center py-8'>
          <div className=''>
            <p className='text-white font-bold text-5xl w-3/2 -tracking-tight gap-6'>Best Seller <br /> Product</p>
            <p className='text-white text-balance text-2xl w-3/5 gap-5 py-6'>It is a long established fact that a reader will be distracted by the readable content of a page re-or-less normal distribution of letters,</p>
            <button className='border border-white p-1 w-36 text-white'>See More</button>
          </div>
          <div className='flex w-1/2 justify-center items-center'>
            <Slider />
          </div>
          <div>
          </div>
        </div>
      </div>
      <Ourproducts />
      <Home_slider />
      <p className='text-3xl font-bold text-center mt-4'>Deal Of The Day (Banner) </p>
      <What_people />
    </>
  )
}
export default Home;