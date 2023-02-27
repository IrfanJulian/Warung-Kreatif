import React from 'react'
import { useNavigate } from 'react-router-dom'
import whatsapp from '../assets/whatsapp.png'

const ButtonWhatsapp = () => {

    const navigate = useNavigate()

  return (
    <div>
        <button onClick={()=>navigate('https://wa.link/6y0gga')} className='fixed bottom-10 transition-all duration-300 right-2 md:bottom-10 md:right-10 hover:scale-125'>
            <img src={whatsapp} alt="" className='w-10 h-10 md:w-14 md:h-14' />
        </button>
    </div>
  )
}

export default ButtonWhatsapp