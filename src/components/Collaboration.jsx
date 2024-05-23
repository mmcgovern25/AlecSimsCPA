import { alec } from "../assets";
import Button from "./Button";
import Section from "./Section";

const Collaboration = () => {
  return (
    <Section id="About">
      <div className="container lg:flex justify-between items-start">
        {/* Text section */}
        <div className="lg:w-[38rem] mt-4">
          <h2 className="h2 mb-4 md:mb-8">
            About Me
          </h2>
          <p className="body-2 mb-8 text-n-4 md:mb-16 lg:mb-12">
    &nbsp;&nbsp;&nbsp;&nbsp;Let me tell you a little bit more about myself. I grew up in a small town known as Spencer, just outside of Worcester, Massachusetts.
    Even as a young kid, growing up the lake, I always found myself curious behind statistics and numbers. Whether it was trying to make an estimation of how many fish were in the lake, or how much money it costs to build a kayak, it was like I was always crunching numbers in my head.
    <br />
    <br />
    &nbsp;&nbsp;&nbsp;&nbsp;It was safe to say, I knew a career in finance was the way for me from the very beginning. Upon graduating high school from St. Peter-Marian, I could not wait to really dive into my finance studies at Bryant University. Since then I finished my Bachelors & Masters degree in the Bryant Accounting School and went on to start my career with Price Waterhouse (PWC) following my internship with the company.
    <br />
    <br />
    &nbsp;&nbsp;&nbsp;&nbsp;In my current position as Senior Tax Associate at bluebird bio, I have been lucky enough to help 100s of people with their tax related issuses. I want to share the knowledge I have to help people more on a personal level. If this interests you at all, lets get in touch, and I will see how my services can be best suite you!
  </p>
          <Button className="hidden lg:flex">Get Started</Button>
        </div>

        {/* Image section */}
        <div className="max-w-[25rem] lg:flex lg:flex-col">
          <img src={alec} className="lg:block rounded-t-[0.9rem] rounded-b-[0.9rem] mt-16 mb-8" alt="Alec" />
          <Button className='lg:hidden'>Get Started</Button>
        </div>
      </div>
    </Section>
  );
};

export default Collaboration;
