import React from 'react'
import logo from '../assets/warung kreatif.jpg'
// import email from '../assets/email.jpg'
// import fb from '../assets/facebook.jpg'
// import instagram from '../assets/instagram.jpg'
// import linkedin from '../assets/linkedin.jpg'
// import wa from '../assets/whatsapp.jpg'
// import phone from '../assets/phone.jpg'
// import pin from '../assets/pin.jpg'
// import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <div className='bg-gradient-to-r from-emerald-400 to-[#016b3f] py-3 md:py-5'>
    {/* <div className='bg-gradient-to-r from-emerald-400 to-[#016b3f] py-10'> */}
        <div className="container grid w-3/4 md:flex md:w-max mx-auto">
            <img src={logo} alt="" className='w-[8.5rem] mb-3 mx-auto rounded-xl' />
            <p className='text-md md:text-lg text-white my-auto ml-5 text-center'>Copyright © 2023 Warung Kreatif. All Rights Reserved</p>
        </div>
    </div>
  )
}

export default Footer

/* <div className="block md:flex my-6">
<div className="w-full md:w-4/12 mt-10 font-medium">
    <p className='text-lg text-left text-white md:text-center'>Temukan kami di :</p>
    <div className="flex mt-2 w-max mx-0 md:mx-auto">
        <img src={instagram} className='w-10 rounded-full' alt="" />
        <p className='my-auto ml-2 text-white'>@webanakbangsa.id</p>
    </div>
    <div className="flex mt-2 w-max mx-0 md:mx-auto">
        <img src={fb} className='w-10 rounded-full' alt="" />
        <p className='my-auto ml-2 text-white'>webanakbangsa.id</p>
    </div>
    <div className="flex mt-2 w-max mx-0 md:mx-auto">
        <img src={linkedin} className='w-10 rounded-full' alt="" />
        <p className='my-auto ml-2 text-white'>webanakbangsa.id</p>
    </div>
</div>
<div className="w-full md:w-4/12 mt-10 font-medium">
    <p className='text-lg text-left text-white md:text-center'>Hubungi kami di :</p>
    <div className="flex mt-2 w-max mx-0 md:mx-auto">
        <img src={email} className='w-10 rounded-full' alt="" />
        <p className='my-auto ml-2 text-white'>anakbangsa@gmail.comm</p>
    </div>
    <div className="flex mt-2 w-max mx-0 md:mx-auto">
        <img src={phone} className='w-10 rounded-full' alt="" />
        <p className='my-auto ml-2 text-white'>+62 896-9036-1996</p>
    </div>
    <div className="mt-2 w-max mx-0 md:mx-auto hover:opacity-80">
        <Link to={'https://wa.link/6y0gga'} className='flex'>
            <img src={wa} className='w-10 rounded-full' alt="" />
            <p className='my-auto ml-2 text-white'>+62 896-9036-1996</p>
        </Link>
    </div>
</div>
<div className="w-full md:w-4/12 overflow- mt-10 font-medium">
    <p className='text-lg text-left text-white md:text-center'>Alamat kami :</p>
    <div className="flex mt-2 w-ful mx-0lmd: mx-auto">
        <img src={pin} className='w-10 rounded-full h-max' alt="" />
        <p className='my-auto ml-2 text-white'>Jl. Merdeka No.18-21, Babakan Ciamis, Kec. Sumur Bandung, Kota Bandung, Jawa Barat 40117</p>
    </div>
</div>
</div> */