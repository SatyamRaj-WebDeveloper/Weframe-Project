"use client"

import React ,{useState} from 'react'
import { FaRegArrowAltCircleRight } from "react-icons/fa";


const Dashboard = () => {
  const [isOpen ,setisOpen] = useState(false);
  return (
    <div className=' min-h-screen '>
      <div className={` ${isOpen ? 'w-60 transition-all duration-500 ' :'w-18 transition-all duration-500' } outline-none  bg-gradient-to-b from-[#003554] to-[#007EA7] h-full relative py-10 `}>
      <button onClick={()=>setisOpen(prev=>!prev)} title={`${isOpen ? 'close' :'open'}`}>
          <FaRegArrowAltCircleRight className={`${isOpen ?'rotate-180 transition-all duration-300':''} absolute top-10 right-[-10] cursor-pointer bg-white rounded-full text-black w-6 h-6`} />
      </button>
      { isOpen && <div className='flex flex-col justify-center items-center px-10 space-y-2 '>
        <ul className='text-gray-200 w-50 hover:text-cyan-300 hover:bg-gray-400 rounded list-none px-4 py-2 transition-all text-sm tracking-wider font-light'>Home</ul>
        <ul className='text-gray-200 w-50 hover:text-cyan-300 hover:bg-gray-400 rounded list-none px-4 py-2 transition-all text-sm tracking-wider font-light'>Stages & Checklist</ul>
        <ul className='text-gray-200 w-50 hover:text-cyan-300 hover:bg-gray-400 rounded list-none px-4 py-2 transition-all text-sm tracking-wider font-light'>Upload Docs</ul>
        <ul className='text-gray-200 w-50 hover:text-cyan-300 hover:bg-gray-400 rounded list-none px-4 py-2 transition-all text-sm tracking-wider font-light'>Preferred Vendors</ul>
        <ul className='text-gray-200 w-50 hover:text-cyan-300 hover:bg-gray-400 rounded list-none px-4 py-2 transition-all text-sm tracking-wider font-light'>Tech Stack</ul>
        <ul className='text-gray-200 w-50 hover:text-cyan-300 hover:bg-gray-400 rounded list-none px-4 py-2 transition-all text-sm tracking-wider font-light'>Targets</ul>
        <ul className='text-gray-200 w-50 hover:text-cyan-300 hover:bg-gray-400 rounded list-none px-4 py-2 transition-all text-sm tracking-wider font-light'>Zee Sales Targets</ul>
        <ul className='text-gray-200 w-50 hover:text-cyan-300 hover:bg-gray-400 rounded list-none px-4 py-2 transition-all text-sm tracking-wider font-light'>MAI Settings</ul>
        <ul className='text-gray-200 w-50 hover:text-cyan-300 hover:bg-gray-400 rounded list-none px-4 py-2 transition-all text-sm tracking-wider font-light '>Pending Questions <span className='w-fit h-fit bg-gray-100 text-gray-500 px-2 py-1 rounded-full'>3</span></ul>
       </div>}
       { isOpen && <button className='text-gray-200  w-fit h-fit pl-4 pt-52 hover:underline cursor-pointer'>Logout</button>}
    </div>
    </div>
    
  )
}

export default Dashboard