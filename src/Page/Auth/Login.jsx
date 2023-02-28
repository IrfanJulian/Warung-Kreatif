import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Swal from 'sweetalert2'
import Button from '../../components/Button'
import Input from '../../components/Input'
import Loading from '../../components/Loading'
import Navbar from '../../components/Navbar'
import Password from '../../components/Password'

const Login = () => {

    const [show, setShow] = useState(false)
    const [loading, setLoading] = useState(false)
    const navigate = useNavigate()
    const [form, setForm] = useState({
        email: '',
        password: ''
    })

    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        })
    }

    const handleLogin = async(e) => {
        setLoading(true)
        e.preventDefault()
        try {
            const res = await axios({
                method: 'POST',
                url: `${process.env.REACT_APP_URL}user/login`,
                data: form
            })
            console.log(res.data.data);
            localStorage.setItem('token', res.data.data.token)
            localStorage.setItem('id', res.data.data.id)
            localStorage.setItem('name', res.data.data.name)
            Swal.fire({
                icon: 'success',
                title: 'Login sukses'
              })
            navigate('/')
            setLoading(false)
        } catch (error) {
            Swal.fire({
                icon: 'error',
                title: 'Login gagal',
                text: 'Silahkan cek kembali email dan password anda'
              })
            setLoading(false)
        }
    }

  return (
    <div className='bg-gray-100 pb-10 h-screen'>
        <Navbar />
        <div className="container mx-auto grid pt-10 md:pt-32">
            <div className="wrapper w-10/12 md:w-1/2 py-10 mx-auto p-5 bg-white rounded-xl mt-14 shadow-xl my-auto">
                <p className='text-2xl md:text-3xl text-[#016b3f] font-semibold underline text-center'>Masuk</p>
                <p className='text-md md:text-xl text-[#016b3f] font-medium text-center my-5'>Silahkan masuk menggunakan akun anda</p>
                <Input name='email' value={form.email} onChange={handleChange} placeholder='Masukan email' font='text-[#016b3f] text-sm md:text-lg text-[#016b3f]' tittle='Username atau Email' width='w-11/12 mx-auto mt-10' />
                <Password name='password' value={form.password} onChange={handleChange} placeholder='Masukan Password' tittle='password' width='w-11/12 mx-auto my-5' show={show} onClick={()=>show === true ? setShow(false) : setShow(true)} />
                <Button onClick={()=>navigate('/forgot-password')} text='Lupa Password?' width='w-max text-sm md:text-lg mx-auto my-5 hover:opacity-60' className='text-[#016b3f]' />
                <Button onClick={handleLogin} text='Masuk' width='w-3/4 md:w-1/4 mx-auto my-10 hover:opacity-80' />
                <div className="flex w-max mx-auto text-sm md:text-lg">
                    <p className='text-[#016b3f]'>Belum punya akun?</p>
                    <button  onClick={()=>navigate('/register')} className='text-[#016b3f] ml-2 font-semibold hover:opacity-60'>Klik untuk daftar</button>
                </div>
            </div>
            <div className="copyright w-3/4 mx-auto">
                <p className='text-[#016b3f] text-sm md:text-lg mt-16 text-center font-semibold'>Copyright © 2023 Warung Kreatif. All Rights Reserved</p>
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

export default Login