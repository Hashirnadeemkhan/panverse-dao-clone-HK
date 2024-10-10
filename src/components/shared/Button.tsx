import React, { FC } from 'react'

const Button:FC<{text:string}> = ({text}) => {
    
  return (
<button className="bg-[#00616c] text-white py-4 rounded-full font-semibold px-9 sm:text-lg text-sm hover:shadow-lg hover:scale-105 ">{text}</button>
  )
}

export default Button
