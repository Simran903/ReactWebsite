import React from 'react'

const Button = ({label, iconURL}) => {
  return (
    <button className='flex justify-center items-center gap-2 px-7 py-4 border font-montserrat text-lg leading-none bg-blue-950 rounded-full text-white border-blue-950'>
        {label}
        <img src={iconURL} alt="->" className="ml-2 rounded-full w-5 h-5" />
    </button>
  )
}

export default Button