import React from 'react';
import { Button, TextInput, Table } from "flowbite-react";
import { FiSearch } from "react-icons/fi";
import NewProfileHeroImg from '../Images/NewProfileHeroImg.png';

export default function State() {
  return (
    <div className='w-full bg-gray-100'>
      {/* Hero Section */}
      <div style={{
        backgroundImage: `url(${NewProfileHeroImg})`,
        backgroundBlendMode: 'multiply',
        backgroundColor: 'rgba(13, 0, 107,0.9)'
      }} className='w-full relative bg-cover h-96 flex justify-center items-center'>
        <h1 className='font-bold text-white text-2xl sm:text-3xl md:text-5xl text-center'>State <span className='text-red-600'>Crime Profile</span></h1>
      </div>

      {/* Graphs Section */}
      <div className='w-full mt-10 px-6'>
        <div className='w-full flex justify-center items-center mt-12 flex-wrap gap-10'>
          {/* District Wise crime share */}
          <div className="graph-container bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-lg font-semibold mb-4">District Wise Crime Share</h2>
            <iframe
              title="District Wise Crime Share"
              width="600"
              height="450"
              src="https://lookerstudio.google.com/embed/reporting/081edacc-5091-4a1b-a499-989717c53194/page/jaLvD"
              style={{ border: "0" }}
              allowFullScreen
              sandbox="allow-storage-access-by-user-activation allow-scripts allow-same-origin allow-popups allow-popups-to-escape-sandbox"
            />
          </div>

          {/* Crime Rate over the years and 2024 prediction */}
          <div className="graph-container bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-lg font-semibold mb-4">Crime Rate Over the Years and 2024 Prediction</h2>
            <iframe
              title="Crime Rate Over the Years and 2024 Prediction"
              width="600"
              height="450"
              src="https://lookerstudio.google.com/embed/reporting/a6b47ac8-c315-4cb4-a2c1-bcd8c48f50f2/page/KgLvD"
              style={{ border: "0" }}
              allowFullScreen
              sandbox="allow-storage-access-by-user-activation allow-scripts allow-same-origin allow-popups allow-popups-to-escape-sandbox"
            />
          </div>

          {/* Crime Hotspots Location */}
          <div className="graph-container bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-lg font-semibold mb-4">Crime Hotspots Location</h2>
            <iframe
              title="Crime Hotspots Location"
              width="900"
              height="700"
              src="https://lookerstudio.google.com/embed/reporting/bdb5fa0f-8c89-4993-96f2-a7a6a751c754/page/u69vD"
              frameBorder="0"
              style={{ border: "0" }}
              allowFullScreen
              sandbox="allow-storage-access-by-user-activation allow-scripts allow-same-origin allow-popups allow-popups-to-escape-sandbox"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
}
