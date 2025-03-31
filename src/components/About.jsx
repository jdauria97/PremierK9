import Section from "./Section";
import Heading from "./Heading";
import { chef } from "../assets";

const About = () => {
  return (
    <Section className="container" id="about">
      <div className="flex flex-col items-center container relative z-2 my-10 mx-auto">
        <Heading className="drop-shadow-lg mb-10" title="About Us" />
        <div className="bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-n-2">
          <div className="p-5">
            <a href="#">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-white">
                Who We Are
              </h5>
            </a>
            <p className="mb-3 font-normal text-white">
              Michelle is a certified professional dog trainer through the
              Council of Certified Professional Dog Trainers (CCPDT), an AKC
              Evaluator, and a proud member of the International Association of
              Canine Professionals. With four years of training experience and a
              commitment to daily education, Michelle specializes in using Least
              Invasive, Minimally Aversive (LIMA) methods to create positive and
              effective behavior changes. Her approach has proven successful not
              only with her clients&apos; pets but also with her own. Driven by
              a deep understanding of the challenges faced by everyday dog
              owners, Michelle is passionate about helping others create harmony
              and understanding with their canine companions.
            </p>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default About;
