import Section from "./Section";
import Heading from "./Heading";
import { services } from "../constants";

const Services = () => {
  return (
    <Section id="services">
      <div className="container relative z-2">
        <Heading
          className="md:max-w-md lg:max-w-2xl flex justify-center drop-shadow-lg"
          title="Our Offered Services"
        />
        <div className="flex flex-wrap justify-evenly gap-10 mb-10">
          {services.map((item) => (
            <div
              className="block relative p-0.5 bg-no-repeat bg-[legnth:100%_100%] md:max-w-[24rem] bg-slate-500 rounded-lg"
              key={item.id}
            >
              <div className="relative z-2 flex flex-col min-h-[22rem] p-[2.4rem] pointer-events-none">
                <h5 className="h3 mb-5">{item.title}</h5>
                <p className="body-2 mb-6 text-n-1">{item.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
};

export default Services;
