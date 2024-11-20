import React from "react";

const Services = () => {
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

  return (
    <div className="min-h-screen overflow-hidden bg-white text-white border-4 border-white rounded-[47px]">
      {/* Hero Section */}
      <section className="relative flex items-center justify-center w-full h-screen">
        {/* Background Image */}
        <img
          src="https://s3-alpha-sig.figma.com/img/60da/b4a3/15a09469f8e42864c8d808b51b0a03c2?Expires=1733097600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=YLliejqxW5ELKNwBDJ8k1UIVO4O-L1F6wJvz5I2iiJxllT-vfJ4mFEHT3UbGSa88f-OUcpLeIqoAYVJ1jdMuVPqmckSr0VyjZIoMlohceA5y9h~FhwwzpRZrr-3TgDmM7TUxWpXFgc-P~h4O3X3y5DQ-PzhgIKPZn83iBE3yR~axEl~UpcLNijxM0E8vpsYb-H9kYZsC1k02ZZch8u1Z7ieDAob01rZ9Ozyc4F~LS7WIGZ8wd9Hj-caNVIzX~65wuj99Iqqut1xk~lQVo-5bOngUg~kgOK9L1Cjd32ggEPEBBZgxk1lZNn-29UZ9eAnaosIkz8T5hAFsLtas5j0rXw__"
          alt="Kandalama Homes"
          className="hidden object-cover w-full h-full md:block" // Hide image on mobile devices
        />

        {/* Overlay */}
        <div
          className="absolute inset-0 z-10 flex flex-col items-start justify-start px-4 text-left"
          style={{
            backgroundColor: "rgba(0, 90, 78, 0.49)", // Equivalent to #005A4E7D
          }}
        >
          <h2 className="mb-12 text-4xl font-bold text-center mt-20 font-quando leading-[44px] ml-32 text-white">
            OUR SERVICES
          </h2>
          <div className="grid grid-cols-1 gap-8 mx-auto sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-3 max-w-7xl">
            {services.map((service, index) => (
              <div
                key={index}
                className="relative overflow-hidden shadow-lg rounded-xl border-4 border-white h-[500px] max-w-[300px] mx-auto group hover:scale-105 transform transition-all duration-300 ease-in-out"
              >
                {/* Service Image */}
                <img
                  src={service.image}
                  alt={service.title}
                  className="object-cover w-full h-full"
                />

                {/* Text Overlay with Blur */}
                <div className="absolute inset-0 flex items-center justify-center transition-all duration-300 bg-black bg-opacity-0 group-hover:bg-opacity-50">
                  <div className="px-4 py-2 bg-black bg-opacity-50 rounded-md">
                    <h3 className="text-[20px] sm:text-[25px] md:text-[30px] leading-[50px] font-[400] text-center text-white font-sansita">
                      {service.title}
                    </h3>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
