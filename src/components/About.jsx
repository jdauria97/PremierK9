import Section from "./Section";
import Heading from "./Heading";
import { chef } from "../assets";

const About = () => {
  return (
    <Section class="container" id="about">
      <div className="container relative z-2 m-3 mx-auto">
        <Heading
          className="flex justify-center drop-shadow-lg"
          title="About Us"
        />
        <div className="flex flex-wrap justify-evenly gap-10 mb-10">
          <a
            href="#"
            class="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow-sm md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"
          >
            <img
              class="m-3 object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg"
              src={chef}
              alt=""
            />
            <div class="flex flex-col justify-between p-4 leading-normal">
              <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                Who We Are
              </h5>
              <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
                Michelle is a certified professional dog trainer through the
                Council of Certified Professional Dog Trainers (CCPDT), an AKC
                Evaluator, and a proud member of the International Association
                of Canine Professionals. With four years of training experience
                and a commitment to daily education, Michelle specializes in
                using Least Invasive, Minimally Aversive (LIMA) methods to
                create positive and effective behavior changes. Her approach has
                proven successful not only with her clients&apos; pets but also
                with her own. Driven by a deep understanding of the challenges
                faced by everyday dog owners, Michelle is passionate about
                helping others create harmony and understanding with their
                canine companions.
              </p>
            </div>
          </a>
        </div>
      </div>
    </Section>
  );
};

export default About;
