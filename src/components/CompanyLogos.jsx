import { companyLogos } from "../constants";
import Heading from "./Heading";

const CompanyLogos = ({ className }) => {
  return (
    <div className={`mt-20 ${className}`}> {/* Adjust the margin top as needed */}
      <Heading className="tagline mb-6 mt-32 text-center text-n-1/50"
      tag="A BRIEF HISTORY OF MY PROFESSIONAL CAREER" />

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
