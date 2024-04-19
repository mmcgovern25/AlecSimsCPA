import './LogosJS';

import Heading from "./Heading";

import bryant from "../assets/bryant-resized-removebg-preview.png";
import pwc from "../assets/pwc5-removebg-preview-resized-removebg-preview.png";
import bluebird from "../assets/bbb-removebg-preview-resized.png";
import cpa from "../assets/cpa-removebg-preview-resized.png";
import sas from "../assets/sas-removebg-preview-resized-removebg-preview.png";




const CompanyLogos = ({ className }) => {
  return (

    <div className={` ${className}`}> {/* Adjust the margin top as needed */}
      <Heading className="tagline mb-6 mt-20 text-center text-n-1/50"
      tag="A BRIEF HISTORY OF MY PROFESSIONAL CAREER" />

<div className="mt-20 scroller container" data-direction="right" data-speed="slow">
  <div className="scroller__inner">
    <img src={bryant} alt="" />
    <img src={pwc} alt="" />
    <img src={bluebird} alt="" />
    <img src={cpa} alt="" />
    <img src={sas} alt="" />
  </div>
</div>
</div>


  );
};


export default CompanyLogos;
