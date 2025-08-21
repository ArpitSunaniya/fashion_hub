import React from 'react'
import footer1 from '../assets/images/fotter_img/footer_1.jpeg'
import footer2 from '../assets/images/fotter_img/footer_2.jpeg'
import footer3 from '../assets/images/fotter_img/footer_3.jpeg'
import footer4 from '../assets/images/fotter_img/footer_4.jpeg'
import footer5 from '../assets/images/fotter_img/footer_5.jpeg'

const Footer = () => {

    const footer_img = [
        { id: 1, imgSrc: footer1 },
        { id: 2, imgSrc: footer2 },
        { id: 3, imgSrc: footer3 },
        { id: 4, imgSrc: footer4 },
        { id: 5, imgSrc: footer5 }
    ]
    return (
        <> 
            <div className=" container-fluid py-5 flex justify-center">
                {footer_img.slice(0, 5).map((items, index) => (
                    <div key={index}>
                        <img className='w-72 h-72 object-cover' src={items.imgSrc} loading='lazy' />
                    </div>
                ))}
            </div>
            <div className='bg-orange-950 h-44 relative justify-center place-content-center leading-10 p-2 mt-5'>
                <ul className='flex gap-6 justify-center text-center text-white '>
                    <li>MENS</li>
                    <li>WOMENS</li>
                    <li>KIDS</li>
                    <li>COLLECTION</li>
                    <li>TRENDS</li>
                </ul>
                <p className='text-center text-white'> Copyright Fashion All Right Reserved </p>
            </div>
            <div className='relative bottom-48 flex justify-center'>
                <p className='bg-white absolute text-black shadow-lg px-3'>Follow Our Instagram: <span className='font-bold'>Fashion_Trends</span> </p>
            </div>
        </>

    )
}

export default Footer;