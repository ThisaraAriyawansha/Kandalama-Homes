import React from "react";
import Slider from "react-slick"; // Import the Slider component
import { motion } from "framer-motion";

const services = [
  {
    title: "Villa Construction",
    image: "https://s3-alpha-sig.figma.com/img/e66a/4323/29450b5e5710977a15d5fc7ebf25b25d?Expires=1733097600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=nyf1E2D0BqvRsA-AhEXsWOgf776vV2sbNzUQEDR-Yl4iSkRbAYuO~985liUP4aDqtdHTE3LZqjn090jLV8VDcKEMDed2HojpXHWWrbXhz~pO50ImRFpRMu3LAWpvBIegMfejagNPjINvEx22nZMr7WdRCXAS6tGIw6NQYe--8BZPUyENc~fEqBixO-kCBwI35veetSPkOWOZLrx3lBStjONbfswUc5S3j0xAEG3RtIlkR8mRfjyhYf-3ZOR8DoVZbCpSsl5HcvnD010uRro7wVf6kugAuyCt5RHGjqDecAsmUEVOb6CUZoamBpf10XZMbpZWhwl013ra1dF3d2x2~A__",
  },
  {
    title: "Cabana Design",
    image: "https://s3-alpha-sig.figma.com/img/efcd/a149/2da1148aa0259570a4bc587e509bbbdd?Expires=1733097600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Cto-LbeuVMHfCQeyX4rUvAWYm4K3T-uU-cZqsLFwm4hok0WO7wwcvaJ6n~-H8lXHsK4q6--00bLrNNBWS7J1jX2w5haTTq2Y3KGYCzRij2rsEtvY3--L747Q17Ar3jZ0Qf39eUXBzG~iPEFXpwRmPem1Pe~eAFY4sl732JMSJKBNu9NtcFhXwlihbcs~9k4bqdookrhlbvEgwI~uEGGrSgTWwo4yRGPQEMyIEldnFG18v4rO1rFUKRzHaPwD6yRVRFG9-L0khDxWnh9iFkzEF8pExLafr4mRgrOy50hY62c3lJkNQVyNgr3S-bhrcHFI5~yqUT01b0hogfQ8O16NVA__",
  },
  {
    title: "Landscape Architecture",
    image: "https://s3-alpha-sig.figma.com/img/5725/e9b4/326d2352d6b3186f7bee1869e69dfe20?Expires=1733097600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Y5OK0Yf9ZrSJWpjzMS~Mk5TqqOq8-SEygUxbUxUglchHNWDBqhGR5T1zWJSPgFado5vkDfKf2fcwQrCbthf8iu4YrT2jUWdGeJYgo9aoByYC2bT80pxDCa5F1e~RcUSUwAJBX-f8Caqb-A6G~9HX6bIcQGh-dfmhFxwISugdmQLxdLSlUsxdZP3lDi4xFvkgblhBrIXDXvJYe1XO5NSy-m73LO~-hQOVwjaDRU-rdyaKxcngVgbX2pv4Jk4eHzvdj8rVP3oQK1NslovumFbvTsWujVRNuG7KsWhTsjzwLs7UMdUsMZSgGWyk0KbuuSITYE4xQ~yo5sJMhVBa0RlUtA__",
  },
];

const TeamSection = () => {
  // Slick slider settings for mobile view
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1, // Show one service at a time
    slidesToScroll: 1,
  };

  return (
    <div
      className="bg-center bg-cover border-4 border-white rounded-[47px]"
      style={{
        backgroundImage:
          "url('https://s3-alpha-sig.figma.com/img/60da/b4a3/15a09469f8e42864c8d808b51b0a03c2?Expires=1733097600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=YLliejqxW5ELKNwBDJ8k1UIVO4O-L1F6wJvz5I2iiJxllT-vfJ4mFEHT3UbGSa88f-OUcpLeIqoAYVJ1jdMuVPqmckSr0VyjZIoMlohceA5y9h~FhwwzpRZrr-3TgDmM7TUxWpXFgc-P~h4O3X3y5DQ-PzhgIKPZn83iBE3yR~axEl~UpcLNijxM0E8vpsYb-H9kYZsC1k02ZZch8u1Z7ieDAob01rZ9Ozyc4F~LS7WIGZ8wd9Hj-caNVIzX~65wuj99Iqqut1xk~lQVo-5bOngUg~kgOK9L1Cjd32ggEPEBBZgxk1lZNn-29UZ9eAnaosIkz8T5hAFsLtas5j0rXw__')",
      }}
    >
      <div className="w-full min-h-screen rounded-[47px]" style={{ backgroundColor: "rgba(0, 90, 78, 0.49)" }}>
        <div className="container p-20 mx-auto text-center text-white">
          <h2 className="mb-4 text-2xl font-bold text-center sm:text-left sm:text-4xl font-quando">
          OUR SERVICES
          </h2>

          {/* Mobile view: Show slider */}
          <div className="md:hidden">
  <Slider {...settings}>
    {services.map((service, index) => (
      <div
        key={index}
        className="flex flex-col items-center  justify-center  transition-shadow duration-300 bg-transparent shadow-md hover:shadow-xl h-[80vh]"
      >
        <div className="flex justify-center mb-6 h-[450px]">
          <img
            src={service.image}
            alt={service.title}
            className="object-cover  w-[400px] h-[650px] border-4 border-white rounded-[17px]"
          />
        </div>
        
        {/* Title with small blurred background */}
        <h3 className="relative mt-4 text-lg text-center text-white sm:mt-6 sm:text-xl font-sansita">
          <span className="absolute inset-0 h-20 p-5 bg-black bg-opacity-50 rounded-lg backdrop-blur-sm">
            {service.title}
          </span>
        </h3>
      </div>
    ))}
  </Slider>
</div>





          {/* Desktop view: Show grid */}
          <div className="hidden grid-cols-1 gap-8 ml-20 mr-20 sm:grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
  {services.slice(0, 3).map((service, index) => (
    <motion.div
      key={index}
      className="relative p-6 transition-shadow duration-300 rounded-lg shadow-sm hover:shadow-md"
      whileHover={{ scale: 1.05 }}
      whileInView={{ opacity: 1, y: 0 }}
      initial={{ opacity: 0, y: 50 }}
      transition={{ duration: 0.8 }}
    >
      <div className="border-4 border-white rounded-[17px]">
        <img
          src={service.image}
          alt={service.title}
          className="object-cover w-full h-full rounded-[17px]"
        />
      </div>
      <div className="absolute px-4 py-2 transform -translate-x-1/2 -translate-y-1/2 bg-black bg-opacity-50 rounded-md top-1/2 left-1/2 backdrop-blur-md"> {/* Title centered */}
        <h3 className="text-xl text-white sm:text-2xl font-sansita">{service.title}</h3>
      </div>
    </motion.div>
  ))}
</div>


        </div>
      </div>
    </div>
  );
};

export default TeamSection;
