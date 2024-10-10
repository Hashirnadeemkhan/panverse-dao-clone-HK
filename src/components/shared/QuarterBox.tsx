import React, { FC } from 'react'

interface IProps{
    header:string
    description:string
    number:number
    haveBorder?:boolean
}

const QuarterBox:FC<IProps> = ({header,description,number,haveBorder =true}) => {
  return (
    <div
    className={` rounded-md lg:w-3/12 p-10 m-5 py-10 relative flex flex-col flex-1 min-h-[200px] ${haveBorder&& "border"}`} // Ensure minimum height
  >
    <h4 className="font-bold text-lg text-slate-600">
      {header}
    </h4>
    <p>{description}</p>
    <div className="absolute top-0 right-10 text-9xl font-bold -z-10 text-gray-100">
      {number}
    </div>
  </div>
  )
}

export default QuarterBox
