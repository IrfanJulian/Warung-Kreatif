import React, { useEffect, useState } from 'react'

const Promo = () => {

    const [promo, setPromo] = useState(1)

    const handlePrev = () => {
        if(promo <= 1){
            setPromo(5)
        }else{
            setPromo((current)=>current-1)
        }
    }

    const handleNext = () => {
        if(promo >= 5){
            setPromo(1)
        }else{
            setPromo((current)=>current+1)
        }
    }

    useEffect(()=>{
        setTimeout(() => {
            handleNext()
        }, 8000);
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [promo])

  return (
    <div className='pt-20 pb-14 flex bg-gradient-to-r from-emerald-500 to-[#016b3f] rounded-2xl'>
        <button onClick={handlePrev} className='hover:scale-125 md:hover:bg-emerald-500 my-auto rounded-full text-black hover:text-white transition-all duration-500 w-max h-max ml-5'>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 md:w-10 md:h-10 mr-3 md:ml-0">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
            </svg>
        </button>
        <div className="wrapper left-0 md:-left-2 w-3/4 md:w-1/2 mx-auto h-[25rem] bg-gradient-to-r from-emerald-100 to-emerald-200 transition-all duration-1000 ease-linear relative p-0 md:p-10 mt-10 rounded-xl">

                <div className={`transition-all absolute duration-1000 top-16 md:top-12 md:left-14 px-5 py-10 rounded-xl hover:scale-110 w-full md:w-11/12 mx-auto ease-linear ${promo === 1 ? 'opacity-100' : 'opacity-0'}`}>
                    <p className='md:text-3xl text-center font-semibold'>Promo Diskon 50%</p>
                    <p className='md:text-xl text-center font-medium'>Promo ini berlaku sampai dengan 30 Maret 2023!</p>
                    <p className='md:text-xl text-center text-sm mt-3 md:mt-8'>Segera dapatkan promo dari Warung Kreatif agar kamu bisa membuat Website dengan harga murah namun dengan kualitas yang tentu bukan murahan.</p>
                </div>
                <div className={`transition-all absolute duration-1000 top-14 md:top-12 md:left-14 px-5 py-10 rounded-xl hover:scale-110 w-full md:w-11/12 mx-auto ease-linear ${promo === 2 ? 'opacity-100' : 'opacity-0'}`}>
                    <p className='md:text-3xl text-center font-semibold italic'>Promo Paket Simple</p>
                    <p className='md:text-xl text-center font-medium'>Paket simple 1 halaman landing page</p>
                    <p className='md:text-xl text-center text-sm mt-3 md:mt-8'>Dengan harga <span className='font-bold line-through'>Rp.900,000</span> <span className='font-bold'>Rp.500,000</span> kamu udah bisa bikin landing page untuk biodata diri atau lain nya sesuai keinginan kamu dengan kualitas landing page yang tentu nya ga murahan.</p>
                </div>
                <div className={`transition-all absolute duration-1000 -top-4 md:top-8 md:left-14 px-5 py-10 rounded-xl hover:scale-110 w-full md:w-11/12 mx-auto ease-linear ${promo === 3 ? 'opacity-100' : 'opacity-0'}`}>
                    <p className='md:text-3xl text-center font-semibold italic'>Promo Paket Pemersatu Bangsa</p>
                    <p className='md:text-xl text-center font-medium'>Paket Pemersatu bangsa atau Web Company</p>
                    <p className='md:text-xl text-center text-sm mt-3 md:mt-8'>Dengan harga <span className='font-bold line-through'>Rp.4,xxx,xxx</span> <span className='font-bold'>Rp.3,xxx,xxx</span> kamu udah bisa bikin Web untuk perusahaan kamu yang tentu nya akan membuat perusahaan kamu jadi lebih formal dan sangat berperan baik buat usaha kamu di masa yang akan datang. Untuk tampilan dan alur bisa di konsultasi kan dengan tim kami. Bikin web di kami kualitas nya tentu ga murahan.</p>
                </div>
                <div className={`transition-all absolute duration-1000 -top-5 md:top-8 md:left-14 px-5 py-10 rounded-xl hover:scale-110 w-full md:w-11/12 mx-auto ease-linear ${promo === 4 ? 'opacity-100' : 'opacity-0'}`}>
                    <p className='md:text-3xl text-center font-semibold'>Promo Paket E-commerce</p>
                    <p className='md:text-xl text-center font-medium'>Paket E-commerce atau toko online lagi ada promo nih!</p>
                    <p className='md:text-xl text-center text-sm mt-3 md:mt-8'>Dengan harga <span className='font-bold line-through'>Rp.8,xxx,xxx</span> <span className='font-bold'>Rp.5,xxx,xxx</span> kamu udah bisa membuat Web E-commerce yang dapat merambah usaha kamu ke dunia maya karena dan tentunya akan menambah jangkauan perdagangan kamu jadi lebih luas. Jadi tunggu apa lagi jangan buang waktu dan ninggalin promo yang ada di warung kreatif.</p>
                </div>
                <div className={`transition-all absolute duration-1000 top-8 md:top-12 md:left-14 px-5 py-10 rounded-xl hover:scale-110 w-full md:w-11/12 mx-auto ease-linear ${promo === 5 ? 'opacity-100' : 'opacity-0'}`}>
                    <p className='md:text-3xl text-center font-semibold'>Promo Paket Personal</p>
                    <p className='md:text-xl text-center font-medium'>Paket Personal atau custom semau kamu lagi ada promo nih!</p>
                    <p className='md:text-xl text-center text-sm mt-3 md:mt-8'>Dengan harga <span className='font-bold line-through'>Rp.17,xxx,xxx</span> <span className='font-bold'>Rp.15,xxx,xxx</span> kamu udah bisa membuat Web Custom yang kamu inginkan. Bikin Web sama kami yakin deh kamu ga akan nyesel. Harga murah tapi kualitas nya ga murahan.</p>
                </div>
        </div>
        <button onClick={handleNext} className='hover:scale-125 md:hover:bg-[#016b3f] my-auto rounded-full text-black hover:text-white transition-all duration-500 w-max h-max mr-5'>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 md:w-10 md:h-10 ml-3 md:ml-0">
                <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
            </svg>
        </button>
    </div>
  )
}

export default Promo