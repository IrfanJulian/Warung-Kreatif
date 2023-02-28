import React from 'react'

const Button = ({ width, className, onClick, type, text }) => {
  return (
    <div className={width}>
        <button onClick={onClick} type={type} className={className ? className : 'w-full rounded-full text-md md:text-lg text-white bg-gradient-to-r from-emerald-500 to-[#016b3f] py-2'}>{text}</button>
    </div>
  )
}

export default Button