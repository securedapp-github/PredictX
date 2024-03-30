import React from 'react'
import { Button, TextInput,Dropdown } from "flowbite-react";
import { FiSearch } from "react-icons/fi";
import ProfileHeroImg from '../Images/ProfileHeroImg.png';

export default function Crime() {
  return (
    <div className='w-full'>
 <div style={{
      backgroundImage: `url(${ProfileHeroImg})`,
      backgroundBlendMode: 'multiply',
      backgroundColor: 'rgba(13, 0, 107,0.9)'
    }} className='w-full relative bg-cover h-96 flex justify-center items-center'>
      <h1 className='font-bold text-white text-2xl sm:text-3xl md:text-5xl text-center'>Crime <span className='text-red-600'>Details In District Wise</span></h1>
    </div>


    <div className="w-full flex justify-center items-center mt-16">
    <div className='w-5/6 flex flex-row gap-7'>
    <TextInput id="email4" type="email" icon={FiSearch} placeholder="Search" required className='w-11/12' color="blue"/>
      <Button color="failure">Search</Button>
    </div>
    </div>

<div className='w-full mt-10'>
  <h1 className='font-bold text-2xl ml-4 md:ml-10 lg:ml-20 xl:ml-32'>Available Crime List</h1>
  <h1 className='font-semibold text-lg mt-14 ml-4 md:ml-10 lg:ml-20 xl:ml-32 mb-10'>Theft</h1>

  <div className='flex justify-center items-center gap-6 sm:gap-11 md:gap-32 lg:gap-64 xl:gap-80 2xl:gap-96 mb-4 sm:mb-8  px-1'>
    <div><h1 className='text-black text-md font-medium'>1st time theft criminal</h1></div>
    <div><h1 className='text-black text-md font-medium'>Abilene</h1></div>
    <div className='flex gap-4'>
      <div className='hidden sm:block'>
      <Dropdown color="blue" label="View Detail" outline>
      <Dropdown.Item onClick={() => alert('Dashboard!')}>Name</Dropdown.Item>
      <Dropdown.Item onClick={() => alert('Earnings!')}>Age</Dropdown.Item>
      <Dropdown.Item onClick={() => alert('Settings!')}>Height</Dropdown.Item>
      <Dropdown.Item onClick={() => alert('Sign out!')}>Weigth</Dropdown.Item>
    </Dropdown>
      </div>
      <div> <Button color="failure">Profile</Button></div>
      </div>
  </div>

  <div className='flex justify-center items-center gap-6 sm:gap-11 md:gap-32 lg:gap-64 xl:gap-80 2xl:gap-96 mb-3 sm:mb-8 px-1'>
    <div><h1 className='text-black text-md font-medium'>1st time theft criminal</h1></div>
    <div><h1 className='text-black text-md font-medium'>Abilene</h1></div>
    <div className='flex gap-4'>
      <div className='hidden sm:block'>
      <Dropdown color="blue" label="View Detail" outline>
      <Dropdown.Item onClick={() => alert('Dashboard!')}>Name</Dropdown.Item>
      <Dropdown.Item onClick={() => alert('Earnings!')}>Age</Dropdown.Item>
      <Dropdown.Item onClick={() => alert('Settings!')}>Height</Dropdown.Item>
      <Dropdown.Item onClick={() => alert('Sign out!')}>Weigth</Dropdown.Item>
    </Dropdown>
      </div>
      <div> <Button color="failure">Profile</Button></div>
      </div>
  </div>

  <div className='flex justify-center items-center gap-6 sm:gap-11 md:gap-32 lg:gap-64 xl:gap-80 2xl:gap-96 mb-3 sm:mb-8 px-1'>
    <div><h1 className='text-black text-md font-medium'>1st time theft criminal</h1></div>
    <div><h1 className='text-black text-md font-medium'>Abilene</h1></div>
    <div className='flex gap-4'>
      <div className='hidden sm:block'>
      <Dropdown color="blue" label="View Detail" outline>
      <Dropdown.Item onClick={() => alert('Dashboard!')}>Name</Dropdown.Item>
      <Dropdown.Item onClick={() => alert('Earnings!')}>Age</Dropdown.Item>
      <Dropdown.Item onClick={() => alert('Settings!')}>Height</Dropdown.Item>
      <Dropdown.Item onClick={() => alert('Sign out!')}>Weigth</Dropdown.Item>
    </Dropdown>
      </div>
      <div> <Button color="failure">Profile</Button></div>
      </div>
  </div>

  <div className='flex justify-center items-center gap-6 sm:gap-11 md:gap-32 lg:gap-64 xl:gap-80 2xl:gap-96 mb-3 sm:mb-8 px-1'>
    <div><h1 className='text-black text-md font-medium'>1st time theft criminal</h1></div>
    <div><h1 className='text-black text-md font-medium'>Abilene</h1></div>
    <div className='flex gap-4'>
      <div className='hidden sm:block'>
      <Dropdown color="blue" label="View Detail" outline>
      <Dropdown.Item onClick={() => alert('Dashboard!')}>Name</Dropdown.Item>
      <Dropdown.Item onClick={() => alert('Earnings!')}>Age</Dropdown.Item>
      <Dropdown.Item onClick={() => alert('Settings!')}>Height</Dropdown.Item>
      <Dropdown.Item onClick={() => alert('Sign out!')}>Weigth</Dropdown.Item>
    </Dropdown>
      </div>
      <div> <Button color="failure">Profile</Button></div>
      </div>
  </div>

  <div className='flex justify-center items-center gap-6 sm:gap-11 md:gap-32 lg:gap-64 xl:gap-80 2xl:gap-96 mb-3 sm:mb-8 px-1'>
    <div><h1 className='text-black text-md font-medium'>1st time theft criminal</h1></div>
    <div><h1 className='text-black text-md font-medium'>Abilene</h1></div>
    <div className='flex gap-4'>
      <div className='hidden sm:block'>
      <Dropdown color="blue" label="View Detail" outline>
      <Dropdown.Item onClick={() => alert('Dashboard!')}>Name</Dropdown.Item>
      <Dropdown.Item onClick={() => alert('Earnings!')}>Age</Dropdown.Item>
      <Dropdown.Item onClick={() => alert('Settings!')}>Height</Dropdown.Item>
      <Dropdown.Item onClick={() => alert('Sign out!')}>Weigth</Dropdown.Item>
    </Dropdown>
      </div>
      <div> <Button color="failure">Profile</Button></div>
      </div>
  </div>

  <div className='flex justify-center items-center gap-6 sm:gap-11 md:gap-32 lg:gap-64 xl:gap-80 2xl:gap-96 mb-3 sm:mb-8 px-1'>
    <div><h1 className='text-black text-md font-medium'>1st time theft criminal</h1></div>
    <div><h1 className='text-black text-md font-medium'>Abilene</h1></div>
    <div className='flex gap-4'>
      <div className='hidden sm:block'>
      <Dropdown color="blue" label="View Detail" outline>
      <Dropdown.Item onClick={() => alert('Dashboard!')}>Name</Dropdown.Item>
      <Dropdown.Item onClick={() => alert('Earnings!')}>Age</Dropdown.Item>
      <Dropdown.Item onClick={() => alert('Settings!')}>Height</Dropdown.Item>
      <Dropdown.Item onClick={() => alert('Sign out!')}>Weigth</Dropdown.Item>
    </Dropdown>
      </div>
      <div> <Button color="failure">Profile</Button></div>
      </div>
  </div>

  <div className='flex justify-center items-center gap-6 sm:gap-11 md:gap-32 lg:gap-64 xl:gap-80 2xl:gap-96 mb-3 sm:mb-8 px-1'>
    <div><h1 className='text-black text-md font-medium'>1st time theft criminal</h1></div>
    <div><h1 className='text-black text-md font-medium'>Abilene</h1></div>
    <div className='flex gap-4'>
      <div className='hidden sm:block'>
      <Dropdown color="blue" label="View Detail" outline>
      <Dropdown.Item onClick={() => alert('Dashboard!')}>Name</Dropdown.Item>
      <Dropdown.Item onClick={() => alert('Earnings!')}>Age</Dropdown.Item>
      <Dropdown.Item onClick={() => alert('Settings!')}>Height</Dropdown.Item>
      <Dropdown.Item onClick={() => alert('Sign out!')}>Weigth</Dropdown.Item>
    </Dropdown>
      </div>
      <div> <Button color="failure">Profile</Button></div>
      </div>
  </div>

  <div className='flex justify-center items-center gap-6 sm:gap-11 md:gap-32 lg:gap-64 xl:gap-80 2xl:gap-96 mb-3 sm:mb-8 px-1'>
    <div><h1 className='text-black text-md font-medium'>1st time theft criminal</h1></div>
    <div><h1 className='text-black text-md font-medium'>Abilene</h1></div>
    <div className='flex gap-4'>
      <div className='hidden sm:block'>
      <Dropdown color="blue" label="View Detail" outline>
      <Dropdown.Item onClick={() => alert('Dashboard!')}>Name</Dropdown.Item>
      <Dropdown.Item onClick={() => alert('Earnings!')}>Age</Dropdown.Item>
      <Dropdown.Item onClick={() => alert('Settings!')}>Height</Dropdown.Item>
      <Dropdown.Item onClick={() => alert('Sign out!')}>Weigth</Dropdown.Item>
    </Dropdown>
      </div>
      <div> <Button color="failure">Profile</Button></div>
      </div>
  </div>

  <div className='flex justify-center items-center gap-6 sm:gap-11 md:gap-32 lg:gap-64 xl:gap-80 2xl:gap-96 mb-3 sm:mb-8 px-1'>
    <div><h1 className='text-black text-md font-medium'>1st time theft criminal</h1></div>
    <div><h1 className='text-black text-md font-medium'>Abilene</h1></div>
    <div className='flex gap-4'>
      <div className='hidden sm:block'>
      <Dropdown color="blue" label="View Detail" outline>
      <Dropdown.Item onClick={() => alert('Dashboard!')}>Name</Dropdown.Item>
      <Dropdown.Item onClick={() => alert('Earnings!')}>Age</Dropdown.Item>
      <Dropdown.Item onClick={() => alert('Settings!')}>Height</Dropdown.Item>
      <Dropdown.Item onClick={() => alert('Sign out!')}>Weigth</Dropdown.Item>
    </Dropdown>
      </div>
      <div> <Button color="failure">Profile</Button></div>
      </div>
  </div>




</div>

    </div>
  )
}
