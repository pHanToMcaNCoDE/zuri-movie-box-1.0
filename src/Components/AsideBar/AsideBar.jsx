import React, { useState } from 'react'
// import React from 'react'
import logo from '../../assets/LogoTwo.png'
import {GoHome} from 'react-icons/go'
import {BiCameraMovie} from 'react-icons/bi'
import {PiMonitorPlayDuotone} from 'react-icons/pi'
import {SlCalender} from 'react-icons/sl'
import {IoIosLogOut} from 'react-icons/io'
import menu from '../../assets/menu.png'
import { Link } from 'react-router-dom'

const AsideBar = () => {

const [nav, setNav] = useState(false)

  return (
    <div>
        <aside className='hidden lg:flex fixed top-0 z-10 duration-300 bg-white left-0 h-screen w-[20%] md:w-[10%] lg:w-[16%] border border-gray-300 rounded-r-[50px]'>
            <div className='w-full flex flex-col justify-between items-center h-[60%]'>
                
                <div className='pt-[2.5em] mb-[3em]'>
                    <img className='w-[100px] lg:flex lg:w-[140px]' src={logo} alt='MovieBox'></img>
                </div>
                
                <div className='w-full flex flex-col justify-between list-none'>

                    <Link to='/home'>
                        <li className='w-full  mb-[1.6%] p-5 pl-[20%] cursor-pointer duration-75 hover:bg-rose-50 border border-white hover:border hover:border-solid hover:border-r-4 hover:border-r-rose-500 hover:border-rose-100 flex flex-col lg:flex-row items-center text-[#666666] font-sans text-[1.2rem]'>
                            <GoHome className='mr-4' size={24}/>
                            <p className='text-[.9rem] lg:text-[1.2rem] lg:flex'>Home</p>
                        </li>
                    </Link>

                        <li className='w-full  mb-[1.6%] p-5 pl-[20%] cursor-pointer duration-75 hover:bg-rose-50 border border-white hover:border hover:border-solid hover:border-r-4 hover:border-r-rose-500 hover:border-rose-100 flex flex-col lg:flex-row items-center text-[#666666] font-sans text-[1.2rem]'>
                            <BiCameraMovie className='mr-4' size={24}/>
                            <p className='text-[.9rem] lg:text-[1.2rem] lg:flex'>Movies</p>
                        </li>
                    

                    <li className='w-full  mb-[1.6%] p-5 pl-[20%] cursor-pointer duration-75 hover:bg-rose-50 border border-white hover:border hover:border-solid hover:border-r-4 hover:border-r-rose-500 hover:border-rose-100 flex flex-col lg:flex-row items-center text-[#666666] font-sans text-[1.2rem]'>
                        <PiMonitorPlayDuotone className='mr-4' size={24}/>
                        <p className='text-[.9rem] lg:text-[1.2rem] lg:flex'>TV Series</p>
                    </li>

                    <li className='w-full  mb-[1.6%] p-5 pl-[20%] cursor-pointer duration-75 hover:bg-rose-50 border border-white hover:border hover:border-solid hover:border-r-4 hover:border-r-rose-500 hover:border-rose-100 flex flex-col lg:flex-row items-center text-[#666666] font-sans text-[1.2rem]'>
                        <SlCalender className='mr-4' size={24}/>
                        <p className='text-[.9rem] lg:text-[1.2rem] lg:flex'>Upcoming</p>
                    </li>
                </div>

                <div className='mt-10 border border-1 border-rose-600 rounded-2xl bg-rose-50 p-4 w-[80%] hidden lg:flex lg:flex-col'>
                    <h1 className='text-[.7rem] lg:text-[1rem] text-[#333333CC] font-semibold py-5'>Play movie quizes <br/>and earn <br/>free tickets</h1>
                    <p className='text-[.6rem] lg:text-[.7rem] py-1 px-2'>50k people are playing now</p>
                    <button className='bg-rose-200 border border-1 mx-auto border-rose-600 text-[.6rem] lg:text-[.8rem] p-1 rounded-full text-[#BE123C]'>Start Playing</button>
                </div>
                
                <div className='list-none flex flex-col justify-between w-full my-3'>
                    <li className='w-full my-[2%] p-6 pl-[20%] cursor-pointer duration-75 hover:bg-rose-50 border border-white hover:border hover:border-solid hover:border-r-4 hover:border-r-rose-500 hover:border-rose-100 flex items-center text-[#666666] flex-col lg:flex-row font-sans text-[1.2rem]'>
                        <IoIosLogOut className='mr-4' size={24}/>
                        <p className='text-[.8rem] lg:text-[1.2rem] lg:flex'>Log out</p>
                    </li>
                </div>
            </div>
        </aside>
        



        {/* <aside className='flex fixed top-0 z-10 duration-300 bg-white left-0 h-screen w-[20%] lg:w-[16%] border border-gray-300 rounded-r-[50px]'>
            <div className='w-full flex flex-col justify-between items-center h-[60%]'>
                
                <div className='pt-[2.5em] mb-[3em]'>
                    <img className='w-[100px] lg:flex lg:w-[140px]' src={logo} alt='MovieBox'></img>
                </div>
                
                <div className='w-full flex flex-col justify-between list-none'>

                        <li className='w-full  mb-[1.6%] p-5 pl-[20%] cursor-pointer duration-75 hover:bg-rose-50 border border-white hover:border hover:border-solid hover:border-r-4 hover:border-r-rose-500 hover:border-rose-100 flex flex-col md:flex-row lg:flex-row items-center text-[#666666] font-sans text-[1.2rem]'>
                            <GoHome className='mr-4' size={24}/>
                            <p className='text-[.8rem] lg:text-[1.2rem] lg:flex'>Home</p>
                        </li>

                        <li className='w-full  mb-[1.6%] p-5 pl-[20%] cursor-pointer duration-75 hover:bg-rose-50 border border-white hover:border hover:border-solid hover:border-r-4 hover:border-r-rose-500 hover:border-rose-100 flex flex-col md:flex-row lg:flex-row items-center text-[#666666] font-sans text-[1.2rem]'>
                            <BiCameraMovie className='mr-4' size={24}/>
                            <p className='text-[.8rem] lg:text-[1.2rem] lg:flex'>Movies</p>
                        </li>

                    <li className='w-full  mb-[1.6%] p-5 pl-[20%] cursor-pointer duration-75 hover:bg-rose-50 border border-white hover:border hover:border-solid hover:border-r-4 hover:border-r-rose-500 hover:border-rose-100 flex flex-col md:flex-row lg:flex-row items-center text-[#666666] font-sans text-[1.2rem]'>
                        <PiMonitorPlayDuotone className='mr-4' size={24}/>
                        <p className='text-[.8rem] lg:text-[1.2rem] lg:flex'>TV Series</p>
                    </li>

                    <li className='w-full  mb-[1.6%] p-5 pl-[20%] cursor-pointer duration-75 hover:bg-rose-50 border border-white hover:border hover:border-solid hover:border-r-4 hover:border-r-rose-500 hover:border-rose-100 flex flex-col md:flex-row lg:flex-row items-center text-[#666666] font-sans text-[1.2rem]'>
                        <SlCalender className='mr-4' size={24}/>
                        <p className='text-[.8rem] lg:text-[1.2rem] lg:flex'>Upcoming</p>
                    </li>


                    <li className='flex md:hidden lg:hidden w-full  mb-[1.6%] p-5 pl-[20%] cursor-pointer duration-75 hover:bg-rose-50 border border-white hover:border hover:border-solid hover:border-r-4 hover:border-r-rose-500 hover:border-rose-100 flex-col lg:flex-row items-center text-[#666666] font-sans text-[1.2rem]'>
                        <SlCalender className='mr-4' size={24}/>
                        <p className='text-[.8rem] lg:text-[1.2rem] lg:flex'>Tickets</p>
                    </li>
                </div>

                <div className='hidden md:flex md:flex-col lg:flex lg:flex-col mt-10 border border-1 border-rose-600 rounded-2xl bg-rose-50 p-4 w-[80%]'>
                    <h1 className='text-[.7rem] lg:text-[1rem] text-[#333333CC] font-semibold py-5'>Play movie quizes <br/>and earn <br/>free tickets</h1>
                    <p className='text-[.6rem] lg:text-[.7rem] py-1 px-2'>50k people are playing now</p>
                    <button className='bg-rose-200 border border-1 mx-auto border-rose-600 text-[.6rem] lg:text-[.8rem] p-1 rounded-full text-[#BE123C]'>Start Playing</button>
                </div>
                
                <div className='list-none flex flex-col justify-between w-full my-3'>
                    <li className='w-full my-[2%] p-6 pl-[20%] cursor-pointer duration-75 hover:bg-rose-50 border border-white hover:border hover:border-solid hover:border-r-4 hover:border-r-rose-500 hover:border-rose-100 flex flex-col md:flex-row lg:flex-row items-center text-[#666666] font-sans text-[1.2rem]'>
                        <IoIosLogOut className='mr-4' size={24}/>
                        <p className='text-[.8rem] lg:text-[1.2rem] lg:flex'>Log out</p>
                    </li>
                </div>
            </div>
        </aside> */}
        
      
    </div>
  )
}

export default AsideBar
