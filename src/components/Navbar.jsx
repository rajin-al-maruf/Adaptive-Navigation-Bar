import React from 'react'
import Logo from '../components/img/rajin.png'
import { GiHamburgerMenu } from "react-icons/gi";
import { IoMdClose } from "react-icons/io";


const Navbar = () => {

  const [navBar, setNavBar] = React.useState(false)

  function toggle() {
    setNavBar(!navBar)
  }

  return (
    <div className='shadow-md'>
      
      <div className='flex items-center justify-between p-2 max-w-5xl mx-auto'>
        <img className='w-32 m-2' src={Logo} alt="" />

        <ul className='flex'>
            <li className='p-4 hidden sm:block cursor-pointer'>Home</li>
            <li className='p-4 hidden sm:block cursor-pointer'>About Me</li>
            <li className='p-4 hidden sm:block cursor-pointer'>Portfolio</li>
            <li className='p-4 hidden sm:block cursor-pointer'>Best Picks</li>
            <li className='p-4 hidden sm:block cursor-pointer'>Contact</li>
        </ul>

        <div className='sm:hidden'>

            <div onClick={toggle}>
              {navBar? <IoMdClose className='cursor-pointer' size={20}/> : <GiHamburgerMenu  className='cursor-pointer'size={20}/>}
            </div>

            <div className={navBar? 'fixed top-0 left-0 bg-gray-200 border-r border-gray-300 w-[80%] h-full ease-in-out duration-500': 'fixed top-0 -left-36'}>
              <ul className='flex flex-col p-2'>
                <li className='p-4 border-b border-gray-300 cursor-pointer'>Home</li>
                <li className='p-4 border-b border-gray-300 cursor-pointer'>About Me</li>
                <li className='p-4 border-b border-gray-300 cursor-pointer'>Portfolio</li>
                <li className='p-4 border-b border-gray-300 cursor-pointer'>Best Picks</li>
                <li className='p-4 border-b border-gray-300 cursor-pointer'>Contact</li>
              </ul>
            </div>
            
        </div>
      </div>
    </div>
  )
}

export default Navbar
