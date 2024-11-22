import React, { useEffect, useRef, useState } from 'react';

const CustomerReviews = () => {
  const reviews = [
    {
      name: 'Kasun Malinda',
      image: 'https://s3-alpha-sig.figma.com/img/902f/3491/4850bc0007f8f9d9194789eb4b743975?Expires=1733097600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=XzuMJo18peb8X7vicaU9UvEu8Vuzmg89AOAq6ZrpNElttFKyvPtGuk2GCkxWCJWl6EL5M1ihN~N9mG5olTEpaUo3ngM-rW-wxrSj2H5faFc9wxOVKATybQoJcTkb1LblzKrGRWwqSEw1nJ08tJpRaFLGKxZ5DhbAif801IMlVxFxHG2qIYPd-fbrxtIFeh7g00xDq9aweM4RfM732YxCqJyG2VErDmlOdzNcx~5NncFYdWAq9ss9LD54ZLEm0D39c0JH2CDXQvHgHL6W2q6F8AGMlJFuZIxNSF-QCaiCtil7aRu7AZhtrL2moAeuRbVP~JCP96-7c3jpKZTFyuVP~w__', // Replace with the actual image URL
      rating: 5,
      company: 'Sigiri Arts',
      feedback:
        'A construction site is a bustling environment where buildings, roads, or other infrastructure projects come to life. It is filled with the sights and sounds of progress, including heavy machinery like cranes, excavators, and bulldozers, alongside teams of workers in safety gear collaborating to meet project goals. Safety is a top priority.',
    },
    {
      name: 'Ayesh Nimantha',
      image: 'https://s3-alpha-sig.figma.com/img/05bc/b56e/115155a54dcccbbf19e96a53b3a00d26?Expires=1733097600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=OWKboMAzQBgSbAtf06VTySk-84PF6YfTgzJtTOxl9gCS7tVeq~OfI07TLjlthdJ3fsZucuN~AmHWWRokapxn4QKI36SmsaIixNBdnToCYRUCXFpesyziVoJqWJxZsnm~YYsbOMDlAjjIRmhDQoPAkmAsLug-kIi2Q-FUOkTnRYC0OOYGezFOGlJoD5h-n~dzTqyrfy0833YhvMnc57kA8yYWS-4xYLdvPowjiNordJxtdEUVKQP09Df6umzj~1RGdI5lSp8-Y~BButrgyo7R8aiUFPpNrphI5ZWtWkUUqc~sqPhX-WejWJuBbFWoxe37za9L1-PeMdTPN4hVYlYxMQ__', // Replace with the actual image URL
      rating: 4,
      company: 'Sigiri Arts',
      feedback:
        'A construction site is a bustling environment where buildings, roads, or other infrastructure projects come to life. It is filled with the sights and sounds of progress, including heavy machinery like cranes, excavators, and bulldozers, alongside teams of workers in safety gear collaborating to meet project goals. Safety is a top priority.',
    },
    {
        name: 'Kasun Malinda',
        image: 'https://s3-alpha-sig.figma.com/img/902f/3491/4850bc0007f8f9d9194789eb4b743975?Expires=1733097600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=XzuMJo18peb8X7vicaU9UvEu8Vuzmg89AOAq6ZrpNElttFKyvPtGuk2GCkxWCJWl6EL5M1ihN~N9mG5olTEpaUo3ngM-rW-wxrSj2H5faFc9wxOVKATybQoJcTkb1LblzKrGRWwqSEw1nJ08tJpRaFLGKxZ5DhbAif801IMlVxFxHG2qIYPd-fbrxtIFeh7g00xDq9aweM4RfM732YxCqJyG2VErDmlOdzNcx~5NncFYdWAq9ss9LD54ZLEm0D39c0JH2CDXQvHgHL6W2q6F8AGMlJFuZIxNSF-QCaiCtil7aRu7AZhtrL2moAeuRbVP~JCP96-7c3jpKZTFyuVP~w__', // Replace with the actual image URL
        rating: 5,
        company: 'Sigiri Arts',
        feedback:
          'A construction site is a bustling environment where buildings, roads, or other infrastructure projects come to life. It is filled with the sights and sounds of progress, including heavy machinery like cranes, excavators, and bulldozers, alongside teams of workers in safety gear collaborating to meet project goals. Safety is a top priority.',
      },
      {
        name: 'Ayesh Nimantha',
        image: 'https://s3-alpha-sig.figma.com/img/05bc/b56e/115155a54dcccbbf19e96a53b3a00d26?Expires=1733097600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=OWKboMAzQBgSbAtf06VTySk-84PF6YfTgzJtTOxl9gCS7tVeq~OfI07TLjlthdJ3fsZucuN~AmHWWRokapxn4QKI36SmsaIixNBdnToCYRUCXFpesyziVoJqWJxZsnm~YYsbOMDlAjjIRmhDQoPAkmAsLug-kIi2Q-FUOkTnRYC0OOYGezFOGlJoD5h-n~dzTqyrfy0833YhvMnc57kA8yYWS-4xYLdvPowjiNordJxtdEUVKQP09Df6umzj~1RGdI5lSp8-Y~BButrgyo7R8aiUFPpNrphI5ZWtWkUUqc~sqPhX-WejWJuBbFWoxe37za9L1-PeMdTPN4hVYlYxMQ__', // Replace with the actual image URL
        rating: 4,
        company: 'Sigiri Arts',
        feedback:
          'A construction site is a bustling environment where buildings, roads, or other infrastructure projects come to life. It is filled with the sights and sounds of progress, including heavy machinery like cranes, excavators, and bulldozers, alongside teams of workers in safety gear collaborating to meet project goals. Safety is a top priority.',
      },
      {
        name: 'Ayesh ',
        image: 'https://s3-alpha-sig.figma.com/img/05bc/b56e/115155a54dcccbbf19e96a53b3a00d26?Expires=1733097600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=OWKboMAzQBgSbAtf06VTySk-84PF6YfTgzJtTOxl9gCS7tVeq~OfI07TLjlthdJ3fsZucuN~AmHWWRokapxn4QKI36SmsaIixNBdnToCYRUCXFpesyziVoJqWJxZsnm~YYsbOMDlAjjIRmhDQoPAkmAsLug-kIi2Q-FUOkTnRYC0OOYGezFOGlJoD5h-n~dzTqyrfy0833YhvMnc57kA8yYWS-4xYLdvPowjiNordJxtdEUVKQP09Df6umzj~1RGdI5lSp8-Y~BButrgyo7R8aiUFPpNrphI5ZWtWkUUqc~sqPhX-WejWJuBbFWoxe37za9L1-PeMdTPN4hVYlYxMQ__', // Replace with the actual image URL
        rating: 4,
        company: 'Sigiri Arts',
        feedback:
          'A construction site is a bustling environment where buildings, roads, or other infrastructure projects come to life. It is filled with the sights and sounds of progress, including heavy machinery like cranes, excavators, and bulldozers, alongside teams of workers in safety gear collaborating to meet project goals. Safety is a top priority.',
      },
      {
        name: 'Kasun ',
        image: 'https://s3-alpha-sig.figma.com/img/902f/3491/4850bc0007f8f9d9194789eb4b743975?Expires=1733097600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=XzuMJo18peb8X7vicaU9UvEu8Vuzmg89AOAq6ZrpNElttFKyvPtGuk2GCkxWCJWl6EL5M1ihN~N9mG5olTEpaUo3ngM-rW-wxrSj2H5faFc9wxOVKATybQoJcTkb1LblzKrGRWwqSEw1nJ08tJpRaFLGKxZ5DhbAif801IMlVxFxHG2qIYPd-fbrxtIFeh7g00xDq9aweM4RfM732YxCqJyG2VErDmlOdzNcx~5NncFYdWAq9ss9LD54ZLEm0D39c0JH2CDXQvHgHL6W2q6F8AGMlJFuZIxNSF-QCaiCtil7aRu7AZhtrL2moAeuRbVP~JCP96-7c3jpKZTFyuVP~w__', // Replace with the actual image URL
        rating: 5,
        company: 'Sigiri Arts',
        feedback:
          'A construction site is a bustling environment where buildings, roads, or other infrastructure projects come to life. It is filled with the sights and sounds of progress, including heavy machinery like cranes, excavators, and bulldozers, alongside teams of workers in safety gear collaborating to meet project goals. Safety is a top priority.',
      },

      {
        name: 'Kasun ',
        image: 'https://s3-alpha-sig.figma.com/img/902f/3491/4850bc0007f8f9d9194789eb4b743975?Expires=1733097600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=XzuMJo18peb8X7vicaU9UvEu8Vuzmg89AOAq6ZrpNElttFKyvPtGuk2GCkxWCJWl6EL5M1ihN~N9mG5olTEpaUo3ngM-rW-wxrSj2H5faFc9wxOVKATybQoJcTkb1LblzKrGRWwqSEw1nJ08tJpRaFLGKxZ5DhbAif801IMlVxFxHG2qIYPd-fbrxtIFeh7g00xDq9aweM4RfM732YxCqJyG2VErDmlOdzNcx~5NncFYdWAq9ss9LD54ZLEm0D39c0JH2CDXQvHgHL6W2q6F8AGMlJFuZIxNSF-QCaiCtil7aRu7AZhtrL2moAeuRbVP~JCP96-7c3jpKZTFyuVP~w__', // Replace with the actual image URL
        rating: 5,
        company: 'Sigiri Arts',
        feedback:
          'A construction site is a bustling environment where buildings, roads, or other infrastructure projects come to life. It is filled with the sights and sounds of progress, including heavy machinery like cranes, excavators, and bulldozers, alongside teams of workers in safety gear collaborating to meet project goals. Safety is a top priority.',
      },
      {
        name: 'Ayesh ',
        image: 'https://s3-alpha-sig.figma.com/img/05bc/b56e/115155a54dcccbbf19e96a53b3a00d26?Expires=1733097600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=OWKboMAzQBgSbAtf06VTySk-84PF6YfTgzJtTOxl9gCS7tVeq~OfI07TLjlthdJ3fsZucuN~AmHWWRokapxn4QKI36SmsaIixNBdnToCYRUCXFpesyziVoJqWJxZsnm~YYsbOMDlAjjIRmhDQoPAkmAsLug-kIi2Q-FUOkTnRYC0OOYGezFOGlJoD5h-n~dzTqyrfy0833YhvMnc57kA8yYWS-4xYLdvPowjiNordJxtdEUVKQP09Df6umzj~1RGdI5lSp8-Y~BButrgyo7R8aiUFPpNrphI5ZWtWkUUqc~sqPhX-WejWJuBbFWoxe37za9L1-PeMdTPN4hVYlYxMQ__', // Replace with the actual image URL
        rating: 4,
        company: 'Sigiri Arts',
        feedback:
          'A construction site is a bustling environment where buildings, roads, or other infrastructure projects come to life. It is filled with the sights and sounds of progress, including heavy machinery like cranes, excavators, and bulldozers, alongside teams of workers in safety gear collaborating to meet project goals. Safety is a top priority.',
      },
    
    
    // Add more reviews as needed
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const reviewRef = useRef();

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => {
        return prevIndex + 1 >= reviews.length ? 0 : prevIndex + 1;
      });
    }, 5000); // 5-second interval to change the review
    return () => clearInterval(interval);
  }, [reviews.length]);

  return (
    <section className="py-16 bg-gray-50">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <h2 className="mb-12 text-2xl text-center text-black sm:text-left font-quando">
          CUSTOMER REVIEWS
        </h2>
        <div
          className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4"
          ref={reviewRef}
        >
          {/* Display reviews on mobile as a slider */}
      {window.innerWidth < 640 ? (
        <div className="flex justify-center overflow-x-hidden">
          <div className="flex flex-nowrap">
            {reviews.slice(currentIndex, currentIndex + 1).map((review, index) => (
              <div
                key={index}
                className="flex flex-col items-center p-6 mx-4 transition-shadow duration-300 bg-white rounded-lg shadow-lg hover:shadow-xl w-80"
              >
                <div className="flex items-center justify-center mb-4 space-x-4">
                  <img
                    src={review.image}
                    alt={review.name}
                    className="w-12 h-12 rounded-full"
                  />
                  <div className="flex flex-col">
                    <h3 className="text-lg text-customGreen font-Poppins">
                      {review.name}
                    </h3>
                    <div className="flex items-center justify-center mt-1 space-x-2">
                      <div className="flex items-center">
                        {Array(review.rating)
                          .fill()
                          .map((_, i) => (
                            <span key={i} className="text-xs text-yellow-500">
                              ★
                            </span>
                          ))}
                      </div>
                      <p className="text-sm text-gray-500">{review.company}</p>
                    </div>
                  </div>
                </div>
                <p className="text-sm leading-6 text-center text-black font-Poppins">
                  {review.feedback}
                </p>
                <div
                  className="w-full mt-4"
                  style={{ borderBottom: '3px solid #D1D5DB' }}
                ></div>
              </div>
            ))}
          </div>
        </div>
      ) : (
        // Display reviews in grid layout for desktop
        reviews.slice(currentIndex, currentIndex + 4).map((review, index) => (
          <div
            key={index}
            className="flex flex-col items-center p-6 transition-shadow duration-300 bg-white rounded-lg shadow-lg hover:shadow-xl"
          >
            <div className="flex items-center mb-4 space-x-4">
              <img
                src={review.image}
                alt={review.name}
                className="w-12 h-12 rounded-full"
              />
              <div className="flex flex-col">
                <h3 className="text-lg text-customGreen font-Poppins">
                  {review.name}
                </h3>
                <div className="flex items-center mt-1 space-x-2">
                  <div className="flex items-center">
                    {Array(review.rating)
                      .fill()
                      .map((_, i) => (
                        <span key={i} className="text-xs text-yellow-500">
                          ★
                        </span>
                      ))}
                  </div>
                  <p className="text-sm text-gray-500">{review.company}</p>
                </div>
              </div>
            </div>
            <p className="text-sm leading-6 text-left text-black font-Poppins">
              {review.feedback}
            </p>
            <div
              className="w-full mt-4"
              style={{ borderBottom: '3px solid #D1D5DB' }}
            ></div>
          </div>
        ))
      )}
    </div>

        <a
          href=""
          className="block p-10 text-center text-black transition duration-300 sm:text-right font-poppins hover:text-blue-700"
        >
          Add Your Review
        </a>
      </div>
    </section>
  );
};

export default CustomerReviews;
