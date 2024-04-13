import Button from './Button';
import { Gradient } from './design/Hero';
import { Boston } from "../assets/";
import { useRef } from 'react';
import CompanyLogos from './CompanyLogos';


const Hero = () => {
  const parallaxRef = useRef(null);
  return (
    <section
      className='pt-[12rem] -mt-[5.25rem]'
      id="Home"
    >

      <div className='container relative' ref={parallaxRef}>
        <div className="relative z-1 max-w-[62rem] mx-auto text-center mb-[4rem] md:mb-20 lg:mb:[6rem]">
          <h1 className ='h1 mb-6'>Personal Finance shouldn't always feel stressful, lets talk about it.<span className='inline-block relative'>
            </span>
          </h1>


          <p className='body-1 max-w-3xl mx-auto mb-6 text-n-2 lg:mb-8'>
          Let's walk through step by step to ensure we take all that worry off your shoulders.
          </p>
        </div>
        <div className='relative max-w-[23rem] mx-auto md:max-w-5xl xl:mb-24'>
  <div className='relative z-1 p-0.5 rounded-2xl bg-iconic-gradient'>
    <div className='relative bg-n-8 rounded-[1rem]'>
      {/* Image section */}
      <div className='h-[1.4rem] bg-n-10 rounded-t-[0.9rem]' />
      <div className='aspect-[33/40] rounded-t-[0.9rem] rounded-b-[0.9rem] overflow-hidden md:aspect-[688/490] lg:aspect-[1024/490]'>
        <img
          src={Boston}
          className="object-cover w-full h-full"
          alt="AI"
        />
      </div>
      {/* Form section */}
      <div className="absolute top-0 left-0 w-full h-full flex flex-col justify-center items-center">
  {/* H2 and small form */}
  <div className="md:flex md:justify-between md:w-full">
    {/* Render h1 for large screens and hide it for small screens */}
    <h1 className="h1 font-bold text-white mb-4 md:mb-0 md:ml-5 md:mt-[-85px] hidden md:block">
      Schedule Your Consultation <span className='text-gray-800'>Today.</span>
    </h1>
    {/* Render h2 for small screens and hide it for large screens */}
    <div className="relative">
  <div className="absolute inset-0 bg-white opacity-50"></div>
  <h3 className="h2 font-bold text-gray-800 mb-4 md:mb-0 ml-5 md:mt-[-85px] block md:hidden relative z-10">
    Schedule Your Consultation <span className='text-gray-800'>Today.</span>
  </h3>
</div>
    <form className="md:flex md:flex-col md:items-end md:mr-15 md:w-auto">
      <div className="mb-4 ml-15 md:mb-2 mx-auto">
        <input type="text" placeholder="Name" className="bg-gray-800 text-white px-4 py-2 rounded-md md:w-auto lg:w-[20rem] border focus:border-4 border-gray-300 focus:outline-none focus:border-orange-600" />
      </div>
      <div className="mb-4 ml-15 md:mb-2 mx-auto">
        <input type="email" placeholder="Email Address" className="bg-gray-800 text-white px-4 py-2 rounded-md md:w-auto lg:w-[20rem] border focus:border-4 border-gray-300 focus:outline-none focus:border-orange-600" />
      </div>
      <div className="mb-4 ml-15 md:mb-2 mx-auto">
        <textarea placeholder="Comments"  className="bg-gray-800 text-white px-4 py-2 rounded-md h-24 resize-none md:w-auto lg:w-[20rem] border focus:border-4 border-gray-300 focus:outline-none focus:border-orange-600"></textarea>
      </div>
      <button type="submit" className="ml-15 border-blacks bg-orange-500 hover:bg-orange-600 focus:outline-none focus:bg-orange-600 text-white px-4 py-2 rounded-md">Schedule Consultation</button>
    </form>
  </div>
</div>




    </div>
    <Gradient />
  </div>
</div>
        <CompanyLogos className='hidden relative z-10 mt-20 lg:block' />
    </div>

    </section>
  )
}

export default Hero
