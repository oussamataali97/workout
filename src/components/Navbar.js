import React from 'react'
import {Link } from 'react-router-dom'
import logo from '../assets/assets/images/Logo.png'
const Navbar = () => {
  return (
    <div className=' max-w-xl  flex items-center justify-around p-3'>
      <Link to='/'><img src={logo} alt="" /></Link>
      <div className="links space-x-5 text-xl font-[400] ">
        <Link to='/' className='hover:border-b-2 border-red-500 hover:text-red-700'>Home</Link>
        <Link to='/exercice' className='hover:border-b-2 border-red-500 hover:text-red-700'>Exercices</Link>

      </div>
    </div>
  )
}

export default Navbar