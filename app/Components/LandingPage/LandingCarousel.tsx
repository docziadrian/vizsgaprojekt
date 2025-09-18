import React, { useEffect, useState } from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // Carousel CSS
import Image from "next/image";
import carousel1 from "@/public/Kepek/carousel1.png";
import carousel2 from "@/public/Kepek/carousel2.png";

const LandingCarousel = () => {
  const slides = [
    {
      title: "1",
      desc: "Szűrés évfolyam és tantárgy szerint, interaktív gyakorlás.",
      img: carousel1,
      alt: "Kártyák és célzott tanulás",
    },
    {
      title: "2",
      desc: "Feltöltés, értékelés és rendszerezés egy helyen.",
      img: carousel2,
      alt: "Jegyzetek és közösségi megosztás",
    },
    {
      title: "3",
      desc: "Önismeret fejlesztése és empatikus AI tanácsadás.",
      img: carousel1,
      alt: "Pszichológiai tesztek és AI támogatás",
    },
  ];
  // Clone last at start and first at end for seamless bi-directional loop
  const extendedSlides = [slides[slides.length - 1], ...slides, slides[0]];

  const DEFAULT_MS = 500;
  const [currentSlide, setCurrentSlide] = useState(1); // start at first real slide
  const [transitionMs, setTransitionMs] = useState(DEFAULT_MS);
  const [auto, setAuto] = useState(true);

  const firstCloneIndex = 0; // clone of last
  const lastCloneIndex = extendedSlides.length - 1; // clone of first
  const firstRealIndex = 1;
  const lastRealIndex = extendedSlides.length - 2;

  const handleChange = (index: number) => {
    setCurrentSlide(index);
  };

  // Jump logic after animation completes when landing on clones
  useEffect(() => {
    if (currentSlide === firstCloneIndex) {
      const timeout = setTimeout(() => {
        setTransitionMs(0);
        setCurrentSlide(lastRealIndex);
        requestAnimationFrame(() => {
          setTransitionMs(DEFAULT_MS);
        });
      }, transitionMs);
      return () => clearTimeout(timeout);
    }
    if (currentSlide === lastCloneIndex) {
      const timeout = setTimeout(() => {
        setTransitionMs(0);
        setCurrentSlide(firstRealIndex);
        requestAnimationFrame(() => {
          setTransitionMs(DEFAULT_MS);
        });
      }, transitionMs);
      return () => clearTimeout(timeout);
    }
  }, [currentSlide, firstCloneIndex, lastCloneIndex, firstRealIndex, lastRealIndex, transitionMs]);

  return (
    <div className="w-full max-w-xl mx-auto bg-transparent">
      <Carousel
        showArrows={true}
        showStatus={false}
        showIndicators={false}
        showThumbs={false}
        infiniteLoop={false}
        autoPlay={auto}
        interval={3000}
        transitionTime={transitionMs}
        stopOnHover={true}
        swipeable={true}
        emulateTouch={true}
        selectedItem={currentSlide}
        onChange={handleChange}
        onSwipeStart={() => setAuto(false)}
        renderArrowPrev={(clickHandler, hasPrev, label) => (
          <button
            type="button"
            aria-label={label}
            onClick={() => {
              setAuto(false);
              clickHandler();
            }}
            className="absolute left-2 top-1/2 -translate-y-1/2 z-10 bg-white/80 hover:bg-white text-gray-700 rounded-full w-8 h-8 flex items-center justify-center shadow"
          >
            ‹
          </button>
        )}
        renderArrowNext={(clickHandler, hasNext, label) => (
          <button
            type="button"
            aria-label={label}
            onClick={() => {
              setAuto(false);
              clickHandler();
            }}
            className="absolute right-2 top-1/2 -translate-y-1/2 z-10 bg-white/80 hover:bg-white text-gray-700 rounded-full w-8 h-8 flex items-center justify-center shadow"
          >
            ›
          </button>
        )}

        className="rounded-2xl shadow-salient-lg overflow-hidden bg-transparent backdrop-blur-sm"
      >
        {extendedSlides.map((s, idx) => (
          <div key={`${s.title}-${idx}`}>
            <Image
              src={s.img}
              alt={s.alt}
              className="w-full h-64 object-contain"
              width={1000}
              height={1000}
              quality={100}
            />
            <div className="px-6 py-4 text-left">
              <h3 className="text-lg font-semibold text-gray-800">{s.title}</h3>
              <p className="text-sm text-gray-600">{s.desc}</p>
            </div>
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default LandingCarousel;
