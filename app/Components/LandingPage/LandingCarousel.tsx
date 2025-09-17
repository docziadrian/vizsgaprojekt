import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // Carousel CSS
import Image from "next/image";
import carousel1 from "@/public/Kepek/carousel1.png";

const LandingCarousel = () => {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
      slidesToSlide: 3, // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      slidesToSlide: 2, // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
    },
  };
  return (
    <div className="w-full max-w-4xl mx-auto mt-8">
      <Carousel
        responsive={responsive}
        showArrows={true}
        showStatus={false}
        showIndicators={true}
        infiniteLoop={true}
        autoPlay={true}
        interval={3000}
        transitionTime={500}
        stopOnHover={true}
        swipeable={true}
        emulateTouch={true}
        className="rounded-lg shadow-lg"
      >
        <div>
          <Image
            src={carousel1}
            alt="Carousel Image 1"
            className="rounded-lg"
            width={800}
            height={400}
          />
          <p className="legend">Item 1</p>
        </div>
        <div>
          <Image
            src={carousel1}
            alt="Carousel Image 2"
            className="rounded-lg"
            width={800}
            height={400}
          />
          <p className="legend">Item 2</p>
        </div>
        <div>
          <Image
            src={carousel1}
            alt="Carousel Image 3"
            className="rounded-lg"
            width={800}
            height={400}
          />
          <p className="legend">Item 3</p>
        </div>
      </Carousel>
    </div>
  );
};

export default LandingCarousel;
