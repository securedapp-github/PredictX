import React from 'react'
import Mapheroimg from '../Images/Mapheroimg.png';
import AboutImg1 from '../Images/AboutImg1.png'
import AboutImg2 from '../Images/AboutImg2.png'
import AboutImg3 from '../Images/AboutImg3.png'
import police from '../Images/police.png';
import Material from '../Images/material.png';
import Fast from '../Images/Fast.png';
import { Link } from "react-router-dom";
import Phone from '../Images/Phone.png';
import Email from '../Images/Email.png';

export default function About() {
  return (
    <div className='w-full'>
      <div style={{
      backgroundImage: `url(${Mapheroimg})`,
      backgroundBlendMode: 'multiply',
      backgroundColor: 'rgba(13, 0, 107,0.9)' 
    }} className='w-full relative bg-cover h-96 flex justify-center items-center'>
      <div>
      <h1 className='font-bold text-red-600 text-2xl sm:text-3xl md:text-5xl text-center'>About <span className='text-white'>Us</span></h1>
      <p className='text-white text-center mt-4'>At PredictX, we are a dynamic team of technology  and management professionals hailing from esteemed institutions such as IIT Kanpur,<br /> IIT Kharagpur and Bangalore University.</p>
      </div>
    </div>


    <div className='w-full mt-10 sm:mt-0'>
    <div className='w-full flex justify-center items-center flex-wrap mt-10 gap-5'>
        <div className='  lg:w-2/5  flex justify-center items-center' > <img src={AboutImg1} alt="" /></div>
        <div className='flex flex-col gap-5 w-4/5 lg:w-1/2  ' >
        <p className='text-black font-bold text-xl text-justify'>
          Our Vision:
          </p>
          <p className='text-black font-medium text-justify'>
          PredctX aims to revolutionise law enforcement by providing predictive crime analysis tools that optimise police resource allocation. Our vision is to create safer communities by harnessing the power of data analytics and cutting-edge technology to predict and prevent crime effectively.
          </p>

          <p className='text-black font-bold text-xl text-justify'>
          Our Mission:
          </p>
          <p className='text-black font-medium text-justify'>
          To create safer communities by providing police departments with advanced crime prediction capabilities and data-driven decision-making tools.
          </p>
        </div>
    </div>
      </div>

    <div className='w-full mt-10 sm:mt-0'>
    <div className='w-full flex justify-center items-center flex-wrap mt-10 gap-5'>
        
        <div className=' w-4/5 lg:w-1/2  flex flex-col gap-20 justify-center items-center' >
          <div className='flex gap-14'>
          <p className='flex gap-3 items-center'><span className='text-mybg text-5xl font-bold'>5</span> Crime Rate<br /> Trends</p>
          <p className='flex gap-3 items-center'><span className='text-mybg text-5xl font-bold'>50M</span> Crime Type<br />Distribution
</p>
</div>
          <div className='flex gap-14'>
          <p className='flex gap-3 items-center'><span className='text-mybg text-5xl font-bold'>50</span> Hotspot
<br /> Analysis</p>
          <p className='flex gap-3 items-center'><span className='text-mybg text-5xl font-bold'>10k</span> Response Time 
<br />Metrics
</p>
</div>
        </div>

        <div className='  lg:w-2/5  flex justify-center items-center' > <img src={AboutImg2} alt="" /></div>
        
    </div>
      </div>


      <div className='w-[98%] lg:w-[80%] border shadow-lg mx-auto flex justify-center items-center gap-5 px-4 py-3 mt-10'>
        <img src={police} alt=""  className='w-7 h-8'/>
       <p className='text-center'>PredictX is more than just a platform; it's a pioneering solution in predictive crime analysis and optimal police resource allocation. By harnessing the power of predictive analytics and data insights, we empower law enforcement agencies to anticipate and prevent crime effectively. Our commitment to innovation and excellence drives us to constantly refine and enhance PredictX, ensuring that we stay at the forefront of crime prevention technology.
</p>
      </div>

      <div className='w-[98%] lg:w-[80%] border shadow-lg mx-auto flex justify-center items-center gap-5 px-4 py-3 mt-10'>
        <img src={Material} alt=""  className='w-7 h-8'/>
       <p className='text-center'>At PredictX, we are a dynamic team of technology  and management professionals hailing from esteemed institutions such as IIT Kanpur, IIT Kharagpur and Bangalore University. With expertise in AI, ML, and data engineering, we are driven by a shared passion for leveraging cutting-edge technology to address real-world challenges. Guided by the wisdom of seasoned mentors from law enforcement departments, cyber security wings, and crime psychology, we have united our diverse skill sets and experiences to create PredictX.
</p>
      </div>


      <div className='w-full mt-10 sm:mt-0'>
    <div className='w-full flex justify-center items-center flex-wrap mt-10 gap-5'>
        <div className='  lg:w-2/5  flex justify-center items-center mx-auto' > <img src={AboutImg3} alt="" /></div>
        <div className='flex flex-col gap-5 w-4/5 lg:w-1/2  ' >
        <h1 className='text-black font-bold text-3xl'>All Advanteges in One </h1>
        <p>All advantage of using a predctx to pioneering solution in predictive crime analysis and optimal police resource allocation. </p>
        <div className='flex gap-5  items-center'><img src={Fast} alt="" /> <p className='font-semibold text-lg'>Predictive Crime Analytics</p></div>
        <div className='flex gap-5  items-center'><img src={Fast} alt="" /> <p className='font-semibold text-lg'>Police Performance and Resource Management</p></div>
        <div className='flex gap-5  items-center'><img src={Fast} alt="" /> <p className='font-semibold text-lg'>Data Privacy in Law Enforcement</p></div>
        <div className='flex gap-5  items-center'><img src={Fast} alt="" /> <p className='font-semibold text-lg'>Accident Data Analysis</p></div>
        </div>
    </div>
      </div>

<div className='w-full'>
<h1 className='font-semibold text-3xl text-center'>Our Journey</h1>
<div className='w-[90%] sm:w-[60%] border shadow-lg mx-auto flex justify-start items-center gap-5 px-4 py-3 mt-10'>
        <div className='h-10 w-14 bg-slate-700 rounded-md'></div>
        <div><p className='text-violet-600 font-medium'>2015</p><p>Successful Pilot Deployments</p></div>
      </div>
<div className='w-[90%] sm:w-[60%] border shadow-lg mx-auto flex justify-start items-center gap-5 px-4 py-3 mt-10'>
        <div className='h-10 w-14 bg-slate-700 rounded-md'></div>
        <div><p className='text-violet-600 font-medium'>2016</p><p>Partnerships with Law Enforcement Agencies
</p></div>
      </div>
<div className='w-[90%] sm:w-[60%] border shadow-lg mx-auto flex justify-start items-center gap-5 px-4 py-3 mt-10'>
        <div className='h-10 w-14 bg-slate-700 rounded-md'></div>
        <div><p className='text-violet-600 font-medium'>2017</p><p>Recognition and Awards
</p></div>
      </div>
<div className='w-[90%] sm:w-[60%] border shadow-lg mx-auto flex justify-start items-center gap-5 px-4 py-3 mt-10'>
        <div className='h-10 w-14 bg-slate-700 rounded-md'></div>
        <div><p className='text-violet-600 font-medium'>2017</p><p>Team Expertise and Background

</p></div>
      </div>
<div className='w-[90%] sm:w-[60%] border shadow-lg mx-auto flex justify-start items-center gap-5 px-4 py-3 mt-10'>
        <div className='h-10 w-14 bg-slate-700 rounded-md'></div>
        <div><p className='text-violet-600 font-medium'>2018</p><p>Product Development Milestones

</p></div>
      </div>

</div>


<div className='w-full mt-20'>
  <h1 className='font-semibold text-2xl text-center'>Still Need Help?</h1>
  <div className='flex justify-center items-center gap-10 mt-10 flex-wrap'>
  <div><p>Join us on our journey as we revolutionise <br /> crime analysis and law enforcement, one data <br /> point at a time <Link className='text-red-600 underline' to='/contact'>Contact Us</Link>.
</p></div>
<div className='flex items-center gap-4'><img src={Phone} alt="" /> <div><p>Phone Number</p> <p className='text-black font-semibold text-2xl'>9606015869</p> </div> </div>
<div className='flex items-center gap-4'><img src={Email} alt="" /> <div><p>Email</p> <p className='text-black font-semibold text-2xl'>hello@123</p> </div> </div>
  </div>


</div>

    </div>
  )
}
