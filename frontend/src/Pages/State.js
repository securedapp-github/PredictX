import React from 'react'
import { Button, TextInput,Table } from "flowbite-react";
import { FiSearch } from "react-icons/fi";
import NewProfileHeroImg from '../Images/NewProfileHeroImg.png';
// import ProfileHeroImg2 from '../Images/ProfileHeroImg2.png';

export default function State() {
  return (
    <div className='w-full'>
 <div style={{
      backgroundImage: `url(${NewProfileHeroImg})`,
      backgroundBlendMode: 'multiply',
      backgroundColor: 'rgba(13, 0, 107,0.9)'
    }} className='w-full relative bg-cover h-96 flex justify-center items-center'>
      <h1 className='font-bold text-white text-2xl sm:text-3xl md:text-5xl text-center'>Accused Profile <span className='text-red-600'>Detail In State Wise</span></h1>
    </div>


    <div className="w-full flex justify-center items-center mt-16">
    <div className='w-5/6 flex flex-row gap-7'>
    <TextInput id="email4" type="email" icon={FiSearch} placeholder="Search" required className='w-11/12' color="blue"/>
      <Button color="failure">Search</Button>
    </div>
    </div>

<div className='w-full mt-10'>
  <h1 className='font-bold text-2xl ml-4 md:ml-10 lg:ml-20 xl:ml-32'>Available Crime List</h1>
  <div className='w-full flex justify-center items-center mt-12 flex-wrap gap-5'>
  <iframe 
    title="Frame 1" 
    width="600" 
    height="450" 
    src="https://lookerstudio.google.com/embed/reporting/081edacc-5091-4a1b-a499-989717c53194/page/jaLvD"  
    style={{ border: "0" }} 
    allowFullScreen 
    sandbox="allow-storage-access-by-user-activation allow-scripts allow-same-origin allow-popups allow-popups-to-escape-sandbox" 
  />

  <iframe 
    title="Frame 2" 
    width="600" 
    height="450"
    src="https://lookerstudio.google.com/embed/reporting/a6b47ac8-c315-4cb4-a2c1-bcd8c48f50f2/page/KgLvD" 
    style={{ border: "0" }} 
    allowFullScreen
    sandbox="allow-storage-access-by-user-activation allow-scripts allow-same-origin allow-popups allow-popups-to-escape-sandbox"
  />

  <iframe 
    title="Frame 3" 
    width="600" 
    height="450" 
    src="https://lookerstudio.google.com/embed/reporting/e13284a6-df00-4b3e-9d72-791e452e17ad/page/koLvD"  
    style={{ border: "0" }} 
    allowFullScreen 
    sandbox="allow-storage-access-by-user-activation allow-scripts allow-same-origin allow-popups allow-popups-to-escape-sandbox" 
  />
</div>
  




</div>

<h1 className='font-bold text-2xl ml-4 md:ml-10 lg:ml-20 xl:ml-32 mt-10'>Available Crime List</h1>

<div className=' mt-10 flex justify-center flex-row items-center'>
<div className="overflow-x-auto w-full sm:w-[90%] md:w-[80%] border shadow-md shadow-slate-600 rounded-xl">
      <Table striped className=''>
        <Table.Head>
          
          <Table.HeadCell>State</Table.HeadCell>
          <Table.HeadCell>State</Table.HeadCell>
          <Table.HeadCell>State</Table.HeadCell>
        </Table.Head>
        <Table.Body className="divide-y">
          <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
           
            <Table.Cell>xxxx</Table.Cell>
            <Table.Cell>yyyy</Table.Cell>
            <Table.Cell>zzzz</Table.Cell>
          </Table.Row>
          <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
            
            <Table.Cell>xxxx</Table.Cell>
            <Table.Cell>yyyy</Table.Cell>
            <Table.Cell>zzzz</Table.Cell>
          </Table.Row>
          <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
            
            <Table.Cell>xxxx</Table.Cell>
            <Table.Cell>yyyy</Table.Cell>
            <Table.Cell>zzzz</Table.Cell>
          </Table.Row>
        </Table.Body>
      </Table>
    </div>
</div>
    </div>
  )
}
