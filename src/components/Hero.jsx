import Button from './Button';
import { Gradient } from './design/Hero';

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
          <h1 className ='h1 mb-6'>Explore the Possibilites of AI Chatting with <span className='inline-block relative'>Brainwave
            </span>
          </h1>


          <p className='body-1 max-w-3xl mx-auto mb-6 text-n-2 lg:mb-8'>
          Unleash the power of &nbsp; AI &nbsp; within Brainwave. Upgrade your productivity with Brainwave, the open AI chat app.
          </p>
          <Button href='/pricing' white>
            Get Started
          </Button>
        </div>
        <div className='relative max-w-[23rem] mx-auto md:max-w-5xl xl:mb-24'>
          <div className='relative z-1 p-0.5 rounded-2xl bg-iconic-gradient'>
            <div className='relative bg-n-8 rounded-[1rem]'>
              <div className='h-[1.4rem] bg-n-10 rounded-t-[0.9rem]' />

              <div className='aspect-[33/40] rounded-b-[0.9rem] overflow-hidden md:aspect-[688/490] lg:aspect-[1024/490]'>




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
