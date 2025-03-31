import Section from "./Section";
import { hero } from "../assets";

const Hero = () => {
  return (
    <Section className="container pt-[12rem] -mt-[5.25rem] bg-n-4 mb-10">
      <div className="container relative min-h-[50vh]">
        <div className="relative z-1 max-w-[62rem] mx-auto text-center mb-[2rem] md:mb-3 lg:mb-[3rem]">
          <h1 className="h1 mb-6 mt-6 drop-shadow-lg">Premier K9</h1>
          <h2 className="h2 mb-3 mt-3 drop-shadow-lg">
            Your Choice For Professional Dog Training Services
          </h2>
          <div className="flex flex-col items-center m-2">
            <button
              type="button"
              class="text-white bg-n-2 hover:bg-n-3 focus:ring-4 focus:ring-n-2 font-medium rounded-lg px-5 py-2.5 mx-3"
              href="#contact"
              onClick={() => {
                window.location.href = "#contact";
              }}
            >
              Click Here to Book Your Free Consultation
            </button>
            <ul className="m-3 bg-n-2 text-white text-left p-5 rounded-lg shadow-sm">
              <li className="p-2">&#8226; Puppy Foundation Building</li>
              <li className="p-2">&#8226; Basic Obedience</li>
              <li className="p-2">&#8226; Advanced Obedience</li>
              <li className="p-2">&#8226; CGC Testing</li>
              <li className="p-2">&#8226; Behavior Modification</li>
              <li className="p-2">&#8226; Service Animal Training</li>
            </ul>
          </div>
        </div>
      </div>
      <img
        className="h-auto max-w-md bottom-0 right-0 absolute"
        src={hero}
        alt=""
      />
    </Section>
  );
};

export default Hero;
