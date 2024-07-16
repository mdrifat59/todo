import React from 'react'
import { Helmet } from 'react-helmet-async'

const Contact = () => {
  return (
    <>
    <Helmet>
        <title>Contact</title>
    </Helmet>
    <div className='container'>
      <div className='grid grid-cols-2 py-5 gap-5'>
        <div style={{ width: '100%', height: '100%', paddingBottom: '56.25%', position: 'relative' }} >      
               <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14603.92907960767!2d90.31929003528336!3d23.783645692451913!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c06652b97b3b%3A0xc7a939624ee78b7c!2sAminbazar!5e0!3m2!1sen!2sbd!4v1721123400873!5m2!1sen!2sbd" 
              width="800" 
              height="600" 
              style={{ border: '0', position: 'absolute', top: '0', left: '0', width: '100%', height: '100%' }} 
              allowFullScreen 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade">
            </iframe>
        </div>
        <div className='flex justify-center'>
        <div className='w-3/4  bg-stone-500-400 shadow-2xl rounded-md text-center box-border p-5'> 
            <h1 className='py-4 text-2xl'> Add Your Information</h1>             
            <h3 className='flex justify-start text-lg'>Name</h3>
            <input className='w-full p-2 rounded-md border outline-none  mb-2' type="text" placeholder='Name'   />
            <h3 className='flex justify-start text-lg'>Email</h3>
            <input className='w-full p-2 rounded-md outline-none border mb-2' type="email" placeholder='Email'   />
            <h3 className='flex justify-start text-lg'>Password</h3>
            <input className='w-full p-2 rounded-md outline-none border  mb-2' type="password" placeholder='Password'   />
            <div> 
            <h3 className='flex justify-start text-lg'>Title</h3>
            <input className='w-full p-2 rounded-md outline-none border mb-2' type="text" placeholder='Title'  />
            </div> 
              
            <div className='flex justify-center gap-4 mt-5'> 
         
              <button className='border-2 py-2 bg-cyan-300 text-black font-bold border-black  px-8 rounded-md'>Send</button>
            </div> 
        </div>

        </div>
      </div>
    </div>
    </>
  )
}

export default Contact