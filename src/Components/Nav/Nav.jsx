import React from 'react'
// import menu from '../../assets/menu.png'
import logo from '../../assets/LogoTwo.png'
import {GrHomeRounded} from 'react-icons/gr'
import { Link } from 'react-router-dom'

const Nav = () => {

// const [nav, setNav] = useState(false)

  return (
    <div>
      <nav className='lg:hidden w-full flex justify-between items-center p-2 border border-1 border-b-gray-300'>
        <div>
            <img className='w-[100px] lg:w-[140px]' src={logo} alt='MovieBox'></img>
        </div>
            
        <Link to='/home'>
            <li className='w-full lg:hidden cursor-pointer duration-75 hover:text-red-700 flex items-center text-[#666666] text-[1.3rem] font-sans'>
                <GrHomeRounded className='mr-4' size={22}/>
                <p>Home</p>
            </li>
        </Link>
      </nav>
    </div>
  )
}

export default Nav
