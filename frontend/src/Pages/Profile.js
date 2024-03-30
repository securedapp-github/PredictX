import React from 'react'
import { Button, TextInput } from "flowbite-react";
import { FiSearch } from "react-icons/fi";
import ProfileHeroImg from '../Images/ProfileHeroImg.png';

export default function Profile() {
  return (
  <div className='w-full'>
 <div style={{
      backgroundImage: `url(${ProfileHeroImg})`,
      backgroundBlendMode: 'multiply',
      backgroundColor: 'rgba(13, 0, 107,0.9)'
    }} className='w-full relative bg-cover h-96 flex justify-center items-center'>
      <h1 className='font-bold text-white text-2xl sm:text-3xl md:text-5xl'>Crime <span className='text-red-600'>Details In District Wise</span></h1>
    </div>


    <div className="w-full flex justify-center items-center mt-16">
    <div className='w-5/6 flex flex-row gap-7'>
    <TextInput id="email4" type="email" icon={FiSearch} placeholder="Search" required className='w-11/12'/>
      <Button color="failure">Search</Button>

    </div>
      
    </div>


    </div>
  )
}
