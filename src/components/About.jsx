import Section from "./Section";
import Heading from "./Heading";

const About = () => {
  return (
    <Section id="about">
      <div className="container relative z-2">
        <Heading
          className="md:max-w-md lg:max-w-2xl flex justify-center drop-shadow-lg"
          title="About Us"
        />
        <div className="flex flex-wrap justify-evenly gap-10 mb-10">
          <div className="block relative p-0.5 bg-slate-500 rounded-lg">
            <p className="p-4">
              Michelle is a certified professional dog trainer through the
              Council of Certified Professional Dog Trainers (CCPDT), an AKC
              Evaluator, and a proud member of the International Association of
              Canine Professionals. With four years of training experience and a
              commitment to daily education, Michelle specializes in using Least
              Invasive, Minimally Aversive (LIMA) methods to create positive and
              effective behavior changes. Her approach has proven successful not
              only with her clients&apos; pets but also with her own. Driven by a
              deep understanding of the challenges faced by everyday dog owners,
              Michelle is passionate about helping others create harmony and
              understanding with their canine companions.
            </p>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default About;
