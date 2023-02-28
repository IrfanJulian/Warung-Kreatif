import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import Swal from 'sweetalert2'
import Button from '../../components/Button'
import Input from '../../components/Input'
import Loading from '../../components/Loading'
import Navbar from '../../components/Navbar'

const Otp = () => {

  const {email} = useParams()
  const navigate = useNavigate()
  const [loading, setLoading] = useState(false)
  const [otp, setOTP] = useState('')
  const [dataOtp, setDataOtp] = useState('')

  useEffect(()=>{
    const getOTP = async() => {
      const res = await axios({
        method: 'GET',
        url: `${process.env.REACT_APP_URL}user/verif/${email}`
      })
      setDataOtp(res.data.data[0].otp)
    }
    getOTP()
  }, [email])

  const handleVerify = () => {
    setLoading(true)
    if(otp === dataOtp){
      setTimeout(() => {
        Swal.fire({
          icon: 'success',
          title: 'Selamat akun anda sudah di verifikasi',
          text: 'Silahkan lanjutkan untuk login'
        })
        setLoading(false)
      navigate('/login')
      }, 1000);
    }else{
      setTimeout(() => {
        Swal.fire({
          icon: 'error',
          title: 'Periksa kembali OTP',
          text: 'Silahkan cek kembali OTP yang anda masukan'
        })
      setLoading(false)
      }, 1000);
    }
  }

  return (
    <div className='bg-gray-100 pb-10 h-screen w-screen'>
        <Navbar />
        <div className="container mx-auto pt-10 md:pt-32 grid">
            <div className="wrapper w-10/12 md:w-1/2 py-10 mx-auto p-5 bg-white rounded-xl mt-14 shadow-xl my-auto">
                <p className='text-2xl md:text-3xl text-[#016b3f] font-semibold underline text-center'>Validasi OTP</p>
                <p className='text-md md:text-xl text-[#016b3f] font-medium text-center my-5'>Masukan kode OTP yang telah di kirimkan kepada email anda.</p>
                <Input className='outline-none py-2 px-4 md:text-lg border-2 rounded-md w-full text-center text-xl' name='otp' value={otp} onChange={(e)=>setOTP(e.target.value)} placeholder='Masukan kode OTP' font='text-[#016b3f] text-sm md:text-lg text-[#016b3f]' tittle='Kode OTP' width='w-11/12 mx-auto mt-10' />
                <Button onClick={handleVerify} text='Verifikasi OTP' width='w-3/4 md:w-1/4 mx-auto my-10 hover:opacity-80' />
            </div>
            <div className="copyright w-3/4 mx-auto">
                <p className='text-[#016b3f] text-sm md:text-lg mt-16 text-center font-semibold'>Copyright © 2023 Pengembang Web. All Rights Reserved</p>
            </div>
        </div>
        {loading ?
          <Loading />
        :
          null
        }
    </div>
  )
}

export default Otp