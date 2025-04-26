import React from 'react'
import { FaArrowTrendUp } from "react-icons/fa6";
const Arrow = ({percentage}) => {
  return (
    <div className='w-20 h-fit px-2 border border-green-700 rounded-r-full  flex justify-between items-center   rounded-l-full'>
     <FaArrowTrendUp className='text-green-700'/>
     <h2 className='text-green-700'>{`${percentage}`}%</h2>
    </div>
  )
}

export default Arrow