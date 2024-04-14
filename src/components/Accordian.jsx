import React, { useState } from 'react';

const Accordian = ({ title, answer }) => {
  const [accordianOpen, setAccordianOpen] = useState(false);

  return (
    <div className="py-4 text-white">
      <button
        onClick={() => setAccordianOpen(!accordianOpen)}
        className={`flex justify-between w-full ${
          accordianOpen ? ' from-[#FFA94D] to-[#FF7E2B]' : ''
        }  hover:from-[#FFA94D] hover:to-[#FF7E2B] rounded-lg relative`}
        style={{ padding: accordianOpen ? '16px 20px' : '12px 16px' }}
      >
<span className={`w-full sm:w-auto font-bold hover:border-gradient ${accordianOpen ? 'border-b-2 border-gradient pb-3' : ''}`}>{title}</span>

        <svg
          className="shrink-0 ml-8"
          width="16"
          height="16"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient id="orangeGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#FFA94D" />
              <stop offset="100%" stopColor="#FF7E2B" />
            </linearGradient>
          </defs>
          <rect
            y="7"
            width="16"
            height="2"
            rx="1"
            fill="url(#orangeGradient)"
            className={`transform origin-center transition duration-200 ease-out ${
              accordianOpen ? '!rotate-180' : ''
            }`}
          />
          <rect
            y="7"
            width="16"
            height="2"
            rx="1"
            fill="url(#orangeGradient)"
            className={`transform origin-center rotate-90 transition duration-200 ease-out ${
              accordianOpen ? '!rotate-180' : ''
            }`}
          />
        </svg>
      </button>

      <div
        className={`grid overflow-hidden transition-all duration-300 ease-in-out text-n-3 text-sm ${
          accordianOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
        }`}
      >
        <div className="overflow-hidden mt-2">{answer}</div>
      </div>
    </div>
  );
};

export default Accordian;
