import React, { useContext } from 'react'
import kids_banner1 from '../assets/images/kids_images/kids_banner_2.jpg'
import kids_banner2 from '../assets/images/kids_images/kids_banner_2.jpg'
import kids_banner3 from '../assets/images/kids_images/kids_banner_3.jpg'
import kids_banner5 from '../assets/images/kids_images/kids_banner_5.jpg'
import kids_girl_banner from '../assets/images/kids_images/kids_girl_banner-removebg-preview.png'
import kids_girl_1 from '../assets/images/kids_images/kids_girl.jpg'
import kids_girl_2 from '../assets/images/kids_images/kids_girl_2.jpg'
import kids_boy_banner from '../assets/images/kids_images/kids_boy_banner-removebg-preview.png'
import kids_boy_1 from '../assets/images/kids_images/boy_trditional_1.jpg'
import kids_boy_2 from '../assets/images/kids_images/boy_trditional_2.jpg'
import girlPoster1 from '../assets/images/kids_images/girl_banner_Posterbg.png'
import girlPoster2 from '../assets/images/kids_images/kids_banner_2bg.png'
import banner_boysKidss from '../assets/images/kids_images/Rectangle 181.jpg'
import banner_boysKidss2 from '../assets/images/kids_images/Rectangle 180.jpg'
import trendy_top from '../assets/images/kids_images/trendy-top-design-mockup-presented-wooden-hanger 1.jpg'
import tishirt from '../assets/images/kids_images/tshirt-design-template-wood-hanger 1.jpg'
import shirt from '../assets/images/kids_images/beautiful-trendy-blue-denim-jeans-jacket-hanger-near-white 1.jpg'
import cute_children from '../assets/images/kids_images/cute_children.jpg'
import cute_children2 from '../assets/images/kids_images/cute_children_2.jpg'
import cute_children3 from '../assets/images/kids_images/cute_children_3.jpg.png'
import sweater from '../assets/images/kids_images/green-front-sweater 1.jpg'
import warm_sweater from '../assets/images/kids_images/knitted-warm-sweater-isolated-white-background 1.jpg'
import hoodie from '../assets/images/kids_images/blank-male-hoodie-sweatshirt-long-sleeve-men-s-hoody-with-hood-your-design-mockup-winter-cloth 1.jpg'
import { LuIndianRupee } from "react-icons/lu";
import { MdArrowOutward } from "react-icons/md";
import CartContext from './Store_Cart/CartContext'

const Kids = () => {
  const { addToCart } = useContext(CartContext)
  const kids_banner = [
    { id: 1, title: 'TOP', image: kids_banner3, price: 799, discount_price: 899 },
    { id: 2, title: 'TOP', image: kids_banner2, price: 799, discount_price: 899 },
    { id: 3, title: 'Skirts', image: kids_banner3, price: 799, discount_price: 899 },
    { id: 4, title: 'TOP', image: kids_banner2, price: 799, discount_price: 899 },
    { id: 5, title: 'TOP', image: kids_banner5, price: 799, discount_price: 899 },
    { id: 6, title: 'Skirts', image: kids_banner2, price: 799, discount_price: 899 },
  ]
  const center_kids = [
    { id: 1, image: cute_children2 },
    { id: 1, image: cute_children },
    { id: 1, image: cute_children3 }
  ]
  const kids_girl = [
    { id: 1, image: kids_girl_1 },
    { id: 2, image: kids_girl_2 },
  ]
  const kids_girl_banner_img = [
    { id: 1, image: kids_girl_banner },
  ]
  const kids_boy_banner_img = [
    { id: 1, image: kids_boy_banner }
  ]
  const kids_boy = [
    { id: 1, image: kids_boy_1 },
    { id: 2, image: kids_boy_2 },
  ]
  const girlPoster = [
    { id: 1, image: girlPoster1 },
    { id: 2, image: girlPoster2 },
  ]
  const clothes = [
    { id: 1, title: 'Trendy top', image: trendy_top, price: 799 },
    { id: 2, title: 'Ti-shirt', image: tishirt, price: 799 },
    { id: 3, title: 'Shirt', image: shirt, price: 799 },
    { id: 4, title: 'Sweater', image: sweater, price: 799 },
    { id: 5, title: 'warm_sweater', image: warm_sweater, price: 799 },
    { id: 6, title: 'Sweater', image: hoodie, price: 799 }
  ]
  return (
    <>
      <div className='flex justify-center'>
        {kids_banner.slice(0, 5).map((items) => (
          <img className='w-64 h-96 object-fill' src={items.image} alt="" loading='lazy' />
        ))}
      </div>
      <div className='text-center py-4'>
        <p className='font-bold text-4xl'>Best Fashion Since 2025</p>
        <p className=''>It is a long established fact that a reader will
          <br />
          be distracted distribution of letters</p>
      </div>

      <div className="flex justify-center items-center gap-6">
        {center_kids.slice(0, 3).map((item, index) => (
          <React.Fragment key={item.id}>
            {index === 0 && (
              <div className="relative w-52 h-96 clip-left overflow-hidden transform skew-y-12 flex items-center justify-center shadow-md">
                <img src={item.image} alt="" className="w-full h-full object-cover" />
                <div className="absolute inset-0 border-4 border-white clip-left pointer-events-none"></div>
              </div>
            )}

            {index === 1 && (
              <div className="relative w-52 h-80 bg-white border-2 border-gray-200 flex top-14 items-center justify-center shadow-sm">
                <img src={item.image} alt="" className=" w-full h-full object-cover" />
              </div>
            )}

            {index === 2 && (
              <div className="relative w-52 h-96 clip-right overflow-hidden -skew-y-12 flex items-center justify-center shadow-lg bg-pink-500">
                <img src={item.image} alt="" className=" w-full h-full object-cover" />
                <div className="absolute inset-0 border-4 border-white clip-right pointer-events-none"></div>
              </div>
            )}
          </React.Fragment>
        ))}
      </div>

      <div className='text-center  py-4'>
        <p className='font-bold font-frank text-4xl py-5'>Create Your Perfect Look</p>
        <p>It is a long established fact that a reader will be distracted by the  readable content</p>
      </div>
      <div className='flex justify-center'>

        {kids_banner.slice(0, 5).map((items, index) => (
          <div className='group relative border-2 mx-2' key={index}>
            <img className=' w-48 h-48 object-fill bg-orange-300' src={items.image} alt="" loading='lazy' />
            <p className=' absolute left-0 top-0 bg-red-500 text-white text-sm p-1'>20%</p>
            <p className='absolute top-0 px-2 right-1 bg-slate-50'><span className='text-yellow-400 font-extrabold'>☆</span> 4.5</p>
            <p className=' px-2 text-sm uppercase'>{items.title}</p>
            <div className='py-1 transition-all duration-300 ease-in-out '>
              <p className='flex group-hover:blur-sm'><LuIndianRupee />  <sup className=' -top-2 font-bold text-xl mx-1'>{items.price}</sup><span className='line-through text-slate-500 text'> {items.discount_price}</span>  </p>
              <button onClick={() => addToCart(items)} className='absolute bottom-1 left-1/2 transform -translate-x-1/2 translate-y-6 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 ease-in-out border-2 border-black font-bold border-t-slate-300 px-3 py-1 bg-white shadow-md z-10 w-full'>Add to Cart</button>

            </div>
          </div>
        ))}
      </div>
      <div className='flex items-center  justify-around py-4'>
        <div className='bg-orange-100 flex  '>

          {kids_girl_banner_img.slice(0, 1).map((item) => (
            <>
              <div className='flex items-center'>
                <button onClick={() => addToCart(items)} className='uppercase text-white  justify-center items-center text-center h-8 bg-yellow-950 px-4 '>traditional</button>
              </div>
              <img src={item.image} className='h-72 object-cover ' alt='' loading='lazy' />
            </>
          ))}
          <div className='flex items-center'>
            <div className=''>
              <p className='text-amber-900 font-bold text-2xl'>"Embracing traditions </p>
              <p className='text-amber-900 font-bold text-2xl'> with a dash of elegance" </p>
              <hr className=' underline bg-amber-950 h-1' />
              <p className='font-bold text-amber-950 text-3xl text-center py-3'>New Brand</p>
              <div className='flex items-center'>
                <button onClick={() => addToCart(item)} className='text-center text-amber-950 border-2 font-thin border-amber-900 mx-auto px-3'> SHOP </button>
              </div>
            </div>
          </div>

        </div>
        {kids_girl.slice(0, 2).map((item) => (
          <div className='text-center'>
            <img
              src={item.image}
              alt=""
              className="= object-contain w-48 h-48"
            />
            <p>NEW FASHION ARRIVAL</p>
          </div>
        ))}
      </div>
      <div className='flex items-center  justify-around py-5'>

        {kids_boy.slice(0, 2).map((item) => (
          <div className='text-center'>
            <img
              src={item.image}
              alt=""
              className="= object-contain w-48 h-48"
            />
            <p>NEW FASHION ARRIVAL</p>
          </div>
        ))}
        <div className='bg-orange-100 flex '>
          <div className='flex items-center'>
            <div className='px-2'>
              <p className='text-amber-900 font-bold text-2xl'>"There is boundless beauty
              </p>
              <p className='text-amber-900 font-bold  text-2xl'>in our culture and traditions." </p>
              <hr className=' underline bg-amber-950 h-1' />
              <p className='font-bold text-amber-950 text-3xl text-center py-3'>BEST CLOTH</p>
              <div className='flex items-center'>
                <button onClick={() => addToCart(items)} className='text-center text-amber-950 border-2 font-thin border-amber-900 mx-auto px-3'> SHOP </button>
              </div>
            </div>
          </div>

          {kids_boy_banner_img.slice(0, 1).map((item) => (
            <>
              <img src={item.image} className='object-cover h-72   ' alt='' loading='lazy' />
              <div className='flex items-center'>
                <button onClick={() => addToCart(items)} className='uppercase text-white  justify-center items-center text-center h-8 bg-yellow-950 px-4 '>traditional</button>
              </div>
            </>
          ))}

        </div>
      </div>
      <div className="flex flex-col items-center bg-orange-950 text-center ">

        <div className="flex flex-row w-full max-w-6xl items-center justify-evenly">
          <img
            className="h-96 w-auto object-cover"
            src={girlPoster[0].image}
            alt=""
            loading="lazy"
          />
          <div className="px-4 flex-1">
            <p className="text-2xl text-white font-bold font-lato mb-2">
              Choose Style and Style is Life
            </p>
            <p className="text-white">
              It is a long established fact that a reader will <br />
              be distracted distribution of letters, <br />
              loresupes
            </p>

            <button onClick={() => addToCart(items)} className="uppercase text-black bg-white border-double border-2 border-black px-4 my-6 py-2">
              Shop Collection
            </button>
          </div>
          <img
            className="h-96 w-auto object-cover"
            src={girlPoster[1].image}
            alt=""
            loading="lazy"
          />
        </div>
      </div>
      <div className="flex flex-row px-5 mt-5 py-5">
        <img className='w-1/2 h-80' src={banner_boysKidss} alt='' loading='lazy' />
        <div className='mx-auto leading-6 align-middle my-auto'>
          <p className='font-thin font-lato text-sm'>New Arrival</p>
          <p className='text-3xl font-lato font-bold'>New Styles <br />in Organic Cotton <br /> Poplin</p>
          <p>It is a long established fact that a reader <br /> will be distracted by the readable content</p>
          <p className='font-bold underline mt-5 flex '>EXPLORE THE LOOKBOOK<span className='font-bold underline '><MdArrowOutward /></span> </p>
        </div>
      </div>
      <div className="flex flex-row px-5 mt-5 py-5">
        <div className='mx-auto leading-6 align-middle my-auto'>
          <p className='font-thin font-lato text-sm'>New Arrival</p>
          <p className='text-3xl font-lato font-bold'>New Styles <br />in Organic Cotton <br /> Poplin</p>
          <p>It is a long established fact that a reader <br /> will be distracted by the readable content</p>
          <p className='font-bold underline mt-5 flex '>EXPLORE THE LOOKBOOK<span className='font-bold underline '><MdArrowOutward /></span> </p>
        </div>
        <img className='w-1/2 h-80' src={banner_boysKidss2} alt='' loading='lazy' />
      </div>

      <div className='flex flex-wrap gap-8 justify-center'>
        {clothes.slice(0, 6).map((items) => (
          <div
            key={items.id}
            className='group flex flex-col justify-center items-center text-center bg-amber-900 p-4'
          >
            <img
              className='object-fill w-72 h-72'
              src={items.image}
              alt=''
              loading='lazy'
            />
            <div className=' py-4  border-transparent hover:border-yellow-500 backdrop-blur-3xl border-2 w-full'>

              <p className='text-slate-300 font-lato font-bold'>{items.title}</p>
              <p className='font-lato font-bold flex items-center justify-center' >
                <LuIndianRupee /> {items.price}
              </p>
              <button onClick={() => addToCart(items)} className='uppercase opacity-0 group-hover:opacity-100 transition-opacity ease-in-out duration-300 border-1 border-black bg-pink-100 w-36 font-lato border-t-yellow-600 p-1 my-2'>
                Buy Now
              </button>
            </div>
          </div>
        ))}
      </div>
    </>
  )
}

export default Kids;