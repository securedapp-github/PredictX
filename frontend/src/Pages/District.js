import React from 'react'
import { Button, TextInput,Table } from "flowbite-react";
import { FiSearch } from "react-icons/fi";
import ProfileHeroImg from '../Images/ProfileHeroImg.png';

export default function District() {
  const IframeComponent = ({ src, title }) => (
    <iframe
      title={title}
      width="600"
      height="450"
      src={src}
      style={{ border: "0" }}
      allowFullScreen
      sandbox="allow-storage-access-by-user-activation allow-scripts allow-same-origin allow-popups allow-popups-to-escape-sandbox"
    />
  );
  return (
    <div className='w-full'>
 <div style={{
      backgroundImage: `url(${ProfileHeroImg})`,
      backgroundBlendMode: 'multiply',
      backgroundColor: 'rgba(13, 0, 107,0.9)'
    }} className='w-full relative bg-cover h-96 flex justify-center items-center'>
      <div>
      <h1 className='font-bold text-white text-2xl sm:text-3xl md:text-5xl text-center'>Crime <span className='text-red-600'>Details In District Wise</span></h1>
      <p className='text-white text-center mt-4'>Shown the details of crime in district wise  and predctX utilises advanced datascience to AI to anticipate crime hotspots<br />and proactive patrol deployment</p>
      </div>
     
    </div>

    <div className='w-full flex justify-center items-center flex-wrap mt-10 gap-5'>
        <IframeComponent src="https://lookerstudio.google.com/embed/reporting/ae509257-e24a-4cfa-bbb5-eedda2be860f/page/0RutD" />
        <IframeComponent src="https://lookerstudio.google.com/embed/reporting/1a118a30-9413-4d3b-a840-62da809ca5fb/page/4ZutD" />
        <IframeComponent src="https://lookerstudio.google.com/embed/reporting/180c9ad8-6dbe-48f8-9c34-6c5540acef5d/page/7RstD" />
      </div>

    <div className="w-full flex justify-center items-center mt-16">
    <div className='w-5/6 flex flex-row gap-7'>
    <TextInput id="email4" type="email" icon={FiSearch} placeholder="Search" required className='w-11/12' color="blue"/>
      <Button color="failure">Search</Button>
    </div>
    </div>

  <h1 className='font-bold text-2xl ml-4 md:ml-10 lg:ml-20 xl:ml-32 mt-10'>Available Crime List by District Wise</h1>

<div className=' mt-10 flex justify-center flex-row items-center'>
<div className="overflow-x-auto w-full sm:w-[90%] md:w-[80%] border shadow-md shadow-slate-600 rounded-xl">
      <Table striped className=''>
        <Table.Head>
          
          <Table.HeadCell>District</Table.HeadCell>
          <Table.HeadCell>District</Table.HeadCell>
          <Table.HeadCell>District</Table.HeadCell>
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
