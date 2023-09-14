import React from 'react'
import {AiFillFacebook, AiOutlineInstagram, AiOutlineTwitter, AiFillYoutube} from 'react-icons/ai'

const Footer = () => {
  return (
    <div className='max-w-[1000px] mx-auto p-4 mt-[8%] flex flex-col justify-center items-center'>
        <div className='flex justify-between items-center list-none text-center my-1'>
            <li className='cursor-pointer duration-300 hover:text-rose-700 my-2 mx-8'>
                <AiFillFacebook size={25}/>
            </li>
            <li className='cursor-pointer duration-300 hover:text-rose-700 my-2 mx-8'>
                <AiOutlineInstagram size={25}/>
            </li>
            <li className='cursor-pointer duration-300 hover:text-rose-700 my-2 mx-8'>
                <AiOutlineTwitter size={25}/>
            </li>
            <li className='cursor-pointer duration-300 hover:text-rose-700 my-2 mx-8'>
                <AiFillYoutube size={25}/>
            </li>
        </div>
        <div className='flex flex-col lg:flex-row justify-between items-center list-none text-center my-1'>
            <li className='cursor-pointer duration-300 hover:text-rose-700 my-2 mx-8'>
                <p>Conditions of Use</p>
            </li>
            <li className='cursor-pointer duration-300 hover:text-rose-700 my-2 mx-8'>
                <p>Provacy & Policy</p>
            </li>
            <li className='cursor-pointer duration-300 hover:text-rose-700 my-2 mx-8'>
                <p>Press Room</p>
            </li>
        </div>
        <p className='text-gray-500 text-[1rem] my-1'>© 2021 MovieBox by Adriana Eka Prayudha  </p>
    </div>
  )
}

export default Footer
