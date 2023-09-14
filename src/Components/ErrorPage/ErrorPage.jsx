import React from 'react'
import err from '../../assets/err6.png'
import {Link} from 'react-router-dom'

const ErrorPage = () => {
  return (
    <div className='w-full h-screen bg-gray-50'>
        <div className='absolute top-[20%] left-[33%]'>
            <img className='border border-gray-50 w-[90%] h-[300px]' src={err} alt="Error 404"></img>
            <p className='text-[1.3rem]'>Yo! Seems like you got lost, Let's go back, shall we? <Link className='text-rose-600 underline' to='/home'>CLick Here!</Link></p>
        </div>
    </div>
  )
}

export default ErrorPage
