import React, { useRef, useState } from "react";
import emailjs from "emailjs-com";
import Heading from "./Heading";
import Section from "./Section";

const Contact = () => {
  const form = useRef();
  const [toggleValue, setToggleValue] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "YOUR_SERVICE_ID",
        "YOUR_TEMPLATE_ID",
        form.current,
        "YOUR_USER_ID"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  const handleToggleChange = () => {
    setToggleValue(!toggleValue);
  };

  return (
    <Section className="container" id="contact">
      <div className="container relative z-2 my-10">
        <Heading
          className="md:max-w-md lg:max-w-2xl flex justify-center drop-shadow-lg mb-10"
          title="Contact Us"
        />
        <div className="bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700">
          <div className="block relative p-0.5 dark:bg-gray-800 rounded-lg">
            <form ref={form} onSubmit={sendEmail}>
              <div className="m-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                <label className="block">Name:</label>
                <input
                  type="text"
                  name="user_name"
                  className="border border-gray-300 py-2 px-4 rounded-lg w-full text-gray-900"
                  placeholder="Your Name"
                  required
                />
              </div>
              <div className="m-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                <label className="block">Email:</label>
                <input
                  type="email"
                  name="user_email"
                  className="border border-gray-300 py-2 px-4 rounded-lg w-full text-gray-900"
                  placeholder="Your Email"
                  required
                />
              </div>
              <div className="m-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                <label className="block">Dog's Name:</label>
                <input
                  type="text"
                  name="dog_name"
                  className="border border-gray-300 py-2 px-4 rounded-lg w-full text-gray-900"
                  placeholder="Your Dog's Name"
                  required
                />
              </div>
              <div className="m-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                <label className="block">Dog's Age:</label>
                <input
                  type="text"
                  name="dog_age"
                  className="border border-gray-300 py-2 px-4 rounded-lg w-full text-gray-900"
                  placeholder="Your Dog's Age"
                  required
                />
              </div>
              <div className="m-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                <label className="block">Dog's Breed:</label>
                <input
                  type="text"
                  name="dog_breed"
                  className="border border-gray-300 py-2 px-4 rounded-lg w-full text-gray-900"
                  placeholder="Your Dog's Breed"
                  required
                />
              </div>
              <div className="m-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                <label className="block">How long have you had your dog?</label>
                <input
                  type="text"
                  name="dog_duration"
                  className="border border-gray-300 py-2 px-4 rounded-lg w-full text-gray-900"
                  placeholder="Approximate Time"
                  required
                />
              </div>
              <div className="m-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                <label className="flex-col items-center cursor-pointer">
                  Is your dog spayed or neutered?
                  <input
                    type="checkbox"
                    value={toggleValue}
                    onChange={handleToggleChange}
                    className="sr-only peer"
                  />
                  <div className="relative w-14 h-7 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:start-[4px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-6 after:w-6 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600 dark:peer-checked:bg-blue-600"></div>
                  <span className="text-sm font-medium text-gray-600 dark:text-gray-300">
                    {toggleValue
                      ? "Yes, My dog is spayed or neutered."
                      : "No, My dog is not spayed or neutered."}
                  </span>
                </label>
              </div>
              <div className="m-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                <label className="block">
                  Give a brief description of any concerns and goals you have
                  for both you and your dog.
                </label>
                <textarea
                  name="message"
                  className="border border-gray-300 py-2 px-4 rounded-lg w-full text-gray-900"
                  placeholder="Your Message"
                  required
                />
              </div>
              <div className="m-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                <button
                  type="submit"
                  className="bg-blue-500 text-white py-2 px-4 rounded-lg"
                >
                  Send
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Contact;
