import React from 'react'
import Navbar from '../../components/Navbar'
import express from '../../assets/express.png'
import graphics from '../../assets/graphics.png'
import guarantee from '../../assets/gguarantee.png'
import content from '../../assets/content marketing.jpg'
import internet from '../../assets/internet marketing.jpg'
import social from '../../assets/social media marketing.jpg'
import Footer from '../../components/Footer'
import ButtonWhatsapp from '../../components/ButtonWhatsapp'
import { Link, useNavigate } from 'react-router-dom'
import Promo from '../../components/Promo'

const LandingPage = () => {

  const token = localStorage.getItem('token')
  const navigate = useNavigate()

  return (
    <div className=''>
      <Promo />
      <div className="px-9 text-xs container md:mx-auto my-5 md:my-20">
          { token ?
          <div className='flex'>
            <button onClick={()=>navigate('https://wa.link/6y0gga')} className='flex ml-auto mr-4 md:mr-20 hover:scale-125 hover:font-bold hover:text-emerald-800 transition-all duration-700'>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 md:w-10 my-auto mr-1">
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
              </svg>
              <p className='text-lg md:text-xl my-auto'>Konsultasi</p>
            </button>
            <button onClick={()=>navigate('/list-product')} className='flex mr-auto ml-4 md:ml-20 hover:scale-125 hover:font-bold hover:text-emerald-800 transition-all duration-700'>
              <p className='text-lg md:text-xl my-auto'>Daftar Paket</p>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 md:w-10 my-auto ml-1 md:ml-3">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 12h16.5m-16.5 3.75h16.5M3.75 19.5h16.5M5.625 4.5h12.75a1.875 1.875 0 010 3.75H5.625a1.875 1.875 0 010-3.75z" />
              </svg>
            </button>
          </div>
          :
          <button className='flex mx-auto hover:scale-125 hover:font-bold hover:text-emerald-800 transition-all duration-700'>
            <Link to={'https://wa.link/6y0gga'} className='flex'>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 md:w-10 my-auto mr-1 md:mr-3">
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
              </svg>
              <p className='text-lg md:text-xl my-auto'>Konsultasi</p>
            </Link>
          </button>
          }
      </div>
      <div className="wrapper container px-10 md:px-0 mx-auto">
        <p className='text-md md:text-3xl mb-10'>Kenapa harus memilih kami ?</p>
        <div className="space-y-10 md:space-y-0 w-10/12 md:w-full mx-auto md:mx-0 md:grid md:grid-cols-3 gap-20 mt-5 mb-20">
          <div className="card transition-all duration-300 hover:scale-110 hover:bg-slate-100">
            <div className='p-3 h-full border-2 w-full rounded-lg shadow-xl'>
              <div className='w-1/4 mx-auto'>
                <img className='' src={content} alt="" />
              </div>
              <p className='text-sm md:text-md text-center font-semibold'>Mobile revonsipe</p>
              <p className='my-3 text-xs md:text-sm text-center'>Tampilan website responsif di berbagai perangkat, baik desktop, mobile, dan tablet.</p>
            </div>
          </div>
          <div className="card transition-all duration-300 hover:scale-110 hover:bg-slate-100">
            <div className='p-3 h-full border-2 w-full rounded-lg shadow-xl'>
              <div className='w-1/4 mx-auto'>
                <img className='w-full' src={internet} alt="" />
              </div>
              <p className='text-sm md:text-lg text-center font-semibold'>Profesional</p>
              <p className='my-3 text-xs md:text-sm text-center'>Tim berpengalaman yang siap bekerja untuk memberi hasil yang terbaik.
              </p>
            </div>
          </div>
          <div className="card transition-all duration-300 hover:scale-110 hover:bg-slate-100">
            <div className='p-3 border-2 w-full h-full rounded-lg shadow-xl'>
              <div className='w-1/4 mx-auto'>
                <img className='w-full' src={social} alt="" />
              </div>
              <p className='text-sm md:text-lg text-center font-semibold'>Tim Support Handal</p>
              <p className='my-3 text-xs md:text-sm text-center'>Tim JasaWeb selalu siap membantu setiap kendala yang di alami customer melalui e-mail, telp dan chat.</p>
            </div>
          </div>
        </div>
      </div>
      <div className="wrapper container px-10 md:px-0 mx-auto">
        <p className='text-md md:text-3xl mb-10'>Kenapa harus memilih kami ?</p>
        <div className="space-y-10 md:space-y-0 mx-auto md:mx-0 w-10/12 md:w-full md:grid md:grid-cols-3 gap-20 mt-5 mb-20">
          <div className="card transition-all duration-300 hover:scale-110 hover:bg-slate-100">
            <div className='p-3 h-full border-2 w-full rounded-lg shadow-xl'>
              <div className='w-1/4 mx-auto'>
                <img className='w-' src={express} alt="" />
              </div>
              <p className='text-sm md:text-lg text-center font-semibold'>WEBSITE EXPRES</p>
              <p className='my-3 text-xs md:text-sm text-center'>Pembuatan website dibuat dengan sekejap 
                Dengan memastikan proses yang sangat cepat
              </p>
            </div>
          </div>
          <div className="card transition-all duration-300 hover:scale-110 hover:bg-slate-100">
            <div className='p-3 h-full border-2 w-full rounded-lg shadow-xl'>
              <div className='w-1/4 mx-auto'>
                <img className='w-full' src={graphics} alt="" />
              </div>
              <p className='text-sm md:text-lg text-center font-semibold'>DESAIN GRAFIS MANTUL</p>
              <p className='my-3 text-xs md:text-sm text-center'>Situs dengan Harga murah dengan kualitas terbaik Dengan design terbaik untuk pasar online.
              </p>
            </div>
          </div>
          <div className="card transition-all duration-300 hover:scale-110 hover:bg-slate-100">
            <div className='p-3 border-2 w-full rounded-lg shadow-xl'>
              <div className='w-1/4 mx-auto'>
                <img className='w-full' src={guarantee} alt="" />
              </div>
              <p className='text-sm md:text-lg text-center font-semibold'>GARANSI KERUSAKAN</p>
              <p className='my-3 text-xs md:text-sm text-center'>Tidak perlu takut lagi untuk kerusakan pada web Disini kami memberikan garansi perbaikan Gratis jika ada kerusakan.
              </p>
            </div>
          </div>
        </div>
      </div>
      <ButtonWhatsapp />
      <Footer />
      <div className="fixed top-0">
        <Navbar />
      </div>
    </div>
  )
}

export default LandingPage