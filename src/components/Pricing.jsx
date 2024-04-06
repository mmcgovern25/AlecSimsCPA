import { smallSphere, stars } from "../assets";
import Heading from "./Heading";




const Pricing = () => {
  return (
    <section className="overflow-hidden" id="FAQs">

      <div className="container relative z-2 flex justify-center items-center flex-col"> {/* Added flex and centering classes */}
<Heading
          tag="Get started with Brainwave"
          title="Pay once, use forever"
        />

      <div className="container relative z-2">
        <div className="relative justify-center mb-[6.5rem] lg:flex">
          <img
            src={smallSphere}
            className="relative z-1"
            width={255}
            height={255}
            alt="Sphere"
          />
          <div className="absolute top-1/2 left-1/2 w-[60rem] -translate-x-1/2 -translate-y-1/2 pointer-events-none">
            <img
              src={stars}
              className="w-full"
              width={950}
              height={400}
              alt="Stars"
            />
          </div>
        </div>



      </div>
      </div>
    </section>
  )
}

export default Pricing
