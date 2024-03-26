import React from 'react'
import { List } from "flowbite-react";
import Homeicon from '../Images/Home-icon.png';
import Location from '../Images/Icons/Location.png';
import Polygon from '../Images/Icons/Polygon.png';



export default function Home() {

  return (
    <div>
      <div className='flex '>

      <div className='h-screen bg-black'><img src={Homeicon} alt="Homeicon" className='absolute hidden sm:block top-0 right-0 h-2/4 w-48 sm:h-4/5  sm:min-w-80 md:h-full md:w-2/4 lg:w-2/5 xl:2/5 2xl:w-1/3'  /></div>

      <div  className='  xl:w-3/4 sm:w-3/5 lg:w-3/5 z-50 sm:ml-3 md:ml-2'>
      <h1 className=' font-bold text-4xl sm:text-2xl sm:ml-4 lg:text-3xl lg:ml-36 xl:text-4xl xl:ml-36 2xl:text-4xl flex flex-col justify-center text-center mt-20 ' style={{color:'rgb(13, 0, 107)'}}> <span>Welcome to the world of <span className='text-red-700'>Predictive</span></span> <span className='text-red-700'>crime analysis</span></h1>

<div className='w-full flex flex-col mt-12 gap-12'>

<div className='mx-auto flex gap-2 justify-center flex-wrap border border-slate-400 shadow-md p-4 rounded-2xl items-center'>
    <button  className='bg-white text-black border border-slate-400 shadow-md flex justify-center items-center p-3 rounded-xl'
     ><img src={Location} alt="" className='mr-2' />Select Location<img src={Polygon} alt="" className='ml-3' /></button>

<input type="date" name="date" id="date" className='bg-white text-black border border-slate-400 shadow-md rounded-xl' placeholder='Select Date'/>

<button  className=' text-white border border-slate-400 shadow-md flex justify-center items-center p-3 px-8 rounded-xl'
    style={{backgroundColor:'rgb(13, 0, 107)'}}
    >Search</button>
    </div>

    <div className='mx-auto flex gap-4'>
    <button  className=' text-white border border-slate-400 shadow-md flex justify-center items-center p-3 px-8 rounded-xl'
    style={{backgroundColor:'rgb(13, 0, 107)'}}
    >View</button>
    <button  className=' text-black font-semibold border bg-slate-400 border-slate-400 shadow-md flex justify-center items-center p-3 px-8 rounded-xl'
    >Learn More</button>
    </div>

<div className='flex mx-auto justify-center flex-col gap-8'>
  <div><h1 className='font-bold text-2xl'>Top District crime wise</h1></div>
  <div className='flex gap-10 md:gap-14 flex-wrap justify-center'>
  <List className='text-black'>
      <List.Item>Davangere</List.Item>
      <List.Item>Simoga</List.Item>
    </List>
  <List className='text-black'>
      <List.Item>Kolar</List.Item>
      <List.Item>Mysore</List.Item>
    </List>
  <List className='text-black'>
      <List.Item>Bengaluru North</List.Item>
      <List.Item>Mangalore</List.Item>
    </List>
  </div>
</div>

</div>
    


      </div>


      </div>
      
    
    </div>
  )
}
