import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Button from '../../components/Button'
import Input from '../../components/Input'
import Navbar from '../../components/Navbar'
import Password from '../../components/Password'

const Register = () => {

  const navigate = useNavigate()
  const [show, setShow] = useState(false)

  return (
    <div className='bg-gray-100 h-full pb-10'>
      <Navbar />
      <div className="container mx-auto grid">
          <div className="wrapper w-10/12 md:w-1/2 py-10 mx-auto p-5 bg-white rounded-xl mt-14 shadow-xl my-auto">
              <p className='text-2xl md:text-3xl text-[#016b3f] font-semibold underline text-center'>Daftar</p>
              <p className='text-md md:text-xl text-[#016b3f] font-medium text-center my-5'>Masukan data anda untuk mendaftar</p>
              <Input placeholder='Masukan nama lengkap' font='text-[#016b3f] text-sm md:text-lg' tittle='Nama Lengkap' width='w-11/12 mx-auto mt-10' />
              <Input placeholder='Masukan username' font='text-[#016b3f] text-sm md:text-lg' tittle='Username' width='w-11/12 mx-auto mt-5' />
              <Input placeholder='Masukan email' font='text-[#016b3f] text-sm md:text-lg' tittle='Email' width='w-11/12 mx-auto mt-5' />
              <Password placeholder='Masukan password' width='w-11/12 mx-auto my-5' show={show} onClick={()=>show === true ? setShow(false) : setShow(true)} tittle='Password' />
              <Password placeholder='Masukan kembali password' width='w-11/12 mx-auto my-5' show={show} onClick={()=>show === true ? setShow(false) : setShow(true)} tittle='Konfirmasi Password' />
              <Button onClick={()=>navigate('/forgot-password')} text='Lupa Password?' width='w-max text-sm md:text-lg mx-auto my-5 hover:opacity-60' className='text-[#016b3f]' />
              <Button text='Daftar' width='w-3/4 md:w-1/4 mx-auto my-10 hover:opacity-80' />
              <div className="flex w-max mx-auto text-sm md:text-lg">
                  <p className='text-[#016b3f]'>Belum punya akun?</p>
                  <button onClick={()=>navigate('/login')} className='text-[#016b3f] ml-2 font-semibold hover:opacity-60'>Klik untuk masuk</button>
              </div>
          </div>
          <div className="copyright w-3/4 mx-auto">
              <p className='text-[#016b3f] text-sm md:text-lg mt-16 text-center font-semibold'>Copyright © 2023 Pengembang Web. All Rights Reserved</p>
          </div>
      </div>
  </div>
  )
}

export default Register