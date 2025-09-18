import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // Carousel CSS
import Image from "next/image";
import carousel1 from "@/public/Kepek/carousel1.png";

const LandingCarousel = () => {
  return (
    <div className="w-full max-w-xl mx-auto">
      <Carousel
        showArrows={true}
        showStatus={false}
        showIndicators={true}
        showThumbs={false}
        infiniteLoop={true}
        autoPlay={true}
        interval={3000}
        transitionTime={500}
        stopOnHover={true}
        swipeable={true}
        emulateTouch={true}
        className="rounded-2xl shadow-salient-lg overflow-hidden bg-white/60 backdrop-blur-sm"
      >
        <div>
          <Image
            src={carousel1}
            alt="Kártyák és célzott tanulás"
            className="w-full h-64 object-cover"
            width={900}
            height={360}
          />
          <div className="px-6 py-4 text-left">
            <h3 className="text-lg font-semibold text-gray-800">Kártyák és célzott tanulás</h3>
            <p className="text-sm text-gray-600">Szűrés évfolyam és tantárgy szerint, interaktív gyakorlás.</p>
          </div>
        </div>
        <div>
          <Image
            src={carousel1}
            alt="Jegyzetek és közösségi megosztás"
            className="w-full h-64 object-cover"
            width={900}
            height={360}
          />
          <div className="px-6 py-4 text-left">
            <h3 className="text-lg font-semibold text-gray-800">Jegyzetek és közösségi megosztás</h3>
            <p className="text-sm text-gray-600">Feltöltés, értékelés és rendszerezés egy helyen.</p>
          </div>
        </div>
        <div>
          <Image
            src={carousel1}
            alt="Pszichológiai tesztek és AI támogatás"
            className="w-full h-64 object-cover"
            width={900}
            height={360}
          />
          <div className="px-6 py-4 text-left">
            <h3 className="text-lg font-semibold text-gray-800">Pszichológiai tesztek és AI támogatás</h3>
            <p className="text-sm text-gray-600">Önismeret fejlesztése és empatikus AI tanácsadás.</p>
          </div>
        </div>
      </Carousel>
    </div>
  );
};

export default LandingCarousel;
