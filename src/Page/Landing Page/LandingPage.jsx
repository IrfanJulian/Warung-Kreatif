import React from 'react'
import Button from '../../components/Button'
import Navbar from '../../components/Navbar'
import express from '../../assets/express.png'
import graphics from '../../assets/graphics.png'
import guarantee from '../../assets/gguarantee.png'
import content from '../../assets/content marketing.jpg'
import internet from '../../assets/internet marketing.jpg'
import social from '../../assets/social media marketing.jpg'
import Footer from '../../components/Footer'
import Carousel from '../../components/Carousel'
import ButtonWhatsapp from '../../components/ButtonWhatsapp'
import { useNavigate } from 'react-router-dom'

const LandingPage = () => {

  const navigate = useNavigate()

  return (
    <div className=''>
      <Carousel />
      <div className="space-y-2 md:spacing-y-0 md:flex px-9 text-xs container md:mx-auto my-5 md:my-20">
          <Button text='Order' width='w-5/12 md:w-2/12 md:hover:mr-10 mt-2 mx-auto md:mx-0 md:ml-auto transition-all duration-500 hover:opacity-70 hover:scale-110' />
          <Button onClick={()=>navigate('https://wa.link/6y0gga')} text='Konsultasi' width='w-5/12 md:hover:mx-10 md:w-2/12 mx-auto md:mx-5 transition-all duration-500 hover:opacity-70 hover:scale-110' />
          <Button onClick={()=>navigate('list-product')} text='List harga' width='w-5/12 md:w-2/12 md:hover:ml-10 mx-auto md:mx-0 md:mr-auto transition-all duration-500 hover:opacity-70 hover:scale-110' />
      </div>
      <div className="wrapper container px-10 md:px-0 mx-auto">
        <p className='text-md md:text-3xl mb-10'>Apa saja yang bisa kami kerjakan ?</p>
        <div className="space-y-10 md:space-y-0 w-10/12 md:w-full mx-auto md:mx-0 md:grid md:grid-cols-3 gap-20 mt-5 mb-20">
          <div className="card transition-all duration-300 hover:scale-110 hover:bg-slate-100">
            <div className='p-3 h-full border-2 w-full rounded-lg shadow-xl'>
              <div className='w-1/4 mx-auto'>
                <img className='' src={content} alt="" />
              </div>
              <p className='text-sm md:text-md text-center font-semibold'>CONTENT MARKETING</p>
              <p className='my-3 text-xs md:text-sm text-center'>Anda bingung anda habis ide untuk membuat conten-conten untuk promosi anda di sosmed. Serahkan pada kami anda tidak pusing prderan berlimpah.
              </p>
            </div>
          </div>
          <div className="card transition-all duration-300 hover:scale-110 hover:bg-slate-100">
            <div className='p-3 h-full border-2 w-full rounded-lg shadow-xl'>
              <div className='w-1/4 mx-auto'>
                <img className='w-full' src={internet} alt="" />
              </div>
              <p className='text-sm md:text-lg text-center font-semibold'>INTERNET MARKETING</p>
              <p className='my-3 text-xs md:text-sm text-center'>Apa salahnya sih mengikuti realita pasar sekarang dengan mengembangkan semua usaha anda dan profesi anda di duni internet ini kami kerjakan kebutuhan internet marketing anda terima beres.
              </p>
            </div>
          </div>
          <div className="card transition-all duration-300 hover:scale-110 hover:bg-slate-100">
            <div className='p-3 border-2 w-full h-full rounded-lg shadow-xl'>
              <div className='w-1/4 mx-auto'>
                <img className='w-full' src={social} alt="" />
              </div>
              <p className='text-sm md:text-lg text-center font-semibold'>SOCIAL MARKETING</p>
              <p className='my-3 text-xs md:text-sm text-center'>Buat para umkm perlu banget dih untuk kebanjiaran orderan soalnya kami menyediakan sosial maeketing untuk promo market di sosial media.
              </p>
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