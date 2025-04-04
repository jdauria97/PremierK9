import Section from "./Section";
import Heading from "./Heading";
import { useState } from "react";

const Faq = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const faqItems = [
    {
      question: "Question 1?",
      answer:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque provident omnis et nobis delectus tenetur rerum, dicta iusto iste asperiores fugit facilis, voluptates harum velit nulla quo. Nisi, ab consectetur.",
    },
    {
      question: "Question 2?",
      answer:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque provident omnis et nobis delectus tenetur rerum, dicta iusto iste asperiores fugit facilis, voluptates harum velit nulla quo. Nisi, ab consectetur.",
    },
    {
      question: "Question 3?",
      answer:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque provident omnis et nobis delectus tenetur rerum, dicta iusto iste asperiores fugit facilis, voluptates harum velit nulla quo. Nisi, ab consectetur.",
    },
  ];

  return (
    <Section className="container my-10 mx-auto p-4" id="faq">
      <div className="container relative z-2 my-10">
        <Heading
          className="flex justify-center drop-shadow-lg mb-10"
          title="Frequently Asked Questions"
        />
        <div className="bg-white border-gray-200 rounded-lg shadow-sm">
          <div className="block relative p-2">
            {faqItems.map((item, index) => (
              <div key={index} className="m-2">
                <button
                  onClick={() => toggleAccordion(index)}
                  className="w-full text-left p-2 px-4 bg-white border-gray-200 rounded-lg hover:bg-gray-300 focus:outline-none"
                >
                  {item.question}
                </button>
                {activeIndex === index && (
                  <p className="p-4 mt-2 bg-white border-gray-200 rounded-lg">
                    {item.answer}
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Faq;
