import React, { useEffect, useRef } from "react";

const Video = () => {
  const videoRef = useRef(null);

  useEffect(() => {
    const videoElement = videoRef.current;

    const handleScroll = () => {
      if (videoElement) {
        const rect = videoElement.getBoundingClientRect();
        const isVisible = rect.top >= 0 && rect.bottom <= window.innerHeight;

        if (isVisible && !videoElement.paused) {
          videoElement.play();
        } else if (!isVisible && !videoElement.paused) {
          videoElement.pause();
        }
      }
    };

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          videoElement.play();
        } else {
          videoElement.pause();
        }
      },
      { threshold: 0.5 } // Play when 50% of the video is in view
    );

    if (videoElement) {
      observer.observe(videoElement);
    }

    return () => {
      if (videoElement) {
        observer.disconnect();
      }
    };
  }, []);

  const videoUrl =
    "https://s3-figma-videos-production-sig.figma.com/video/1337030861483380104/TEAM/3993/4a10/-9d79-4e22-a4eb-9c980600b937?Expires=1733097600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=gYU8dd7AZUzPXveHTtRSJJ3ja0IprHzgnwDCd1rSDORYQHosyXIbKX~fCrDuIJZ-id~cWFNGVOMGfCkp6Q1x1hpYmLmymjPzsjvBhmqdCf6uDmniMtkS-4mXyCgpcuYCQ01uIYigEB91wRbPUtwKGxY5A98kQNdcmVWzQSSr7igXvE2HcY8iHbJbOBsDTrXUwrY9yCre46W-fSm742mKBuLY1cayKH8XpqA2BAKjcspRJm~iamMdVRID-IMlWML-ix3uJ1dgzDNk4l8sUt~on2pBlgOe79ctvCXBmZR-0so-n2XPIrnJmhPRR0EqplRvV~U8EJX1-RWY85tVi1cGWQ__"; // Replace with your video URL

  return (
    <div className="mt-10 mb-20 sm:mb-10">
    <div
      className="p-0 mb-10 md:p-20 video-container"
      style={{
        width: "100%",
        overflow: "hidden",
        margin: "0 auto",
        maxWidth: "1800px",
      }}
    >
      <video
        ref={videoRef}
        className="w-full"
        loop
        preload="auto"
        style={{
          width: "100%", // Full width
          height: "auto", // Flexible height
          maxHeight: "500px", // Max height for PC
          objectFit: "cover", // Ensure video covers the area without distortion
        }}
      >
        <source src={videoUrl} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
    </div>
  );
};

export default Video;
