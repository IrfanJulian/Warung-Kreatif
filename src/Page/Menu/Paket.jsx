import React from 'react'
import Footer from '../../components/Footer'
import Navbar from '../../components/Navbar'
import image1 from '../../assets/basic.png'
import image2 from '../../assets/pemersatu bangsa.png'
import image3 from '../../assets/ruko.png'
import image4 from '../../assets/mandiri.png'
import ButtonWhatsapp from '../../components/ButtonWhatsapp'

const Paket = () => {
  return (
    <div>
        <div className="container mx-auto pt-36 md:pt-44 pb-10">
            <div className="md:grid md:grid-cols-4 md:gap-10 space-y-10 md:space-y-0">
                <div className="card h-full w-3/4 md:w-full mx-auto md:mx-0 border-4 shadow-xl py-5">
                    <p className='text-center text-md md:text-3xl font-semibold'>PAKET 1</p>
                    <img src={image1} alt="" className='w-1/2 mx-auto' />
                    <p className='text-center text-md md:text-xl font-semibold'>SIMPLE LANDING PAGE</p>
                    <p className='text-center text-md md:text-lg'>Landing Page saja</p>
                    <div className="wrapper px-4">
                        <p className='mt-5 text-lg'>Harga mulai dari :</p>
                        <div className="wrapper -ml-4 my-1 py-2 text-white w-11/12 bg-gradient-to-r from-cyan-600 to-green-700 rounded-tr-xl rounded-br-xl">
                            <p className='text-xl font-medium italic text-center'>Rp. 700,000</p>
                        </div>
                        <ol className='mt-5 text-lg'>Fitur :</ol>
                        <li>1 halaman.</li>
                        <li>Desain requst sendiri / desain kami.</li>
                        <li>Domain (.id / .com).</li>
                        <li>Mobile Friendly / Responsive design.</li>
                        <li>Full akses admin.</li>
                        <li>Gratis konsultasi.</li>
                    </div>
                    <div className="w-full grid">
                        <button className='hover:scale-110 transition-all duration-300 bg-gradient-to-r from-cyan-600 to-green-700 text-white rounded-full py-2 px-5 mt-6 mx-auto'>Konsultasi</button>
                    </div>
                </div>

                <div className="card h-full w-3/4 md:w-full mx-auto md:mx-0 border-4 shadow-xl py-5">
                    <p className='text-center text-md md:text-3xl font-semibold'>PAKET 2</p>
                    <img src={image2} alt="" className='w-1/2 mx-auto' />
                    <p className='text-center text-md md:text-xl font-semibold'>PEMERSATU BANGSA</p>
                    <p className='text-center text-md md:text-lg'>Web Company</p>
                    <div className="wrapper px-4">
                        <p className='mt-5 text-lg'>Harga mulai dari :</p>
                        <div className="wrapper -ml-4 my-1 py-2 text-white w-11/12 bg-gradient-to-r from-yellow-400 to-red-700 rounded-tr-xl rounded-br-xl">
                            <p className='text-xl font-medium italic text-center'>Rp. x,xxx,xxx</p>
                        </div>
                        <ol className='mt-5 text-lg'>Fitur :</ol>
                        <li>3 Halaman.</li>
                        <li>1GB Private Hosting.</li>
                        <li>Email Bisnis.</li>
                        <li>Desain requst sendiri / desain kami.</li>
                        <li>Domain (.id / .com).</li>
                        <li>Mobile Friendly / Responsive design.</li>
                        <li>Full akses admin.</li>
                        <li>Gratis konsultasi.</li>
                        <li>Template Premium.</li>
                    </div>
                    <div className="w-full grid">
                        <button className='hover:scale-110 transition-all duration-300 bg-gradient-to-r from-yellow-400 to-red-700 text-white rounded-full py-2 px-5 mt-6 mx-auto'>Konsultasi</button>
                    </div>
                </div>

                <div className="card h-full w-3/4 md:w-full mx-auto md:mx-0 border-4 shadow-xl py-5">
                    <p className='text-center text-md md:text-3xl font-semibold'>PAKET 3</p>
                    <img src={image3} alt="" className='w-1/2 mx-auto' />
                    <p className='text-center text-md md:text-xl font-semibold'>RUKO KEKINIAN</p>
                    <p className='text-center text-md md:text-lg'>Web E-commerce</p>
                    <div className="wrapper px-4">
                        <p className='mt-5 text-lg'>Harga mulai dari :</p>
                        <div className="wrapper -ml-4 my-1 py-2 text-white w-11/12 bg-gradient-to-r from-cyan-300 to-lime-600 rounded-tr-xl rounded-br-xl">
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
                        <li>Gratis konsultasi.</li>
                        <li>Template Premium.</li>
                    </div>
                    <div className="w-full grid">
                        <button className='hover:scale-110 transition-all duration-300 bg-gradient-to-r from-cyan-200 to-lime-500 text-white rounded-full py-2 px-5 mt-6 mx-auto'>Konsultasi</button>
                    </div>
                </div>

                <div className="card h-full w-3/4 md:w-full mx-auto md:mx-0 border-4 shadow-xl py-5">
                    <p className='text-center text-md md:text-3xl font-semibold'>PAKET 4</p>
                    <img src={image4} alt="" className='w-1/2 mx-auto' />
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
                        <button className='hover:scale-110 transition-all duration-300 bg-gradient-to-r from-fuchsia-300 to-rose-600 text-white rounded-full py-2 px-5 mt-6 mx-auto'>Konsultasi</button>
                    </div>
                </div>

            </div>
        </div>
        <div className="fixed top-0">
            <Navbar />
        </div>
        <ButtonWhatsapp />
        <Footer />
    </div>
  )
}

export default Paket