import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Logo from './Logo'

const Navbar = () => {

  const token = localStorage.getItem('token')
  const navigate = useNavigate()
  const [show, setShow] = useState(false)

  return (
    <div className=''>
      <div className="fixed top-0 bg-gradient-to-r from-emerald-400 to-[#016b3f] shadow-xl py-0 px-4 w-screen">
        <div className="container block md:flex mx-auto py-4">
          <Logo />
          <div className="hidden md:flex w-full">
            <button onClick={()=>navigate('/login')} className='w-max h-max my-auto ml-auto text-xl text-white hover:scale-125 hover:font-semibold hover:text-black transition-all duration-300'>Masuk</button>
            <button onClick={()=>navigate('/register')} className='w-max h-max my-auto ml-20 text-xl text-white hover:scale-125 hover:font-semibold hover:text-black transition-all duration-300'>Daftar</button>
            <button className='w-max h-max my-auto ml-20 text-xl text-white hover:scale-125 hover:font-semibold hover:text-black transition-all duration-300'>Kontak</button>
            <button className='w-max h-max my-auto ml-20 text-xl text-white hover:scale-125 hover:font-semibold hover:text-black transition-all duration-300'>Tentang Kami</button>
          </div>
        </div>
        <button onClick={()=>show === true ? setShow(false) : setShow(true)} className='absolute md:hidden top-6 text-white right-5'>
          {show === false ?
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className='w-8 h-8'>
              <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
            </svg>
          :
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className='w-8 h-8'>
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>

          }
        </button>
      </div>
      { token ? 
      <div className={`wrapper fixed top-[85px] grid duration-500 transition-all w-screen bg-gradient-to-r from-emerald-400 rounded-bl-xl rounded-br-xl to-[#016b3f] py-6 px-4 ${show === true ? '-mt-5 opacity-100' : "-mt-[500px] opacity-0"}`}>
        <button onClick={()=>navigate('/')} className='text-white w-1/4 mx-auto'>Beranda</button>
        <hr className='text-white border-t border-white w-1/4 mx-auto my-3' />
        <button onClick={()=>navigate('/')} className='text-white w-max mx-auto'>Penawaran</button>
        <hr className='text-white border-t border-white w-1/4 mx-auto my-3' />
        <button className='text-white w-max mx-auto'>Promo</button>
        <hr className='text-white border-t border-white w-1/4 mx-auto my-3' />
        <button className='text-white w-max mx-auto'>Paket Kamu</button>
        <hr className='text-white border-t border-white w-1/4 mx-auto my-3' />
        <button className='text-white w-max mx-auto'>Tentang Kami</button>
        <hr className='text-white border-t border-white w-1/4 mx-auto my-3' />
        <button onClick={()=>{localStorage.clear(); navigate('/login')}} className='text-white w-max mx-auto'>Keluar</button>
      </div>
      :
      <div className={`wrapper fixed top-[85px] grid duration-500 transition-all w-screen bg-gradient-to-r from-emerald-400 rounded-bl-xl rounded-br-xl to-[#016b3f] py-6 px-4 ${show === true ? '-mt-5 opacity-100' : "-mt-[500px] opacity-0"}`}>
        <button onClick={()=>navigate('/regiser')} className='text-white w-1/4 mx-auto'>Register</button>
        <hr className='text-white border-t border-white w-1/4 mx-auto my-3' />
        <button onClick={()=>navigate('/login')} className='text-white w-max mx-auto'>Login</button>
        <hr className='text-white border-t border-white w-1/4 mx-auto my-3' />
        <button onClick={()=>navigate('/')} className='text-white w-max mx-auto'>Beranda</button>
        <hr className='text-white border-t border-white w-1/4 mx-auto my-3' />
      </div>
      }
    </div>
  )
}

export default Navbar