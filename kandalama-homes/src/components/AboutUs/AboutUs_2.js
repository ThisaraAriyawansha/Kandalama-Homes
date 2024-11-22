import React from "react";
import { motion } from "framer-motion"; // Import motion from framer-motion

const OurHistory = () => {
  return (
    <div className="px-6 py-12 bg-white md:px-16">
      <div className="max-w-6xl mx-auto">
        {/* Title Section */}
        <motion.h2
  className="mb-8 text-4xl text-center text-green-800 sm:text-5xl md:text-6xl font-prata"
  initial={{ opacity: 0, y: -50 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 1 }}
>
  Our History
</motion.h2>


        {/* Content Section */}
        <div className="grid gap-8 md:grid-cols-2">
          {/* Left - Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            >
            <h3 className="mb-4 text-xl text-center font-prata sm:text-left sm:text-2xl">
                WHO WE ARE
            </h3>
            <p className="mb-4 text-black font-poppins sm:leading-[2.5] text-center sm:text-left sm:text-base leading-normal">
            Kandalama Homes was founded with a vision to redefine construction and landscape architecture in Sri Lanka. From humble beginnings, we have grown into a trusted name, known for delivering exceptional projects that blend creativity, functionality, and sustainability. With years of experience and a passion for excellence, our journey has been marked by countless success stories and lasting relationships with our clients. At Kandalama Homes, our history is built on a foundation of trust, innovation, and a commitment to creating spaces that stand the test of time
            </p>

            </motion.div>


          {/* Right - Image Grid */}
          <div className="hidden md:block">
          <div className="grid grid-cols-3 gap-6 ">
            {/* Top Left Image (Larger, based on Golden Ratio) */}
            <motion.img
              src="https://s3-alpha-sig.figma.com/img/5725/e9b4/326d2352d6b3186f7bee1869e69dfe20?Expires=1733097600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Y5OK0Yf9ZrSJWpjzMS~Mk5TqqOq8-SEygUxbUxUglchHNWDBqhGR5T1zWJSPgFado5vkDfKf2fcwQrCbthf8iu4YrT2jUWdGeJYgo9aoByYC2bT80pxDCa5F1e~RcUSUwAJBX-f8Caqb-A6G~9HX6bIcQGh-dfmhFxwISugdmQLxdLSlUsxdZP3lDi4xFvkgblhBrIXDXvJYe1XO5NSy-m73LO~-hQOVwjaDRU-rdyaKxcngVgbX2pv4Jk4eHzvdj8rVP3oQK1NslovumFbvTsWujVRNuG7KsWhTsjzwLs7UMdUsMZSgGWyk0KbuuSITYE4xQ~yo5sJMhVBa0RlUtA__"
              alt="Top Left"
              className="w-full col-span-2 row-span-2 rounded-lg shadow-md h-80"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 1 }}
            />

            {/* Top Right Image (Smaller) */}
            <motion.img
              src="https://s3-alpha-sig.figma.com/img/efcd/a149/2da1148aa0259570a4bc587e509bbbdd?Expires=1733097600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Cto-LbeuVMHfCQeyX4rUvAWYm4K3T-uU-cZqsLFwm4hok0WO7wwcvaJ6n~-H8lXHsK4q6--00bLrNNBWS7J1jX2w5haTTq2Y3KGYCzRij2rsEtvY3--L747Q17Ar3jZ0Qf39eUXBzG~iPEFXpwRmPem1Pe~eAFY4sl732JMSJKBNu9NtcFhXwlihbcs~9k4bqdookrhlbvEgwI~uEGGrSgTWwo4yRGPQEMyIEldnFG18v4rO1rFUKRzHaPwD6yRVRFG9-L0khDxWnh9iFkzEF8pExLafr4mRgrOy50hY62c3lJkNQVyNgr3S-bhrcHFI5~yqUT01b0hogfQ8O16NVA__"
              alt="Top Right"
              className="w-2/3 h-auto rounded-lg shadow-md"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 1 }}
            />

            {/* Middle Left Image */}
            <motion.img
              src="https://s3-alpha-sig.figma.com/img/cb2b/d03c/fa9d921ef24dce4755f2c537b467294c?Expires=1733097600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Zip3rnefqFVMSVguy4-roo8nJdIvSHEjMHaq9MrpUF1YFSoeaSNwWWfwIoTOXw3pbgQH-BcrvVodZpFQtZ1EqoHbjw2R00SgbRNKsk73oxQSr8DPX9ba8Isk5J6KTjEyEGlsCkUaSy0jNOfsx1HQs0aMzSbbwDz9uamJSJR2~ru4BLc90RagaYvCS9Hk~ZF-vHoUsKjeBtKR9bzyeacjFwmEThsNlCkT2daMVJl1FX0QuIYG7bpEb48d6KmHfAcSrXK5bC-HIIAbYVA~ScIUKm1jxWOKQ3jV-rGtu6Zq28EWqYSBQUrn~21m~GL29j1slKCyo-H7qzh1ysLmIqj2XQ__"
              alt="Middle Left"
              className="w-2/3 rounded-lg shadow-md"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 1 }}
            />

            {/* Middle Right Image */}
            <motion.img
              src="https://s3-alpha-sig.figma.com/img/60da/b4a3/15a09469f8e42864c8d808b51b0a03c2?Expires=1733097600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=YLliejqxW5ELKNwBDJ8k1UIVO4O-L1F6wJvz5I2iiJxllT-vfJ4mFEHT3UbGSa88f-OUcpLeIqoAYVJ1jdMuVPqmckSr0VyjZIoMlohceA5y9h~FhwwzpRZrr-3TgDmM7TUxWpXFgc-P~h4O3X3y5DQ-PzhgIKPZn83iBE3yR~axEl~UpcLNijxM0E8vpsYb-H9kYZsC1k02ZZch8u1Z7ieDAob01rZ9Ozyc4F~LS7WIGZ8wd9Hj-caNVIzX~65wuj99Iqqut1xk~lQVo-5bOngUg~kgOK9L1Cjd32ggEPEBBZgxk1lZNn-29UZ9eAnaosIkz8T5hAFsLtas5j0rXw__"
              alt="Middle Right"
              className="w-2/3 rounded-lg shadow-md"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 1 }}
            />

            {/* Bottom Left Image */}
            <motion.img
              src="https://s3-alpha-sig.figma.com/img/4692/1699/c861a4893f6ffd31eb73ddf4678e2ee6?Expires=1733097600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=SyFXTUZVNr0Imhmz0AP8SQpGjwXQvhmntPJ8wHCKwVMNcU26ChYoDaY~aBHd0pLDbRLptZ4MY5HpllzUxiun9yK49rnBtKnSD4-6i47RAiflmYW9ZgQ2tOa9yAwDB0dij-dwWLBQ3eRlw2QRrVRaNO-M5eyttQiLRFKKOLwTsZzE2PAdbk9~k1VaIe4XY4VvXJHdEu6c9SGpwUQrUlrWYjxumVIdUk9Kyh78tBMLI5y41pHaoW-sgIt9xmINKKuBWrfpv91vd2hsIpZ4SXAAY0fyCxA~EMW4HrNVifjkgJQiOWXWbY3KmK9Zh5Z6qQiH00Oooh7OS7tPKLzarsvEPg__"
              alt="Bottom Left"
              className="w-2/3 rounded-lg shadow-md"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 1 }}
            />

            {/* Bottom Right Image */}
            <motion.img
              src="https://s3-alpha-sig.figma.com/img/e591/98ac/137646a7851579b7643958036e2f8540?Expires=1733097600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=eruO9artFBrcRfsyUvgoXIxvJz25emWc05xDOmFZDULTuEcU9UaBRtIG~Ar04NzJwN5EQCZOPsL0VLToDKQwxHYqbo5vqGL6D4VYg0XZeAyXAj1e6kNsrvfndbPag~33AJkfnkJmtihLJOCE3KEDfWvojd0M-cusPU0fwRiC-l2MXiLNxjOPt6MqcaiQIPUfgZuMpJ5r~wS4eWHOQWow9mKmxZsX6s319P1P1s-LhtkEe77K86J-h-LCat2OObIiYmyexMWzMFr~yGsXKkLe5tg-A3TSMoLIgRo4ISaBIm8MnLC4DuykJhmk8QOFympM-JglW6NOJNEKwo6ooWxJFg__"
              alt="Bottom Right"
              className="w-2/3 rounded-lg shadow-md"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 1 }}
            />
          </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurHistory;
