import Section from "./Section";
import { hero } from "../assets";
import { buttonImage } from "../assets";

const Hero = () => {
  return (
    <Section className="mt-24 mx-auto max-w-screen-xl pb-4 px-4 items-center lg:flex md:px-8">
      <div className="flex flex-col lg:flex-row items-center justify-between bg-white rounded-lg shadow-lg px-3 pt-3">
        <div className="space-y-4 flex-1 sm:text-center lg:text-left">
          <div>
          <h1 className="h1 text-gray-800 font-bold">Premier K9</h1>
          <h3 className="h3 text-gray-800 font-bold">
            Your Choice For Professional Dog Training Services
          </h3>
          </div>
          <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start p-3">
            <button
              type="button"
              href="#contact"
              onClick={() => {
                window.location.href = "#contact";
              }}
            >
              <img className="h-[16rem]" src={buttonImage} alt="" />
            </button>
            <ul className="max-w-xl leading-relaxed sm:mx-auto lg:ml-2 font-semibold text-left">
              <li className="p-2">&#8226; Puppy Foundation Building</li>
              <li className="p-2">&#8226; Basic Obedience</li>
              <li className="p-2">&#8226; Advanced Obedience</li>
              <li className="p-2">&#8226; CGC Testing</li>
              <li className="p-2">&#8226; Behavior Modification</li>
              <li className="p-2">&#8226; Service Animal Training</li>
            </ul>
          </div>
        </div>
        <div className="flex-1 text-center mt-4 lg:mt-0 lg:ml-3">
          <img
            className="w-full mx-auto sm:w-10/12  lg:w-full"
            src={hero}
            alt=""
          />
        </div>
      </div>
    </Section>
  );
};

export default Hero;
