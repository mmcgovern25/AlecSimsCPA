const Popup = ({ onClose }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
  };

  return (
    <div className="fixed top-0 left-0 w-full h-screen flex items-center justify-center z-50 bg-black bg-opacity-30">
      <div
        className="p-8 rounded-lg absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[400px]"
        style={{
          backgroundImage: 'linear-gradient(to right, #FFA94D, #FF7E2B)',
        }}
      >
        <h2 className="text-2xl font-bold mb-4 text-white">Fill in your details</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="name" className="block mb-2 font-bold text-gradient">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              className="text-black bg-white w-full px-4 py-2 rounded border focus:border-2 border-gray-300 focus:outline-none focus:border-white"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block mb-2 font-bold text-gradient">Email Address</label>
            <input
              type="email"
              id="email"
              name="email"
              className="text-black bg-white w-full px-4 py-2 rounded border focus:border-2 border-gray-300 focus:outline-none focus:border-white"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="comments" className="block mb-2 font-bold text-gradient">Comments</label>
            <textarea
              id="comments"
              name="comments"
              className="text-black bg-white w-full px-4 py-2 rounded border focus:border-2 border-gray-300 focus:outline-none focus:border-white"
              rows="4"
              required
            ></textarea>
          </div>
          <div className="text-right">
            <button
              type="submit"
              className="button-theme ml-2 px-4 py-2 rounded border text-white border-white hover:border-2 focus:outline-none"
              style={{
                backgroundImage: 'linear-gradient(to right, #FFA94D, #FF7E2B)',
              }}
            >
              Submit
            </button>
            <button
              type="button"
              onClick={onClose}
              className="button-theme ml-2 px-4 py-2 rounded border text-white border-white hover:border-2 focus:outline-none"
              style={{
                backgroundImage: 'linear-gradient(to right, #FFA94D, #FF7E2B)',
              }}
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
