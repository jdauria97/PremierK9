import Section from "./Section";
import Heading from "./Heading";
import { services } from "../constants";

const Services = () => {
  return (
    <Section id="services">
      <div className="container relative z-2 my-5">
        <Heading
          className="md:max-w-md lg:max-w-2xl flex justify-center drop-shadow-lg"
          title="Our Offered Services"
        />
        <div class="grid mb-8 border border-gray-200 rounded-lg shadow-xs dark:border-gray-700 md:mb-12 md:grid-cols-2 bg-white dark:bg-gray-800">
          {services.map((item) => (
            <figure
              class="flex flex-col items-center justify-center p-8 text-center bg-white border-b border-gray-200 rounded-t-lg md:rounded-t-none md:rounded-ss-lg md:border-e dark:bg-gray-800 dark:border-gray-700"
              key={item.id}
            >
              <blockquote class="max-w-2xl mx-auto mb-4 text-gray-500 lg:mb-8 dark:text-gray-400">
                <div className="relative z-2 flex flex-col min-h-[22rem] p-[2.4rem] pointer-events-none">
                  <h3 class="text-lg font-semibold text-gray-900 dark:text-white">
                    {item.title}
                  </h3>
                  <p class="my-4">{item.text}</p>
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
