import React from 'react'

const ResultSearch = ({movie}) => {
  return (
    <div className='flex'>
      <div>
        {movie.poster_path ? (
            <img className='rounded-full w-12 h-12 object-cover' src={`https://image.tmdb.org/t/p/w200/${movie.poster_path}`} alt='movie.title'></img>
            ) : <div></div>
        }
      </div>
      <div className='pl-2'>
        <h1 className='text-[1rem]'>
            {movie.title}
        </h1>
        <h4 className='text-[.8rem] text-gray-400'>{movie.release_date.substring(0,4)}</h4>
      </div>
    </div>
  )
}

export default ResultSearch
