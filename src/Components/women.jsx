
import young_lady from '../assets/images/women_images/young_lady.png';
import new_glass from '../assets/images/women_images/new_glass_brown.png'
import ylady from '../assets/images/women_images/face_glass.png';
import jarrived from '../assets/images/women_images/just_arrived_.png'
import jarrived2 from '../assets/images/women_images/just_arrived_2.png'
import jarrived3 from '../assets/images/women_images/just_arrived_3.png'
import jarrived4 from '../assets/images/women_images/just_arrived_4.png'
import fashion_new_arrival from '../assets/images/women_images/fashion_a_new_arrival.png'
import fashion_girl from '../assets/images/women_images/fashion_girl.jpeg'
import bestseller1 from '../assets/images/women_images/best_seller_1.png'
import bestseller2 from '../assets/images/women_images/best_seller_2.png'
import bestseller3 from '../assets/images/women_images/best_seller_3.png'
import bestseller4 from '../assets/images/women_images/best_seller_4.png'
import blacksilkdress from '../assets/images/women_images/black_silk_dress.jpeg'
import blacksilkdress2 from '../assets/images/women_images/black_silk_dress_2.jpeg'
import banner_s1 from '../assets/images/women_images/banner_s_1.png'
import banner_s2 from '../assets/images/women_images/banner_s_2.png'
import banner_s3 from '../assets/images/women_images/banner_s_3.png'
import { useContext } from 'react';
import CartContext from './Store_Cart/CartContext';
const womenClothes = [
  { id: 1, image: young_lady, sub_title: 'Hot', title: "Monsoon Clothes", discount: "30% off" },
  { id: 2, image: new_glass, sub_title: 'New', title: "Trends Clothes", discount: "30% off" },
  { id: 3, image: ylady, sub_title: 'Hot', title: "New Dangri's", discount: "30% off" },
];
const justArrived = [
  { id: 1, image: jarrived, price: 579, title: 'T shirt & Long Sleeve' },
  { id: 2, image: jarrived2, price: 579, title: 'khaite sweater' },
  { id: 3, image: jarrived3, price: 579, title: 'Pastel Long Sleeve' },
  { id: 4, image: jarrived4, price: 579, title: 'denim jacket' },
  { id: 5, image: jarrived, price: 579, title: 'T shirt & Long Sleeve' },
  { id: 6, image: jarrived2, price: 579, title: 'khaite sweater' },
  { id: 7, image: jarrived3, price: 579, title: 'Pastel Long Sleeve' },
  { id: 8, image: jarrived4, price: 579, title: 'denim jacket' },

]
const bestseller = [
  { id: 1, image: bestseller1 },
  { id: 1, image: bestseller2 },
  { id: 1, image: bestseller3 },
  { id: 1, image: bestseller4 }
]
const Women = () => {
      const { addToCart } = useContext(CartContext);
  
  return (
    <div className='container'>
      <div className="container-fluid  grid grid-cols-3  gap-6 mx-6 justify-center">
        {womenClothes.map((item) => (
          <div key={item.id} className="bg-orange-300 flex items-center px-2">
            <div className="text-start ">
              <p className="text-red-700 text-center text-xl font-bold">{item.sub_title}</p>
              <p className="text-3xl  font-bold text-gray-900 text-nowrap">{item.title}</p>
              <p className="text-white font-bold p-2  text-2xl leading-10 text-center">{item.discount}</p>
              <button  onClick={() => addToCart(item)}className="bg-orange-900 font-bold text-white px-3 py-1 mx-6 mt-2"> SHOP NOW </button>
            </div>
            <img className="w-auto h-auto -ms-24 object-contain" src={item.image} alt="Women Clothes" loading="lazy" />
          </div>
        ))}
      </div>
      <section className='my-4 '>
        <div className='text-center my-6'>
          <p className='text-4xl font-frank font-bold'>Just Arrived</p>
          <p className='text-l font-frank font-bold'>The newest collection</p>
        </div>
        <div className='grid grid-cols-4 justify-center my-4'>
          {justArrived.map((items) => (
            <div className='group relative mx-4 my-4  justify-center text-center'>
              <div className='items-center justify-center mx-auto'>
                <img className='bg-orange-100 w-60 h-64 object-cover ' src={items.image} loading='lazy' />

              </div>
              <p className='text-center font-frank font-bold group-hover:blur-lg' >{items.title}</p>
              <p className='text-center font-frank font-bold group-hover:blur-lg'>₹ {items.price}</p>
              <button  onClick={() => addToCart(items)}className='absolute -bottom-1 left-1/2 transform -translate-x-1/2 translate-y-6 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 border-2 transition-all duration-300 ease-in-out border-black  font-bold border-t-slate-300 p-1 my-2'>Add to Cart</button>
            </div>
          ))
          }
        </div>
      </section>
      <section>
        <div className='grid grid-cols-2'>
          <div className='justify-center text-center '>
            <img className='
            object-contain w-full h-96' src={fashion_girl} />
          </div>
          <div className=' mx-5 '>
            <div className='flex justify-evenly'>
              <div>
                <p className='text-6xl font-bold font-frank '>Best </p>
                <p className='text-6xl font-bold font-frank '> Fashion</p>
              </div>

              <img className=' bg-orange-100 w-32 object-left-bottom rounded-full ' src={fashion_new_arrival} alt='Fashion a new Arrival' loading='lazy' />
            </div>

            <div className='font-frank leading-8 font-bold mx-16 text-wrap w-80 left-6'>
              <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout</p>
              <p className=''>The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters.</p>
            </div>
            <button  onClick={() => addToCart(items)}className='mt-2 border-4  border-s border-double border-gray-400 bg-slate-800 p-2 font-bold text-white mx-10'>SHOP NOW</button>
          </div>
        </div>
      </section>
      <section className='my-5'>
        <div className="my-2 text-center">
          <p className='font-bold text-5xl'>Best Seller</p>
          <p className='font-bold text-l my-3'>The newest collection</p>
        </div>
        <div className='flex flex-wrap justify-center gap-12'>
          {bestseller.slice(0, 4).map((item, index) => (
            <>
              {index < 2 ? (<div className='flex flex-wrap justify-center'>
                <div key={index} className='w-48 h-52 bg-transparent  border-2 border-orange-300  text-center grid place-items-center'>
                  <div className="place-items-center leading-10 items-center mt-6 ">
                    <p className='font-bold w-52'>SALE OFF</p>
                    <p className='font-bold w-44 text-orange-300 '>Rare Pretty Top's</p>
                    <p className='font-bold w-44 text-orange-300'>Collection May 2025</p>
                  </div>
                </div>
                <div className='border border-t-4 border-b-4 w-8 mx-0 border-orange-300 border-s-0 border-e-0 h-3 mt-5 '>  </div>
                <div className='w-48 h-52 bg-orange-100 relative'>
                  <img className='w-48 h-60 object-cover bottom-0 absolute' src={item.image} />
                </div>
              </div>)
                :
                (<div className='flex flex-wrap justify-center'>
                  <div className='w-48 h-52 bg-orange-100 relative'>
                    <img className='w-48 h-60 object-cover bottom-0 absolute' src={item.image} />
                  </div>
                  <div className='border border-t-4 border-b-4 w-8 mx-0 border-orange-300 border-s-0 border-e-0 h-3 mt-5 '>
                  </div>
                  <div key={index} className='w-48 h-52 bg-transparent  border-2 border-orange-300  text-center grid place-items-center'>
                    <div className="place-items-center leading-10 items-center mt-6 ">
                      <p className='font-bold w-52'>SALE OFF</p>
                      <p className='font-bold w-44 text-orange-300 '>Rare Pretty Top's</p>
                      <p className='font-bold w-44 text-orange-300'>Collection May 2025</p>
                    </div>
                  </div>
                </div>
                )
              }

            </>
          ))}
        </div>

      </section>
      <section className="py-10 px-5">
        <div className="grid grid-cols-2 gap-10 items-center my-10">
          <div className=' w-80 h-96 mx-5  relative' >
            <img className='object-cover' src={blacksilkdress} loading='lazy' style={{ borderTopLeftRadius: '130px' }} />
            <div className=' w-40 h-40 absolute -bottom-20 left-3/4'>
              <img className='object-cover rounded-br-3xl' src={blacksilkdress2} loading='lazy' />
            </div>
          </div>
          <div className=''>
            <p className="text-gray-600 font-lato tracking-[0.8em]">MATCH COLORS</p>
            <p className='font-frank font-bold text-5xl py-5'>Black silk dress</p>
            <p className='w-2/4 font-bold '> It is a long established fact that a reader will be distracted by the  readable content of a page when looking at its layout.</p>
            <button  onClick={() => addToCart(items)}className='text-white text-sm font-bold bg-amber-900 p-2 my-5'>VIEW MORE</button>
          </div>
        </div>
      </section>
      <section className='my-10 leading-10'>
        <div className=" flex bg-orange-100 h-60  relative">
          <div className='flex w-full absolute -bottom-12'>
            <img className='object-contain h-96 ' src={banner_s1} loading='lazy' />
            <img className='object-contain h-96' src={banner_s2} loading='lazy' />
            <img className='object-contain h-96 ' src={banner_s3} loading='lazy' />
            <div className=' mt-24 justify-center items-center p-5 leading-10 '>
              <p className='text-gray-700'>Big Sale Upto 30% off</p>
              <div className='font-bold font-frank text-wrap  text-3xl text-amber-800 '><p>Shop For Great</p> <span>Selection of</span> <span>Shirts</span></div>
              <button onClick={() => addToCart(items)} className='bg-amber-950 my-5 text-sm font-bold text-white p-2'>SHOP NOW</button>
            </div>
          </div>

        </div>
        <div className='bg-amber-950 h-12 '></div>
      </section>

    </div>
  );
};

export default Women;
