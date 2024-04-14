import { companyLogos } from "../constants";


const CompanyLogos = ({ className }) => {
  return (
    <div className={className}>
      <h5 className="tagline mb-6 text-center text-n-1/50">
        A BRIEF HISTORY OF MY PROFESSIONAL CAREER
      </h5>
      <div className='logos'>
        <ul className="flex logo_items scroller__inner">
          {companyLogos.map((logo, index) => (
            <li
              className="flex items-center justify-center flex-1 h-[8.5rem]"
              key={index}
            >
              <img src={logo} width={134} height={28} alt={logo} />
            </li>
          ))}
        </ul>
        </div>
    </div>
  );
};

export default CompanyLogos;
