import React from "react";

const ContactUs = () => {
  return (
    <div className="p-20">
      <div className="container px-4 mx-auto lg:px-16">
        <div className="flex flex-col gap-8 lg:flex-row">
          {/* Left Section */}
          <div className="flex flex-col items-center justify-center flex-1 ml-4 space-y-6 text-black">
            <h2 className="mb-10 text-xl text-center sm:text-4xl lg:text-left font-prata">
              Contact Us
            </h2>
            <div className="flex flex-col items-center gap-6 mb-4">
              <span className="text-xl text-customGreen sm:text-3xl">
                <i className="fas fa-map-marker-alt"></i>
              </span>
              <p className="text-sm text-center font-poppins sm:text-base">
                Head Office: Kandalama Homes (Pvt) Ltd. <br />
                2nd Mile Post, Kandalama Road, Dambulla
              </p>
            </div>
            <div className="flex flex-col items-center gap-6 mb-4">
              <span className="text-xl text-customGreen sm:text-3xl">
                <i className="fas fa-envelope"></i>
              </span>
              <p className="text-sm text-center font-poppins sm:text-base">
                info@kandalamahomes.com
              </p>
            </div>
            <div className="flex flex-col items-center gap-6 mb-4">
              <span className="text-xl text-customGreen sm:text-3xl">
                <i className="fas fa-phone-alt"></i>
              </span>
              <p className="text-sm text-center font-poppins sm:text-base">
                +94 76 652 7087
              </p>
            </div>
          </div>

          {/* Vertical Divider */}
          <div className="w-[3px] h-auto mx-4 lg:block bg-customGreen"></div>

          {/* Right Section (Form) */}
          <div className="flex-1 mr-4">
  <form className="w-full mx-auto space-y-6 sm:w-3/4">
    <input
      type="text"
      placeholder="Enter Your Name"
      className="w-full p-4 bg-gray-200 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-customGreen"
    />
    <input
      type="email"
      placeholder="Enter Your Email"
      className="w-full p-4 bg-gray-200 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-customGreen font-poppins"
    />
    <input
      type="text"
      placeholder="Enter Subject"
      className="w-full p-4 bg-gray-200 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-customGreen font-poppins"
    />
    <textarea
      placeholder="Enter Message"
      rows="5"
      className="w-full p-4 bg-gray-200 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-customGreen font-poppins"
    ></textarea>
    <button
      type="submit"
      className="block w-full p-4 mx-auto text-xs text-white transition rounded-lg sm:w-1/4 bg-customGreen hover:bg-green-900 font-poppins sm:text-sm"
    >
      Send
    </button>
  </form>
</div>


          
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
