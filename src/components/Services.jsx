import Section from "./Section";
import Heading from "./Heading";
import { services } from "../constants";

const Services = () => {
  return (
    <Section id="services">
      <div className="container relative z-2 my-10">
        <Heading
          className="md:max-w-md lg:max-w-2xl flex justify-center drop-shadow-lg mb-10"
          title="Our Offered Services"
        />
        <div className="grid mb-8 rounded-lg shadow-xs  md:mb-12 md:grid-cols-2 bg-n-2">
          {services.map((item) => (
            <figure
              className="flex flex-col items-center justify-center p-8 text-center border border-gray-700"
              key={item.id}
            >
              <blockquote className="max-w-2xl mx-auto mb-4 text-white">
                <div className="relative z-2 flex flex-col min-h-[22rem] p-[2.4rem] pointer-events-none">
                  <h3 className="text-lg font-semibold text-gray-900 ">
                    {item.title}
                  </h3>
                  <img src={item.image} alt="" />
                  <p className="my-4">{item.text}</p>
                </div>
              </blockquote>
            </figure>
          ))}
        </div>
      </div>
    </Section>
  );
};

export default Services;
