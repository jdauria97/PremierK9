import Section from "./Section";
import {
  carousel1,
  carousel2,
  carousel3,
  carousel4,
  carousel5,
  carousel6,
  carousel7,
  carousel8,
} from "../assets";
import { useState } from "react";

const Carousel = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const totalSlides = 8;

  const handlePrev = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === 0 ? totalSlides - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === totalSlides - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <Section
      id="carousel"
      className="container relative flex justify-center items-center"
    >
      <div
        id="default-carousel"
        className="relative w-[50vw] h-[50vw] md:w-[40vw] md:h-[40vw] lg:w-[30vw] lg:h-[30vw] xl:w-[25vw] xl:h-[25vw] 2xl:w-[20vw] 2xl:h-[20vw] overflow-hidden rounded-lg"
        data-carousel="slide"
      >
        <div className="relative w-full h-full overflow-hidden rounded-lg flex justify-center items-center">
          <div
            className={`duration-700 ease-in-out flex justify-center items-center ${
              activeIndex === 0 ? "block" : "hidden"
            }`}
            data-carousel-item
          >
            <img
              src={carousel1}
              alt="..."
              className="w-full h-full object-cover"
            />
          </div>
          <div
            className={`duration-700 ease-in-out flex justify-center items-center ${
              activeIndex === 1 ? "block" : "hidden"
            }`}
            data-carousel-item
          >
            <img
              src={carousel2}
              alt="..."
              className="w-full h-full object-cover"
            />
          </div>
          <div
            className={`duration-700 ease-in-out flex justify-center items-center ${
              activeIndex === 2 ? "block" : "hidden"
            }`}
            data-carousel-item
          >
            <img
              src={carousel3}
              alt="..."
              className="w-full h-full object-cover"
            />
          </div>
          <div
            className={`duration-700 ease-in-out flex justify-center items-center ${
              activeIndex === 3 ? "block" : "hidden"
            }`}
            data-carousel-item
          >
            <img
              src={carousel4}
              alt="..."
              className="w-full h-full object-cover"
            />
          </div>
          <div
            className={`duration-700 ease-in-out flex justify-center items-center ${
              activeIndex === 4 ? "block" : "hidden"
            }`}
            data-carousel-item
          >
            <img
              src={carousel5}
              alt="..."
              className="w-full h-full object-cover"
            />
          </div>
          <div
            className={`duration-700 ease-in-out flex justify-center items-center ${
              activeIndex === 5 ? "block" : "hidden"
            }`}
            data-carousel-item
          >
            <img
              src={carousel6}
              alt="..."
              className="w-full h-full object-cover"
            />
          </div>
          <div
            className={`duration-700 ease-in-out flex justify-center items-center ${
              activeIndex === 6 ? "block" : "hidden"
            }`}
            data-carousel-item
          >
            <img
              src={carousel7}
              alt="..."
              className="w-full h-full object-cover"
            />
          </div>
          <div
            className={`duration-700 ease-in-out flex justify-center items-center ${
              activeIndex === 7 ? "block" : "hidden"
            }`}
            data-carousel-item
          >
            <img
              src={carousel8}
              alt="..."
              className="w-full h-full object-cover"
            />
          </div>
        </div>
        <div className="absolute z-30 flex -translate-x-1/2 bottom-5 left-1/2 space-x-3 rtl:space-x-reverse">
          <button
            type="button"
            className="w-3 h-3 rounded-full"
            aria-current="true"
            aria-label="Slide 1"
            data-carousel-slide-to="0"
          ></button>
          <button
            type="button"
            className="w-3 h-3 rounded-full"
            aria-current="false"
            aria-label="Slide 2"
            data-carousel-slide-to="1"
          ></button>
          <button
            type="button"
            className="w-3 h-3 rounded-full"
            aria-current="false"
            aria-label="Slide 3"
            data-carousel-slide-to="2"
          ></button>
          <button
            type="button"
            className="w-3 h-3 rounded-full"
            aria-current="false"
            aria-label="Slide 4"
            data-carousel-slide-to="3"
          ></button>
          <button
            type="button"
            className="w-3 h-3 rounded-full"
            aria-current="false"
            aria-label="Slide 5"
            data-carousel-slide-to="4"
          ></button>
          <button
            type="button"
            className="w-3 h-3 rounded-full"
            aria-current="false"
            aria-label="Slide 6"
            data-carousel-slide-to="5"
          ></button>
          <button
            type="button"
            className="w-3 h-3 rounded-full"
            aria-current="false"
            aria-label="Slide 7"
            data-carousel-slide-to="6"
          ></button>
          <button
            type="button"
            className="w-3 h-3 rounded-full"
            aria-current="false"
            aria-label="Slide 8"
            data-carousel-slide-to="7"
          ></button>
        </div>
      </div>
      <button
        type="button"
        className="absolute top-1/2 left-6 z-30 flex items-center justify-center h-10 w-10 -translate-y-1/2 cursor-pointer group focus:outline-none"
        data-carousel-prev
        onClick={handlePrev}
      >
        <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-gray-800 group-hover:bg-gray-700">
          <svg
            className="w-4 h-4 text-white dark:text-gray-500 rtl:rotate-180"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 6 10"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M5 1 1 5l4 4"
            />
          </svg>
          <span className="sr-only">Previous</span>
        </span>
      </button>
      <button
        type="button"
        className="absolute top-1/2 right-6 z-30 flex items-center justify-center h-10 w-10 -translate-y-1/2 cursor-pointer group focus:outline-none"
        data-carousel-next
        onClick={handleNext}
      >
        <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-gray-800 group-hover:bg-gray-700">
          <svg
            className="w-4 h-4 text-white dark:text-gray-500 rtl:rotate-180"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 6 10"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="m1 9 4-4-4-4"
            />
          </svg>
          <span className="sr-only">Next</span>
        </span>
      </button>
    </Section>
  );
};

export default Carousel;
