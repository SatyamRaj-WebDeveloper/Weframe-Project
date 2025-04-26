import React from 'react'
import { IoMdSend } from "react-icons/io";
import { FcCollapse } from "react-icons/fc";


const Bottom = () => {
  return (
    <div className='flex  w-full border-gray-300 border-t '>
        <div className='w-[50%]'>
            {/* Pending Questions */}
            <div className='flex justify-between items-center  border-gray-300 border-b px-4 py-2'>
                <h2 className='text-black font-bold text-xl'>Pending Questions</h2>
                <div className='w-fit h-fit px-2 rounded-md py-1 bg-cyan-300 text-white'>02</div>
            </div>
             <div className='ml-4'>
                <div className='flex w-full justify-between items-center'>
                    <div className='flex justify-between w-fit space-x-1 items-center mt-6 '>
                       <img src="https://images.pexels.com/photos/6478569/pexels-photo-6478569.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="Shivji" className='w-10 h-10 rounded-full relative' />
                       {/* <div className='absolute  bottom-0 right-0 w-2 h-2 bg-green-500 rounded-full border-2 border-white'></div> */}
                       <div>
                        <h2 className='text-sm text-gray-800'>Phoenix Baker</h2>
                        <span className='text-sm text-gray-300'>@phoenix</span>
                       </div>
                    </div>
                    <h2 className='text-sm text-gray-400  mr-2'>5 min ago </h2>
                </div>
                <h2 className='text-sm text-gray-400'>What are the requirements for opening the new store ?</h2>
             </div>
             <hr  className='mt-2'/>
        </div>
        <div className='w-full flex flex-col justify-center items-center bg-gray-200 relative'>
            <h1 className='text-2xl font-bold text-black mb-6'  style={{wordSpacing:"4px"}}>Welcome to the AI Chat Assistant </h1>
            <div className='flex justify-between items-center w-fit pr-2 rounded-sm bg-white border border-gray-400'>
                <input type="text" className='w-[600px] h-4 px-3  py-4  text-gray-600 outline-none' placeholder='Ask your question here...' />
                <IoMdSend  className='w-6 h-6 text-black cursor-pointer' />
            </div>
            <div className='w-fit h-fit rounded-full bg-gray-300 absolute top-2 right-6 cursor-pointer p-1'>
            <FcCollapse />
            </div>
        </div>
    </div>
  )
}

export default Bottom