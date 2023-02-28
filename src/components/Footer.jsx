import React from 'react'
import logo from '../assets/w2.png'

const Footer = () => {
  return (
    <div className='bg-gradient-to-r from-emerald-500 to-[#016b3f] py-3'>
        <div className="container grid w-3/4 md:flex md:w-max mx-auto">
            <img src={logo} alt="" className='w-[3.5rem] mx-auto' />
            <p className='text-sm md:text-lg text-white my-auto ml-5 text-center'>Copyright © 2023 Warung Kreatif. All Rights Reserved</p>
        </div>
    </div>
  )
}

export default Footer