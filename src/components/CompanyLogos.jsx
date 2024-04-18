import './LogosJS';

import bryant from "../assets/bryant-resized.png";
import pwc from "../assets/pwc5-removebg-preview-resized.png";
import bluebird from "../assets/bbb-removebg-preview-resized.png";
import cpa from "../assets/cpa-removebg-preview-resized.png";
import sas from "../assets/sas-removebg-preview-resized.png";




const CompanyLogos = () => {
  return (


<div className="mt-20 scroller container" data-direction="right" data-speed="slow">
  <div className="scroller__inner">
    <img src={bryant} alt="" />
    <img src={pwc} alt="" />
    <img src={bluebird} alt="" />
    <img src={cpa} alt="" />
    <img src={sas} alt="" />
  </div>
</div>


  );
};


export default CompanyLogos;
