import React from 'react'
import { List } from "flowbite-react";
import Mapheroimg from '../Images/Mapheroimg.png';
import Mapimage1 from '../Images/Mapimage1.png';
import Mapimage2 from '../Images/Mapimage2.png';
import Mapimage3 from '../Images/Mapimage3.png';
import Mapimage4 from '../Images/Mapimage4.png';
import Mapimage5 from '../Images/Mapimage5.png';

export default function Map() {
  return (
    <div className='w-full'>
    <div style={{
      backgroundImage: `url(${Mapheroimg})`,
      backgroundBlendMode: 'multiply',
      backgroundColor: 'rgba(13, 0, 107,0.9)' 
    }} className='w-full relative bg-cover h-96 flex justify-center items-center'>
      <div>
      <h1 className='font-bold text-white text-2xl sm:text-3xl md:text-5xl text-center'>Monitoring <span className='text-red-600'>Crime Analytics</span></h1>
      <p className='text-white text-center mt-4'>Analyse historical data, weather patterns, and social media trends to identify areas and times with a high risk of crime.</p>
      </div>
      
    </div>

   <div className='w-full mt-10'>
<h1 className='text-2xl md:text-3xl font-semibold text-black text-center'>Crime Analytics Dashboard</h1>
<h3 className='text-xl font-semibold text-black ml-4 lg:ml-10 mt-10 mb-7'>PredctX utilises advanced data science and AI to:</h3>
<List className='ml-8  text-black font-normal lg:ml-16 text-lg'>
      <List.Item>Anticipate crime hotspots: Analyse historical data, weather patterns, and social media trends to identify areas and times with a high risk of crime.</List.Item>
      <List.Item>Proactive Patrol Deployment: Help law enforcement strategically allocate resources, ensuring a stronger security presence in areas most likely to experience crime.</List.Item>
      <List.Item>Data-Driven Decision Making: Move beyond basic data visualisation. PredctX provides actionable insights that guide proactive policing strategies and resource allocation.</List.Item>
    </List>
   </div>

   <h3 className='text-lg font-semibold text-black ml-4 lg:ml-10 mt-10 mb-7'>The dashboard can be accessed here.</h3>
    <div className='w-full flex justify-center items-center'>
    <div>
<img src={Mapimage1} alt="" />
    </div>
    </div>

<div className='w-full mt-10 lg:mt-20 flex flex-wrap sm:flex-col sm:justify-center sm:items-center lg:flex-row'>

  <div className='flex flex-col w-full lg:w-1/3'>
    <h1 className='text-2xl font-semibold text-center mb-3 md:mb-7'>ToolKit</h1>
    <div className=' lg:p-5 ml-7'>

    <p className='text-md text-black'>An interactive data visualisation window offering contextual insights on hover. An on-demand data visualisation tool that unveils deeper insights upon hovering over datasets.
 </p>
    </div>
  </div>

<div className='w-full lg:w-2/3 flex justify-center items-center mt-6'>
  <img src={Mapimage2} alt="" />
</div>
</div>


<div className='w-full mt-10'>

<h3 className='text-3xl font-semibold text-black ml-4 lg:ml-10 mt-10 mb-7'>Crime Type Filter</h3>
<p className='ml-8 pr-2 text-black font-normal lg:ml-16  text-sm lg:text-lg'>
      
Unleash granular control over your crime data with the Crime Type Filter. Explore crime trends by category, like "Assault Offences" or "Property Crimes." This filter drills down through a three-tiered classification system – crime, crime category, and crime against – allowing you to focus on specific areas of concern. Hovering over any crime type reveals a helpful tooltip with definitions, ensuring clear understanding of the data you're analysing. Gain deeper insights and identify patterns within specific crime categories, empowering you to tailor crime prevention strategies and resource allocation.
    </p>
   </div>

   <div className='w-full flex justify-center items-center mt-10'>
    <div>
<img src={Mapimage3} alt="" />
    </div>
    </div>



<div className='w-full flex mt-16  flex-wrap-reverse'>
  <div className='w-full lg:w-1/2 flex justify-center items-center '>
  <img src={Mapimage4} alt="" />
  </div>

  <div className='w-full lg:w-1/2 flex   flex-col mb-10 lg:mb-0'>
  <h1 className='text-2xl md:text-3xl font-semibold text-black text-center'>Map Interactions</h1>
<h3 className='text-md md:text-xl font-semibold text-black ml-4 lg:ml-10 mt-10 mb-7'>PredctX empowers you to explore crime data beyond simple statistics. Our interactive map lets you:</h3>
<List className='ml-8  text-black font-normal text-sm  md:text-lg'>
      <List.Item>Zoom & Pan: Seamlessly navigate through geographical areas of interest.</List.Item>
      <List.Item>Drill Down: Explore crime data at different levels - from citywide overviews to specific neighbourhoods.</List.Item>
      <List.Item>Crime Type Filter: Focus on specific crime categories (e.g., assault offences, property crimes) by leveraging our multi-tiered classification system. Hovering over any crime type reveals a tooltip definition for clarity.</List.Item>
    </List>

<h3 className='text-md md:text-xl font-semibold text-black ml-4 lg:ml-10 mt-4 mb-3 justify-start'>Unlock Spatial Insights:</h3>
<p className='ml-8  text-black font-normal text-sm  md:text-lg'>
These interactive features enable you to identify crime hotspots, track trends over time, and visualise correlations between different crime types within specific geographical areas. This empowers you to develop targeted strategies for crime prevention and resource allocation.
    </p>
  </div>
</div>




<div className='w-full mt-10'>
<h1 className='text-2xl md:text-3xl font-semibold text-black text-start ml-5'>Crime Classification Hierarchy</h1>
<h3 className='text-md md:text-xl font-semibold text-black ml-4 lg:ml-10 mt-10 mb-7'>PredctX goes beyond raw numbers. Our intuitive Crime Classification Hierarchy provides a structured view of crime data, categorising offences into three distinct levels:</h3>
<List className='ml-8  text-black font-normal lg:ml-16 text-sm  md:text-lg'>
      <List.Item>Crime Against: This top level identifies the targeted victim (e.g., person, property, society).</List.Item>
      <List.Item>Crime Category: This middle layer groups similar offences (e.g., assault offences, property crimes).</List.Item>
      <List.Item>Crime: The most specific level details the particular crime committed (e.g., simple assault, theft).</List.Item>
    </List>

<h3 className='text-md md:text-xl font-semibold text-black ml-4 lg:ml-10 mt-5 mb-3'>Enhanced Understanding:</h3>
<p className='ml-8  text-black font-normal lg:ml-16 text-sm  md:text-lg'>
This hierarchical structure simplifies data exploration and analysis.  Hovering over any level within the hierarchy reveals clear definitions through tooltips, ensuring a comprehensive understanding of the data you're examining.
    </p>

<h3 className='text-md md:text-xl font-semibold text-black ml-4 lg:ml-10 mt-5 mb-3'>Targeted Insights:</h3>
<p className='ml-8  text-black font-normal lg:ml-16 text-sm  md:text-lg'>By leveraging the Crime Classification Hierarchy, you can easily filter and analyse data based on specific crime categories or the targeted victim type. This empowers you to identify trends, patterns, and areas of highest concern, ultimately leading to more effective crime prevention strategies.
    </p>

   </div>

   <div className='w-full flex justify-center items-center mt-8 mb-12 lg:mb-20'>
    <div>
<img src={Mapimage5} alt="" />
    </div>
    </div>

    </div>
  )
}