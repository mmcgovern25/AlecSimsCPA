import Accordian from "./Accordian";
import Heading from "./Heading";




const Pricing = () => {
  return (
    <section className="overflow-hidden" id="FAQs">

      <div className="container relative z-2 flex justify-center items-center flex-col"> {/* Added flex and centering classes */}
<Heading
          tag="YOU MAY STILL HAVE SOME QUESTIONS"
          title="Let's go gver them, together!"
        />



<div className="p-4 rounded-lg border-black" style={{ background: 'linear-gradient(135deg, rgba(246, 173, 85, 0) 0%, rgba(221, 107, 32, 0) 100%)' }}>



      <Accordian title='Why use a book keeper?' answer='Hiring a bookkeeper for a small business brings a myriad of benefits, ranging from financial organization and compliance to strategic decision-making and client confidence. The expertise and time-saving aspects contribute significantly to the overall efficiency and success of a small business.
'/>
      <Accordian title='What is the invoicing schedule?' answer='Invoices will be issued on a monthly basis, with the billing cycle concluding on the 15th of each month. You can expect to receive your invoice promptly after this date.
'/>
      <Accordian title='How often do you receive updated records?' answer='Depending on structure, reconcilliations will likely occur at the end of each month and you will receive financials and reconcilliations within the first week following month end.
'/>
      <Accordian title='How does accurate record-keeping benefit businesses?' answer='Accurate record-keeping ensures all financial transactions are recorded promptly and correctly, providing businesses with a clear and organized financial history. This helps in tracking expenses, analyzing financial performance, and making informed decisions.'/>
      <Accordian title='Why is it beneficial for business owners to focus on core operations rather than complex financial tasks?' className="w-full sm:w-auto" answer='Outsourcing bookkeeping tasks saves business owners valuable time that can be better utilized for focusing on core business activities such as product development, customer service, and business growth strategies. It allows entrepreneurs to concentrate on activities that directly contribute to the success and growth of their businesses.'/>
      <Accordian  title='How does a bookkeeper assist with tax compliance?' answer='A bookkeeper ensures that all financial records are maintained accurately and in compliance with tax regulations. They track income, expenses, and deductions, ensuring that businesses meet their tax obligations and minimize the risk of penalties or legal issues. Additionally, bookkeepers prepare and file tax returns, keeping businesses up to date with their tax obligations.'/>
      <Accordian title='How do bookkeepers help identify cost-saving opportunities?' answer='Bookkeepers analyze expenses and financial data to identify areas where costs can be reduced or optimized for improved profitability. By closely monitoring expenses, they help businesses identify inefficiencies, negotiate better terms with suppliers, and implement cost-saving measures. This proactive approach to expense management can lead to significant cost savings and improved financial performance.'/>
      <Accordian title='How do bookkeepers assist in cash flow forecasting?'  answer='Bookkeepers use historical financial data and industry trends to forecast cash flow, allowing businesses to anticipate cash inflows and outflows. By predicting cash flow trends, businesses can better manage their finances, plan for upcoming expenses, and ensure they have sufficient funds to meet their financial obligations. This enables businesses to make informed decisions and maintain healthy cash flow levels.'/>
      </div>

      </div>
    </section>
  )
}

export default Pricing
