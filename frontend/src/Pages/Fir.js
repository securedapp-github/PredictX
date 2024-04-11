import React, { useState } from 'react'
import { Button,Table,Pagination } from "flowbite-react";
import { Link } from "react-router-dom";
import Firpopup from '../Components/Firpopup';
import Submit from '../Images/Icons/Submit.png';
import Audio from '../Images/Icons/Audio.png';
import Video from '../Images/Icons/Video.png';
import Pdf from '../Images/Icons/Pdf.png';
import Movie from '../Images/Icons/Movie.png';
import { FaDownload } from 'react-icons/fa';

export default function Fir() {
  const [currentPage, setCurrentPage] = useState(1);
  const onPageChange = (page) => setCurrentPage(page);

  const [showPopup, setShowPopup] = useState(false);
  const handleOpenPopup = () => {
    setShowPopup(true);
  };
  return (
    <div>
        {showPopup && (<Firpopup onClose={() => setShowPopup(false)} />)}
        {showPopup?(<div></div>)
    :
    <div className='w-full'>
      <div className=' w-full lg:w-[90%] my-16 mx-auto'>

        <div className='w-full bg-slate-200  border-2 border-slate-300 rounded-md h-40 flex flex-wrap items-center justify-center flex-col gap-3 md:flex-row md:justify-between '>
            <p className='text-xl sm:text-2xl font-medium text-black md:ml-6'>Do you want to Submit FIR? <br /> <span className='  text-sm font-normal'>Your file will be process as safe and secure</span></p>
            <Button color='blue' className="mr-10 rounded-lg bg-mybg h-12" onClick={handleOpenPopup}><img src={Submit} alt='' /> Submit FIR</Button>
            
        </div>
        <h1 className='font-medium text-2xl ml-4 md:ml-10  mt-10'>Explore by format</h1>

      <div className='w-full mt-7 flex flex-col lg:flex-row lg:justify-between lg:gap-0  items-center gap-4 '>
      <Button color='gray' className="  rounded-lg bg-slate-200 border-2 border-slate-300  h-24 w-72 flex justify-start"><Link to='/signin' className='flex items-center gap-4 text-mybg font-medium text-lg'><img src={Audio} className='h-10 w-8' alt='' /><p className='text-start'>Audio files <br /><span className='text-black text-sm'>size:15 GB</span></p></Link></Button>

      <Button color='gray' className="  rounded-lg bg-slate-200 border-2 border-slate-300  h-24 w-72 flex justify-start"><Link to='/signin' className='flex items-center gap-4 text-mybg font-medium text-lg'><img src={Video} className='h-10 w-8' alt='' /><p className='text-start'>Video files <br /><span className='text-black text-sm'>size:48 GB</span></p></Link></Button>

      <Button color='gray' className="  rounded-lg bg-slate-200 border-2 border-slate-300  h-24 w-72 flex justify-start"><Link to='/signin' className='flex items-center gap-4 text-mybg font-medium text-lg'><img src={Pdf} className='h-10 w-8' alt='' /><p className='text-start'>Pdf files <br /><span className='text-black text-sm'>size:10 GB</span></p></Link></Button>
      </div>
      <h1 className='font-medium text-2xl ml-4 md:ml-10  mt-10'>All Files</h1>


      <div className="overflow-x-auto mt-10">
      <Table hoverable>
        <Table.Head className='border-b-2 border-b-slate-400'>
          <Table.HeadCell>Filename</Table.HeadCell>
          <Table.HeadCell>Date</Table.HeadCell>
          <Table.HeadCell>State</Table.HeadCell>
          <Table.HeadCell>Location</Table.HeadCell>
          <Table.HeadCell>Type</Table.HeadCell>
        </Table.Head>
        <Table.Body className="divide-y">

          <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
            <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white flex gap-4">
             <img src={Movie} alt="" className='h-4 w-6' /> {'Evidence of case ID 313'}
            </Table.Cell>
            <Table.Cell className='text-nowrap ' >02-04-2024</Table.Cell >
            <Table.Cell className='text-nowrap ' >Karnataka</Table.Cell >
            <Table.Cell className='text-nowrap ' >Bangalore</Table.Cell>
            <Table.Cell  className='flex items-center gap-6'>
            <Button color="failure" outline>View</Button>
            <button><FaDownload color="#0d006b" /></button>
            </Table.Cell>
          </Table.Row>
          
          <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
            <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white flex gap-4">
             <img src={Movie} alt="" className='h-4 w-6' /> {'Evidence of case ID 2424'}
            </Table.Cell>
            <Table.Cell className='text-nowrap ' >23-02-2024</Table.Cell >
            <Table.Cell className='text-nowrap ' >Karnataka</Table.Cell >
            <Table.Cell className='text-nowrap ' >Bangalore</Table.Cell>
            <Table.Cell  className='flex items-center gap-6'>
            <Button color="failure" outline>View</Button>
            <button><FaDownload color="#0d006b" /></button>
            </Table.Cell>
          </Table.Row>
          
          <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
            <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white flex gap-4">
             <img src={Movie} alt="" className='h-4 w-6' /> {'Evidence of case ID 4241'}
            </Table.Cell>
            <Table.Cell className='text-nowrap ' >09-01-2024</Table.Cell >
            <Table.Cell className='text-nowrap ' >Karnataka</Table.Cell >
            <Table.Cell className='text-nowrap ' >Bangalore</Table.Cell>
            <Table.Cell  className='flex items-center gap-6'>
            <Button color="failure" outline>View</Button>
            <button><FaDownload color="#0d006b" /></button>
            </Table.Cell>
          </Table.Row>
          
          <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
            <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white flex gap-4">
             <img src={Movie} alt="" className='h-4 w-6' /> {'Evidence of case ID 12341'}
            </Table.Cell>
            <Table.Cell className='text-nowrap ' >17-01-2024</Table.Cell >
            <Table.Cell className='text-nowrap ' >Karnataka</Table.Cell >
            <Table.Cell className='text-nowrap ' >Bangalore</Table.Cell>
            <Table.Cell  className='flex items-center gap-6'>
            <Button color="failure" outline>View</Button>
            <button><FaDownload color="#0d006b" /></button>
            </Table.Cell>
          </Table.Row>
          
          <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
            <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white flex gap-4">
             <img src={Movie} alt="" className='h-4 w-6' /> {'Evidence of case ID 65467'}
            </Table.Cell>
            <Table.Cell className='text-nowrap ' >29-01-2024</Table.Cell >
            <Table.Cell className='text-nowrap ' >Karnataka</Table.Cell >
            <Table.Cell className='text-nowrap ' >Bangalore</Table.Cell>
            <Table.Cell  className='flex items-center gap-6'>
            <Button color="failure" outline>View</Button>
            <button><FaDownload color="#0d006b" /></button>
            </Table.Cell>
          </Table.Row>
          
        </Table.Body>
      </Table>
    </div>


    <div className="flex overflow-x-auto justify-center mt-10 ">
      <Pagination currentPage={currentPage} totalPages={100} onPageChange={onPageChange} previousLabel=" "
        nextLabel=" " showIcons  />
    </div>


      </div>
     
    </div>}
    
    </div>
  )
}
