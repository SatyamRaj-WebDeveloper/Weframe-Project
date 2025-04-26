
"use client";
import React from 'react';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import Bottom from './Bottom';
import { AnimatedTooltipPreview } from './Tooltip';
import { FcOk } from "react-icons/fc";
import Arrow from './Arrow';
import { IoSettingsOutline } from "react-icons/io5";


const Main = () => {
  const percentage = 85;
  return (
    <div className='relative max-w-full'>
      <div className='w-fit h-fit rounded-full absolute top-4 right-10 flex justify-between space-x-4 items-center'>
        <IoSettingsOutline  className='w-6 h-6 text-gray-500 cursor-pointer hover:rotate-90 duration-300 hover:transition-all '/>
        <img src="https://images.pexels.com/photos/6981186/pexels-photo-6981186.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="Image" className='w-8 h-8 rounded-full ' />
      </div>
      <hr className='mt-14'/>
    <div className='flex-1 flex max-h-fit max-w-full '>
      <div className='flex flex-col space-y-7 p-4 border border-gray-200 rounded-xl mx-6 my-6 w-96 h-fit justify-center items-center'>
        <h3 className='text-black tracking-wider font-light'>Account Progress</h3>
        <div style={{width:'100px' , height:'100px'}}>
        <CircularProgressbar value={percentage} text={`${percentage}%`}  />
        </div>
        <div className='rounded-md bg-slate-200 px-3 py-2 w-full'>
         <h2 className='text-black font-bold '>Steps Completed</h2>
         <div className='flex justify-between items-center w-full h-fit '>
          <li className='list-disc marker:text-gray-500 marker:text-xl text-gray-500 py-1'>Profile Setup</li>
          <FcOk  className='w-4 h-4'/>
         </div >
         <div className='flex justify-between items-center w-full h-fit '>
          <li className='list-disc marker:text-gray-500 marker:text-xl text-gray-500 py-1'>Initial Training</li>
          <FcOk  className='w-4 h-4'/>
         </div>
         <div className='flex justify-between items-center w-full h-fit '>
          <li className='list-disc marker:text-gray-500 marker:text-xl text-gray-500 py-1'>Legal Documents</li>
          <FcOk  className='w-4 h-4'/>
         </div>
        </div>

        <div className='rounded-md bg-slate-200 px-3 py-2 w-full'>
         <h2 className='text-black font-bold '>Steps Remaining </h2>
         <div className='flex justify-between items-center w-full h-fit '>
          <ul className='list-disc text-gray-500 py-1'>Financial Integration</ul>
          <FcOk  className='w-4 h-4 mix-blend-overlay bg-gray-100 rounded-full'/>
         </div>
         <div className='flex justify-between items-center w-full h-fit '>
          <ul className='list-disc text-gray-500 py-1'>Final Review</ul>
          <FcOk  className='w-4 h-4 mix-blend-overlay bg-gray-100 rounded-full'/>
         </div>
        </div>
      </div>

      {/* Total Franchise Onboard */}
      <div className='flex flex-col my-6  items-center space-y-8'>
         <div className='border border-gray-200 rounded-xl py-4 px-6 w-96'>
             <h3 className='text-black  font-bold ' >Total Franchisees Onboard</h3>
             <div className='flex justify-between  items-center  w-full h-10  '>
              <div className='flex justify-between items-center w-40 h-fit '>
               <h1 className='text-black font-extrabold text-2xl mr-2'>14</h1>
               <Arrow percentage={"7.4"}/>
              </div>
               <AnimatedTooltipPreview />
             </div>
             <div className='flex w-full justify-evenly h-fit py-1 space-x-1 my-3'>
                 <div className='rounded-l-full rounded-r-full w-30 bg-green-700 h-2'></div>
                 <div className='rounded-l-full rounded-r-full w-20 bg-cyan-500 h-2'></div>
                 <div className='rounded-l-full rounded-r-full w-60 bg-cyan-300  h-2'></div>
             </div>
             <ul className='list-disc'>
               <div className='flex justify-between items-center'>
               <li className='list-disc marker:text-green-700 marker:text-xl text-gray-500 py-1'>Stage 1 (Initial Inquiry )</li>
               <h2 className='text-xl font-bold text-black'>02</h2>
               </div>

                <div className='flex justify-between items-center'>
               <li className='list-disc marker:text-cyan-500 marker:text-xl text-gray-500 py-1'>Stage 2 (Document Submission)</li>
               <h2 className='text-xl font-bold text-black'>07</h2>
                </div>

                <div className='flex justify-between items-center'>
               <li className='list-disc marker:text-cyan-300 marker:text-xl  text-gray-500 py-1'>Stage 3 (Training)</li>
               <h2 className='text-xl font-bold text-black'>05</h2>
                </div>
             </ul>
         </div>

            {/* Financial WellBeing */}
         <div className='flex flex-col h-[220px] p-6 w-96 border border-gray-200 rounded-xl'>
         <h3 className='text-black  font-bold mb-6'>Financial Wellbeing</h3>
             <div className='flex justify-between items-center w-full h-fit '>
               <h1 className='text-black font-extrabold text-2xl'>20</h1>
               <Arrow percentage={"2.1"} />
             </div>
             <h3 className='text-gray-400'>Total Franchisees</h3>
             <hr className='mt-2'/>
         <div className='flex justify-center items-center space-x-4 mt-2'>
            <div className='flex justify-center items-center flex-col bg-gray-300 rounded-md w-[50%]  h-16'>
               <h3 className='text-gray-500'>Target</h3>
               <h1 className='text-black font-bold'>$500,000</h1>
            </div>
            <div  className='flex justify-center items-center flex-col bg-gray-300 rounded-md w-[50%] h-16'>
            <h3 className='text-gray-500'>Current</h3>
            <h1 className='text-black font-bold'>$450,000</h1>
            </div>
         </div>
         </div>
      </div>

      <div  className='flex flex-col mt-6 items-center space-y-8'>
         {/* Key Insights & Feedback */}
         <div className=' p-[10px] w-[420px] border h-60 border-gray-200 rounded-xl mx-6'>
         <h3 className='text-black  font-bold mb-6' >Key Insights & Feedback</h3>
         <aside>
               <h1 className='text-black font-extrabold text-2xl'>10%</h1>
             </aside>
             <h3 className='text-gray-400'>Sales Growth</h3>
             <hr className='mt-2'/>
             <div className='w-full h-fit py-2 px-2 bg-gray-300  flex flex-col mt-4 rounded-md'>
                <h3 className='text-black text-sm font-bold'>Feedback</h3>
                <ul>
                  <li className='text-gray-500 '>Franchisees are requesting more detailed training materials </li>
                </ul>
             </div>
         </div>

         {/* Prospect Leads */}
         <div className='flex flex-col  p-4 w-[420px] border border-gray-200 rounded-xl'>
         <h3 className='text-black  font-bold mb-6'>Prospect leads</h3>
            <div className='flex-col flex justify-center items-center space-y-2'>

               <div className='rounded w-full h-fit py-2  px-2 bg-gray-200 flex justify-between items-center '>
                 <div className=' flex justify-evenly space-x-1 items-center'>
                  <img src="https://images.pexels.com/photos/29877967/pexels-photo-29877967/free-photo-of-urban-street-scene-with-elderly-man-in-focus.jpeg?auto=compress&cs=tinysrgb&w=600" alt="some " className='w-6 h-6 rounded-full' />
                  <h3 className='text-black text-sm'>Wade Warren</h3>
                 </div>
                 <h3 className='text-sm text-gray-600'><span className='text-gray-500 text-sm'>Stage:</span> Initial Inquiry</h3>
               </div>

               <div className='rounded w-full h-fit py-2  px-2 bg-gray-200 flex justify-between items-center '>
                 <div className=' flex justify-evenly space-x-1 items-center'>
                  <img src="https://images.pexels.com/photos/19270854/pexels-photo-19270854/free-photo-of-redhead-model-in-coat-on-city-street.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="some " className='w-6 h-6 rounded-full' />
                  <h3 className='text-black text-sm'>Ava Wright</h3>
                 </div>
                 <h3 className='text-sm text-gray-600'><span className='text-gray-500 text-sm'>Stage:</span> Initial Inquiry</h3>
               </div>

               <div className='rounded w-full h-fit py-2  px-2 bg-gray-200 flex justify-between items-center '>
                 <div className=' flex justify-evenly space-x-1 items-center'>
                  <img src="https://images.pexels.com/photos/27856326/pexels-photo-27856326/free-photo-of-handsome-boy.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="some " className='w-6 h-6 rounded-full' />
                  <h3 className='text-black text-sm'>Cody Fisher</h3>
                 </div>
                 <h3 className='text-sm  text-gray-600'><span className='text-gray-500 text-sm'>Stage:</span> Initial Inquiry</h3>
               </div>
            </div>
         </div>
      </div>
    </div>
    <Bottom/>
    </div>
  );
};

export default Main;
