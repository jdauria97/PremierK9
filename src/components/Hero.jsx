import Section from "./Section";
import { chef } from "../assets";

const Hero = () => {
  return (
    <Section className="pt-[12rem] -mt-[5.25rem]" customPaddings id="hero">
      <div className="container relative">
        <div className="relative z-1 max-w-[62rem] mx-auto text-center mb-[2rem] md:mb-3 lg:mb-[3rem]">
          <h1 className="h1 mb-6 mt-6 drop-shadow-lg">Premier K9</h1>
          <h2 className="h2 mb-3 mt-3 drop-shadow-lg">Dog Training Services</h2>
          <div className="bg-n-6 rounded-[1rem] py-1">
            <p className="body-1 max-w-3xl mx-auto text-n-1 lg:mb-2 m-2">
              Professional, Reliable, and Personal training services for you and
              your pet.
            </p>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Hero;
