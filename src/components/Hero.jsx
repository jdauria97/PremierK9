import Section from "./Section";
import { chef } from "../assets";

const Hero = () => {
  return (
    <Section className="pt-[12rem] -mt-[5.25rem] " customPaddings id="hero">
      <div className="container relative ">
        <div className="relative z-1 max-w-[62rem] mx-auto text-center mb-[4rem] md:mb-20 lg:mb-[6rem ]">
          <h1 className="h1 mb-6 mt-6 drop-shadow-lg">Premier K9</h1>
          <h2 className="h2 mb-3 mt-3 drop-shadow-lg">
            {" "}
            Dog Training Services
          </h2>
          <div className="bg-n-6 rounded-[1rem] py-1">
            <p className="body-1 max-w-3xl mx-auto text-n-1 lg:mb-2 m-2">
              Professional, Reliable, and Personal training services for you and
              your pet.
            </p>
          </div>
        </div>
        <div className="relative max-w-[23rem] mx-auto md:max-w-5xl">
          <div className="relative z-1 p-0.5 rounded-2xl">
            <div>
              <img
                src={chef}
                className="w-full scale-[1] translate-y-[-15%] md:scale-[.8] rounded-xl border-n-5 border-4 drop-shadow-lg"
                width={1024}
                height={490}
                alt="chef"
              />
            </div>
          </div>
          <div>
            <img src="" alt="" />
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Hero;
