import React from 'react'
import loading from '../assets/loading atom.png'

const Loading = () => {
  return (
    <div className='fixed w-screen h-screen'>
        <div className='fixed top-0 w-screen h-screen bg-black opacity-20'></div>
        <div className="fixed top-1/4 w-screen">
            <div className="card w-3/4 md:w-1/4 mx-auto bg-white h-[16rem] md:[18rem] rounded-xl pt-12 md:pt-5">
                <img src={loading} alt="load" className='h-1/2 md:h-3/4 mx-auto animate-spin' />
                <p className='text-emerald-700 text-center text-xl md:text-2xl'>Loading.....</p>
            </div>
        </div>
    </div>
  )
}

export default Loading