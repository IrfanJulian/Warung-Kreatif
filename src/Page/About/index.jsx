import React from 'react'
import Footer from '../../components/Footer'
import Navbar from '../../components/Navbar'

const About = () => {
  return (
    <div>
        <Navbar />
        <div className="wrapper container mx-auto mb-10 pt-28 px-7 h-full">
          <div className="wrapper w-3/4 mx-auto">
            <p className='text-3xl font-bold text-center'>Berikut ini sekilas profil tim kami. Jasa pembuatan Website, yang berdiri di kota Bandung </p>
          </div>
          <div className="wrapper my-20 w-3/4 mx-auto">
            <p className='text-xl font-medium text-center'>Warung Kreatif</p>
            <p className='mt-5 text-center'>Kami adalah tim atau jasa website profesional yang sudah banyak dipercaya oleh berbagai macam jenis usaha, untuk membantu memasarkan produk dengan berbasis web, Jaminan kedisiplinan, kualitas, jujur, adalah target utama kami.</p>
          </div>
          <div className="wrapper w-3/4 mx-auto text-center">
            <ul className='text-xl font-medium mb-5'>Layanan kami</ul>
            <li>Jasa Pembuatan Berbagai Jenis Website</li>
            <li>Landing Page</li>
          </div>
          <div className="wrapper my-20 w-3/4 mx-auto">
            <p className='text-xl font-medium text-center'>VISI</p>
            <p className='mt-5 text-center'>Kami memiliki tujuan dengan adanya Warung Kreatif ini tiada lain untuk memajukan usaha yang sedang berkembang guna meningkatkan penjualan dengan cara mudah dan efektif. Yang tentunya akan menambah penghasilan lebih untuk pemilik usaha tersebut serta diharapkan menjadi perusahaan besar yang mampu mempekerjakan banyak orang.</p>
          </div>
          <div className="wrapper w-3/4 mx-auto">
            <p className='text-xl font-medium text-center'>KELEBIHAN</p>
            <p className='mt-5 text-center'>Warung kreatif jelas berbeda dengan Jasa Pembuatan Website lain, kami memberikan harga yang sangat murah di sesuaikan dengan Budget Anda. Hal itu kami terapkan untuk menjawab keluhan customer yang ingin memiliki Website premium dan Profesional. dengan harga yang terjangkau. Dengan memberikan harga murah, sisa biaya yang dikeluarkan dapat digunakan mengembangkan bisnis yang dijalani.</p>
          </div>
        </div>
        <div className="wrapper mt-auto">
          <Footer />
        </div>
    </div>
  )
}

export default About