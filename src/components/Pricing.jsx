import Accordian from "./Accordian";
import Heading from "./Heading";




const Pricing = () => {
  return (
    <section className="overflow-hidden" id="FAQs">

      <div className="container relative z-2 flex justify-center items-center flex-col"> {/* Added flex and centering classes */}
<Heading
          tag="Get started with Brainwave"
          title="Pay once, use forever"
        />

    <div className="p-4 bg-gray-200 rounded-lg border-black">
      <Accordian title='Question 1 Question 1 Question 1 Question 1 Question 1Question 1 Question 1 Question 1' answer='Answer 1 Answer 1 Answer 1 Answer 1 Answer 1 Answer 1 Answer 1 '/>
      <Accordian title='Question 1 Question 1 Question 1 Question 1 Question 1Question 1 Question 1 Question 1' answer='Answer 1 Answer 1 Answer 1 Answer 1 Answer 1 Answer 1 Answer 1 '/>
      <Accordian title='Question 1 Question 1 Question 1 Question 1 Question 1Question 1 Question 1 Question 1' answer='Answer 1 Answer 1 Answer 1 Answer 1 Answer 1 Answer 1 Answer 1 '/>
      <Accordian title='Question 1 Question 1 Question 1 Question 1 Question 1Question 1 Question 1 Question 1' answer='Answer 1 Answer 1 Answer 1 Answer 1 Answer 1 Answer 1 Answer 1 '/>
      <Accordian title='Question 1 Question 1 Question 1 Question 1 Question 1Question 1 Question 1 Question 1' answer='Answer 1 Answer 1 Answer 1 Answer 1 Answer 1 Answer 1 Answer 1 '/>
      </div>

      </div>
    </section>
  )
}

export default Pricing
