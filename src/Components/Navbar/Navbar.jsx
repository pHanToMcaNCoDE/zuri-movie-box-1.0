import React from 'react'
import logo from '../../assets/Logo.png'
import menu from '../../assets/menu.png'
import {AiOutlineSearch} from 'react-icons/ai'
// import ResultSearch from '../ResultSearch/ResultSearch'

const Navbar = () => {

  // const [query, setQuery] = useState("")
  // const [result, setResult] = useState([])

  // const onChange = (e) => {
  //     e.preventDefault();

  //     setQuery(e.target.value);

  //     fetch(`https://api.themoviedb.org/3/search/movie?api_key=d10f94cdd313f423da01119ecf2659bb&language=en-US&page=1&include_adult=false&query=${e.target.value}`)
  //     .then(res => res.json())
  //     .then(data => {
  //       if(!data.errors){
  //         setResult(data.results)
  //       }else{
  //         setResult([]);
  //       }
  //     })
        
      
  // }

    // const searchMovies = (e) => {
    //     e.preventDefault()
        
    // }

  return (
    <div>
      <nav className='max-w-[1300px] mx-auto p-4 w-full flex justify-between items-center'>

        <div>
            <img className='w-[100px] lg:w-[140px]' src={logo} alt='MovieBox'></img>
        </div>

        <form  className='rounded-lg p-1 items-center border border-white hidden md:flex lg:flex md:w-[400px] lg:w-[500px]'>
            <input type={'text'} className='bg-transparent outline-none w-full text-white placeholder:text-white' placeholder='What do you want to watch?'></input>
            <button type={'submit'}><AiOutlineSearch className='text-white' size={25}/></button>
        </form>
        {/* <div className='bg-white overflow-y-scroll '>
            {
              onSubmit={searchMovies}
              onChange={onChange}
              value={query}

              result.map((movie) => (
                  <li key={movie.id} className='list-none'>
                      <ResultSearch movie={movie} />
                  </li>
              ))
            }
        </div> */}


        <div className='flex justify-between items-center'>
            <p className='text-white text-[.8rem] mr-5 cursor-pointer'>Sign in</p>
            <img className='bg-rose-700 rounded-full p-1 cursor-pointer' src={menu} alt='Meun Bar'></img>
        </div>

      </nav>
    </div>
  )
}

export default Navbar
