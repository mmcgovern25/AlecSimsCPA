import { alec  } from "../assets";
import Button from "./Button";

const Collaboration = () => {
  return (
    <section id="About">
      <div className="container lg:flex justify-between items-start">
        <div className="max-w-[25rem]">
          <img src={alec} className="hidden lg:block rounded-t-[0.9rem] rounded-b-[0.9rem]" alt="Alec" />
          <Button>Get Started</Button>
        </div>

        <div className="lg:w-[38rem] mt-4">
          <h2 className="h2 mb-4 md:mb-8">
            About Me
          </h2>
          <p className="body-2 mb-8 text-n-4 md:mb-16 lg:mb-32">
            This is where Alec tells you all about himself. This is where Alec tells you all about himself. This is where Alec tells you all about himself. This is where Alec tells you all about himself.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Collaboration;
