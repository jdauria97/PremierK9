import React, { useEffect, useState } from "react";
import Section from "./Section";
import { hero } from "../assets";
import { button1 } from "../assets";
import { button2 } from "../assets";
import { scrollIcon } from "../assets";
import { scrollIconHover } from "../assets";

const Hero = () => {
  const [mainButtonSrc, setMainButtonSrc] = React.useState(button1);
  const [scrollButtonSrc, setScrollButtonSrc] = React.useState(scrollIcon);
  const [showScrollButton, setShowScrollButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollButton(window.scrollY > 200);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <Section>
      <div className="flex flex-col lg:flex-row items-center justify-around bg-n-4 rounded-lg shadow-lg px-6 pt-3 ">
        <div className="space-y-4 flex-1 text-center">
          <div>
            <h1 className="h1 text-gray-800 font-bold">Premier K9</h1>
            <h3 className="h3 text-gray-800 font-bold">
              Your Choice For Professional Dog Training Services
            </h3>
          </div>
          <div className="flex flex-col sm:flex-row items-center justify-center p-3">
            <ul className="max-w-xl leading-relaxed sm:mx-10 lg:ml-2 font-semibold text-left">
              <li className="p-2">&#8226; Puppy Foundation Building</li>
              <li className="p-2">&#8226; Basic Obedience</li>
              <li className="p-2">&#8226; Advanced Obedience</li>
              <li className="p-2">&#8226; CGC Testing</li>
              <li className="p-2">&#8226; Behavior Modification</li>
              <li className="p-2">&#8226; Service Animal Training</li>
            </ul>
            <button
              type="button"
              href="#contact"
              onClick={() => {
                window.location.href = "#contact";
              }}
              onMouseEnter={() => setMainButtonSrc(button2)}
              onMouseLeave={() => setMainButtonSrc(button1)}
            >
              <img className="h-[16rem] m-4" src={mainButtonSrc} alt="" />
            </button>
          </div>
        </div>
        <div className="flex-1 text-center mt-4 lg:mt-0 lg:ml-3">
          <img className="mx-auto" src={hero} alt="" />
        </div>
      </div>
      {showScrollButton && (
        <button
          type="button"
          onClick={scrollToTop}
          onMouseEnter={() => setScrollButtonSrc(scrollIconHover)}
          onMouseLeave={() => setScrollButtonSrc(scrollIcon)}
        >
          <img
            className="fixed bottom-3 right-3 z-50 h-24"
            src={scrollButtonSrc}
            alt=""
          />
        </button>
      )}
    </Section>
  );
};

export default Hero;
