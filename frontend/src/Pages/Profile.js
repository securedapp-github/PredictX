import React from 'react'
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




    </div>
  )
}
