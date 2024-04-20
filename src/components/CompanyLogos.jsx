import React, { useEffect } from 'react'; // Import useEffect hook
import Heading from "./Heading";

import bryant from "../assets/bryant-resized-removebg-preview.png";
import pwc from "../assets/pwc5-removebg-preview-resized-removebg-preview.png";
import bluebird from "../assets/bbb-removebg-preview-resized.png";
import cpa from "../assets/cpa-removebg-preview-resized.png";
import sas from "../assets/sas-removebg-preview-resized-removebg-preview.png";

const CompanyLogos = ({ className }) => {
  useEffect(() => {
    const scrollers = document.querySelectorAll(".scroller");

    // If a user hasn't opted in for reduced motion, then we add the animation
    if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      addAnimation();
    }

    function addAnimation() {
      scrollers.forEach((scroller) => {
        // add data-animated="true" to every `.scroller` on the page
        scroller.setAttribute("data-animated", true);

        // Make an array from the elements within `.scroller-inner`
        const scrollerInner = scroller.querySelector(".scroller__inner");
        const scrollerContent = Array.from(scrollerInner.children);

        // For each item in the array, clone it
        // add aria-hidden to it
        // add it into the `.scroller-inner`
        scrollerContent.forEach((item) => {
          const duplicatedItem = item.cloneNode(true);
          duplicatedItem.setAttribute("aria-hidden", true);
          scrollerInner.appendChild(duplicatedItem);
        });
      });
    }

    // Cleanup function (optional)
    return () => {
      // You can perform cleanup tasks here if needed
    };
  }, []); // Empty dependency array ensures this effect runs only once when the component mounts

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
