import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination, Autoplay } from 'swiper/modules';
import profile from '../../assets/images/fashion_mentrending.jpg'
const What_people = () => {
    return (
        // <>
        //     <div className='text-5xl font-bold text-center mt-5 py-4'>What People Say About</div>
        //     <p className='text-center font-semibold'>It is a long established fact that a reader will be distracted by the readable content</p>
        //     <div className='flex flex-wrap gap-5 justify-center mt-5'>
        //         <div className='h-80 w-2/5  bg-orange-100 border-2 pb-6'>
        //             <div className='text-center p-5'>
        //                 <p className='font-semibold '>Comfortable And Met All My Expectation!
        //                 </p>
        //                 <p className='font-semibold'>  I Ordered A  Medium And It Fit Perfectly</p>
        //             </div>
        //             <p className='text-center justify-center leading-6 px-12'>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters,</p>
        //             <div className='flex text-center justify-center py-3'>
        //                 <img className='w-16 h-16 object-cover rounded-full' src={profile} />
        //             </div>
        //             <p className='text-center font-semibold' >Fashion</p>
        //             <p className='text-center mb-3'>Customer</p>
        //         </div>
        //         <div className='h-80 w-2/5  bg-orange-100 border-2 pb-6'>
        //             <div className='text-center p-5'>
        //                 <p className='font-semibold '>Comfortable And Met All My Expectation!
        //                 </p>
        //                 <p className='font-semibold'>  I Ordered A  Medium And It Fit Perfectly</p>
        //             </div>
        //             <p className='text-center justify-center leading-6 px-12'>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters,</p>
        //             <div className='flex text-center justify-center py-3'>
        //                 <img className='w-16 h-16 object-cover rounded-full' src={profile} />
        //             </div>
        //             <p className='text-center font-semibold' >Fashion</p>
        //             <p className='text-center mb-3'>Customer</p>
        //         </div>

        //     </div>
        // </>
        <>
            <div className='container mt-5'>
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
                    modules={[Pagination, Autoplay]}
                    className="mySwiper"
                >
                    <SwiperSlide>
                        <div className='h-80  bg-orange-100 border-2 pb-6'>
                            <div className='text-center p-5'>
                                <p className='font-semibold '>Comfortable And Met All My Expectation!
                                </p>
                                <p className='font-semibold'>  I Ordered A  Medium And It Fit Perfectly</p>
                            </div>
                            <p className='text-center justify-center leading-6 px-12'>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters,</p>
                            <div className='flex text-center justify-center py-3'>
                                <img className='w-16 h-16 object-cover rounded-full' src={profile} />
                            </div>
                            <p className='text-center font-semibold' >Fashion</p>
                            <p className='text-center mb-3'>Customer</p>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='h-80   bg-orange-100 border-2 pb-6'>
                            <div className='text-center p-5'>
                                <p className='font-semibold '>Comfortable And Met All My Expectation!
                                </p>
                                <p className='font-semibold'>  I Ordered A  Medium And It Fit Perfectly</p>
                            </div>
                            <p className='text-center justify-center leading-6 px-12'>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters,</p>
                            <div className='flex text-center justify-center py-3'>
                                <img className='w-16 h-16 object-cover rounded-full' src={profile} />
                            </div>
                            <p className='text-center font-semibold' >Fashion</p>
                            <p className='text-center mb-3'>Customer</p>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='h-80   bg-orange-100 border-2 pb-6'>
                            <div className='text-center p-5'>
                                <p className='font-semibold '>Comfortable And Met All My Expectation!
                                </p>
                                <p className='font-semibold'>  I Ordered A  Medium And It Fit Perfectly</p>
                            </div>
                            <p className='text-center justify-center leading-6 px-12'>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters,</p>
                            <div className='flex text-center justify-center py-3'>
                                <img className='w-16 h-16 object-cover rounded-full' src={profile} />
                            </div>
                            <p className='text-center font-semibold' >Fashion</p>
                            <p className='text-center mb-3'>Customer</p>
                        </div>
                    </SwiperSlide>
                </Swiper>
            </div>
        </>
    )
}
export default What_people;