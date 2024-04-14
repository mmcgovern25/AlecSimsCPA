import ButtonSvg from '../assets/svg/ButtonSvg';
import React, { useState } from 'react';
import Popup from './Popup'; // Import the Popup component

const Button = ({ className, href, onClick, children, px, white }) => {
  const classes = `button relative inline-flex items-center justify-center h-11 transition-colors hover:text-color-14 ${px || "px-7"} ${white ? "text-n-8" : "text-n-1"} ${className || ""} button-theme`; // Add the button-theme class
  const spanClasses = 'relative z-10';
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const togglePopup = () => {
    setIsPopupOpen(!isPopupOpen);
  };

  const handleButtonClick = (e) => {
    e.preventDefault();
    if (onClick) {
      onClick();
    } else {
      togglePopup();
    }
  };

  const renderButton = () => (
    <>
      <button className={classes} onClick={handleButtonClick}>
        <span className={spanClasses}>{children}</span>
        {ButtonSvg(white)}
      </button>
      {isPopupOpen && <Popup onClose={() => setIsPopupOpen(false)} />}
    </>
  );

  const renderLink = () => (
    <>
      <a href={href} className={classes} onClick={handleButtonClick}>
        <span className={spanClasses}>{children}</span>
        {ButtonSvg(white)}
      </a>
      {isPopupOpen && <Popup onClose={() => setIsPopupOpen(false)} />}
    </>
  );

  return href ? renderLink() : renderButton();
};

export default Button;
