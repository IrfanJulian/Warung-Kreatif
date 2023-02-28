import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../assets/w2.png'

const Logo = () => {
  return (
    <div className="wrapper flex w-full md:w-1/4">
      <Link to={'/'} className='flex mx-0'>
        <img src={logo} alt="" className='w-[2.5rem] md:w-[3.5rem] mx-auto md:mx-0' />
        <p className='text-md text-white my-auto ml-3'>Warung Kreatif</p>
      </Link>
    </div>
  )
}

export default Logo