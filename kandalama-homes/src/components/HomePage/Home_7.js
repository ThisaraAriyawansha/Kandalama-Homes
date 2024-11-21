import React from "react";

const ContactUs = () => {
  return (
    <div className="w-full p-10 bg-white">
      {/* Title Section */}
      <div className="py-6 text-center">
        <h2 className="text-3xl text-black uppercase font-quando">Housing Construction</h2>
      </div>

      {/* Container Section with Two Parts */}
      <div className="flex flex-wrap justify-center w-3/4 px-6 py-4 mx-auto">
        {/* Left Section */}
        <div className="w-full px-4 mb-6 text-center sm:w-1/2">
          <img
            src="https://s3-alpha-sig.figma.com/img/e8ec/db66/63275c99471bb9033cb61dc3c4236628?Expires=1733097600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=OM90QUlwNu5~KY5ehhCo1EXVQaGA5jg~Ic7Djb8u3uOENotALYxo8WjzDci6FlHGouoL~zPG8HsMYat7osqOfaTDTzySsE5vBQ4aOduhUkRSAoPYGW7GYSXiTGI8WR6Wz7YfAKTPaxrEjIOsK-KIlnyQ7EhmbM68do3SkX37HyWRTgaoOa8rnDYTZZt7wcsZpw6Hj4LRyXrpTHlq9TDWfjhM5AJbfro0yEO7bvhpNJ7FZ6hDltH4kQkz3jcDgwtNUfNLOlriRNLNAmpKZsKDL7Gs12UbK86kovmlzehkOp7gSMkdNVb-T6a75tEm-iM-EolE21wNpK8RlENkobWqrw__"
            alt="Image 1"
            className="object-cover w-3/4 mx-auto transition-transform duration-300 transform rounded-lg shadow-md h-96 hover:scale-105"
          />
          <h3 className="mt-4 text-lg font-poppins hover:text-blue-500">Modern Housing Development</h3>
          <p className="mt-2 text-black font-poppins hover:text-blue-500">
            Developing affordable and modern homes with eco-<br />friendly designs.
          </p>
        </div>

        {/* Right Section */}
        <div className="w-full px-4 mb-6 text-center sm:w-1/2">
          <img
            src="https://s3-alpha-sig.figma.com/img/4269/8a77/889533410f30d936a763c8e063b05828?Expires=1733097600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=kHkmP9-GP277Yrv64iBw-OgmtEbbV9lYDY4yS2RoW16eHYbwqhi72OnDtCy4aVReN56Qdl-3Ym1bfvCDyeGB~jqDjC7~Q5S~M6BclGyXUhMkvyJjMlDPxbTIiwe6q73zjMgp3hXYY1UhDTyBdYMkzdVE8hgvIDQgP9kCuCK3Lo6uvkFjyh-PhTKzfq-aMTnv-J8qLzVCJRhqkZAah4DxnkZb5c4IAnJGjHvJgRxp-WAboXsDVUhNST48QC-gIKbQYV-kEKnqJY6SraL22zOIBE9IFUN10kSP9CB8WjlUh6v~wcdbzyAlxpDaIEclIZsvnFwYE-svh0KURX32rQgcGA__"
            alt="Image 2"
            className="object-cover w-3/4 mx-auto transition-transform duration-300 transform rounded-lg shadow-md h-96 hover:scale-105"
          />
          <h3 className="mt-4 text-lg text-black font-poppins hover:text-blue-500">Residential Community</h3>
          <p className="mt-2 text-black font-poppins hover:text-blue-500">
            Building sustainable communities with all necessary amenities.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
