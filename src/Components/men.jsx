import React, { lazy } from 'react'
import { IoArrowForwardCircleOutline } from "react-icons/io5";
import { LuIndianRupee } from "react-icons/lu";
import img1 from "../assets/images/Men_images/Rectangle 56.jpg";
import img2 from "../assets/images/Men_images/Rectangle 57.jpg"
import img3 from "../assets/images/Men_images/Rectangle 58.jpg"
import img4 from "../assets/images/Men_images/Rectangle 59.jpg"
import img5 from "../assets/images/Men_images/Rectangle 60.jpg"
import banner1 from "../assets/images/Men_images/9904.jpg";
import card1 from '../assets/images/Men_images/rebel-man-plaid.jpg';
import card2 from '../assets/images/Men_images/young-handsome-hipster-man-pointing-finger.jpg';
import card3 from '../assets/images/Men_images/full-length-portrait-confident-young-man.jpg';
import card4 from '../assets/images/Men_images/full-body-portrait.jpg';
import card5 from '../assets/images/Men_images/confident-businessman-portrait-posing-relaxed.jpg';
import card6 from '../assets/images/Men_images/cheerful-man-wearing-sunglasses.jpg';
import Mask_group from '../assets/images/Men_images/Mask group.jpg'
import type1 from '../assets/images/Men_images/banner-1-1.jpg'
import type2 from "../assets/images/Men_images/leather.jpg"
import type3 from "../assets/images/Men_images/blazzer.jpg"
import type4 from '../assets/images/Men_images/tishirt.jpg'
import type5 from '../assets/images/Men_images/hoddie.jpg'
import type6 from '../assets/images/Men_images/shirt.jpg'
import deal_banner from '../assets/images/Men_images/men_banner_deal.png'
import bottom_1 from '../assets/images/Men_images/Rectangle155.jpg'
import bottom_2 from '../assets/images/Men_images/Rectangle 156.jpg'
import bottom_3 from '../assets/images/Men_images/Rectangle 157.jpg'
import bottom_4 from '../assets/images/Men_images/Rectangle 158.jpg'
import { useContext } from 'react';
import CartContext from './Store_Cart/CartContext';

const Men = () => {
  const { addToCart } = useContext(CartContext);
  const clothes = [
    {
      id:1,
      image: card1,
      title: 'Shirt',
      price: 1499,
      discount_price: 1999
    },
    {
      id:2,
      image: card2,
      title: 'Casual',
      price: 1499,
      discount_price: 1999
    },
    {
      id:3,
      image: card3,
      title: 'Jeans',
      price: 1499,
      discount_price: 1999
    },
    {
      id:4,
      image: card4,
      title: 'Trousers',
      price: 1499,
      discount_price: 1999
    },
    {
      id:5,
      image: card5,
      title: 'Formal',
      price: 1499,
      discount_price: 1999
    },
    {
      id:6,
      image: card6,
      title: 'Jeans',
      price: 1499,
      discount_price: 1999
    },
  ]
  return (
    <>
      <div className='flex justify-center'>
        <img className='w-64 h-svh' src={img1} alt="" loading={lazy} />
        <img className='w-64 h-svh' src={img2} alt="" loading={lazy} />
        <img className='w-64 h-svh' src={img3} alt="" loading={lazy} />
        <img className='w-64 h-svh' src={img4} alt="" loading={lazy} />
        <img className='w-64 h-svh' src={img5} alt="" loading={lazy} />
      </div>

      <div className=' container flex  p-2 gap-1 mt-24 '>
        <div className='relative '>
          <img className='' src={banner1} alt='' title='' />
          <div className='absolute top-0 w-full p-2'>
            <p className='text-start text-orange-400 font-semibold'>New</p>
            <p className='text-end text-xl'>Classic can hardly ever</p>
            <p className='text-end text-xl'> go out of style</p>
            <p className='ml-auto border-b-2 w-20 border-orange-400'></p>
          </div>
          <div className='absolute top-24 py-2  right-8'>
            <button className='flex items-center gap-1 text-orange-300 bg-white text-end p-1 '>See All <IoArrowForwardCircleOutline /></button>
          </div>
        </div>
        <div className='relative '>
          <img className='' src={banner1} alt='' title='' />
          <div className='absolute top-0 w-full p-2'>
            <p className='text-start text-orange-400 font-semibold'>New</p>
            <p className='text-end text-xl'>I am Dressed to impress,</p>
            <p className='text-end text-xl '> as always</p>
            <p className='ml-auto border-b-2 border-b-orange-500 w-20'></p>
          </div>
          <div className='absolute top-24 py-2  right-8'>
            <button className='flex items-center gap-1 text-orange-300 bg-white text-end p-1 '>See All <IoArrowForwardCircleOutline /></button>
          </div>
        </div>
      </div>
      <section className='container mt-5'>
        <div className='leading-10'>
          <p className='text-4xl font-bold text-center'>Discover Shop</p>
          <p className='font-semibold text-xl text-center'>The newest collection</p>
        </div>
        <div className='flex flex-wrap gap-8 justify-between mt-5 '>
          {clothes.slice(0, 6).map((items, index) => {
            return (
              <div className='group relative text-center w-72' key={index}>
                <div className="flex  justify-center items-center w-full">
                  <img className='object-fill w-72 h-72' src={items.image} alt={items.title} />
                </div>
                <div className='relative border-2 border-gray-500 py-2 gap-6'>
                  <p>{items.title}</p>
                  <div className='flex  gap-4 justify-center'>
                    <p className='flex items-center'><LuIndianRupee /> {items.price}</p>
                    <p className='text-gray-600 line-through flex items-center'><span><LuIndianRupee /></span> {items.discount_price}</p>
                  </div>
                  <button onClick={() => addToCart(items)} className='opacity-25 group-hover:opacity-100 transition-opacity duration-300 border-2 border-black border-t-slate-300 p-1 my-2'>ADD TO CART</button>
                </div>
              </div>
            )
          })}

        </div>
      </section>
      <section className='container mt-20 font-frank'>
        <div className='flex justify-around items-center'>
          <img className='h-96 w-96' src={Mask_group} alt='' title='' />
          <div className=''>
            <div className='text-6xl font-semibold tracking-widest leading-tight gap-4'>
              <p>Stay <span className='bg-orange-200'>cozy,</span></p>
              <p><span className='bg-orange-200'>stay</span> stylish</p>
            </div>
            <div className=''>
              <p className='text-gray-600 tracking-widest font-semibold font-lato py-4'>Hoodie season is the best season.</p>
              <p className='tracking-widest text-gray-700'>It is a long established fact that a reader will</p>
              <p className='tracking-widest text-gray-700'>be distracted distribution of letters,</p>
              <p className='tracking-widest text-gray-700'>It is a long established fact that</p>
              <button className='mt-2 border-4 border-s border-double border-gray-400 p-2'>SHOP NOW</button>
            </div>
          </div>
        </div>
      </section>
      <section className='container w-full flex flex-wrap justify-around gap-12 mt-8'>
        <div className='w-3/12    justify-center text-center'>
          <img className='w-full h-72' src={type1} alt='' title='' />
          <p className='shadow-gray-300 shadow-lg'>DENIM JACKET</p>
        </div>
        <div className='w-3/12   justify-center text-center'>
          <img className='w-full h-72' src={type2} alt='' title='' />
          <p className='shadow-gray-300 shadow-lg'>LEATHER JACKET</p>
        </div>
        <div className='w-3/12   justify-center text-center'>
          <img className='w-full h-72' src={type3} alt='' title='' />
          <p className='shadow-gray-300 shadow-lg' >BLAZER</p>
        </div>
        <div className='w-3/12   justify-center text-center'>
          <img className='w-full h-72' src={type4} alt='' title='' />
          <p className='shadow-gray-300 shadow-lg'>T-SHIRT</p>
        </div>
        <div className='w-3/12   justify-center text-center'>
          <img className='w-full h-72' src={type5} alt='' title='' />
          <p className='shadow-gray-300 shadow-lg '>HOODIE'S</p>
        </div>
        <div className='w-3/12   justify-center text-center'>
          <img className='w-full h-72' src={type6} alt='' title='' />
          <p className='shadow-gray-300 shadow-lg' >SHIRT'S</p>
        </div>
      </section>
      <section className='container flex justify-around bg-gradient-to-r from-orange-200 via-orange-50 to-white-50 mt-32'>
        <div className='w-4/12 h-80 relative'>
          <img className='w-full h-96 absolute  bottom-0 object-contain  ' src={deal_banner} alt='' title='' loading='lazy' />
        </div>
        <div className='w-6/12 flex  '>
          <div className='items-center pt-4'>
            <p className='text-4xl font-frank font-semibold tracking-wider pt-4'>Make people fall in love with your clothes.</p>
            <p>It is a long established fact that a reader will</p>
            <p> be distracted distribution of letters,</p>
            <button className='bg-orange-950 text-white p-1 text-sm/5 leading-snug mt-2 px-3 '> VIEW FULL STORE </button>
            <div className='flex justify-around mt-5'>
              <div className='text-center'>
                <p className='text-3xl font-bold'>32k</p>
                <p className='text-sm/3 font-bold'>Products in Store</p>
              </div>
              <div className='text-center'>
                <p className='text-3xl font-bold'>4.8</p>
                <p className='text-sm/3 font-bold'>Top-Rated</p>
              </div>
              <div className='text-center'>
                <p className='text-3xl font-bold'>15.1m</p>
                <p className='text-sm/3 font-bold'>Clients worldwide</p>
              </div>
            </div>

          </div>
          <div>

          </div>
        </div>
      </section>
      <section className='mt-5 mb-5'>
        <div className='py-5 text-center'>
          <p className='font-bold text-3xl'>The Festival Collection</p>
          <p className='text-xl p-2'>New Trending Arrival</p>
        </div>
        <div className=' flex justify-around mt-5 px-6 '>
          <div className='text-center'>
            <img src={bottom_1} />
            <p>New Arrival</p>
          </div>
          <div className='text-center mt-6'>
            <img src={bottom_2} />
            <p>Trending Now</p>
          </div>
          <div className='text-center'>
            <img src={bottom_1} />
            <p>New Arrival</p>
          </div>
          <div className='text-center mt-6'>
            <img src={bottom_3} />
            <p>Trending Now</p>
          </div>
          <div className='text-center'>
            <img src={bottom_4} />
            <p>New Arrival</p>
          </div>

        </div>
      </section>
    </>
  )
}

export default Men;