import { Gradient } from './design/Hero';
import { Boston } from "../assets/";
import { useRef } from 'react';
import CompanyLogos from './CompanyLogos';
import Swal from 'sweetalert2';

const Hero = ({ onClose }) => {
  const parallaxRef = useRef(null);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "c8bfb09d-ae1d-44b9-a11c-d19758381fac");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: json
    }).then((res) => res.json());

    if (res.success) {
      Swal.fire("Success!", "Congratulations, your inquiry has been successfully submitted! Alec will be in touch with you soon via Email.", "success");
      console.log("Success", res);
      onClose();
    }
  };

  return (
    <section className='pt-[12rem] -mt-[5.25rem]' id="Home">
      <div className='container relative' ref={parallaxRef}>
        <div className="relative z-1 max-w-[62rem] mx-auto text-center mb-[4rem] md:mb-20 lg:mb:[6rem]">
          <h1 className ='h1 mb-6'>Personal Finance shouldn't always feel stressful, lets talk about it.<span className='inline-block relative'></span></h1>
          <p className='body-1 max-w-3xl mx-auto mb-6 text-n-2 lg:mb-8'>Let's walk through step by step to ensure we take all that worry off your shoulders.</p>
        </div>
        <div className='relative max-w-[23rem] mx-auto md:max-w-5xl xl:mb-24'>
          <div className='relative z-1 p-0.5 rounded-2xl bg-iconic-gradient'>
            <div className='relative bg-n-8 rounded-[1rem]'>
              <div className='h-[1.4rem] bg-n-10 rounded-t-[0.9rem]' />
              <div className='aspect-[33/40] rounded-t-[0.9rem] rounded-b-[0.9rem] overflow-hidden md:aspect-[688/490] lg:aspect-[1024/490]'>
                <img src={Boston} className="object-cover w-full h-full" alt="AI" />
              </div>
              <div className="absolute top-0 left-0 w-full h-full flex flex-col justify-center items-center">
                <div className="md:flex md:justify-between md:w-full">
                  <div className="relative">
                    <h1 className="h1 text-gray-800 font-bold mb-4 md:mb-0 md:ml-5 md:mt-[-85px] hidden md:block">
                      <div className="bg-white opacity-70 rounded-lg inline-block py-2 px-1">
                        <span className="text-gray-800">Schedule Your Consultation</span> <span className="text-gray-800">Today.</span>
                      </div>
                    </h1>
                  </div>
                  <div className="relative">
                    <div className="absolute inset-0 bg-white opacity-70 z-0 mt-1 md:mt-2"></div>
                    <h2 className="h3 font-bold text-gray-800 mb-4 md:mb-0 ml-5 md:mt-[-85px] block md:hidden relative z-10">
                      Schedule Your Consultation <span className='text-gray-800'>Today.</span>
                    </h2>
                  </div>
                  <form onSubmit={handleSubmit} className="md:flex md:flex-col md:items-end md:mr-15 md:w-auto">
                    <div className="mb-4 ml-15 md:mb-2 mx-auto">
                      <input type="text" name="name" placeholder="Name" className="bg-white text-black px-4 py-2 rounded-md md:w-auto lg:w-[20rem] border focus:border-2 border-gray-300 focus:outline-none focus:border-orange-500" />
                    </div>
                    <div className="mb-4 ml-15 md:mb-2 mx-auto">
                      <input type="email" name="email" placeholder="Email Address" className="bg-white text-black px-4 py-2 rounded-md md:w-auto lg:w-[20rem] border focus:border-2 border-gray-300 focus:outline-none focus:border-orange-500" />
                    </div>
                    <div className="mb-4 ml-15 md:mb-2 mx-auto">
                      <input type="tel" name="phone" placeholder="Phone Number" className="bg-white text-black px-4 py-2 rounded-md md:w-auto lg:w-[20rem] border focus:border-2 border-gray-300 focus:outline-none focus:border-orange-500" />
                    </div>
                    <div className="mb-4 ml-15 md:mb-2 mx-auto">
                      <textarea name="comments" placeholder="Comments" className="bg-white text-black px-4 py-2 rounded-md h-24 resize-none md:w-auto lg:w-[20rem] border focus:border-2 border-gray-300 focus:outline-none focus:border-orange-500"></textarea>
                    </div>
                    <button
                      type="submit"
                      className="button-theme ml-15 text-white px-4 py-2 rounded-md border border-white focus:border-2"
                      style={{
                        backgroundImage: 'linear-gradient(to right, #FFA94D, #FF7E2B)',
                        transition: 'background-color 0.3s ease-in-out  ',
                      }}
                    >
                      Schedule Consultation
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
          <Gradient />
        </div>
        <div className='relative z-10 mt-20 lg:mt-4 lg:block'>
          <CompanyLogos />
          <div className="mb-12 lg:mt-4 lg:mb-12" />
        </div>
      </div>
    </section>
  )
}

export default Hero;
