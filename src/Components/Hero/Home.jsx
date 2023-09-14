import React from 'react'
import Navbar from '../Navbar/Navbar'
import './hero.css'
import imdb from '../../assets/imdb.png'
import apple from '../../assets/apple.png'
import {AiFillPlayCircle} from 'react-icons/ai'
import Footer from '../Footer/Footer'
import Display from '../Display/Display'
import './hero.css'

const Hero = () => {
  return (
    <div className='hero w-full h-[650px]'>
      <Navbar/>
        <div className='lg:w-[24%] my-[6%] mx-[6%] text-white'>
            <div>
                <h1 className='text-6xl font-semibold'>John Wick3:</h1>
                <h1 className='text-6xl font-semibold py-3'>Parabellum</h1>
            </div>

            <div className='flex items-center py-4'>
                <div className='flex items-center'>
                    <img src={imdb} alt=''></img>
                    <p className='px-3'>86.0/100</p>
                </div>
                <div className='flex items-center px-10'>
                    <img src={apple} alt=''></img>
                    <p className='px-3'>97%</p>
                </div>
            </div>

            <div>
                <p className='text-justify py-3 text-[1rem]'>John Wick is on the run after killing a member of the international assassins' guild, and with a $14 million price tag on his head, he is the target of hit men and women everywhere.</p>
            </div>

            <button className='outline-none bg-rose-700 flex items-center text-white my-4 rounded-md px-5 py-2'>
               <AiFillPlayCircle size={24} className='mr-3'/> WATCH TRAILER
            </button>
        </div>
        <Display/>
        <Footer/>
    </div>
  )
}

export default Hero
