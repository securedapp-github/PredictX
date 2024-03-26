import React from 'react'
import Homeicon from '../Images/Home-icon.png';
import NavBar from '../Components/Navbar';



export default function Home() {
  return (
    <div>

<div style={{position: 'relative'}} >
      <NavBar style={{position: 'absolute', top: 0, width: '100%'}}/>
<div className='flex flex-row'>
<div className='h-screen'><img src={Homeicon} alt="Homeicon" className='absolute hidden sm:block top-0 right-0 h-2/4 w-48 sm:h-4/5 sm:min-w-80 md:h-full md:w-2/4 lg:w-2/5 xl:2/5 2xl:w-1/3'  /></div>

<div style={{position: 'absolute'}} className='mt-52   mx-auto'>
<h1 className=' font-bold text-4xl sm:text-2xl sm:ml-4 lg:text-3xl lg:ml-36 xl:text-4xl xl:ml-36 2xl:text-4xl flex flex-col justify-center text-center' style={{color:'rgb(13, 0, 107)'}}> <span>Welcome to the world of <span className='text-red-700'>Predictive</span></span> <span className='text-red-700'>crime analysis</span></h1>
</div>

</div>
      

    </div>
    
    </div>
  )
}
