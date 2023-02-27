import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../assets/warung kreatif.jpg'

const Logo = () => {
  return (
    <div className="wrapper flex">
      <Link to={'/'}>
        <img src={logo} alt="" className='w-[10.5rem] md:w-[16rem] mx-auto md:mx-0 rounded-xl' />
      </Link>
    </div>
  )
}

export default Logo