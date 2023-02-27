import React, { useEffect, useState } from 'react'
import carousel from '../assets/carousel1.jpg'
import carousel2 from '../assets/carousel2.jpg'
import carousel3 from '../assets/carousel3.jpg'
import carousel4 from '../assets/carousel4.jpg'
import carousel5 from '../assets/carousel5.jpg'

const Carousel = () => {

  const [show, setShow] = useState(0)

  const nextSlide = () => {
    if(show >= 4){
      setShow(0)
    }else{
      setShow((current)=>current+1)
    }
  }

  const prevSlide = () => {
    if(show <= 0){
      setShow(4)
    }else{
      setShow((current)=>current-1)
    }
  }

  useEffect(()=>{
    setTimeout(() => {
      nextSlide()
    }, 13000);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [show])

  return (
    <div className='wrapper container mx-auto pt-[130px] md:pt-[140px]'>
      <div className="flex container mx-auto border-spacing-y-5">
        <button onClick={prevSlide} className='p-1 md:p-3 hover:scale-125 tansition-all duration-300 rounded-full h-max my-auto mx-5 shadow-xl hover:opacity-75 hover:bg-slate-200'>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="h-5 md:w-8 md:h-8">
            <path strokeLinecap="round" strokeLinejoin="round" d="M18.75 19.5l-7.5-7.5 7.5-7.5m-6 15L5.25 12l7.5-7.5" />
          </svg>
        </button>
        <div className="relative h-full w-screen rounded-xl overflow-hidden">
            <img src={carousel} alt="carousel" className='w-full h-11/12 duration-1000 transition-all ease-linear opacity-0' />
            <img src={carousel} alt="carousel" className={`w-full absolute top-0 duration-1000 transition-all ease-linear ${show === 0 ? 'opacity-100' : 'opacity-0'}`} />
            <img src={carousel2} alt="carousel" className={`w-full absolute top-0 duration-1000 transition-all ease-linear ${show === 1 ? 'opacity-100' : 'opacity-0'}`} />
            <img src={carousel3} alt="carousel" className={`w-full absolute top-0 duration-1000 transition-all ease-linear ${show === 2 ? 'opacity-100' : 'opacity-0'}`} />
            <img src={carousel4} alt="carousel" className={`w-full absolute top-0 duration-1000 transition-all ease-linear ${show === 3 ? 'opacity-100' : 'opacity-0'}`} />
            <img src={carousel5} alt="carousel" className={`w-full absolute top-0 duration-1000 transition-all ease-linear ${show === 4 ? 'opacity-100' : 'opacity-0'}`} />
        </div>
        <button onClick={nextSlide} className='p-1 md:p-3 hover:scale-125 tansition-all duration-300 rounded-full h-max my-auto mx-5 shadow-xl hover:opacity-75 hover:bg-slate-200'>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="h-5 md:w-8 md:h-8">
            <path strokeLinecap="round" strokeLinejoin="round" d="M11.25 4.5l7.5 7.5-7.5 7.5m-6-15l7.5 7.5-7.5 7.5" />
          </svg>
        </button>
      </div>
    </div>
  )
}

export default Carousel