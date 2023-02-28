import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Swal from 'sweetalert2'
import Button from '../../components/Button'
import Input from '../../components/Input'
import Loading from '../../components/Loading'
import Navbar from '../../components/Navbar'
import Password from '../../components/Password'

const Register = () => {

  const navigate = useNavigate()
  const [loading, setLoading] = useState(false)
  const [show, setShow] = useState(false)
  const [password2, setPassword2] = useState('')
  const [form, setForm] = useState({
    name: '',
    email: '',
    password: '',
    phone: ''
  })

  const handleChange = (e) => {
    setForm({
        ...form,
        [e.target.name]: e.target.value
    })
  }

  const handleRegister = async(e) => {
    e.preventDefault()
    setLoading(true)
    if(form.password === password2){
        try {
            await axios({
                method: 'POST',
                url: `${process.env.REACT_APP_URL}user/register`,
                data: form
            })
            setLoading(false)
            Swal.fire({
                icon: 'success',
                title: 'Proses Daftar Sukses',
                text: 'Silahkan cek email anda untuk melihat kode otp'
              })
            navigate(`/otp/${form.email}`)
        } catch (error) {
            setLoading(false)
            Swal.fire({
                icon: 'error',
                title: 'Proses Daftar Gagal',
                text: 'Terjadi kesalahan'
              })
            }
        }else{
            setLoading(false)
            Swal.fire({
                icon: 'error',
                title: 'Password tidak sama',
                text: 'Masukan password dengan benar'
            })
    }
  }

  return (
    <div className='bg-gray-100 h-full pb-10'>
        {loading ?
            <Loading />  
        :
            null
        }
      <Navbar />
      <div className="container mx-auto grid pt-10 md:pt-14">
          <div className="wrapper w-10/12 md:w-1/2 py-10 mx-auto p-5 bg-white rounded-xl mt-14 shadow-xl my-auto">
              <p className='text-2xl md:text-3xl text-[#016b3f] font-semibold underline text-center'>Daftar</p>
              <p className='text-md md:text-xl text-[#016b3f] font-medium text-center my-5'>Masukan data anda untuk mendaftar</p>
              <Input name='name' value={form.name} onChange={handleChange} placeholder='Masukan nama lengkap' font='text-[#016b3f] text-sm md:text-lg' className='outline-none py-2 px-4 text-sm md:text-lg border-2 rounded-md w-full lowercase' tittle='Nama Lengkap' width='w-11/12 mx-auto mt-10' />
              <Input name='email' value={form.email} onChange={handleChange} placeholder='Masukan email' font='text-[#016b3f] text-sm md:text-lg' tittle='Email' className='outline-none py-2 px-4 text-sm md:text-lg border-2 rounded-md w-full lowercase' width='w-11/12 mx-auto mt-5' />
              <Input name='phone' value={form.phone} onChange={handleChange} placeholder='Masukan nomor telepon' font='text-[#016b3f] text-sm md:text-lg' className='outline-none py-2 px-4 text-sm md:text-lg border-2 rounded-md w-full lowercase' tittle='Nomor Telepon' width='w-11/12 mx-auto mt-5' />
              <Password name='password' value={form.password} onChange={handleChange} placeholder='Masukan password' width='w-11/12 mx-auto my-5' show={show} onClick={()=>show === true ? setShow(false) : setShow(true)} tittle='Password' />
              <Password name='password2' value={password2} onChange={(e)=>setPassword2(e.target.value)} placeholder='Masukan kembali password' width='w-11/12 mx-auto my-5' show={show} onClick={()=>show === true ? setShow(false) : setShow(true)} tittle='Konfirmasi Password' />
              <Button onClick={()=>navigate('/forgot-password')} text='Lupa Password?' width='w-max text-sm md:text-lg mx-auto my-5 hover:opacity-60' className='text-[#016b3f]' />
              <Button onClick={handleRegister} text='Daftar' width='w-3/4 md:w-1/4 mx-auto my-10 hover:opacity-80' />
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