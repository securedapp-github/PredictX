import React from 'react'
import ConntactUsHeroImg from '../Images/ConntactUsHeroImg.png'
import { Button, Textarea, Label, TextInput } from "flowbite-react";

export default function Contact() {
  return (
<<<<<<< HEAD
    <div className='w-full'>
      <div style={{
      backgroundImage: `url(${ConntactUsHeroImg})`,
      backgroundBlendMode: 'multiply',
      backgroundColor: 'rgba(13, 0, 107,0.9)'
    }} className='w-full relative bg-cover h-96 flex justify-center items-center'>
      <div>
      <h1 className='font-bold text-red-600 text-2xl sm:text-3xl md:text-5xl text-center'>Contact <span className='text-white'>Us</span></h1>
      <p className='text-white text-center mt-4'>Ready to revolutionise crime prevention? Contact us today to unlock the power of PredctX. Experience proactive<br />policing, optimised resource allocation, and safer communities firsthand</p>
      </div>
    </div>

<div className='w-full flex flex-wrap justify-center items-center mt-20'>

  <div className='w-full xl:w-1/2'>
<form className="flex max-w-md flex-col gap-4 bg-mybg py-6 px-5 rounded-xl mx-auto">
      <div>
        <div className="mb-2 block">
          <Label htmlFor="name" value="Name" className='text-white'/>
        </div>
        <TextInput id="name" type="text" placeholder="Enter your name" required shadow color="blue" />
      </div>

      <div>
        <div className="mb-2 block">
          <Label htmlFor="email" value="Your email" className='text-white'/>
        </div>
        <TextInput id="email" type="email" placeholder="Enter your Email" required shadow color="blue" />
      </div>


      <div>
        <div className="mb-2 block">
          <Label htmlFor="Company" value="Company/department" className='text-white'/>
        </div>
        <TextInput id="Company" type="text" placeholder="Enter your Company" required shadow color="blue" />
      </div>

      <div>
        <div className="mb-2 block">
          <Label htmlFor="Contact" value="Contact number" className='text-white'/>
        </div>
        <TextInput id="Contact" type="text" placeholder="Enter your Contact Number" required shadow color="blue" />
      </div>
      
      <div>
      <div className="mb-2 block">
        <Label htmlFor="comment" value="Your message" className='text-white'/>
      </div>
      <Textarea id="comment" placeholder="Leave a comment..." required rows={4} />
      </div>

<div className='w-full flex justify-center items-center'>
      <Button type="submit" color="failure" className='w-64'>Send Message</Button>
</div>
    </form>
  </div>

    <div className='w-full xl:w-1/2 flex flex-col gap-5 px-10 mt-16 xl:px-4 xl:mt-0'>
      <h1 className='text-black font-bold text-3xl '>Contact Us</h1>
      <p className='text-black '>Ready to transform crime prevention and law enforcement? Let's connect. Whether you're a law enforcement agency or community leader or from the state police department , we're here to support you. Reach out today and discover how PredictX can revolutionise safety in your community. 
</p>
<div className='flex flex-col gap-5'>
<div>
  <h1 className='font-semibold text-xl mb-4'>Address</h1>
  <p>
235, 2nd and 3rd Floor, 13th Cross Road, Indira <br />
Nagar 2nd Stage, Hoysala Nagar, Bengaluru - 560038
</p>
</div>
<div>
  <h1 className='font-semibold text-xl mb-4'>Our Email</h1>
  <p>
  hello@securedapp.in
</p>
</div>
<div>
  <h1 className='font-semibold text-xl mb-4'>Call Center</h1>
  <p>
  9606015868
  </p>
</div>

</div>

</div>


</div>



    </div>
  )
=======
    <div>
    <iframe
      width="1300"
      height="1000"
      src="https://lookerstudio.google.com/embed/reporting/c9f3d126-3514-48d2-bcd8-eff91ca61df6/page/3qLvD"
      frameBorder="0"
      className="iframe-style"
      allowFullScreen
      sandbox="allow-storage-access-by-user-activation allow-scripts allow-same-origin allow-popups allow-popups-to-escape-sandbox"
    ></iframe>
  
  </div>
    )
>>>>>>> 9c1298d1b1131c91060b494e2bcf6d52747786f2
}
