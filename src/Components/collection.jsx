import { Link } from 'react-router-dom';
import { LuIndianRupee } from "react-icons/lu";
import card_man from '../assets/images/colleection/man_card_collection.png';
import card_girl from '../assets/images/colleection/women card_collection.png';
import boy1 from '../assets/images/colleection/cards/image.png';
import boy_2 from '../assets/images/colleection/cards/man_2.jpg';
import card_girl_3 from '../assets/images/colleection/cards/card_girl_3.jpg';
import organic1 from '../assets/images/colleection/organic/009b2d05fc91428ad970808f20352ce8b0ea0a3d.png'
import organic2 from '../assets/images/colleection/organic/f207a2a98bfdf7dfb1dec95763929cf83ed39f46.jpg'
import organic3 from '../assets/images/colleection/organic/380a51b7211cca4d6ad8dedd3d5ab0951f445cb0.png'
import outfit from '../assets/images/colleection/Outfit.png';
import shirt from '../assets/images/colleection/shirts/shirt.png';
import baby_soft from '../assets/images/colleection/shirts/Baby Soft Fabric Clot’s.png';
import cargo_paints from '../assets/images/colleection/shirts/Cargo Pants For Girls.png';
import trending_polo_tshirt from '../assets/images/colleection/shirts/Trending Polo T - Shirt.png';
import jens_mens_girls from '../assets/images/colleection/shirts/Jeans Men & Girls.png';
import woolenSweater from '../assets/images/colleection/shirts/Woolen Sweater.png';
import boys_trending from '../assets/images/colleection/shirts/Boys trending Hoodie’s plan.png';
import jeansShirt from '../assets/images/colleection/shirts/jeans-shirt.png';
import hoodies from '../assets/images/colleection/unique/hoodies.png'
import jackets from '../assets/images/colleection/unique/jackets.png'
import jooggers from '../assets/images/colleection/unique/joggers.png'
import winter_frnt from '../assets/images/colleection/winter/winter_frnt.png'
import winter_bk from '../assets/images/colleection/winter/winter_bk.png'
import { useContext } from 'react';
import CartContext from './Store_Cart/CartContext';


const Collection = () => {
  const { addToCart } = useContext(CartContext)
  const products = [{
    id: 1,
    image: boy1,
    title: 'Cozy Knit sweater with Pockets',
    price: 669,
    discountedPrice: 559,
  },
  {
    id: 2,
    image: boy_2,
    title: 'Hoodies vest with faux fur collar',
    price: 669,
    discountedPrice: 559,
  },
  {
    id: 3,
    image: card_girl_3,
    title: 'Striped Cotton t-shirt With Crew Neck',
    price: 669,
    discountedPrice: 559,
  },
  {
    id: 4,
    image: boy1,
    title: 'Striped Cotton t-shirt',
    price: 669,
    discountedPrice: 559,
  }, {
    id: 5,
    image: boy1,
    title: 'Striped Cotton t-shirt',
    price: 669,
    discountedPrice: 559,
  }, {
    id: 6,
    image: boy1,
    title: 'Striped Cotton t-shirt',
    price: 669,
    discountedPrice: 559,
  }, 
  ]

  const shirts = [
    {
      image: shirt,
      title: 'Checks Shirt’s For Men',
      rating: "☆☆☆☆☆",
      price: 1099
    },
    {
      image: cargo_paints,
      title: 'Cargo Pants For Girls',
      rating: "☆☆☆☆☆",
      price: 1099
    },
    {
      image: jeansShirt,
      title: 'jeans-shirt',
      rating: "☆☆☆☆☆",
      price: 1099
    },
    {
      image: boys_trending,
      title: 'Boys trending Hoodie’s plan',
      rating: "☆☆☆☆☆",
      price: 1099
    },
    {
      image: jens_mens_girls,
      title: 'Jeans Men & Girls',
      rating: "☆☆☆☆☆",
      price: 1099
    },
    {
      image: trending_polo_tshirt,
      title: 'Trending Polo T - Shirt',
      rating: "☆☆☆☆☆",
      price: 1099
    },
    {
      image: baby_soft,
      title: 'Baby Soft Fabric Clot’s',
      rating: "☆☆☆☆☆",
      price: 1099
    },
    {
      image: woolenSweater,
      title: 'Woolen Sweater ',
      rating: "☆☆☆☆☆",
      price: 1099
    },
  ]
  return (
    <>
      <div>Top banner</div>
      <div className='flex flex-col md:flex-row gap-3 mx-4'>
        <div className="h-96 w-full md:w-1/2 bg-orange-100 flex items-center justify-between px-10 overflow-hidden">
          <div className="space-y-4 leading-10">
            <p className="text-2xl font-medium text-gray-700">Get 40% Off</p>
            <p className="text-5xl font-bold text-orange-400 leading-tight">Men's Latest <br />Collection</p>
            <Link to="#" className="text-xl text-black underline">Shop Now</Link>
          </div>
          <div className="relative h-full flex items-end  p-0">
            <div className="absolute right-2  transform -translate-y-1/2 translate-x-1/4 h-72 w-80 bg-orange-300 rounded-full z-0" />

            <img
              src={card_man}
              alt="Men's Collection"
              className="h-full object-contain z-0"
            />
          </div>
        </div>
        <div className="h-96 w-full md:w-1/2 bg-orange-100 flex items-center justify-between px-10  overflow-hidden">
          <div className="space-y-4 leading-10">
            <p className="text-2xl font-medium text-gray-700">Be Stylish</p>
            <p className="text-5xl font-bold text-orange-400 leading-tight">Girl's Latest <br />Collection</p>
            <Link to="#" className="text-xl text-black underline">Shop Now</Link>
          </div>
          <div className="relative h-full flex items-end ">
            <div className="absolute right-4 transform translate-y-1/2 translate-x-1/4 h-96 w-80 bg-orange-300 rounded-full z-0 -top-14" />

            <img
              src={card_girl}
              alt="Girl's Collection"
              className="h-full object-cover z-10 "
            />
          </div>
        </div>
      </div>

      <div className='px-6 py-10'>
        <div className=' bg-orange-950 border-8 border-orange-300 p-6 flex justify-around items-center'>
          <p className='text-4xl text-white'>Shop Pet Clothing<br /> Before Time Runs Out </p>
          <div className=' flex justify-center gap-6 items-center'>
            <p className='text-3xl text-white'>69 Days</p>
            <div className="w-px h-48 bg-gray-400" />
            <p className='text-3xl text-white'>42 Hours</p>
            <div className=" w-px h-48 bg-gray-400" />
            <p className='text-3xl text-white'>13 Minutes</p>
            <div className="w-px h-48 bg-gray-400" />
            <p className='text-3xl text-white'>58 seconds</p>
          </div>
        </div>
      </div>

      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 '>
        {products.slice(0, 8).map((products) => {
          return (
            <div className="group relative w-60 my-4" key={products.id} >
            <div className='flex justify-center items-center h-60 w-full'>
              <img
                src={products.image}
                alt={products.title}
                className="h-44 align-bottom "
              />
            </div>

              <div className="border-x border-b border-dashed border-gray-400 p-3 flex gap-4 -mt-8 ">
                <p className="text-sm font-medium leading-snug group-hover:blur-lg">
                  {products.title}<br />
                </p>
                <div className="justify-between items-center text-sm text-end group-hover:blur-lg">
                  <p className="font-semibold">₹{products.discountedPrice}</p>
                  <p className="text-gray-500 line-through">₹{products.price}</p>
                </div>
                <button onClick={() => addToCart(products)} className=' text-sm absolute bottom-3 left-1/2 transform -translate-x-1/2 translate-y-6 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 border-2 transition-all duration-300 ease-in-out border-black  font-bold border-t-slate-200 p-2 my-3'>Add to Cart</button>
              </div>
            </div>
          )
        })}
      </div>
<div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6'>
  {products.slice(0, 8).map((products) => {
    return (
      <div
        key={products.id}
        className="group relative w-60 my-4 border border-dashed border-gray-400 rounded-md overflow-hidden"
      >
        {/* Image Wrapper */}
        <div className="flex justify-center items-center h-60 w-full">
          <img
            src={products.image}
            alt={products.title}
            className="h-44 object-contain"
          />
        </div>

        {/* Product Info */}
        <div className="p-3 flex gap-4 justify-between items-start">
          <p className="text-sm font-medium leading-snug group-hover:blur-lg">
            {products.title}
          </p>
          <div className="text-sm text-end group-hover:blur-lg">
            <p className="font-semibold">₹{products.discountedPrice}</p>
            <p className="text-gray-500 line-through">₹{products.price}</p>
          </div>
        </div>

        {/* Add to Cart Button */}
        <button
          onClick={() => addToCart(products)}
          className="text-sm absolute bottom-3 left-1/2 transform -translate-x-1/2 translate-y-6 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 border-2 transition-all duration-300 ease-in-out border-black font-bold border-t-slate-200 p-2 my-3 bg-white"
        >
          Add to Cart
        </button>
      </div>
    );
  })}
</div>

      <div className='text-center p-4 '>
        <p className='font-frank font-bold text-4xl'> New styles in Organic Cotton Poplin</p>
        <p className='font-frank text-2xl'>Discover All Collection</p>
      </div>

      <div className="max-w-7xl mx-auto pl-4 pr-8 my-20">
        <div className='grid grid-cols-1 md:grid-cols-3 '>
          <div className='items-center mx-2'>
            <div className='w-96 h-60 bg-orange-300 justify-center overflow-hidden'>
              <img className='w-80 h-96 object-cover object-[center_30%]' src={organic1} />
            </div>
            <div className='flex gap-4 text-lg text-gray-600'>
              <p>#Fashion</p>
              <p className='date'>july 2 2025</p>
            </div>

            <p>As People Move Out Of big cities, Fashion
              Retail follows</p>
            <button className='underline'>Read More</button>
          </div>
          <div className='relative flex -top-10 justify-center'>
            <div className='w-80 h-96 relative '>
              <img className='max-h-96 w-full object-contain' src={organic2} />
            </div>
            <div className='absolute bottom-0 left-0 right-0 text-center 
              bg-gradient-to-t from-[#552f1aa0] via-[#615752] to-transparent 
              text-white p-4'>
              <div className='flex justify-center gap-2 text-center text-white text-bold'>
                <p>#Fashion</p>
                <p className='date'>july 2 2025</p>
              </div>
              <p className='text-wrap text-white text-bold leading-snug p-2 mx-4'>The best beauty deals to shop from the Nordstrom sale</p>

            </div>
          </div>


          <div className=''>
            <div className='w-96 h-60  overflow-hidden'>
              <img className='w-96 h-96 object-cover bg-orange-300 object-[center_30%]' src={organic3} />
            </div>
            <div className='items-end text-end'>
              <div className=' flex justify-end gap-4 text-lg text-gray-600'>
                <p>#Fashion</p>
                <p className='date'>july 2 2025</p>
              </div>
              <p>As People Move Out Of big cities, Fashion
                Retail follows</p>
              <button className='underline'>Read More</button>
            </div>
          </div>

        </div>
      </div>


      <div className='w-full flex justify-center bg-gradient-to-t from-[#e29a7d] to-[#9A6E5C00]  '>
        <div className="flex items-center justify-between w-full max-w-6xl px-8">

          <div className="w-64 h-64 flex flex-col bg-white shadow-md">
            <p className='bg-orange-900 font-bold text-white text-2xl text-center'>Outfit</p>
            <p className='w-full h-44 text-center flex justify-center'>Content</p>
          </div>

          <div className="h-96 w-96 ">
            <img src={outfit} className="h-full w-full object-cover " />
          </div>
          <div className="w-64 h-64 flex flex-col bg-white shadow-md">
            <p className='bg-orange-900 font-bold text-white text-2xl text-center'>Outfit</p>
            <p className='w-full h-44 text-center flex justify-center'>Content</p>
          </div>
        </div>
      </div>

      <div className='text-center p-4 '>
        <p className='font-frank font-bold text-4xl'>See The Perfect Collection's</p>
        <p className='font-frank text-2xl'>Discover All Collection</p>
      </div>

      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4'>
        {shirts.map((shirt) => {
          return (
            <div className='group relative bg-orange-200 w-64 h-60 flex flex-col items-center justify-center text-center leading-8 my-6 p-4  mx-auto rounded'>
              <img src={shirt.image} className='object-cover w-44 h-36 justify-center text-center items-center p-3' />
              <div className='justify-center text-center'>
                <p>{shirt.title}</p>
                <p className='text-yellow-400 font-extrabold mb-2'>{shirt.rating}</p>
                <p className='flex items-center justify-center group-hover:blur-lg'><LuIndianRupee />{shirt.price}</p>
                <button className=' text-sm absolute -bottom-2 left-1/2 transform -translate-x-1/2 translate-y-6 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 border-2 transition-all duration-300 ease-in-out border-black  font-bold border-t-slate-200 p-2 my-3  '>Add to Cart</button>
              </div>
            </div>
          )
        })}
      </div>

      <div className="p-4 flex justify-center leading-10">
        <p className="font-frank font-bold text-4xl w-4/12 text-center">
          Explore Your Own Style Through Our Unique Products
        </p>
      </div>

      <div className='flex  justify-self-center gap-5 relative '>
        <div>
          <img className='object-fill w-72 h-96 bg-gradient-to-t from-orange-900 to-orange-200 ' src={hoodies} title='hoodies' />
          <div className="absolute inset-0 bg-gradient-to-t from-orange-900/70 to-orange-200/10"></div>
          <p className='font-frank text-3xl text-white absolute bottom-6 p-3'>Hoodies</p>
          <p className='font-frank text-xl text-white absolute bottom-1 p-2'># New Trend</p>
        </div>
        <div>
          <img className='object-fill w-72 h-96 bg-gradient-to-b ' src={jooggers} title='jooggers' />
          <p className='font-frank text-3xl text-white absolute bottom-6 p-3'>Joggers</p>
          <p className='font-frank text-xl text-white absolute bottom-1 p-2'># New Fashion</p>
        </div>
        <div>
          <img className='object-fill w-72 h-96 bg-gradient-to-b ' src={jackets} title='jackets' />
          <p className='font-frank text-3xl text-white absolute bottom-6 p-3'>Jackets</p>
          <p className='font-frank text-xl text-white absolute bottom-1 p-2'># New Look</p>
        </div>
      </div>

      <div className='w-full flex justify-center bg-gradient-to-t from-orange-400 to-orange-200 my-5 mx-auto '>
        <div>
          <img className='w-96 h-96 object-contain' src={winter_frnt} />
        </div>
        <div>
          <img className='w-96 h-96 object-contain' src={winter_bk} />
        </div>
        <div className='self-center my-4'>
          <p className='font-frank font-bold text-4xl text-balance leading-10 my-2'>Winter Jacket limited Time offer<span className=' text-white'> 40%</span></p>
          <p className='font-frank text-2xl font-bold my-4'>Until 02/15/24 Use code WINTER at Checkout</p>
          <button className='text-white font-fran bg-orange-900 p-2'>Shop Now</button>
        </div>
      </div>
    </>
  )
}

export default Collection; 