import { alec } from "../assets";
import Button from "./Button";

const Collaboration = () => {
  return (
    <section id="About">
      <div className="container lg:flex justify-between items-start">
        {/* Text section */}
        <div className="lg:w-[38rem] mt-4">
          <h2 className="h2 mb-4 md:mb-8">
            About Me
          </h2>
          <p className="body-2 mb-8 text-n-4 md:mb-16 lg:mb-12">
            This is where Alec tells you all about himself. This is where Alec tells you all about himself. This is where Alec tells you all about himself. This is where Alec tells you all about himself.
          </p>
          <Button className="hidden lg:flex">Get Started</Button>
        </div>

        {/* Image section */}
        <div className="max-w-[25rem] lg:flex lg:flex-col">
          <img src={alec} className="lg:block rounded-t-[0.9rem] rounded-b-[0.9rem] mt-16 mb-32" alt="Alec" />
          <Button className='lg:hidden mb-40'>Get Started</Button>
        </div>
      </div>
    </section>
  );
};

export default Collaboration;
