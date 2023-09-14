import { useEffect, useState } from 'react'
import { ScaleLoader } from 'react-spinners'
import Cards from '../Cards/Cards'
import {IoIosArrowForward} from 'react-icons/io'
import axios from 'axios'


const Display = () => {

const [loading, setLoading] = useState(false)
  const [movies, setMovies] = useState([])

  const fetchMovies = async () => {
    try{
      const res = await axios
      .get('https://api.themoviedb.org/3/discover/movie?api_key=d10f94cdd313f423da01119ecf2659bb')
      setMovies(res.data.results)
      setLoading(true)
    }catch (e){
        console.log(e)
    }
  }


  useEffect(() => {
    fetchMovies()
  },[])






  // const fetchMovies = () => {
  //   setLoading(true)
  //   fetch("https://api.themoviedb.org/3/discover/movie?api_key=d10f94cdd313f423da01119ecf2659bb")
  //   .then(res => res.json())
  //   .then(data => {
  //       setMovies(data.results)
  //       setLoading(false)
  //   })
        
  //   .catch(err => console.log(err))
  // }

  // useEffect(() => {
  //   fetchMovies()
  // },[])


  console.log(movies)


  return (

    <div className='max-w-[1200px] mx-auto mt-[11em]'>
        <div className='flex justify-between tracking-wide items-center py-[6%]'>
        <h1 className='text-2xl md:text-3xl lg:text-4xl font-bold '>Featured Movies</h1>
        <p className='text-rose-500 text-[1rem] flex items-center cursor-pointer'>Seer more <IoIosArrowForward className='mr-6' size={23}/></p>
        </div>
         { loading ? <Cards movies={movies} /> : <div className='bg-black/70 h-screen w-full fixed z-10 top-0 left-0'><ScaleLoader className='fixed top-[50%] left-[50%]' height="80" width="4" radius="3" color="crimson" ariaLabel="loading" wrapperStyle wrapperClass/></div> }
      </div>
    

  )
}

export default Display
