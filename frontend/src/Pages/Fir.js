import React from 'react'
import { Button } from "flowbite-react";
import { Link } from "react-router-dom";
import Submit from '../Images/Icons/Submit.png';

export default function Fir() {
  return (
    <div className='w-full'>
        
      <div className=' w-full lg:w-[90%] my-16 mx-auto'>

        <div className='w-full bg-slate-200  border-2 border-slate-300 rounded-md h-40 flex flex-wrap items-center justify-center flex-col gap-3 md:flex-row md:justify-between '>
            <p className='text-2xl font-medium text-black md:ml-6'>Do you want to Submit FIR? <br /> <span className='  text-sm font-normal'>Your file will be provided as safe and secure</span></p>
            <Button color='blue' className="mr-10 rounded-lg bg-mybg z-50 h-12"><Link to='/signin' className='flex justify-center items-center gap-2'><img src={Submit} alt='' /> Submit FIR</Link></Button>
        </div>

      </div>
     
    </div>
  )
}
