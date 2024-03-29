import React from 'react'
import { List,Avatar } from "flowbite-react";
import Homeicon from '../Images/Home-icon.png';
import Location from '../Images/Icons/Location.png';
import Polygon from '../Images/Icons/Polygon.png';
import City from '../Images/City.png';
import News1 from '../Images/News1.png';
import News2 from '../Images/News2.png';
import News3 from '../Images/News3.png';
import News4 from '../Images/News4.png';
import News5 from '../Images/News5.png';
import News6 from '../Images/News6.png';
import Codicon from '../Images/Icons/codicon_note.png';
import Vector from '../Images/Icons/Vector.png';
import Economy from '../Images/Icons/Economy.png';
import Public from '../Images/Icons/Public.png';
import Service from '../Images/Icons/Service.png';
import Viewed from '../Images/Icons/Viewed.png';
import X from '../Images/Icons/X.png';
import Facebook from '../Images/Icons/Facebook.png';
import Insta from '../Images/Icons/Insta.png';



export default function Home() {
  return (
    <div>
      <div className='flex '>
      <div className='sm:h-screen h-10/12 '><img src={Homeicon} alt="Homeicon" className='absolute hidden sm:block top-0 right-0 h-2/4 w-56 sm:h-4/5  sm:min-w-80 md:h-full md:w-2/4 lg:w-2/5 xl:w-2/5 2xl:w-1/3'  /></div>
      <div  className='  xl:w-3/4 sm:w-3/5 lg:w-3/5 z-50 sm:ml-3 md:ml-2  '>
      <h1 className=' font-bold text-4xl sm:text-2xl sm:ml-4 lg:text-3xl lg:ml-36 xl:text-4xl xl:ml-36 2xl:text-4xl flex flex-col justify-center text-center mt-20 text-mybg'> <span>Welcome to the world of <span className='text-red-700'>Predictive</span></span> <span className='text-red-700'>crime analysis</span></h1>
<div className='w-11/12 ml-5 flex flex-col mt-12 gap-12'>
<div className='mx-auto flex gap-2 justify-center flex-wrap border border-slate-400 shadow-md p-4 rounded-2xl items-center'>
    <button  className='bg-white text-black border border-slate-400 shadow-md flex justify-center items-center p-3 rounded-xl'
     ><img src={Location} alt="" className='mr-2' />Select Location<img src={Polygon} alt="" className='ml-3' /></button>
<input type="date" name="date" id="date" className='bg-white text-black border border-slate-400 shadow-md rounded-xl cursor-pointer' placeholder='Select Date' />
<button  className=' text-white border border-slate-400 shadow-md flex justify-center items-center p-3 px-8 rounded-xl bg-mybg'
    >Search</button>
    </div>
    <div className='mx-auto flex gap-4'>
    <button  className=' text-white border border-slate-400 shadow-md flex justify-center items-center p-3 px-8 rounded-xl bg-mybg'
    >View</button>
    <button  className=' text-black font-semibold border bg-slate-400 border-slate-400 shadow-md flex justify-center items-center p-3 px-8 rounded-xl'
    >Learn More</button>
    </div>
<div className='flex mx-auto justify-center flex-col gap-8'>
  <div><h1 className='font-bold text-2xl'>Top District crime wise</h1></div>
  <div className='flex gap-8 md:gap-14 flex-wrap justify-start'>
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
      <div className='w-full mt-10 sm:mt-0'>
    <h1 className='font-semibold text-3xl text-center'>Predictive Crime Analysis</h1>
    <div className='w-full flex justify-center items-center flex-wrap mt-10 gap-5'>
        <div className='  lg:w-2/5  flex justify-center items-center' > <img src={City} alt="" /></div>
        <div className='flex flex-col gap-5 w-4/5 lg:w-1/2  ' >
          <p className='text-black font-medium text-justify'>
          <span style={{color:'rgb(13, 0, 107)'}} className='font-bold text-lg'>Predct<span className='text-red-700'>X</span></span> is a revolutionary police performance management and predictive crime analysis tool. We leverage the power of data science and artificial intelligence to equip law enforcement agencies with the insights they need to proactively prevent crime and optimise resource allocation.
          </p>
          <p className='text-black font-medium text-justify'>
          We empower law enforcement with the tools they need to not just analyse past crime, but predict future criminal activity and optimise police resources.
          </p>
          <p className='text-black font-bold text-lg text-justify'>
          Our Mission:
          </p>
          <p className='text-black font-medium text-justify'>
          To create safer communities by providing police departments with advanced crime prediction capabilities and data-driven decision-making tools.
          </p>
        </div>
    </div>
      </div>

      <div className='w-full flex mt-20 flex-wrap justify-center gap-8 2xl:gap-0'>

        <div id='left' className='w-full  sm:w-10/12 lg:w-9/12 2xl:w-1/2  flex justify-center '>

          <div className='w-full lg:w-10/12 bg-slate-200 xl:w-9/12 '>
            <div  className='p-4 flex  justify-center items-center gap-3 bg-mybg'>
            <img src={Codicon} alt="" />
            <h1 className='font-semibold  text-white text-xl text-center ' >Latest Notifications</h1>
          </div>
          <div className='w-full flex flex-col justify-center items-center gap-6 '>
            <div className='flex flex-row gap-5 py-8 shadow-md bg-white px-4 border w-11/12 rounded-xl mt-6'> <img src={Vector} alt="" className='w-5 h-5'/> <p>Clarification With Regard To Operation Of Wait List </p> </div>
            <div className='flex flex-row gap-5 py-8 shadow-md bg-white px-4 border w-11/12 rounded-xl'> <img src={Vector} alt="" className='w-5 h-5'/> <p>BPR&D New Criminal Laws</p> </div>
            <div className='flex flex-row gap-5 py-8 shadow-md bg-white px-4 border w-11/12 rounded-xl'> <img src={Vector} alt="" className='w-5 h-5'/> <p>Clarification With Regard To Operation Of Wait List </p> </div>
            <div className='flex flex-row gap-5 py-8 shadow-md bg-white px-4 border w-11/12 rounded-xl'> <img src={Vector} alt="" className='w-5 h-5'/> <p>BPR&D New Criminal Laws</p> </div>
            <div className='flex flex-row gap-5 py-8 shadow-md bg-white px-4 border w-11/12 rounded-xl'> <img src={Vector} alt="" className='w-5 h-5'/> <p>Clarification With Regard To Operation Of Wait List</p> </div>
            <div className='flex flex-row gap-5 py-8 shadow-md bg-white px-4 border w-11/12 rounded-xl mb-6'> <img src={Vector} alt="" className='w-5 h-5' /> <p>BPR&D New Criminal Laws</p> </div>
          </div>
            </div>
        </div>
        <div id='right' className='flex gap-5 sm:gap-8  flex-wrap w-11/12 lg:w-w-10/12 2xl:w-1/2 lg:gap-8 2xl:gap-16 justify-center'>
          <img src={News1} alt="" />
          <img src={News2} alt="" />
          <img src={News3} alt="" />
          <img src={News4} alt="" />
          <img src={News5} alt="" />
          <img src={News6} alt="" />
        </div>
      </div>
      {/* Catalog section */}
    <div className='w-full mb-7'>
    <h1 className='font-semibold text-3xl text-center mt-20'>Search The Data Catalog by Category</h1>
    <p className=' text-md text-center mt-4 font-semibold text-gray-600'> always ensure that you have the right to use and distribute the data according to its licensing terms and any applicable regulations.</p>
      <div className='flex flex-wrap gap-10 lg:gap-20 justify-center  mt-20 w-full '>
      <div className='w-96 xl:w-2/6  h-72 flex flex-col justify-center items-center gap-5 border shadow-md shadow-slate-400'>
          <div className='flex flex-col gap-3 justify-center items-center'>
          <img src={Service} alt=""  className='h-14 w-14' />
          <h2 className='font-semibold'>Services</h2>
          </div>
          <p className='text-center px-6'>Data on 311 services, animal control , and other city department services</p>
          <p className='font-semibold text-md text-red-700 underline'>View More</p>
        </div>
        <div className='w-96 xl:w-2/6  h-72 flex flex-col justify-center items-center gap-5 border shadow-md shadow-slate-400'>
          <div className='flex flex-col gap-3 justify-center items-center'>
          <img src={Public} alt=""  className='h-14 w-14' />
          <h2 className='font-semibold'>Public Safety</h2>
          </div>
          <p className='text-center px-6 '>Dallas police department data and information on public safety initiatives</p>
          <p className='font-semibold text-md text-red-700 underline'>View More</p>
        </div>
        <div className='w-96 xl:w-2/6  h-72 flex flex-col justify-center items-center gap-5 border shadow-md shadow-slate-400'>
          <div className='flex flex-col gap-3 justify-center items-center'>
          <img src={Economy} alt=""  className='h-14 w-14' />
          <h2 className='font-semibold'>Economy</h2>
          </div>
          <p className='text-center px-6 '>Find information on the City budget and how funds are allocated</p>
          <p className='font-semibold text-md text-red-700 underline'>View More</p>
        </div>
        <div className='w-96 xl:w-2/6  h-72 flex flex-col justify-center items-center gap-5 border shadow-md shadow-slate-400'>
          <div className='flex flex-col gap-3 justify-center items-center'>
          <img src={Viewed} alt=""  className='h-14 w-14' />
          <h2 className='font-semibold'>Most Viewed Datasets</h2>
          </div>
          <p className='text-center px-6 '>Find the most viewed datasets hosted on Dallas Open Data</p>
          <p className='font-semibold text-md text-red-700 underline'>View More</p>
        </div>
      </div>
    </div>

     {/* STAY UPDATE section */}
     <div className='w-full mb-20 '>
    <h1 className='font-semibold text-3xl text-center mt-20'>STAY UPDATE</h1>
      <div className='w-full flex mt-24 justify-center md:gap-20 sm:gap-16 gap-16 flex-wrap' >

      <div className='w-72 h-96 shadow-2xl border-2  rounded-2xl '>
        <div className='flex justify-start items-center'>
        <img src={X} alt="" className='h-16 w-16 relative bottom-9 left-4' />
        <h1 className='text-center text-2xl font-medium ml-7 text-gray-700'>Twitter</h1>
        </div>
        {/* <hr  className='w-4/5 mx-auto bg-gray-800' /> */}
        <hr style={{color:'grey',backgroundcolor:'grey', height: 2,width:'80%'}} className='mx-auto' />
        <div className='w-5/6 h-72 border mx-auto mt-3 rounded-md border-gray-300'>
          <h1 className='font-semibold text-black text-center p-2'>Tweet from @crimedept</h1>
          <hr />
          <div className='w-full  flex justify-start items-center gap-2 mt-2'>
          <Avatar rounded className='ml-3' />
          <p className='font-medium text-black'>@crimedept</p>
          </div>
          <div style={{height:'186px'}} className='w-full   SocialCard pb-2  px-3 mt-3 overflow-y-auto'>
          <p className='text-sm'>
          Beware of such URLs which download malware applications upon clicking, it can lead to access of your SMSs, camera, contacts after installation by the cyber fraudsters and finally cause to huge financial loss.#I4C #MHA #Cyberdost #Cybercrime 
#Stayalert #News
          </p>
          </div>
        </div>
      </div>


      <div className='w-72 h-96 shadow-2xl border-2  rounded-2xl '>
        <div className='flex justify-start items-center'>
        <img src={Facebook} alt="" className='h-16 w-16 relative bottom-9 left-4' />
        <h1 className='text-center text-2xl font-medium ml-7 text-gray-700'>Facebook</h1>
        </div>
        {/* <hr  className='w-4/5 mx-auto bg-gray-800' /> */}
        <hr style={{color:'grey',backgroundcolor:'grey', height: 2,width:'80%'}} className='mx-auto' />
        <div className='w-5/6 h-72 border mx-auto mt-3 rounded-md border-gray-300'>
          <h1 className='font-semibold text-black text-center p-2'>Tweet from @crimedept</h1>
          <hr />
          <div className='w-full  flex justify-start items-center gap-2 mt-2'>
          <Avatar rounded className='ml-3' />
          <p className='font-medium text-black'>@crimedept</p>
          </div>
          <div style={{height:'186px'}} className='w-full   SocialCard   px-3 mt-3 overflow-y-auto'>
          <p className='text-sm'>
          Beware of such URLs which download malware applications upon clicking, it can lead to access of your SMSs, camera, contacts after installation by the cyber fraudsters and finally cause to huge financial loss.#I4C #MHA #Cyberdost #Cybercrime 
#Stayalert #News
          </p>
          </div>
        </div>
      </div>


      <div className='w-72 h-96 shadow-2xl border-2  rounded-2xl '>
        <div className='flex justify-start items-center'>
        <img src={Insta} alt="" className='h-16 w-16 relative bottom-9 left-4' />
        <h1 className='text-center text-2xl font-medium ml-5 text-gray-700'>Instagram</h1>
        </div>
        {/* <hr  className='w-4/5 mx-auto bg-gray-800' /> */}
        <hr style={{color:'grey',backgroundcolor:'grey', height: 2,width:'80%'}} className='mx-auto' />
        <div className='w-5/6 h-72 border mx-auto mt-3 rounded-md border-gray-300'>
          <h1 className='font-semibold text-black text-center p-2'>Tweet from @crimedept</h1>
          <hr />
          <div className='w-full  flex justify-start items-center gap-2 mt-2'>
          <Avatar rounded className='ml-3' />
          <p className='font-medium text-black'>@crimedept</p>
          </div>
          <div style={{height:'186px'}} className='w-full   SocialCard   px-3 mt-3 overflow-y-auto'>
          <p className='text-sm'>
          Beware of such URLs which download malware applications upon clicking, it can lead to access of your SMSs, camera, contacts after installation by the cyber fraudsters and finally cause to huge financial loss.#I4C #MHA #Cyberdost #Cybercrime 
#Stayalert #News
          </p>
          </div>
        </div>
      </div>






      </div>

      </div>
    </div>
  )
}
