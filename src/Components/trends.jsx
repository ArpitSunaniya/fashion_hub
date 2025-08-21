import React, { lazy, useState } from 'react'
import { Typewriter } from 'react-simple-typewriter';
import fashion_girl from '../assets/images/tranding/banner/tranding_banner_girl.jpg';
import fashion_since from '../assets/images/tranding/banner/tranding _since.jpg';
import fashion_layer from '../assets/images/fashion_layer.png';
import top_selling1 from '../assets/images/tranding/top_selling/23622c7c9af100f70adf7e11be958a864d8a81f2.jpg';
import top_selling2 from '../assets/images/tranding/top_selling/model images.jpeg';
import top_selling3 from '../assets/images/tranding/top_selling/6d9e080f252cd378a4c251c49cb36f742a7fc274.jpg';
import big_sale from '../assets/images/tranding/banner/big_sale_banner.png'
import kidslogo from '../assets/images/tranding/categories/kids_logo.png'
import kids from '../assets/images/tranding/categories/kids.png';
import mens_logo from '../assets/images/tranding/categories/mens_logo.png';
import mens from '../assets/images/tranding/categories/mens.png';
import womens_logo from '../assets/images/tranding/categories/womens_logo.png';
import womens from '../assets/images/tranding/categories/womens.png';
import paints_logo from '../assets/images/tranding/categories/paints_logo.png';
import paints from '../assets/images/tranding/categories/paints.png';
import multifashion from '../assets/images/tranding/banner/MULTIFASHION.jpg'

const Trends = () => {
  
    const [showAll , setShowAll] = useState(false);

  const top_selling = [

    {
      image: top_selling2,
      date: '05 jun 2025',
      title: 'Street Trending 2025',
      caption: 'It is a long established fact that a reader will be distracted distribution of letters,'
    },
    {
      image: top_selling1,
      date: '05 Aug 2025',
      title: 'Size Guides for mens',
      caption: 'It is a long established fact that a reader will be distracted distribution of letters,'
    },
    {
      image: top_selling3,
      date: 'End Off 05 Aug 2025',
      title: 'The Ultimate guide',
      caption: 'It is a long established fact that a reader will be distracted distribution of letters,'
    },
  ]
  const categories = [
    {
      image: mens,
      subimage: mens_logo,
      title: 'Mens Clothes'
    },
    {
      image: womens,
      subimage: womens_logo,
      title: 'Womens Clothes'
    },
    {
      image: paints,
      subimage: paints_logo,
      title: 'Paints All Category'
    },
    {
      image: kids
      , subimage: kidslogo,
      title: 'Kids Clothes'
    },
  ]


  const displayCategories = showAll ? categories: categories.slice(0,2);
  
  return (
    <>
      <div className=' bg-[#EEDDCC] h-screen relative'>
        <div className=''>
          <div className="flex mx-24 justify-between items-center leading-8">
            <div className='leading-10'>
              <p className='font-frank text-4xl font-bold text-balance w-1/2 mt-5'>
                Find The Best
                <br /> Fashion
                <span className='mx-2 p-3'>
                  <Typewriter
                    words={['Beautiful', 'Gorgeous', 'Style', 'Look']}
                    loop={0}
                    cursor
                    cursorStyle="|"
                    typeSpeed={200}
                    deleteSpeed={200}
                    delaySpeed={2000}
                  />
                </span>
                <br />For You
              </p>
              <p className='text-pretty font-bold justify-center w-1/2 leading-10 mt-4'>It is a long established fact that a reader will be distracted by the  readable content of a page when looking at its layout. The point of  using Lorem Ipsum is that it has </p>
              <button className='bg-orange-900 text-white font-bold text-xl px-2 leading-8 my-8'>Shop Now</button>
            </div>
            <div className='w-3/6 '>
              <img className=" rounded-bl-[30%]" src={fashion_girl} alt='' title='' />
            </div>
          </div>

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

      <div className='text-center p-4 my-4 '>
        <p className='font-frank font-bold text-4xl'>Top Selling Items</p>
        <p className='font-lato text-lg leading-10'>Follow the most popular trends and get exclusive items from shop</p>
      </div>

      <div className="flex flex-wrap justify-center items-center gap-8">
        {top_selling.map((item, index) => (
          <div key={index} className="w-72 text-center relative">
            <img
              className="w-96 h-72 object-contain rounded-md "
              src={item.image}
              alt={item.title}
              title={item.title}
            />
            <p className="mt-2 text-sm text-gray-500 bg-white absolute bottom-16 left-20 shadow-sm w-1/2 my-2">{item.date}</p>
            <p className="text-lg font-semibold mt-3">{item.title}</p>
            <p className="text-sm text-gray-600">{item.caption}</p>
          </div>
        ))}
      </div>

      <div className='container relative flex   my-24'>
        <div className='w-1/2 h-96 flex justify-end '>
          <img
            className='w-3/4 h-[430px] object-fill rounded-tl-3xl'
            style={{ borderTopLeftRadius: '130px' }}
            src={fashion_since} alt='' title='' loading="lazy" />
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

      <div className='p-4'>
        <img className='h-96 w-full object-fill' src={big_sale} title='Big Sale' alt='Big Sale' />
      </div>

      <div className='text-center p-4 my-4 '>
        <p className='font-frank font-bold text-4xl'>All Category For You</p>
        <p className='font-lato text-lg leading-10'>Select This Fashion</p>
      </div>
      <div className='flex flex-wrap justify-center gap-4'>
        {categories.map((category) => {
          return (

            <div className="flex flex-col items-center relative">
              <img
                className="w-64 h-72 object-contain rounded-md"
                src={category.image}
                alt={category.title}
                title={category.title}
              />

              <div className="absolute -bottom-6 bg-white px-4 py-2 rounded-md shadow-md flex flex-col items-center">
                <img
                  className="w-12 h-12 object-cover rounded-full mb-1"
                  src={category.subimage}
                  alt={category.title}
                  title={category.title}
                />
                <p className="text-sm font-medium">{category.title}</p>
              </div>
            </div>

          )
        })}
      </div>

      <div className='flex justify-center mt-5 gap-10'>
        <div className='flex flex-col justify-center max-w-sm mx-4'>
          <p className='font-frank font-bold text-2xl mb-2'>Shop By Category</p>
          <p className='text-lg mb-4'>It is a long established fact that a reader will
            be distracted distribution of letters</p>
          <button className='bg-orange-950 text-white px-4 py-1 w-fit' onClick={() => setShowAll(!showAll)}>{showAll ? 'Show Less': 'View All' }</button>
        </div>
        <div className='flex justify-center gap-4'>
          {displayCategories.map((category,index) => {
            return (

              <div key={index} className="flex flex-col items-center relative">
                <img
                  className="w-64 h-72 object-contain rounded-md"
                  src={category.image}
                  alt={category.title}
                  title={category.title}
                />

                <div className="absolute -bottom-6 bg-white px-4 py-2 rounded-md shadow-md flex flex-col items-center">
                  <p className="text-sm font-medium">{category.title}</p>
                </div>
              </div>

            )
          })}
        </div>
      </div>

      <div className='my-5 p-5'>
        <img className='h-96 w-full object-fill' src={multifashion} alt='' title='' />
      </div>
      
    </>
  )
}

export default Trends;