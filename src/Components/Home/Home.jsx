import React from 'react'
import Navbar from '../Navbar/Navbar'
import './home.css'
import {AiFillPlayCircle} from 'react-icons/ai'
import Footer from '../Footer/Footer'
import Cards from '../Display/Display'
import {LiaVoteYeaSolid} from 'react-icons/lia'
import {PiArrowsCounterClockwiseDuotone} from 'react-icons/pi'


const Hero = () => {


  return (
    <div className='hero max-w-[1440px] h-[650px]'>
        
      <Navbar/>
      
        <div className='my-[16%] lg:w-[24%] md:my-[6%]  lg:my-[6%] mx-[6%] text-white'>
            <div>
                <h1 className='text-6xl font-semibold'>John Wick3:</h1>
                <h1 className='text-6xl font-semibold py-3'>Parabellum</h1>
            </div>

            <div className='flex items-center py-4'>
                <div className='flex items-center'>
                    <LiaVoteYeaSolid className='text-gray-300' size={26}/>
                    <p className='px-3'>8.6/10.0</p>
                </div>
                <div className='flex items-center px-10'>
                    <PiArrowsCounterClockwiseDuotone className='text-gray-300' size={26}/>
                    <p className='px-3'>9789</p>
                </div>
            </div>

            <div>
                <p className='text-justify py-3 text-[1rem]'>John Wick is on the run after killing a member of the international assassins' guild, and with a $14 million price tag on his head, he is the target of hit men and women everywhere.</p>
            </div>

            <button className='outline-none bg-rose-700 flex items-center text-white my-4 rounded-md px-5 py-2'>
               <AiFillPlayCircle size={24} className='mr-3'/> WATCH TRAILER
            </button>
        </div>
        <div className='mt-4'>
            <Cards/>
        </div>
        <Footer/>
    </div>
  )
}

export default Hero
