import React from 'react'
import Logo from '../components/img/rajin.png'
import { GiHamburgerMenu } from "react-icons/gi";


const Navbar = () => {
  return (
    <div className='shadow-md'>
      
      <div className='flex items-center justify-between p-2 max-w-5xl mx-auto
                '>
        <img className='w-32 m-2' src={Logo} alt="" />

        <ul className='flex'>
            <li className='p-4 hidden sm:block'>Home</li>
            <li className='p-4 hidden sm:block'>About Me</li>
            <li className='p-4 hidden sm:block'>Portfolio</li>
            <li className='p-4 hidden sm:block'>Best Picks</li>
            <li className='p-4 hidden sm:block'>Contact</li>
        </ul>

        <div className='sm:hidden'>
            <GiHamburgerMenu />
        </div>
        

      </div>
    </div>
  )
}

export default Navbar
