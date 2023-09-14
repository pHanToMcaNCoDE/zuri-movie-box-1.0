import {FaHeart} from 'react-icons/fa'
import {LiaVoteYeaSolid} from 'react-icons/lia'
import {PiArrowsCounterClockwiseDuotone} from 'react-icons/pi'
import {MdLanguage} from 'react-icons/md'
import {Link} from 'react-router-dom'
// import { useState } from 'react'

const Cards = ({movies}) => {

    // const [fav, setFav] = useState('')

  return (
    <div className='max-w-[1200px] mx-auto p-4'>

      {/* Grid */}
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8'>
            {
                movies.map(movie => (
                    <Link to={`/details/${movie.id}`}>
                        <div key={movie.id} data-testid='movie-card' className='cursor-pointer duration-300 hover:scale-110'>
                            <div className='relative'>
                                <img data-testid='movie-poster' className='w-[100%] h-[370px] object-cover' src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt='Poster'></img>
                                    <div className='absolute top-2 right-2'>
                                        <FaHeart onClick={() => 'bg-rose-700'} className='text-gray-300 bg-[#F3F4F6] rounded-full p-2 cursor-pointer duration-300 hover:scale-110' size={33}/>
                                    </div>
                            </div>
                            <div>
                                <p data-testid= 'movie-release-date' className='text-[1rem] text-gray-400 font-sans py-2'><span>{movie.release_date}</span></p>
                                <h1 data-testid='movie-title' className='text-gray-900 text-[1.3rem] font-semibold'>{movie.original_title}</h1>
                                <div className='flex justify-between items-center py-2'>
                                    <div className='flex justify-between items-center'>
                                        <LiaVoteYeaSolid className='text-rose-700' size={25}/>
                                        <p className='tracking-widest pl-3'>
                                            <span className='text-gray-400'>
                                                {movie.vote_average}</span>
                                            / 10 
                                        </p>
                                    </div>
                                    <div className='flex justify-between items-center'>
                                        <PiArrowsCounterClockwiseDuotone className='text-rose-700' size={25}/>
                                        <p className='tracking-widest pl-3'>
                                            <span>{movie.vote_count}</span>
                                        </p>
                                    </div>
                                </div>
                                    <p className='flex items-center text-[1rem] text-gray-400 font-sans py-1'>
                                        <MdLanguage className='text-rose-500 mr-2' size={25}/>{movie.original_language}
                                    </p>
                            </div>
                        </div>
                    </Link>
                ))     
            }
        </div>

    </div>
  )
}

export default Cards
