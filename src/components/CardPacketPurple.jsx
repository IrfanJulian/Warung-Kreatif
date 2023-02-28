import React from 'react'
import image from '../assets/mandiri black.png'

const CardPacketPurple = () => {
  return (
    <div className="card h-full w-3/4 md:w-full mx-auto md:mx-0 border-4 shadow-xl py-5">
        <p className='text-center text-md md:text-3xl font-semibold'>PAKET 4</p>
        <img src={image} alt="" className='w-1/2 mx-auto' />
        <p className='text-center text-md md:text-xl font-semibold'>WEB MANDIRI</p>
        <p className='text-center text-md md:text-lg'>Biodata Web Personal</p>
        <div className="wrapper px-4">
            <p className='mt-5 text-lg'>Harga mulai dari :</p>
            <div className="wrapper -ml-4 my-1 py-2 text-white w-11/12 bg-gradient-to-r from-fuchsia-300 to-rose-600 rounded-tr-xl rounded-br-xl">
                <p className='text-xl font-medium italic text-center'>Rp. x,xxx,xxx</p>
            </div>
            <ol className='mt-5 text-lg'>Fitur :</ol>
            <li>3 Halaman.</li>
            <li>1GB Private Hosting.</li>
            <li>Email Bisnis.</li>
            <li>Desain requst sendiri / desain kami.</li>
            <li>Sertifikat SSL.</li>
            <li>Domain (.id / .com).</li>
            <li>Mobile Friendly / Responsive design.</li>
            <li>Full akses admin.</li>
            <li>Video tutorial.</li>
            <li>Gratis konsultasi.</li>
            <li>Gratis maintenance.</li>
            <li>Template Premium.</li>
        </div>
        <div className="w-full grid">
            <button className='hover:scale-125 transition-all duration-300 bg-gradient-to-r from-fuchsia-300 to-rose-600 text-white rounded-full py-2 px-5 mt-6 mx-auto'>Konsultasi</button>
        </div>
    </div>
  )
}

export default CardPacketPurple