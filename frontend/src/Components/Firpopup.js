import React from 'react';
import { AiOutlineClose } from 'react-icons/ai';
import { Button,FileInput } from "flowbite-react";

const Firpopup = ({ onClose, onApply }) => {
  const handleSubmit = () => {
    onClose();
  };

  return (
    <div className=" w-full  bg-black bg-opacity-90 flex justify-center items-center z-50 overflow-y-auto">
      <div className= " w-[96%] sm:w-[80%] bg-white p-8 rounded-lg relative my-16">
        <form action="">
        <button  className="absolute -top-4 -right-3 text-white bg-blue-800 p-3 rounded-full" onClick={onClose} ><AiOutlineClose  /></button>
        <h4 className='text-mybg text-center mb-3 text-3xl font-semibold'>Submit FIR</h4>
        <div className='full' >
        
        <div className='mb-6'>
            <h1 className='text-lg font-medium mb-3'>State</h1>
            <select name="state" id="state" className="w-full  text-left py-2 px-4 rounded flex justify-between items-center border-2 border-gray-400 ">
              <option value="">Select State</option>
              <option value="">Option 1</option>
              <option value="">Option </option>
            </select>
    
</div>
        
        <div className='mb-6'>
            <h1 className='text-lg font-medium mb-3'>Location</h1>
        <input placeholder='Enter Location' className="w-full  text-left py-2 px-4 rounded flex justify-between items-center border-2 border-gray-400 " />
        
</div>
        

<div className='mb-6'>
            <h1 className='text-lg font-medium mb-3'>Police Station</h1>
        <input placeholder='Enter Police Station' className="w-full  text-left py-2 px-4 rounded flex justify-between items-center border-2 border-gray-400 " />
</div>

        
<div className='mb-6'>
            <h1 className='text-lg font-medium mb-3'>Crime type</h1>
        <input placeholder='Enter Crime type' className="w-full  text-left py-2 px-4 rounded flex justify-between items-center border-2 border-gray-400 " />
</div>

<div className='mb-6'>
            <h1 className='text-lg font-medium mb-3'>Victim</h1>
        <input placeholder='Enter Victim type' className="w-full  text-left py-2 px-4 rounded flex justify-between items-center border-2 border-gray-400 mb-3 " />
        <input placeholder='Age' className="w-full  text-left py-2 px-4 rounded flex justify-between items-center border-2 border-gray-400  mb-3" />
        <select name="gender" id="gender" className="w-full  text-left py-2 px-4 rounded flex justify-between items-center border-2 border-gray-400 mb-3">
              <option value="">Select Gender</option>
              <option value="">Option 1</option>
              <option value="">Option </option>
            </select>
        <input placeholder='Location' className="w-full  text-left py-2 px-4 rounded flex justify-between items-center border-2 border-gray-400  mb-3" />
        <input placeholder='Occupation' className="w-full  text-left py-2 px-4 rounded flex justify-between items-center border-2 border-gray-400  mb-3" />


</div>

<div className='mb-6'>
            <h1 className='text-lg font-medium mb-3'>Accused</h1>
        <input placeholder='Enter Accused' className="w-full  text-left py-2 px-4 rounded flex justify-between items-center border-2 border-gray-400 mb-3 " />
        <input placeholder='Enter Hotspots' className="w-full  text-left py-2 px-4 rounded flex justify-between items-center border-2 border-gray-400  mb-3" />
        <input placeholder='Enter Timing' className="w-full  text-left py-2 px-4 rounded flex justify-between items-center border-2 border-gray-400  mb-3" />
</div>

<div className='mb-6'>
            <h1 className='text-lg font-medium mb-3'>Other data</h1>
        <input placeholder='Time' className="w-full  text-left py-2 px-4 rounded flex justify-between items-center border-2 border-gray-400 mb-3 " />
        <input placeholder='Coordinates' className="w-full  text-left py-2 px-4 rounded flex justify-between items-center border-2 border-gray-400  mb-3" />
        <select name="heinoustype" id="heinoustype" className="w-full  text-left py-2 px-4 rounded flex justify-between items-center border-2 border-gray-400 mb-3">
              <option value="">Select heinous type</option>
              <option value="">Option 1</option>
              <option value="">Option </option>
            </select>
            <select name="majortype" id="majortype" className="w-full  text-left py-2 px-4 rounded flex justify-between items-center border-2 border-gray-400 mb-3">
              <option value="">Select major type</option>
              <option value="">Option 1</option>
              <option value="">Option </option>
            </select>
            <select name="offensetype" id="offensetype" className="w-full  text-left py-2 px-4 rounded flex justify-between items-center border-2 border-gray-400 mb-3">
              <option value="">Select offense type</option>
              <option value="">Option 1</option>
              <option value="">Option </option>
            </select>
        
</div>

<div className='mb-6'>
            <h1 className='text-lg font-medium mb-3'>Get socioeconomic condition</h1>
            <select name="optimumdeployment" id="optimumdeployment" className="w-full  text-left py-2 px-4 rounded flex justify-between items-center border-2 border-gray-400 ">
              <option value="">Select optimum deployment</option>
              <option value="">Option 1</option>
              <option value="">Option </option>
            </select>
    
</div>

<div className='mb-6'>
            <h1 className='text-lg font-medium mb-3'>Upload</h1>
            <FileInput id="file-upload-helper-text" helperText="SVG, PNG, JPG or GIF (MAX. 800x400px)." />
    
</div>



        </div>
        <div className='w-full flex justify-center gap-6'>
        <Button color="dark" onClick={onClose}>Cancel</Button>
        <Button color="failure" onClick={handleSubmit}>Submit</Button>
        </div>
        </form>
      </div>
    </div>
  );
};

export default Firpopup;
