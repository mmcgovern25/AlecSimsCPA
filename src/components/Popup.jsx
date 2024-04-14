import React from 'react';

const Popup = ({ onClose }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
  };

  return (
    <div className="fixed top-0 left-0 w-full h-screen flex items-center justify-center z-50 bg-black bg-opacity-30">
      <div className="bg-gradient-to-br from-orange-500 to-orange-400 p-8 rounded-lg absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[400px]">
        <h2 className="text-2xl font-bold mb-4 text-white">Fill in your details</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="name" className="block mb-2 font-bold text-white">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className="text-black w-full px-4 py-2 rounded border focus:border-4 border-gray-300 focus:outline-none focus:border-orange-600 bg-white"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block mb-2 font-bold text-white">
              Email Address
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="text-black w-full px-4 py-2 rounded border focus:border-4 border-gray-300 focus:outline-none focus:border-orange-600 bg-white"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="comments" className="block mb-2 font-bold text-white">
              Comments
            </label>
            <textarea
              id="comments"
              name="comments"
              className="text-black w-full px-4 py-2 rounded border focus:border-4 border-gray-300 focus:outline-none focus:border-orange-600 bg-white"
              rows="4"
              required
            ></textarea>
          </div>
          <div className="text-right">
            <button
              type="submit"
              className="bg-orange-600 text-white px-4 py-2 rounded hover:bg-orange-700 focus:outline-none focus:bg-orange-700"
            >
              Submit
            </button>
            <button
              type="button"
              onClick={onClose}
              className="ml-2 px-4 py-2 rounded border text-white border-gray-300 hover:border-gray-400 focus:outline-none"
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Popup;
