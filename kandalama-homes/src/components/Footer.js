import React from 'react';

const Footer = () => {
  return (
    <footer className="py-12 text-white bg-customGreen font-poppins">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="flex items-start justify-between gap-6 space-x-6">
          {/* Logo and Description */}
          <div className="flex items-start flex-1 -ml-20">
            <img
              src="https://s3-alpha-sig.figma.com/img/f7c5/9cf4/8258870e24600f20f94471aff4cf1dbc?Expires=1733097600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=UvHA6qzKCsJDb4c0xc6AXdSYPshZzs9kPEjDstyHc5Yri2vhM8IubdgvcIjJJtW5S~Nm~G4cZv7mUI3yDEqnpiJrUUARfbacwyWfUyF0uV-gCIimLYh8BDhkr0Cn5IEvgxQ5dpAnCcJN~ANw11Z59uOlvgC~oDqvwRL8sz5wME2-nQ~afzgRImZHVNi9EnncXLXEt2C73aQuGKMnLrfcI3zNxEGWCx2ILFIrSP~TdRmJuFm8kivg9lEtxLDUVY9eW8K2DOoDfO-5n785cZy-QxiZCKx-2WKk-Y8Ll5pVuqrWL5muAUDzsWOKFRbCjcpSlKgT65XdY-MdDB43Gspf-w__"
              alt="Company Logo"
              className=" w-96 h-80" // Adjusted width for better visibility
            />

          </div>


          <div className="mr-50">
          <p className="text-sm leading-loose font-poppins">
          construction site is a bustling environment where buildings, roads,<br/>
                 or other infrastructure projects come to life. It is filled with the sights<br/>
                  and sounds of progress, including heavy machinery like cranes, <br/>
                  excavators, and bulldozers, alongside teams of workers in safety<br/>
                   gear collaborating to meet project goals. Safety is a top priority, with<br/>
                    protocols in place to ensure the well-being of everyone involved.<br/>
                     Materials such as steel, concrete, and lumber are strategically<br/>
                      moved and assembled as blueprints transform into reality. The <br/>
                      dynamic atmosphere reflects both the complexity and precision <br/>
                      required to bring architectural visions to completion.
              </p>
            </div>
          {/* Quick Links */}
          <div className="flex-1 leading-relaxed">
            <h4 className="mb-4 text-lg font-poppins">QUICK LINKS</h4>
            <ul className="space-y-2 text-sm leading-relaxed font-poppins">
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

          <div className="flex-1">
  <ul className="space-y-4 text-sm leading-relaxed"> {/* Increased overall space between list items */}
    <li className="flex items-center mb-4"> {/* Increased margin-bottom for each list item */}
      <i className="mr-4 fas fa-map-marker-alt"></i> {/* Increased icon spacing */}
      <span className="font-poppins">
        Kandalama Homes (Pvt) Ltd, 2nd Mile Post, Kandalama Road, Dambulla
      </span>
    </li>
    <li className="flex items-center mb-4"> {/* Increased margin-bottom for each list item */}
      <i className="mr-4 fas fa-envelope"></i> {/* Increased icon spacing */}
      <a href="mailto:info@kandalamahomes.com" className="hover:underline">
        info@kandalamahomes.com
      </a>
    </li>
    <li className="flex items-center mb-4"> {/* Increased margin-bottom for each list item */}
      <i className="mr-4 fas fa-phone-alt"></i> {/* Increased icon spacing */}
      <a href="tel:+947627087" className="hover:underline">
        +94 76 65 27 087
      </a>
    </li>
    <li className="flex items-center">
      <i className="mr-4 fas fa-business-time"></i> {/* Increased icon spacing */}
      <span className="font-poppins">Monday-Saturday: 9:00 AM – 6:00 PM</span>
    </li>
  </ul>
</div>


          
        </div>
      </div>

      <hr className="w-3/4 mx-auto border-t-2 border-white" />
      
      <div className="pt-4 mt-8 text-sm text-center border-teal-700" >
  <p>
    2024 © All Rights Reserved | Kandalama Homes (Pvt) Ltd | Designed and Developed by Silicon
    Radon Networks (Pvt) Ltd
  </p>
</div>

    </footer>
  );
};

export default Footer;
