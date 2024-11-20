import React from 'react';

const Footer = () => {
  return (
    <footer className="py-12 text-white bg-customGreen">
      <div className="grid grid-cols-1 gap-8 px-4 mx-auto max-w-7xl sm:px-6 lg:px-8 md:grid-cols-3">
        {/* Logo and Description */}
        <div>
          <img
            src="https://via.placeholder.com/150" // Replace with the actual logo URL
            alt="Company Logo"
            className="w-32 mb-4"
          />
          <p className="text-sm">
            A construction site is a bustling environment where buildings, roads, or other
            infrastructure projects come to life. It is filled with the sights and sounds of progress,
            including heavy machinery like cranes, excavators, and bulldozers, alongside teams of
            workers in safety gear collaborating to meet project goals. Safety is a top priority.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="mb-4 text-lg font-semibold">QUICK LINKS</h4>
          <ul className="space-y-2 text-sm">
            <li>
              <a href="#" className="hover:underline">
                Home
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Features
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Pricings
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                FAQs
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                About
              </a>
            </li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h4 className="mb-4 text-lg font-semibold">CONTACT</h4>
          <ul className="space-y-2 text-sm">
            <li>
              <span className="font-semibold">Address:</span> Kandalama Homes (Pvt) Ltd, 2nd Mile
              Post, Kandalama Road, Dambulla
            </li>
            <li>
              <span className="font-semibold">Email:</span>{' '}
              <a href="mailto:info@kandalamahomes.com" className="hover:underline">
                info@kandalamahomes.com
              </a>
            </li>
            <li>
              <span className="font-semibold">Phone:</span>{' '}
              <a href="tel:+947627087" className="hover:underline">
                +94 76 65 27 087
              </a>
            </li>
            <li>
              <span className="font-semibold">Working Hours:</span> Monday-Saturday: 9:00 AM – 6:00
              PM
            </li>
          </ul>
        </div>
      </div>
      <div className="pt-4 mt-8 text-sm text-center border-t border-teal-700">
        <p>
          2024 © All Rights Reserved | Kandalama Homes (Pvt) Ltd | Designed and Developed by Silicon
          Radon Networks (Pvt) Ltd
        </p>
      </div>
    </footer>
  );
};

export default Footer;