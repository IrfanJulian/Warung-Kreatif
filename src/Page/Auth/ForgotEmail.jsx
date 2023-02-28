import React from 'react'
import Button from '../../components/Button'
import Input from '../../components/Input'
import Navbar from '../../components/Navbar'

const ForgotPassword = () => {
  return (
    <div className='bg-gray-100 pb-10 h-screen w-screen'>
        <Navbar />
        <div className="container mx-auto pt-10 md:pt-32 grid">
            <div className="wrapper w-10/12 md:w-1/2 py-10 mx-auto p-5 bg-white rounded-xl mt-14 shadow-xl my-auto">
                <p className='text-2xl md:text-3xl text-[#016b3f] font-semibold underline text-center'>Lupa Password</p>
                <p className='text-md md:text-xl text-[#016b3f] font-medium text-center my-5'>Masukan alamat email anda untuk menerima kode OTP.</p>
                <Input maxLength={6} placeholder='Masukan alamat email' font='text-[#016b3f] text-sm md:text-lg text-[#016b3f]' tittle='Kode OTP' width='w-11/12 mx-auto mt-10' />
                <Button text='Kirim OTP' width='w-3/4 md:w-1/4 mx-auto my-10 hover:opacity-80' />
            </div>
            <div className="copyright w-3/4 mx-auto">
                <p className='text-[#016b3f] text-sm md:text-lg mt-16 text-center font-semibold'>Copyright © 2023 Pengembang Web. All Rights Reserved</p>
            </div>
        </div>
    </div>
  )
}

export default ForgotPassword