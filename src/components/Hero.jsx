import Section from "./Section";
import { hero } from "../assets";

const Hero = () => {
  return (
    <Section
      className="container pt-[12rem] -mt-[5.25rem]"
      customPaddings
      id="hero"
    >
      <div className="container relative min-h-[50vh]">
        <div className="relative z-1 max-w-[62rem] mx-auto text-center mb-[2rem] md:mb-3 lg:mb-[3rem]">
          <h1 className="h1 mb-6 mt-6 drop-shadow-lg">Premier K9</h1>
          <h2 className="h2 mb-3 mt-3 drop-shadow-lg">
            Your Choice For Professional Dog Training Services
          </h2>
          <div className="flex items-center flex-col md:flex-row m-2">
            
            <button
              type="button"
              class="text-white bg-n-2 hover:bg-n-3 focus:ring-4 focus:ring-n-2 font-medium rounded-lg px-5 py-2.5"
            >
              Click Here to Book Your Free Consultation
            </button>
            <img src={hero} alt="" />
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Hero;
