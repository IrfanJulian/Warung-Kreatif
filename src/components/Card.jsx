import React from 'react'

const Card = ({ tittle, text, icon }) => {
  return (
    <div className='p-3 border-2 w-full rounded-lg shadow-xl'>
      <p className='text-lg text-center font-semibold'>{tittle}</p>
      <div>{icon}</div>
      <p className='my-3 text-center'>{text}</p>
    </div>
  )
}

export default Card