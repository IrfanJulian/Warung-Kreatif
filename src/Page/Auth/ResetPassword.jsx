import React, { useState } from 'react'
import Button from '../../components/Button'
import Navbar from '../../components/Navbar'
import Password from '../../components/Password'

const ResetPassword = () => {

    const [show, setShow] = useState(false)

  return (
    <div className='bg-gray-100 h-screen pb-10 w-full'>
      <Navbar />
      <div className="container mx-auto grid">
          <div className="wrapper w-10/12 md:w-1/2 py-10 mx-auto p-5 bg-white rounded-xl mt-14 shadow-xl my-auto">
              <p className='text-2xl md:text-3xl text-[#016b3f] font-semibold underline text-center'>Reset Password</p>
              <p className='text-md md:text-xl text-[#016b3f] font-medium text-center my-5'>Reset password anda</p>
              <Password placeholder='Masukan password' width='w-11/12 mx-auto my-5' show={show} onClick={()=>show === true ? setShow(false) : setShow(true)} tittle='Password' />
              <Password placeholder='Masukan kembali password' width='w-11/12 mx-auto my-5' show={show} onClick={()=>show === true ? setShow(false) : setShow(true)} tittle='Konfirmasi Password' />
              <Button text='Reset Password' width='w-3/4 md:w-1/4 mx-auto my-10 hover:opacity-80' />
          </div>
          <div className="copyright w-3/4 mx-auto">
              <p className='text-[#016b3f] text-sm md:text-lg mt-16 text-center font-semibold'>Copyright © 2023 Pengembang Web. All Rights Reserved</p>
          </div>
      </div>
  </div>
  )
}

export default ResetPassword