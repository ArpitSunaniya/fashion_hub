import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { FaStar } from "react-icons/fa";
import { Pagination,Autoplay } from 'swiper/modules';
import girl from '../assets/images/slider girl1.png'
import girl2 from '../assets/images/slider girl2.jpg'
import { MdOutlineCurrencyRupee } from "react-icons/md";
const Slider = () => {
    return (
        <>
            <Swiper
                slidesPerView={2}
                spaceBetween={15}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                  }}
                pagination={{
                    clickable: true, 
                    }}
                modules={[Pagination,Autoplay]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <div>
                        <img className='h-60 w-full object-cover' src={girl} />
                        <div className='bg-slate-200 py-2'>
                            <p className='text-yellow-400 text-start text-l flex py-1 mx-3'><FaStar /><FaStar /><FaStar /><FaStar /><FaStar /></p>
                            <p className=' py-1 mx-3 font-semibold'>Pastel long sleeve</p>
                            <div className='flex mx-2'>
                            <p className='flex text-center items-center line-through text-slate-400'><span><MdOutlineCurrencyRupee /></span><span>669</span></p>
                            <p className='flex text-center items-center '><span><MdOutlineCurrencyRupee /></span><span className='font-bold'>559</span></p>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div>
                        <img className='h-60 w-full object-cover' src={girl2} />
                        <div className='bg-slate-200 py-2 '>
                            <p className='text-yellow-400 text-start text-l flex py-1 mx-3'><FaStar /><FaStar /><FaStar /><FaStar /><FaStar /></p>
                            <p className=' py-1 mx-3 font-semibold'>Pastel long sleeve</p>
                            <div className='flex mx-2'>
                            <p className='flex text-center items-center line-through text-slate-400'><span><MdOutlineCurrencyRupee /></span><span>669</span></p>
                            <p className='flex text-center items-center '><span><MdOutlineCurrencyRupee /></span><span className='font-bold'>559</span></p>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div>
                        <img className='h-60 w-full object-cover' src={girl} />
                        <div className='bg-slate-200 py-2 '>
                            <p className='text-yellow-400 text-start text-l flex py-1 mx-3'><FaStar /><FaStar /><FaStar /><FaStar /><FaStar /></p>
                            <p className=' py-1 mx-3 font-semibold'>Pastel long sleeve</p>
                            <div className='flex mx-2'>
                            <p className='flex text-center items-center line-through text-slate-400'><span><MdOutlineCurrencyRupee /></span><span>669</span></p>
                            <p className='flex text-center items-center '><span><MdOutlineCurrencyRupee /></span><span className='font-bold'>559</span></p>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div>
                        <img className='h-60 w-full object-cover' src={girl2} />
                        <div className='bg-slate-200 py-2 '>
                            <p className='text-yellow-400 text-start text-l flex py-1 mx-3'><FaStar /><FaStar /><FaStar /><FaStar /><FaStar /></p>
                            <p className=' py-1 mx-3 font-semibold'>Pastel long sleeve</p>
                            <div className='flex mx-2'>
                            <p className='flex text-center items-center line-through text-slate-400'><span><MdOutlineCurrencyRupee /></span><span>669</span></p>
                            <p className='flex text-center items-center '><span><MdOutlineCurrencyRupee /></span><span className='font-bold'>559</span></p>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div>
                        <img className='h-60 w-full object-cover' src={girl} />
                        <div className='bg-slate-200 py-2 '>
                            <p className='text-yellow-400 text-start text-l flex py-1 mx-3'><FaStar /><FaStar /><FaStar /><FaStar /><FaStar /></p>
                            <p className=' py-1 mx-3 font-semibold'>Pastel long sleeve</p>
                            <div className='flex mx-2'>
                            <p className='flex text-center items-center line-through text-slate-400'><span><MdOutlineCurrencyRupee /></span><span>669</span></p>
                            <p className='flex text-center items-center '><span><MdOutlineCurrencyRupee /></span><span className='font-bold'>559</span></p>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div>
                        <img className='h-60 w-full object-cover' src={girl2} />
                        <div className='bg-slate-200 py-2 '>
                            <p className='text-yellow-400 text-start text-l flex py-1 mx-3'><FaStar /><FaStar /><FaStar /><FaStar /><FaStar /></p>
                            <p className=' py-1 mx-3 font-semibold'>Pastel long sleeve</p>
                            <div className='flex mx-2'>
                            <p className='flex text-center items-center line-through text-slate-400'><span><MdOutlineCurrencyRupee /></span><span>669</span></p>
                            <p className='flex text-center items-center '><span><MdOutlineCurrencyRupee /></span><span className='font-bold'>559</span></p>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div>
                        <img className='h-60 w-full object-cover' src={girl} />
                        <div className='bg-slate-200 py-2 '>
                            <p className='text-yellow-400 text-start text-l flex py-1 mx-3'><FaStar /><FaStar /><FaStar /><FaStar /><FaStar /></p>
                            <p className=' py-1 mx-3 font-semibold'>Pastel long sleeve</p>
                            <div className='flex mx-2'>
                            <p className='flex text-center items-center line-through text-slate-400'><span><MdOutlineCurrencyRupee /></span><span>669</span></p>
                            <p className='flex text-center items-center '><span><MdOutlineCurrencyRupee /></span><span className='font-bold'>559</span></p>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div>
                        <img className='h-60 w-full object-cover' src={girl2} />
                        <div className='bg-slate-200 py-2 '>
                            <p className='text-yellow-400 text-start text-l flex py-1 mx-3'><FaStar /><FaStar /><FaStar /><FaStar /><FaStar /></p>
                            <p className=' py-1 mx-3 font-semibold'>Pastel long sleeve</p>
                            <div className='flex mx-2'>
                            <p className='flex text-center items-center line-through text-slate-400'><span><MdOutlineCurrencyRupee /></span><span>669</span></p>
                            <p className='flex text-center items-center '><span><MdOutlineCurrencyRupee /></span><span className='font-bold'>559</span></p>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div>
                        <img className='h-60 w-full object-cover' src={girl} />
                        <div className='bg-slate-200 py-2 '>
                            <p className='text-yellow-400 text-start text-l flex py-1 mx-3'><FaStar /><FaStar /><FaStar /><FaStar /><FaStar /></p>
                            <p className=' py-1 mx-3 font-semibold'>Pastel long sleeve</p>
                            <div className='flex mx-2'>
                            <p className='flex text-center items-center line-through text-slate-400'><span><MdOutlineCurrencyRupee /></span><span>669</span></p>
                            <p className='flex text-center items-center '><span><MdOutlineCurrencyRupee /></span><span className='font-bold'>559</span></p>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div>
                        <img className='h-60 w-full object-cover' src={girl} />
                        <div className='bg-slate-200 py-2 '>
                            <p className='text-yellow-400 text-start text-l flex py-1 mx-3'><FaStar /><FaStar /><FaStar /><FaStar /><FaStar /></p>
                            <p className=' py-1 mx-3 font-semibold'>Pastel long sleeve</p>
                            <div className='flex mx-2'>
                            <p className='flex text-center items-center line-through text-slate-400'><span><MdOutlineCurrencyRupee /></span><span>669</span></p>
                            <p className='flex text-center items-center '><span><MdOutlineCurrencyRupee /></span><span className='font-bold'>559</span></p>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
               
            </Swiper>
        </>
    );
}
export default Slider; 