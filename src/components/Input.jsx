import React from 'react'

const Input = ({ type, name, placeholder, className, onChange, tittle, width, font, value, maxLength }) => {

return (
    <div className={width}>
        <p className={font}>{tittle}</p>
        <input type={type ? 'type' : 'text'} maxLength={maxLength} name={name} placeholder={placeholder} value={value} className={className ? className : 'outline-none py-2 px-4 text-sm md:text-lg border-2 rounded-md w-full'} onChange={onChange} />
    </div>
  )
}

export default Input