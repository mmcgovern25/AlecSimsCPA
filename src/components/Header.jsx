import { useLocation } from "react-router-dom";
import { disablePageScroll, enablePageScroll } from "scroll-lock";

import { navigation } from "../constants";
import Button from "./Button";
import MenuSvg from "../assets/svg/MenuSvg";
import Popup from "./Popup"; // Import the Popup component
import { useState } from "react";
import { HamburgerMenu } from "./design/Header"; // Import the HamburgerMenu component

const Header = () => {
  const pathname = useLocation();
  const [openNavigation, setOpenNavigation] = useState(false);
  const [isPopupOpen, setIsPopupOpen] = useState(false); // State to manage the popup

  const toggleNavigation = () => {
    if (openNavigation) {
      setOpenNavigation(false);
      enablePageScroll();
    } else {
      setOpenNavigation(true);
      disablePageScroll();
    }
  };
  const handleClick = () => {
    if (!openNavigation) return;

    enablePageScroll();
    setOpenNavigation(false);

    // Get the hash from the clicked link
    const hash = window.location.hash;

    // Set the offset for each section to make the title fully visible
    let offset = 100; // Adjust this value as needed

    // Scroll to the target element with offset adjustment
    const targetElement = document.querySelector(hash);
    if (targetElement) {
      window.scrollTo({
        top: targetElement.offsetTop - offset,
        behavior: 'smooth',
      });
    }
  };

  // Function to toggle the popup
  const togglePopup = () => {
    setIsPopupOpen(!isPopupOpen);
  };

  return (
    <div
      className={`fixed top-0 left-0 w-full z-50  border-b border-n-6 lg:bg-n-8/90 lg:backdrop-blur-sm ${
        openNavigation ? "bg-n-8" : "bg-n-8/90 backdrop-blur-sm"
      }`}
    >
      <div className="flex items-center px-2 lg:px-7.5 xl:px-10 max-lg:py-4">
        {/* Show the image only on small screens */}
      {/* Show the image only on small screens */}
<img src="./src/assets/SimsIcon__2_-removebg-preview.png" className="logo-text block w-[5rem] mt-0 lg:mt-2 mb-0 lg:mb-2 lg:hidden" alt='Alec Simonovitch' href="#hero" />

        {/* Show the h2 only on large screens */}
        <h2 className="logo-text w-[12rem] hidden lg:block" href="#hero">
          Alec Simonovitch, CPA, MPAC
        </h2>

        <nav
          className={`${
            openNavigation ? "flex" : "hidden"
          } fixed top-[5rem] left-0 right-0 bottom-0 bg-n-8 lg:static lg:flex lg:mx-auto lg:bg-transparent lg:justify-start`}
        >
          <div className="relative z-2 flex flex-col items-center justify-center m-auto lg:flex-row lg:ml-6">
            {navigation.map((item) => (
              <a
                key={item.id}
                href={item.url}
                onClick={handleClick}
                className={`block relative font-code text-2xl uppercase text-n-1 transition-colors hover:text-color-14 ${
                  item.onlyMobile ? "lg:hidden" : ""
                } px-6 py-6 md:py-8 lg:-mr-0.25 lg:text-xs lg:font-semibold ${
                  item.url === pathname.hash
                    ? "z-2 lg:text-color-14"
                    : "lg:text-n-1/50"
                } lg:leading-5 lg:hover:text-color-14 xl:px-12`}
              >
                {item.title}
              </a>
            ))}
          </div>

          <HamburgerMenu openNavigation={openNavigation} /> {/* Include HamburgerMenu component */}
        </nav>

        <Button className="hidden lg:flex button-theme" href="#login">
          Get Started
        </Button>

        <Button
          className="ml-auto lg:hidden"
          px="px-3"
          onClick={toggleNavigation}
        >
          <MenuSvg openNavigation={openNavigation} />
        </Button>
      </div>

      {/* Render the popup when isPopupOpen is true */}
      {isPopupOpen && (
        <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center z-50 bg-black bg-opacity-50">
          <div className="popup-container"> {/* Make sure popup-container class is applied here */}
            <Popup onClose={togglePopup} />
          </div>
        </div>
      )}
    </div>
  );
      };

export default Header;
