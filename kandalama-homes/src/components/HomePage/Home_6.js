import React, { useEffect, useRef, useState } from 'react';

const CustomerReviews = () => {
  const reviews = [
    {
      name: 'Kasun Malinda',
      image: '/images/Ellipse 2.jpg', // Replace with the actual image URL
      rating: 5,
      company: 'Sigiri Arts',
      feedback:
        'Sigiri Arts provided outstanding services for our residential construction project. The team demonstrated professionalism, precision, and timely execution, making the experience smooth and hassle-free. Highly recommended for innovative solutions in the Sri Lankan construction industry.',
    },
    {
      name: 'Ayesh Nimantha',
      image: '/images/Ellipse 2 (1).jpg', // Replace with the actual image URL
      rating: 4,
      company: 'Sigiri Arts',
      feedback:
        'The project planning and execution by Sigiri Arts exceeded my expectations. Their focus on sustainability and local materials while maintaining quality sets them apart. Communication could improve slightly, but overall, they deliver great results.',
    },
    {
      name: 'Nimasha Perera',
      image: '/images/images (1).jpeg', // Replace with the actual image URL
      rating: 5,
      company: 'Lanka Builders',
      feedback:
        'We partnered with Lanka Builders for an office renovation project. Their attention to detail and innovative ideas transformed our workspace into a functional and aesthetically pleasing environment. A true leader in Sri Lankan planning and construction.',
    },
    {
      name: 'Tharindu Wijesekara',
      image: '/images/images.jpeg', // Replace with the actual image URL
      rating: 4,
      company: 'Sigiri Arts',
      feedback:
        'Sigiri Arts displayed an excellent commitment to deadlines and quality. Their team’s expertise in modern construction techniques was evident throughout the process. A slight improvement in cost transparency would make them flawless.',
    },
    {
      name: 'Lakmini Silva',
      image: '/images/RoliSrivastavaprofilepicture.jpg', // Replace with the actual image URL
      rating: 5,
      company: 'Ceylon Constructions',
      feedback:
        'Ceylon Constructions delivered an impeccable service for our hotel project. Their design strategies perfectly blended traditional Sri Lankan aesthetics with modern architecture. I appreciate their dedication to customer satisfaction.',
    },
    {
      name: 'Isuru Jayasinghe',
      image: '/images/Mr.-Anish-Pillai.jpg', // Replace with the actual image URL
      rating: 4,
      company: 'Green Build Lanka',
      feedback:
        'Green Build Lanka has a strong focus on eco-friendly construction practices. They helped us design and build a sustainable home within a tight budget. Their expertise in renewable energy integration is commendable.',
    },
    {
      name: 'Heshan Karunaratne',
      image: '/images/Dr.-K-P-Gopal.jpg', // Replace with the actual image URL
      rating: 5,
      company: 'Urban Vision',
      feedback:
        'Urban Vision’s urban planning solutions are exceptional. They helped us develop a community space that’s both functional and environmentally conscious. Their dedication to sustainable growth is inspiring.',
    },
    {
      name: 'Dulmini Rathnayake',
      image: '/images/Kritika-Shah_Circle-01.png', // Replace with the actual image URL
      rating: 5,
      company: 'CeyBuild Co.',
      feedback:
        'CeyBuild Co. provided an outstanding service for our commercial building project. Their innovative designs and precise execution have left us thoroughly impressed. Excellent work!',
    },
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
